Ext.application({
    name: 'SenchaTouchExercise',

    requires: [
        'Ext.MessageBox',
        'Ext.form.Panel'
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
        var data={
            string_value:'模板的初始文字'
        };
        var tpl=new Ext.XTemplate(
            '<table>',
            '<tr>',
            '<td>{string_value}</td>',
            '</tr>',
            '</table>'
        );

        var tplHtml=tpl.apply(data);
        var myToolbar=Ext.create('Ext.Toolbar',{
           docked:'top',
           items:[{
                text:'替换模版',
                handler:function(){
                    var newData={
                        string_value:'替换后的文字'
                    };
                    tpl.overwrite(Ext.get('subPanel'),newData);
                }
           }]
        });


        var Panel=Ext.create('Ext.Panel',{
            id:'formPanel',
            items:[myToolbar,{
                id:'subPanel',
                xtype:'panel',
                html:tplHtml
            }]
        });

        Ext.Viewport.add(Panel);
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