/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 10/22/12
 * Time: 5:01 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.application({
    name: 'SenchaTouchExercise',

    requires: [
        'Ext.MessageBox',
        'Ext.Map'
    ],


    views: ['Main'],
    models:['UserInfo'],



    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },


    launch: function() {
        // Destroy the #appLoadingIndicator element



        var infowindow = new google.maps.InfoWindow({
            content: 'shanghai'
        });

        //latlng
        var latlngSh = new google.maps.LatLng(
//            纬度
//            coords.latitude,
            31.23,
            121.47
//            经度
//            coords.longitude
        );


        var latlngBj = new google.maps.LatLng(
//            纬度
//            coords.latitude,
            39.90,
            116.40
//            经度
//            coords.longitude
        );

        var myPanel=Ext.create('Ext.Panel',{
//            fullscreen: true,
            width:900,
            height:900,
            items: [
                {
                    xtype: "map",
                    id:'map',
                    width:900,
                    height:900,
                    mapOptions : {
                        center : new google.maps.LatLng(30.66,104.06),
                        zoom: 5
//                        navigationControlOptions: {
//                            style: google.maps.NavigationControlStyle.DEFAULT
//                        }
                    },
                    listeners: {
                        maprender : function(comp, map){
                            var marker1 = new google.maps.Marker({
                                position: latlngSh,
                                title : 'Shanghai',
                                map: map
                            });
                            var marker2 = new google.maps.Marker({
                                position: latlngBj,
                                title : 'Beijing',
                                map: map
                            });

//                            infowindow.open(map, marker);
                            var renderChart=function(maker){
//                                infowindow.open(map, marker1);
                                console.log(maker.title);

                            };
                            google.maps.event.addListener(marker1, 'click', function(event){renderChart(marker1)});
                            google.maps.event.addListener(marker2, 'click', function(event){renderChart(marker2)});
                        }
                    }

//                    useCurrentLocation:true
                }
            ]
        });

        Ext.Viewport.add(myPanel);

//        var refreshMap = function(themap){
//// It should clear all markers first, but that is not important right now since the map has all interaction disabled
//            var marker = new google.maps.Marker({
//                position: themap.center,
//                title : 'testing',
//                map: themap
//            });
//        }
//
//
//        var TopBar, Tabs, MapHome, Viewport, Homecard;
//
//        /*
//         *         HOME
//         */
//
//        MapHome = new Ext.Map({
//            title: 'Map',
//            useCurrentLocation: true,
//            listeners: {
//                centerchange : function(comp, map){
//                    refreshMap(map);
//                }
//            },
//            mapOptions : {
//                mapTypeControl : false,
//                navigationControl : false,
//                streetViewControl : false,
//                backgroundColor: 'transparent',
//                disableDoubleClickZoom: true,
//                zoom: 17,
//                draggable: false,
//                keyboardShortcuts: false,
//                scrollwheel: false,
//                mapTypeId: google.maps.MapTypeId.HYBRID
//            }
//        });
//
//
//
//        Homecard = new Ext.Panel({
//            title: "home",
//            iconCls: "home",
//            items: [MapHome]
//        });
//
//        /*
//         *         MAIN
//         */
//
//        TopBar = new Ext.Toolbar({
//            dock: 'top',
//            xtype: "toolbar",
//            title: "Position",
//            items: [
//
//                { xtype: 'spacer' },
//                {
//                    iconCls: 'settings9',
//                    iconMask: true,
//                    text: 'options'
//                }
//            ]
//        });
//
//        Tabs = new Ext.TabPanel({
//            id: 'tabs',
//            //fullscreen:true,
//            dock: 'bottom',
//            flex: 1,
//            tabBar: {
//                dock: 'bottom',
//                layout: {
//                    pack: 'center'
//                }
//            },
//            items: [ Homecard, Nearbycard, Waypointscard, Shopcard, Searchcard]
//        });
//
//
//        Viewport = new Ext.Panel({
//            fullscreen:true,
//            layout:{type:'vbox',align: 'stretch'},
//            useLoadMask:true,
//            ui:'dark',
//            items: [TopBar,Tabs]
//        });
//





    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});