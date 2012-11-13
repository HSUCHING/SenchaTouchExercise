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
        var calData=function(){
            var data=[];
            var item={};
            for(var i=0;i<30;i++){
                var r=Math.floor(Math.random()*255);
                var g=Math.floor(Math.random()*255);
                var b=Math.floor(Math.random()*255);
                item={
                    id:i,
                    rgb:Ext.util.Format.format('rgb({0},{1},{2})',r,g,b)
                };
                data[i]=item;
            }
            return data;
        };

        var initData=calData();
        var store=Ext.create('Ext.data.Store',{
            data:initData,
            fields:['id','rgb']
        });

        var dataViewTpl=new Ext.XTemplate(
            '<tpl for=".">',
            '<div class="paul">',
            '<div>',
            '<div style="background: {rgb};width:100%;height: 15px;color:#EEE;font-size: small;">',
            '</div>',
            '</div>',
            '</div>',
            '</tpl>'
        );

        var myToolbar=Ext.create('Ext.Toolbar',{
            docked:'top',
            items:[{
                text:'改变颜色',
                handler:function(){
                    var newData=calData();
                    store.setData(newData);
                }
            }]
        });

        var myPanel=Ext.create('Ext.Panel',{
            id:'myPanel',
            items:[
                myToolbar,{
                    xtype:'dataview',
                    scrollable:'both',
                    itemTpl:dataViewTpl,
                    store:store,
                    height:500
                }
            ]
        });


        Ext.Viewport.add(myPanel);

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