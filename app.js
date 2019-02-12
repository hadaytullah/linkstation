let Device = require ('./device'),
    LinkStation =  require('./link-station'),
    StationLocator = require('./station-locator');

//testing with data given by NordCloud
let test1 = function (){
    // Initializing link stations
    let linkStations =[new LinkStation(0, 0, 10),
                    new LinkStation(20, 20, 5),
                    new LinkStation(10, 0, 12)];

    // Initializing test devices
    let devices = [new Device(0,0),
                new Device(100,100),
                new Device(15,10),
                new Device(18,18)]

    let stationLocator = new StationLocator();
    // locating nearby link station for the devices
    devices.forEach( function (device){

    let linkStationProfile = stationLocator.findNearbyStation(linkStations, device);

    let output = null;
    if (linkStationProfile){
        output = 'Best link station for point '+device.location.x+','+device.location.y+' is '+linkStationProfile.linkStation.location.x+','+linkStationProfile.linkStation.location.y+' with power '+Math.round(linkStationProfile.power*1000)/1000+'.';
    }else{
        output = 'No link station within reach for point '+device.location.x+','+device.location.y+'.';
    }

        console.log(output);

  })

}

test1();
