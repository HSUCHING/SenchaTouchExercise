Ext.application({
    name: 'SenchaTouchExercise',

    requires: [
        'Ext.MessageBox',
        'Ext.form.Panel',
        'Ext.field.DatePicker',
        'Ext.form.FieldSet',
        'Ext.field.Slider',
        'Ext.field.Toggle',
        'Ext.field.Hidden'


    ],


    views: ['Main'],
    models:['genre'],
    stores:['genreStore','genreStoreProxyReader'],



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

        var formPanel=Ext.create('Ext.form.Panel',{
            id:'formPanel',
            scrollable:'vertical',
            items:[{
                id:'set',
                xtype:'fieldset',
                title:'电影信息',
                instructions:'请填写电影信息',
                defaults:{
                    labelWidth:'20%',
                    xtype:'datepickerfield'
                },
                items:[{
                    id:'date',
                    name:'released',
                    label:'发行日期',
                    picker:{
                        yearFrom:2000,
                        yearTo:2100
                    },
                    value:new Date(),
                    dateFormat:'Y/m/d'
                },{
                    xtype:'sliderfield',
                    id:'volume',
                    name:'volume',
                    label:'音量',
                    minValue:0,
                    maxValue:100,
                    increment:10,
                    value:20,
                    listeners:{
                        change:function( me, Slider, thumb, newValue, oldValue, eOpts ){
                            console.log(newValue);
                        }
                    }
                },{
                    id:'toggle',
                    xtype:'togglefield',
                    name:'enable',
                    label:'是否有效',
                    value:1
                },{
                    xtype:'hiddenfield',
                    name:'hidden',
                    value:'test'
                }]
            }]
        });
//
        Ext.Viewport.add(formPanel);
//        formPanel.getComponent('set').getComponent('volume').setValue(30);
        Ext.getCmp('volume').setValue(50);


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
