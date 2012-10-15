Ext.application({
    name: 'FinDashBoardFinal',

    requires: [
        'Ext.MessageBox',
        'Ext.tab.Panel',
        'Ext.Carousel'
    ],

    views: ['Main'],

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

        //Carousel


        var carousel1=Ext.create('Ext.Carousel',{
            ui:'dark',
//            flex:1,
            direction:'horizontal',
            defaults:{
                styleHtmlContent:true
            },
            items:[
                {
                    id:'leftview',
                    html:'左视图',
                    style:'background-color:pink'
                },{
                    id:'centerview',
                    html:'中视图',
                    style:'background-color:blue'
                },{
                    id:'rightview',
                    html:'右视图',
                    style:'background-color:yellow'
                }]
        });

        var carousel2={
            ui:'dark',
            xtype:'carousel',
            flex:2,
            direction:'vertical',
            defaults:{
                styleHtmlContent:true
            },
            items:[
                {
                    html:'上视图',
                    style:'background-color:pink'
                },{
                    html:'中视图',
                    style:'background-color:blue'
                },{
                    html:'下视图',
                    style:'background-color:yellow'
                }]
        };




        var panel=Ext.create('Ext.Panel',{
            id:'myPanel',

            //Carousel

            layout:{
                type:'vbox',
                align:'stretch'
            },
            defaults :{
                flex:1
//                animation:{type:'flip',direction:'right',duration:2000}
            },

            items:[carousel1,carousel2]
//            items:[{
//                html:'子组件1',
//                style:'background-color:pink'
//            },{
//                html:'子组件2',
//                style:'background-color:yellow'
//            }]


        });

        Ext.Viewport.add(panel);
//        carousel2.next();
//        carousel1.setActiveItem(2);
        carousel1.next();
//        carousel1.animateActiveItem(Ext.getCmp('rightview'),{type:'flip',direction:'right',duration:2000});
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
