/****************************************************************************
    fcoo-maps-navigation-and-safety.js, 

    (c) 2021, FCOO

    https://github.com/FCOO/fcoo-maps-navigation-and-safety
    https://github.com/FCOO

****************************************************************************/
(function ($, L, window, document, undefined) {
    "use strict";

    //Create namespaces
    var ns = window.fcoo = window.fcoo || {},
        nsMap = ns.map = ns.map || {},

        defaultOptions = {


        };

    //createMapLayer = {MAPLAYER_ID: CREATE_MAPLAYER_AND_MENU_FUNCTION} See fcoo-maps/src/map-layer_00.js for description
    nsMap.createMapLayer = nsMap.createMapLayer || {};


    /***********************************************************
    MapLayer_NavigationAndSafety
    ***********************************************************/
    function MapLayer_NavigationAndSafety(options) {
        //Adjust options

        nsMap.MapLayer.call(this, options); //Or nsMap.MapLayer_ANOTHER.call(this, options);

    }
    nsMap.MapLayer_NavigationAndSafety = MapLayer_NavigationAndSafety;

    MapLayer_NavigationAndSafety.prototype = Object.create(nsMap.MapLayer.prototype); //OR = Object.create(nsMap.MapLayer_ANOTHER.prototype);

    MapLayer_NavigationAndSafety.prototype.createLayer = function(options){
        return new L.SOME_LAYER_CONSTRUCTOR(null, options); //<- TODO
    };


    MapLayer_NavigationAndSafety.prototype = $.extend({}, nsMap.MapLayer.prototype, {    //OR nsMap.MapLayer_ANOTHER.prototype, {

        //Extend METHOD
        METHOD: function (METHOD) {
            return function () {

                //New extended code
                //......extra code

                //Original function/method
                METHOD.apply(this, arguments);
            }
        } (nsMap.MapLayer.prototype.METHOD),


        //Overwrite METHOD2
        METHOD2: function(){

        },

    });


    /***********************************************************
    Add MapLayer_NavigationAndSafety to createMapLayer
    ***********************************************************/
    nsMap.createMapLayer["NAVIGATION_AND_SAFETY"] = function(options, addMenu){

        //adjust default options with options into mapLayerOptions

        var mapLayer = nsMap._addMapLayer(id, nsMap.MapLayer_NavigationAndSafety, mapLayerOptions )

        addMenu( mapLayer.menuItemOptions() ); //OR list of menu-items
    };



}(jQuery, L, this, document));



