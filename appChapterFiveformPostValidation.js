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
            standardSubmit:false,
//            url:'resources/json/1.json',
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
                },{
                    xtype:'selectfield',
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
                    }]
                }]
            },{
                xtype:'panel',
                layout:{
                    type:'hbox',
                    align:'end',
                    pack:'end'
                },
                defaults:{
                    xtype:'button'
                },
                items:[{
                    ui:'decline-round',
                    text:'提交',
//                    handler:function(){
//                        formPanel.submit();
//                    }
                    handler:function(){
                        formPanel.submit({
//                            waitMsg:{message:'正在提交...',cls:'demos-loading'},
                            url:'resources/json/1.json',
                            method:'post',
                            params:{
                                para:"parameter"
                            },
//                            submitDisabled:true,
                        	success:function(form,result){
                                console.log(result.msg);
                                var message="";
                                Ext.each(result.successfactor,function(rec,i){
                                    message+=rec.message+"<br>";
                                })

                                console.log(message);
                        		Ext.Msg.alert('提交成功');
                        	},
                        	failure:function(form,result){
                        		Ext.Msg.alert('提交失败');
                        	}
                        });
                    }
                },{
                    text:'自定义',
                    cls:'normal_btn'
                },{
                    text:'编辑',
                    iconCls:'button-icon',
                    iconAlign:'right'
                },{
                    text:'重置',
                    ui:'back',
//                    disabled:'true'
                    handler:function(){
                        formPanel.reset();
                    }

                }]
            }]
//            ,
//            listeners:{
//                submit:function(form,result){
//                    console.log(result);
//                    Ext.Msg.alert('提交成功');
//                },
//                exception:function(form,result){
//                    console.log(result);
//                    Ext.Msg.alert('提交失败');
//                }
//            }
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