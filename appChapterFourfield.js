Ext.application({
    name: 'FinDashBoardFinal',

    requires: [
        'Ext.MessageBox',
        'Ext.form.Panel',
        'Ext.field.Password',
        'Ext.field.Text',
        'Ext.field.Number',
        'Ext.field.Url',
        'Ext.field.TextArea',
        'Ext.field.Spinner',
        'Ext.field.Email',
        'Ext.field.Search'

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
                xtype:'textfield',
                id:'txt_name',
                name:'name',
                label:'姓名',
                placeHolder:'请输入姓名',
                required:true,
                clearIcon:true
            },{
                xtype:'passwordfield',
                id:'txt_password',
                name:'password',
                label:'密码',
                placeHolder:'请输入密码',
                required:true,
                clearIcon:true
            },{
                xtype: 'numberfield',
                id:'txt_age',
                name:'age',
                label:'年龄',
                placeHolder:'请输入年龄',
                required:true,
                clearIcon:true
            },{
                xtype: 'spinnerfield',
                id:'work_year',
                name:'Work year',
                label:'工龄',
                placeHolder:'请输入工龄',
                value:3,
                minValue:0,
                maxValue:50,
                increment:1,
                required:true,
                clearIcon:true,
                groupButtons:false
            },{
                xtype: 'emailfield',
                id:'txt_email',
                name:'email',
                label:'Email',
                placeHolder:'请输入有效的Email地址',
                clearIcon:true
            },new Ext.field.Url({
                id:'txt_url',
                name:'url',
                label:'个人网址',
                placeHolder:'请输入有效的网址',
                clearIcon:true
            }),new Ext.field.TextArea({
                id:'txtarea_memo',
                name:'memo',
                label:'个人简介',
                placeHolder:'请输入1000个字以内的个人简介',
                clearIcon:true,
                maxLength:1000,
                maxRows:4
            }),new Ext.field.Search({
                id:'searchfield',
                name:'searchText',
                label:'检索',
                placeHolder:'请输入检索用关键词',
                required:true,
                clearIcon:true
            })]

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
