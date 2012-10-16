Ext.application({
    name: 'SenchaTouchExercise',

    requires: [
        'Ext.MessageBox',
        'Ext.form.Panel',
        'Ext.XTemplate'
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

       var fun= function appendDom(){
//            Ext.DomHelper.append('my-div',{
            Ext.DomHelper.overwrite('my-div',{
                id:'url-list',
                tag:'ul',
                cn:[{
                    tag:'li',
                    cn:[{
                        tag:'a',
                        html:'google',
                        href:'http://www.google.com'
                    }]
                },{
                    tag:'li',
                    cn:[{
                        tag:'a',
                        html:'apple',
                        href:'http://www.Apple.com',
                        target:'_blank'
                    }]
                }]
            });
        };


        var myToolbar=Ext.create('Ext.Toolbar',{
            docked:'top',
            items:[{
                xtype:'button',
                text:'追加元素',
                handler:function(){
                    fun();
                }
            }]
        });



        var bcnt=0;
        var acnt=0;
        var bias=3;
        var bchar='M';
        var achar='W';

        var before=function(){
            Ext.DomHelper.insertBefore('insert-target',{
                tag:'p',
                cls:'add',
                html:Ext.util.Format.leftPad(bchar,bcnt*bias,bchar)
            });
            bcnt++;
        };

        var after=function(){
            Ext.DomHelper.insertAfter('insert-target',{
                cls:'add',
                html:Ext.util.Format.leftPad(achar,acnt*bias,achar)+Ext.util.Format.date(new Date(),'Y/m/d')
            });
            acnt++
        };

        var remove=function(){
            var elems=Ext.DomQuery.select('.add');
//            var elems=Ext.DomQuery.select('[class="add"]');
            Ext.each(elems,function(item,index,array){
                Ext.removeNode(item);
            });
            bcnt=acnt=0;
        };


        var myToolbar2=Ext.create('Ext.Toolbar',{
            docked:'top',
            items:[{
                xtype:'button',
                text:'追加(Before)',
                handler:before
            },{
                xtype:'button',
                text:'追加(After)',
                handler:after
            },{
                xtype:'button',
                text:'删除',
                handler:remove
            }]
        });

        var html="<div class='body' style='padding:15px;'>";
        html+="<h1>在指定的元素前后追加元素</h1>";
        html+="<div id='insert-target'>";
        html+="<hr/>";
        html+="</div>";
        html+="</div>";



        var myPanel=Ext.create('Ext.Panel',{
            id:'myPanel',
            title:'通过DomHelper组件追加元素',
//            html:'<div id="my-div"></div>',
            html:html,
            items:[myToolbar2]
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