/**
 * @file StationLocator class
 * @author Hadaytullah Kundi
 */

/**
 * Class StationLocator
 * EMCA2015
 */
module.exports = class StationLocator {
    /**
    * Finds a nearby link station for a device .
    * @param {LinkStation[]} linkStationLocations An array of link station location and reach
    * @param {Device} deviceLocation The device current location.
    * @return {(Object|null)} An object containing nearby link statation and power or null.
    */
    findNearbyStation (linkStations, device){
        try{
            let selectedLinkStation = null,
                selectedLinkStationPower = 0;

            for (let linkStationIndex in linkStations){
                let currentLinkStation = linkStations[linkStationIndex];
                // the distance formula, pythagoras theorum
                let deviceDistance = Math.sqrt( Math.pow((currentLinkStation.location.x - device.location.x), 2) + Math.pow((currentLinkStation.location.y-device.location.y), 2) );

                // calculating power based on the distance
                let currentLinkStationPower = 0;
                if (deviceDistance <= currentLinkStation.reach){
                    //power = (reach - device's distance from linkstation)^2
                    currentLinkStationPower = Math.pow((currentLinkStation.reach - deviceDistance), 2)
                }

                // check if this link station has more power based on its distance from the device
                if(selectedLinkStationPower < currentLinkStationPower){
                    selectedLinkStation = currentLinkStation
                    selectedLinkStationPower = currentLinkStationPower
                }
            }

            //power is related to device, it is not the core property of link station,
            //it has to be passed back separately
            if (selectedLinkStation){ //a nearby link station found
                return {
                    linkStation: selectedLinkStation,
                    power:selectedLinkStationPower
                };
            }else{ //a nearby link station not found
                return null;
            }

        }
        catch(e){
            console.error(e);//TODO:log the error using a logger
            return null;
        }
    }
}
