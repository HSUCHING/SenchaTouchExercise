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


        pageCount="";

        var bookstore=Ext.create('SenchaTouchExercise.store.BookInfoReader');

        var toolbar1 =Ext.create('Ext.Toolbar',{
            docked : 'top',
            layout: {
                type: 'hbox',
                pack:'end'
            },
            items: [
                {
                    xtype: 'selectfield',
                    usePicker:true,
                    id:'sort',
                    name:'sort',
                    options:[{
                        text:'选择排序方式',
                        value:''
                    },{
                        text:'按书名升序排列',
                        value:'book_name_asc'
                    },{
                        text:'按书名降序排列',
                        value:'book_name_desc'
                    },{
                        text:'按作者名升序排列',
                        value:'author_asc'
                    },{
                        text:'按作者名降序排列',
                        value:'author_desc'
                    }],
                    listeners:{
                        change:function(item,newValue,oldValue){
                            switch(newValue)
                            {
                                case "book_name_asc":
                                    bookstore.sort({
                                        property :'book_name',
                                        direction:'asc'
                                    });
                                    break;
                                case "book_name_desc":
                                    bookstore.sort({
                                        property :'book_name',
                                        direction:'desc'
                                    });
                                    break;
                                case "author_asc":
                                    bookstore.sort({
                                        property :'author',
                                        direction:'asc'
                                    });
                                    break;
                                case "author_desc":
                                    bookstore.sort({
                                        property :'author',
                                        direction:'desc'
                                    });
                                    break;
                            }
                            bookstore.load();
                        }
                    }
                }]
        });

        var toolbar2 =Ext.create('Ext.Toolbar',{
            docked : 'bottom',
            width:'100%',
            layout:{
                type:'hbox',
                pack:'center'
            },
            items: [
                {
                    iconMask:true,
                    iconCls: 'firstpage',
                    handler:function(){
                        bookstore.loadPage(1);
                    }
                },
                {
                    iconMask:true,
                    iconCls: 'arrow_left',
                    handler:function(){
                        if(bookstore.currentPage>1)
                        {
                            bookstore.previousPage();
                        }
                    }
                },
                {
                    iconMask:true,
                    iconCls: 'arrow_right',
                    handler:function(){
                        if(bookstore.currentPage<pageCount)
                        {
                            bookstore.nextPage();
                        }
                    }
                },
                {
                    iconMask:true,
                    iconCls: 'lastpage',
                    handler:function(){
                        bookstore.loadPage(pageCount);
                    }
                },
                {
                    html:'',
                    style:'font-size:16px',
                    id:'pageInfo'
                }]
        });


        var bookTemplate=new Ext.XTemplate(

            '<div class="Book_img"><img src="{image_url}"/></div>',
            '<div class="Book_info">',
            '<h2>{book_name}</h2><br><h3>作者：{author}</h3>',
            '<p>{description:ellipsis(40)}</p>',
            '</div>'

        );

        var dataview=Ext.create('Ext.DataView',{
            store:bookstore,
            emptyText:'没有数据',
            itemTpl:bookTemplate,
            baseCls:'Book'
        });

        var panel=Ext.create('Ext.Panel',{
            layout:'fit',
            items:[toolbar1,dataview,toolbar2]
        });
        Ext.Viewport.add(panel);
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