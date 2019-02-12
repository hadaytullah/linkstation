/**
 * @file Link Station Class
 * @author Hadaytullah Kundi
 */


/**
 * Class Link Station  (ECMAScript 2015)
 */
module.exports = class LinkStation {
    /*
    * LinkStation Constuctor
    * @param {number} locationX Link station location x coordinate.
    * @param {number} locationY Link station location y coordinate.
    * @param {number} reach Link station reach (in a straight line distance over a 2d map of the space).
    */
    constructor(locationX, locationY, reach){
        this._location = {
            x:locationX,
            y:locationY
        };
        this._reach = reach;
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

    /**
     * Get the reach value.
     * @return {number} The reach value.
     */
    get reach(){
        return this._reach;
    }

    /**
     * Set the reach value.
     */
    set reach(value){
        this._reach = value;
    }
}
