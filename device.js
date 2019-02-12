/**
 * @file Device Class
 * @author Hadaytullah Kundi
 */

/**
 * Class Device
 */
module.exports = class Device{
    /* constructor
    * @param {number} locationX Device's location x coordinate.
    * @param {number} locationY Device's location y coordinate.
    */
    constructor(locationX, locationY){
        this._location = {
            x:locationX,
            y:locationY
        };
    }

    /**
     * Get the location value.
     * @return {Object} The location value.
     */
    get location(){
        return this._location;
    }

    /**
     * Set the location value.
     */
    set location(value){
        this._location = value;
    }
};

