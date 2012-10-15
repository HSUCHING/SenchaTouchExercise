Ext.application({
    name: 'SenchaTouchExercise',

    requires: [
        'Ext.MessageBox',
        'Ext.form.Panel',
        'Ext.field.Radio',
        'Ext.form.FieldSet',
        'Ext.field.Select',
        'Ext.data.Model',
        'Ext.data.Store'


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

        //Navigation
//            Ext.define('genre',{
//                extend:'Ext.data.Model',
//                config:{
//                    fields:[
//                        {
//                            name:'id',type:'int'
//                        },{
//                            name:'genre',type:'string'
//                        }]
//                }
//
//            });


//            var genre1=Ext.create('genre',{
//                id:1, genre:'喜剧'
//            });
//
//            var genre2=Ext.create('genre',{
//                id:2, genre:'文艺'
//            });
//
//            var genre3=Ext.create('genre',{
//                id:3, genre:'动作'
//            });

//            var genreStore=Ext.create('Ext.data.Store',{
//                model:'genre',
//                data:[
//                    {
//                        id:1, genre:'喜剧'
//                    },                {
//                        id:2, genre:'文艺'
//                    },                {
//                        id:3, genre:'动作'
//                    }
//                ]
//            });


//            var genreStore=Ext.create('Ext.data.Store',{
//                model:'genre',
//                data:[
//                    genre1,genre2,genre3
//                ]
//            });

//       var genreStore=Ext.create('SenchaTouchExercise.store.genreStore');
        var genreStore=Ext.create('SenchaTouchExercise.store.genreStoreProxyReader');




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
                    xtype:'selectfield'
                },
                items:[{
                    name:'genre',
                    label:'种类',
                    valueField:'id',
                    displayField:'genre',
                    store:genreStore,
                    listeners:{
                        change:function(select,newValue,oldValue){
                            switch (newValue)
                            {
                                case "1":
                                    Ext.Msg.alert('您选择了喜剧片');
                                    break;
                                case "2":
                                    Ext.Msg.alert('您选择了文艺片');
                                    break;
                                case "3":
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
