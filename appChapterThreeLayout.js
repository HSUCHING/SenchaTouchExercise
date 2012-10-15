Ext.application({
    name: 'FinDashBoardFinal',

    requires: [
        'Ext.MessageBox',
        'Ext.tab.Panel'
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

        //Layout


        var p1=Ext.create('Ext.Panel',{
            id:'panel1',
            style:'background-color:pink',
            html:'示例文字1'
        });
        var p2=Ext.create('Ext.Panel',{
            id:'panel2',
            style:'background-color:green',
            html:'示例文字2'
        });




        var panel=Ext.create('Ext.Panel',{
            id:'myPanel',

            //hbox,vbox

//            layout:{
//                type:'hbox',
////                type:'vbox',
//                align:'stretch',
//                pack:'center'
//            },
//            items:[
//                {
//                    docked:'top',
//                    height:200,
//                    style:'background-color:yellow;text-align:center',
//                    html:'左容器'
//                },
//                {
//                    flex:1,
////                    width:200,
//                    html:'子组建1',
//                    style:'background-color:#5E99CC;'
//                },{
//                    flex:2,
////                    width:200,
//                    html:'子组建2',
//                    style:'background-color:#759E60;'
//                },{
//                    width:200,
////                    height:200,
//                    html:'子组建3',
//                    style:'background-color:#5E99CC;'
//                }]

            //FitLayout
//                layout:'fit',
//                items:[{
//                    style:'background-color:pink',
//                    html:'示例文字1'
//                },{
//                    style:'background-color:green',
//                    html:'示例文字2'
//                }]

            //CardLayout


            layout:{
                type:'card',
                animation:{type:'pop',direction:'right',duration:1000}
            },
//            items:[{
//                id:'item1',
//                style:'background-color:pink',
//                html:'示例文字1'
//            },{
//                id:'item2',
//                style:'background-color:green',
//                html:'示例文字2'
//            }]
            items:[p1,p2]


        });

        Ext.Viewport.add(panel);
        panel.setActiveItem(1);
//        panel.setActiveItem(Ext.getCmp('item2'));
//        panel.setActiveItem(p2);
//        panel.animateActiveItem(p2,'flip');
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
