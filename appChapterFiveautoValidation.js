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
        'Ext.field.Select'


    ],


    views: ['Main'],
    models:['User'],



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
                        required:true
                    },{
                        xtype:'selectfield',
                        id:'sel_sex',
                        name:'sex',
                        label:'种类',
                        options:[{
                            text:'男性',
                            value:'male'
                        },{
                            text:'女性',
                            value:'female'
                        }],
                        label:'性别',
                        required:false
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
                items:[{
                    ui:'action',
                    text:'提交',
                    handler:function(){
                        var model=Ext.create('SenchaTouchExercise.model.User',formPanel.getValues());
                        var errors=model.validate();
                        if(errors.isValid()){
                            formPanel.submit({
                                success:function(form,result){
                                    Ext.Msg.alert('成功','表单提交成功!');
                                },
                                failure:function(form,result){
                                    var message="";
                                    Ext.each(result.successfactor,function(rec,i){
                                        message+=rec.message+"<br>";
                                    })
                                    console.log(message);
                                    Ext.Msg.alert('提交失败!',message);
                                }
                            });
                        }
                        else{
                            var message="";
                            Ext.each(errors.items,function(rec){
                                message+=rec.getMessage()+"<br>";
                            });
                            Ext.Msg.alert("验证失败",message);
                        }

                    }
                }]
            }]
        })
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