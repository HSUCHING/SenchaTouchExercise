Ext.application({
    name: 'SenchaTouchExercise',

    requires: [
        'Ext.MessageBox',
        'Ext.form.Panel',
        'Ext.XTemplate',
        'Ext.data.Store',
        'Ext.dataview.DataView',
        'Ext.util.Sorter'
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

        Ext.define('User',{
            extend:'Ext.data.Model',
            config:{
                fields:['firstName','lastName']
            }
        });


        var store=Ext.create('Ext.data.Store',{
            model:'User',
            data:[
                {firstName:'三丰',lastName:'张'},
                {firstName:'莫愁',lastName:'李'},
                {firstName:'昭君',lastName:'王'},
                {firstName:'公明',lastName:'赵'},
                {firstName:'无忌',lastName:'张'},
                {firstName:'逵',lastName:'李'},
                {firstName:'语嫣',lastName:'王'},
                {firstName:'飞燕',lastName:'赵'},
                {firstName:'天师',lastName:'张'},
                {firstName:'时珍',lastName:'李'},
                {firstName:'允',lastName:'王'},
                {firstName:'敏',lastName:'赵'}
            ]
        });

//        store.sort('lastName','asc');
        store.sorters.add(new Ext.util.Sorter());

        store.sort();

        var panel=Ext.create('Ext.Panel',{
            docked:'top',
            layout:'hbox',
            items:[
                {
                    baseCls:'title',
                    html:'姓'
                },{
                    baseCls:'title',
                    html:'名'
                }]
        });

        var tpl = new Ext.XTemplate(
            '<div>{lastName}</div><div>{firstName}</div>'
        );

        var count=0;
        var dataview=Ext.create('Ext.DataView',{
            fullscreen:true,
            store:store,
            baseCls:'user',
            selectedCls:'selecteditem',
            items:[panel],
            itemTpl:tpl
        })

        Ext.Viewport.add(dataview);

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