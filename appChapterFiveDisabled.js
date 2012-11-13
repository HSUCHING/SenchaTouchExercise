Ext.application({
    name: 'SenchaTouchExercise',

    requires: [
        'Ext.MessageBox',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.DatePicker',
        'Ext.field.Slider',
        'Ext.field.Toggle',
        'Ext.field.Hidden',
        'Ext.field.Select',
        'Ext.field.Password',
        'Ext.field.Number',
        'Ext.field.Email',
        'Ext.field.Url'



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

        var formPanel=Ext.create('Ext.form.Panel',{
            id:'formPanel',
            scrollable:'vertical',
            standardSubmit:false,
            url:'resources/json/1.json',
            items:[
                {
                    id:'set',
                    xtype:'fieldset',
                    title:'登陆信息',
                    instructions:'请填写个人登陆信息',
                    defaults:{
                        labelWidth:'20%'
                    },
                    items:[{
                        xtype:'textfield',
                        id:'name',
                        name:'name',
                        label:'姓名',
                        required:true,
                        placeHolder:'请输入姓名',
                        clearIcon:true,
                        disabled:true
                    },{
                        xtype:'selectfield',
                        id:'sex',
                        name:'sex',
                        label:'性别',
                        value:'female',
                        options:[{
                            text:'男性',
                            value:'male'
                        },{
                            text:'女性',
                            value:'female'
                        }],
                        placeHolder:'请输入性别',
                        clearIcon:true
                    },{
                        xtype:'passwordfield',
                        id:'password',
                        name:'password',
                        label:'密码',
                        placeHolder:'请输入密码',
                        clearIcon:true
                    },{
                        xtype:'numberfield',
                        id:'age',
                        name:'age',
                        label:'年龄',
                        placeHolder:'请输入年龄',
                        clearIcon:true
                    },{
                        xtype:'emailfield',
                        id:'email',
                        name:'email',
                        label:'Email',
                        placeHolder:'请输入Email',
                        clearIcon:true
                    },{
                        xtype:'urlfield',
                        id:'url',
                        name:'url',
                        label:'URL',
                        placeHolder:'请输入Url',
                        clearIcon:true
                    },{
                        xtype:'textareafield',
                        id:'memo',
                        name:'memo',
                        label:'个人简介',
                        placeHolder:'请输入个人简介',
                        clearIcon:true
                    }]
                },
                {
                    xtype:'panel',
                    layout:{
                        type:'hbox',
                        pack:'end'
                    },
                    defaults:{
                        xtype:'button'
                    },
//                    items:[{
//                        ui:'action',
//                        text:'数据自动装载',
//                        handler:function(){
//                            console.log(formPanel.getComponent("set").getComponent('sex').getValue());
//                            var userinfo=Ext.create('SenchaTouchExercise.model.UserInfo',{
//                                'name':'Hsuching',
//                                'sex':'male',
//                                'password':'8634',
//                                'age':27,
//                                'email':'martin.hsuching@gmail.com',
//                                'url':'http://www.hsuching.lord.org',
//                                'memo':'memo'
//                            });
//                            formPanel.setRecord(userinfo);
//                            console.log(formPanel.getComponent("set").getComponent('sex').getValue());
//                        }
//                    }]
                    items:[{
                        ui:'action',
                        text:'数据自动装载',
                        handler:function(){
                            Ext.Ajax.request({
                                url:'resources/json/UserInfo.json',
                                method:'POST',
                                params:{
                                    id:'1'
                                },
//                                scope:this,
                                success:function(response){
                                    Ext.Msg.alert('表单数据装载成功');
                                    var obj=Ext.decode(response .responseText);
                                    var msg=obj.data[0];
                                    var user=Ext.create('SenchaTouchExercise.model.UserInfo',{
                                        'name':msg.name,
                                        'sex':msg.sex,
                                        'password':msg.password,
                                        'age':msg.age,
                                        'email':msg.email,
                                        'url':msg.url,
                                        'memo':msg.memo
                                    });
                                    formPanel.setRecord(user);
                                },
                                failure:function(){
                                    Ext.Msg.alert('表单数据装载失败');
                                }
                            })
                        }
                        },
                    {
                        text:'禁用',
                        ui:'action',
                        hasDisabled:false,
//                        scope:this,
                        handler:function(btn){
                            if(btn.hasDisabled){
                                formPanel.enable();
                                btn.hasDisabled=false;
                                btn.setText('禁用');
                            }else{
                                formPanel.disable();
                                btn.hasDisabled=true;
                                btn.setText('有效');
                            }
                        }
                    }]
                }]
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