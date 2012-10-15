Ext.application({
    name: 'FinDashBoardFinal',

    requires: [
        'Ext.MessageBox',
        'Ext.Img'
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

        //Img


        var handleTap=function(img,ev){
            Ext.Msg.alert('您点击了图片!');
            console.log(ev);
            console.log(img);
        }

        var img=Ext.create('Ext.Img',{
            id:'img',
            src:'resources/images/iphone5.jpg',
            width:'30%',
//            height:'50%',
            mode:'img',
//            mode:'background',
//            width:208,
//            height:250,
            listeners:{
//                tap:function(){
//                    Ext.Msg.alert('您点击了图片');
//                }
                tap:handleTap
            }
        });



//        img.addListener('tap',handleTap,this,{
//            single:true,
//            delay:1000
//
//        });


        var panel=Ext.create('Ext.Panel',{
            id:'myPanel',
            cls:'colorBlue',
            items:[img]
//            listeners:{
//                element:'element',
//                tap:handleTap
//            }
        });


        Ext.Viewport.add(panel);


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
