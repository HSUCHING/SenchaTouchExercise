Ext.application({
    name: 'FinDashBoardFinal',

    requires: [
        'Ext.MessageBox',
        'Ext.form.Panel',
        'Ext.field.Radio',
        'Ext.form.FieldSet',
        'Ext.field.Select'


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


        var formPanel=Ext.create('Ext.form.Panel',{
            id:'formPanel',
            scrollable:'vertical',
            items:[{
                xtype:'fieldset',
                title:'电影信息',
                instructions:'请填写电影信息',
                defaults:{
                    labelWidth:'20%',
                    xtype:'selectfield'
                },
                items:[{

                    id:'sel_genre',
                    name:'genre',
                    label:'种类',
                    options:[{
                        text:'喜剧',
                        value:'1'
                    },{
                        text:'文艺',
                        value:'2'
                    },{
                        text:'动作',
                        value:'3'
                    }],
                    listeners:{
                        change:function(select,newValue,oldValue){
                            switch (newValue)
                            {
                                case '1':
                                    Ext.Msg.alert('您选择了喜剧片');
                                    break;
                                case '2':
                                    Ext.Msg.alert('您选择了文艺片');
                                    break;
                                case '3':
                                    Ext.Msg.alert('您选择了动作片');
                                    break;
                            }
                        }
                    }

                }]
            }]
        });
//
        Ext.Viewport.add(formPanel);

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
