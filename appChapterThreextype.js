Ext.application({
    name: 'FinDashBoardFinal',

    requires: [
        'Ext.MessageBox',
        'Ext.tab.Panel',
        'Ext.NavigationView'
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

        //Navigation

//
//        var panel={
//            id:'newpanel',
//            xtype:'panel',
//            title:'面板',
//            html:'<p>面板</p>'
//        }
//

        var panel=Ext.create('Ext.Panel',{
            id:'myPanel',
            defaults:{
                ui:'dark',
                flex:1,
                xtype:'carousel',
                defaults:{
                    xtype:'panel'
                }
            },

            layout:{
                type:'vbox',
                align:'stretch'
            },
            items:[
                {
                    docked:'top',
                    id:'paneltop',
                    xtype:'panel',
                    height:200,
                    style:'background-color:yellow;text-align:center',
                    html:'顶部'
                },
                {
                    id:'carousel1',
                    direction:'horizontal',
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
                },{
                    id:'carousel2',
                    direction:'vertical',
                    items:[
                        {
                            id:'topview',
                            html:'上视图',
                            style:'background-color:pink'
                        },{
                            id:'midview',
                            html:'中视图',
                            style:'background-color:blue'
                        },{
                            id:'bottomview',
                            html:'下视图',
                            style:'background-color:yellow'
                        }]
                }]

        });
        Ext.Viewport.add(panel);
        panel.getComponent('carousel1').next();
        console.log(panel.getComponent('carousel1').getXTypes());
        console.log(panel.getComponent('carousel1').isXType("carousel"));
        console.log(panel.getComponent('paneltop').getXTypes());

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
