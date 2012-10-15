Ext.application({
    name: 'SenchaTouchExercise',

    requires: [
        'Ext.MessageBox',
        'Ext.form.Panel',
        'Ext.SegmentedButton',
        'Ext.LoadMask',
        'Ext.TitleBar'



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



        var segmentedButton=Ext.create('Ext.SegmentedButton',{
//            allowMultiple:true,
//            allowMultiple:false,
//            allowDepress:true,

            items:[{
                iconCls:'preview',
                ui:'decline',
                text:'预览'
            },{
                iconCls:'print',
                text:'打印'
            },{
                iconCls:'mail',
                text:'邮件',
                iconAlign:'right',
                badgeText:'您有新邮件'
            }],
            listeners:{
                toggle:function(container,button,pressed){
                    var myMask = new Ext.LoadMask(Ext.getBody(), {msg:"Working..."});
                    myMask.show();
                    Ext.Msg.alert("Hello");
                    if(pressed){
                        myMask.hide();
                        console.log("用户按下了 '"+button.getText()+"' 按钮");}
                    else
                        console.log("用户松开了 '"+button.getText()+"' 按钮");
                }
            }

        });

        var myTitlebar=Ext.create('Ext.TitleBar',{
            id:'mytitlebar',
            title:'我的标题栏',
            items:[{
                text:'按钮1'
            },{
                text:'按钮2',
                align:'right'
            }]
        });




        var mytoolbar=Ext.create('Ext.Toolbar',{
            id:'mytoolbar',
            layout:{
                type:'hbox',
                pack:'start'
            },
            docked:'top',
//            docked:'right',
//            items:[{
//                    xtype:'spacer',
//                    width:100
//                    },segmentedButton]
//            items:[{
//                ui:'action',
//                text:'按钮一'
//            },{
//                ui:'confirm-round',
//                text:'按钮二'
//            },{
//                ui:'decline',
//                text:'按钮三'
//            },{
//                ui:'decline-small',
//                text:'按钮四'
//            }]
        });


        var formPanel=Ext.create('Ext.form.Panel',{
            id:'formPanel',
//            items:[mytoolbar],
            items:[myTitlebar],
            html:'测试面板'
        });

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