Ext.application({
    name: 'FinDashBoardFinal',

    requires: [
        'Ext.MessageBox'
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
//        Ext.fly('appLoadingIndicator').destroy();

       var panel=Ext.create('Ext.Panel',{
           fullscreen: true,
           id: 'myPanel',
           //style: 'color:red',
           html:'一个简单的示例面板'
       });

//        Ext.get('myPanel').addCls("colorBlue");

        var subPanel=Ext.create('Ext.Panel',{
            id:'subPanel',
            html:'面板中的子面板'
        });

//        Ext.get('myPanel').setHtml("Hello");
//        function createChild(){
//            var el = document.createElement("div");
//            el.appendChild(document.createTextNode("我是被追加的"));
//            return el;
//        }
//        Ext.ComponentManager.get('myPanel').add(subPanel);
//
//        Ext.get('myPanel').appendChild(createChild());

        panel.add(subPanel);
//        var newPanel=Ext.get('myPanel');
        var newPanel=Ext.fly('myPanel');
        Ext.fly('subPanel');
        newPanel.addCls('colorBlue');




        // Initialize the main view
//        Ext.Viewport.add(Ext.create('FinDashBoardFinal.view.Main'));
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
