Ext.application({
    name: 'FinDashBoardFinal',

    requires: [
        'Ext.MessageBox',
        'Ext.form.Panel',
        'Ext.field.Radio',
        'Ext.form.FieldSet'

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

//        var formPanel=Ext.create('Ext.form.Panel',{
//            id:'formPanel',
//            scrollable:'vertical',
//            items:[{
//                xtype:'fieldset',
//                title:'电影信息',
//                instructions:'请填写电影信息',
//                defaults:{
//                    labelWidth:'20%'
//                },
//                items:[{
//                    xtype:'textfield',
//                    id:'txt_title',
//                    name:'title',
//                    label:'标题',
//                    placeHolder:'请输入电影标题',
//                    required:true,
//                    clearIcon:true
//                },{
//                    xtype:'textfield',
//                    id:'txt_director',
//                    name:'director',
//                    label:'导演',
//                    placeHolder:'请输入导演名称',
//                    clearIcon:true
//                },
//                //FieldSet组件
//                {
//                    xtype:'fieldset',
//                    title:'拍摄国家',
//                    defaults:{
//                        xtype:'radiofield'
//                    },
//                    items:[{
//                        name:'country',
//                        label:'中国',
//                        value:'china',
//                        checked:true
//                    },{
//                        name:'country',
//                        label:'日本',
//                        value:'Japan'
//                    },{
//                        name:'country',
//                        label:'美国',
//                        value:'America'
//                    }]
//                },{
//                    xtype:'fieldset',
//                    title:'颜色选择',
//                    instructions:'请填写颜色信息',
//                    defaults:{
//                        xtype:'checkboxfield',
//                        labelWidth:'20%'
//                    },
//                    items:[{
//                        xtype:'checkboxfield',
//                        name:'color',
//                        label:'黑色',
//                        value:'Black',
//                        checked:true
//                    },{
//                        xtype:'checkboxfield',
//                        name:'color',
//                        label:'白色',
//                        value:'White',
//                        checked:true
//                    }]
//                }]
//           }]
//
//        });

        var formPanel=Ext.create('Ext.form.Panel',{
            id:'formPanel',
            scrollable:'vertical',
            items:[{
                xtype:'radiofield',
                id:'rb_sex1',
                label:'男性',
                name:'sex',
                value:'male',
                checked:true,
                listeners:{
                    check:function(item,e){
                        console.log('您选取了男性');
                        console.log(formPanel.getValues().sex);
                    }
                }
            },{
                xtype:'radiofield',
                id:'rb_sex2',
                label:'女性',
                name:'sex',
                value:'female',
                checked:false,
                listeners:{
                    check:function(item,e){
                        console.log('您选取了女性');
                        console.log(formPanel.getValues().sex);
                     }
                }
            }]
        });
//
        Ext.Viewport.add(formPanel);
//        console.log(Ext.ComponentQuery.query('radiofield[name=sex]')[0].getGroupValue());
//        console.log(formPanel.getValues().sex);
//        console.log(formPanel.getComponent('rb_sex1').setGroupValue('female'));
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
