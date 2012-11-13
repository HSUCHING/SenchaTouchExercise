Ext.application({
    name: 'SenchaTouchExercise',

    requires: [
        'Ext.MessageBox',
        'Ext.form.Panel',
        'Ext.XTemplate',
        'Ext.data.Store',
        'Ext.dataview.DataView'
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
        var calData1=[{
            name:'HTML 5与CSS 3权威指南',url:'resources/images/html51.jpg'
        },{
            name:'HTML5揭秘',url:'resources/images/html52.jpg'
        }];

        var calData2=[{
            name:'HTML5游戏开发',url:'resources/images/html53.jpg'
        },{
            name:'HTML5高级程序设计',url:'resources/images/html54.jpg'
        },{
            name:'HTML 5&CSS完全手册（第5版）',url:'resources/images/html55.jpg'
        }]


        var store=Ext.create('Ext.data.Store',{
            fields:['name','url'],
            data:calData1,
            sorters:[{
                property:'name',
                direction:'desc',
                transform:function(value){return getSpell(value,value);}
            },{
                property:'price',
                direction:'desc'
            }]
        });


        var toolbar=Ext.create('Ext.Toolbar',{
            docked:'top',
            items:[{
                text:'修改数据',
                handler:function(){
                    store.setData(calData2);
                }
            }]
        });

        var tpl = new Ext.XTemplate(
            '<tpl for=".">',
            '<div style="font-size:12px;">',
            '<img src="{url}" title="{name}"><br/>',
            '{name}',
            '</div>',
            '</tpl>'
        );

        var count=0;
        var dataview = Ext.create('Ext.DataView', {
            fullscreen:true,
            scrollable:'vertical',
            store: store,
            items:toolbar,
            itemTpl:tpl,
            baseCls:'book',
            selectedCls:'selecteditem',
            mode:'single',
            listeners:{
                itemsingletap:function(dataview,index,item,record,e){
                    console.log("您点击了"+store.getAt(index).get('name'));
                },
                itemdoubletap:function(dataview,index,item,record,e){
                    console.log("您双点击了"+item.dom.innerText);
                },
                itemswipe:function(dataview,index,item,record,e){
                    Ext.Msg.alert("您扫过了"+item.dom.innerText);
                },
                refresh:function(dataview){
                    if(count>0)
                        Ext.Msg.alert('数据被更新');
                    count+=1;
                }
            }
        });

        Ext.Viewport.add(dataview);

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