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


        var Panel=Ext.create('Ext.Panel',{
            title:'主页',
            html:'主页',
//            cls:'colorBlue',
            iconCls:'home'
        })


        //Tab
//        var tabPanel={
//            xtype: 'tabpanel',
//            activeTab: 0, // index or id
//            items:[{
//                title: 'Tab 1',
//                html: 'This is tab 1 content.'
//            },{
//                title: 'Tab 2',
//                html: 'This is tab 2 content.'
//            },{
//                title: 'Tab 3',
//                html: 'This is tab 3 content.'
//            }]
//        }



        var tabPanel=Ext.create('Ext.TabPanel',{
            id:'tabPanel',
            ui:'dark',
            tabBarPosition:'bottom',
//            activeItem:1,
            clc:'colorRed',
            layout:{animation:{type:'flip',direction:'right',duration:1000}},
            items:[{
                title:'主页',
                html:'主页',
                iconCls:'home'
            },

            {
                title:'合同',
                html:'合同',
                iconCls:'user'
            }],
            listeners:{
                activeitemchange:function(item,newValue,oldValue){
                    Ext.Msg.alert("切换");
                    console.log(oldValue);
                    console.log(newValue);
                    newValue.addCls('colorRed');
                    console.log(item.getActiveItem().title);
                    return true;
                },
                painted:function(item){
                    Ext.Msg.alert("Hello");
//                    var it=item.getItems();
//                    item.getItems().items[0].addCls('colorRed');
                    console.log(item.getActiveItem().title);

                }
            }
        });

//        tabPanel.setActiveItem(1);


        Ext.Viewport.add(tabPanel);

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
