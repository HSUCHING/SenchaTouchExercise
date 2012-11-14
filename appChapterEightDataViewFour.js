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
        'Ext.field.Search',
        'Ext.data.reader.Xml',
        'Ext.util.Format',
        'Ext.data.reader.Json'
    ],


    views: ['Main'],
    models:['UserInfo','BookInfo'],
    stores:['BookInfoReader'],


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


        var bookstore=Ext.create('SenchaTouchExercise.store.BookInfoReader');

        var bookTemplate=new Ext.XTemplate(
            '<tpl for=".">',
            '<div class="Book_img"><img src="{image_url}"/></div>',
            '<div class="Book_info">',
            '<h2>{book_name}</h2><br><h3>作者：{author}</h3>',
            '<p>{description:ellipsis(40)}</p>',
            '</div>',
            '</tpl>'
        );


        var dataview=Ext.create('Ext.DataView',{
            store:bookstore,
            itemTpl:bookTemplate,
            baseCls:'Book'
        });

        Ext.Viewport.add(dataview);
        console.log(bookstore.isAutoLoading());

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