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


        var formPanel=Ext.create('Ext.form.Panel',{
            id:'formPanel',
            scrollable:'vertical',
            defaults:{
                labelWidth:'20%'
            }

//            baseCls:'colorBlue',
//            cls:'smallfont',


//            items:[{
//                xtype:'fieldset',
//                title:'电影信息',
//                instructions:'请填写电影信息',
//                defaults:{
//                    labelWidth:'20%'
//                },
//                items:[
//                    {
//                        xtype:'textfield',
//                        id:'txt_title',
//                        name:'title',
//                        label:'标题',
//                        placeHolder:'请输入电影标题',
//                        required:true,
//                        clearIcon:true
//                    },new Ext.field.Text({
////                        xtype:'textfield',
//                        id:'txt_director',
//                        name:'director',
//                        label:'导演',
//                        placeHolder:'请输入导演名称',
//                        clearIcon:true,
//                        listeners:{
//                            change:function(item,newValue,oldValue){
//                                console.log("修改的对象"+item);
//                                console.log("修改后的值"+newValue);
//                                console.log("修改前的值"+oldValue);
//                            }
//                        }
//
//
////                        readOnly:true
////                        disabled:true
//                    })]
//            }]

        });

        for(var i=0;i<15;i++)
        {
            var field=Ext.create('Ext.field.Text',{
                id:'text_field'+i,
                label:'标签'+i,
                value:'示例文字'+i
            });
            formPanel.add(field);
        }

        Ext.Viewport.add(formPanel);
        formPanel.getScrollable().getScroller().setFps(100);
//        formPanel.getScrollable().getScroller().scrollTo(0,200);
        formPanel.getScrollable().getScroller().scrollToAnimated(0,200);
//        formPanel.getScrollable().getScroller().scrollToEnd();
//        console.log(formPanel.getXTypes());
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
