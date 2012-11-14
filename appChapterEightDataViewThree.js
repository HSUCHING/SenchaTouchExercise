Ext.application({
    name: 'SenchaTouchExercise',

    requires: [
        'Ext.MessageBox',
        'Ext.form.Panel',
        'Ext.XTemplate',
        'Ext.data.Store',
        'Ext.dataview.DataView',
        'Ext.util.Sorter',
        'Ext.field.Select',
        'Ext.Toolbar',
        'Ext.Panel',
        'Ext.field.Search'
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

        Ext.define('User',{
            extend:'Ext.data.Model',
            config:{
                fields:['firstName','lastName']
            }
        });


        var store=Ext.create('Ext.data.Store',{
            model:'User',
            data:[
                {firstName:'三丰',lastName:'张'},
                {firstName:'莫愁',lastName:'李'},
                {firstName:'昭君',lastName:'王'},
                {firstName:'公明',lastName:'赵'},
                {firstName:'无忌',lastName:'张'},
                {firstName:'逵',lastName:'李'},
                {firstName:'语嫣',lastName:'王'},
                {firstName:'飞燕',lastName:'赵'},
                {firstName:'天师',lastName:'张'},
                {firstName:'时珍',lastName:'李'},
                {firstName:'允',lastName:'王'},
                {firstName:'敏',lastName:'赵'}
            ]
        });

//        store.sort('lastName','asc');
        store.sort({property:'lastName',direction:'ASC'});
        store.sort();

        var tpl = new Ext.XTemplate(
            '<div>{lastName}</div><div>{firstName}</div>'
        );

        function sortTable(){
            sort=Ext.ComponentManager.get("sel_sort").getValue();
            if(sort!=""){
                store.sort({
                    property:sort.split('-')[0],
                    direction:sort.split('-')[1],
                    transform:function(value){return getSpell(value,value);}
                })
            }
        }


        function searchTable(){
            store.clearFilter();
            var value=Ext.ComponentManager.get("search_lastname").getValue();
            if(value!=""){
                store.filter('lastName',value);
            }
            var value=Ext.ComponentManager.get("search_firstname").getValue();
            if(value!=""){
                store.filter('firstName',value);
            }
        }

        var toolbar=new Ext.Toolbar({
            docked:'top',
            height:160,
            layout:{
                type:'vbox',
                align:'center'
            },
            items:[{
                xtype:'searchfield',
                id:'search_lastname',
                name:'search_lastname',
                placeHolder:'请输入检索用用户姓',
                listeners:{
                    change:function(){
                        searchTable();
                    }
                }
            },{
                xtype:'searchfield',
                id:'search_firstname',
                name:'search_firstname',
                placeHolder:'请输入检索用用户名',
                listeners:{
                    change:function(){
                        searchTable();
                    }
                }
            },{
                xtype:'selectfield',
                id:'sel_sort',
                name:'sort',
                displayField:'text',
                valueField:'value',
                options:[{
                    text:'选择排序方式',
                    value:''
                },{
                    text:'按姓升序排列',
                    value:'lastName-asc'
                },{
                    text:'按姓降序排列',
                    value:'lastName-desc'
                },{
                    text:'按名升序排列',
                    value:'firstName-asc'
                },{
                    text:'按名降序排列',
                    value:'firstName-desc'
                }],
                listeners:{
                    change:function(){
                        sortTable();
                    }
                }
            }]
        });

        var panel=Ext.create('Ext.Panel',{
            docked:'top',
            layout:'hbox',
            items:[
                {
                    baseCls:'title',
                    html:'姓'
                },{
                    baseCls:'title',
                    html:'名'
                }]
        });

        var dataview=Ext.create('Ext.DataView',{
//            fullscreen:true,
            scrollable:'both',
            store:store,
            baseCls:'user',
            selectedCls:'selecteditem',
            items:[toolbar,panel],
            emptyText:'没有数据',
            itemTpl:tpl,
            listeners:{
                refresh:function(dataview){
                    console.log('refresh');
                }
            }
        });


        var mainPanel=Ext.create('Ext.Panel',{
            layout:'fit',
            items:[dataview]
        });

        Ext.Viewport.add(mainPanel);

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