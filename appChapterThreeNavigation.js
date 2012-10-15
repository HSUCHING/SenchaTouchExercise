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



        var view=Ext.create('Ext.NavigationView',{
            navigationBar:{
                ui:'light',
                docked:'top'

            },
            useTitleForBackButtonText:true,
            items:[{
                title:'标题一',
                html:'组件1'
            }]
        });


        var panel=Ext.create('Ext.Panel',{
            id:'myPanel',
            title:'标题二',
            html:'组件2'

        });
        Ext.Viewport.add(view);
        view.push(panel);

        panel=Ext.create('Ext.Panel',{
            id:'myPanel2',
            title:'标题三',
            html:'组件3'
        });
        view.push(panel);
//        view.pop();
//        view.reset();


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
