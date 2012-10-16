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

        var company = "";
        Ext.Ajax.request({
            url:'resources/json/company.json',
            scope:this,
            success:function(response){
                company=Ext.decode(response.responseText);
                var tpl=new Ext.XTemplate(
                    '<p>Company:<br/></p>',
                    '<tpl for=".">',
                    'name:{name}<br/>',
                    '<p>Employee:</p>',
                    '<tpl for="employer">',
                    '<tpl if="this.isYounger(age)">',
                    '<p>{#}.name:{name},age:{age},at Company:{parent.name}<br/>hobbies:',
                    '<tpl for="hobby">',
                    '<tpl if="xindex&gt;1">',
                    ',',
                    '</tpl>',
                    '{.}',
                    '</tpl>',
                    '({[values.hobby.length]}items)',
                    '<tpl if="[xindex+1]==xcount">',
                    '<br/> The count of employee:',
                    '{[xcount]} persons',
                    '</tpl>',
                    '</tpl>',
                    '</tpl>',
                    '</tpl>',
                    {
                        compiled:true,
                        isYounger:function(age){
                            console.log("hi");
                            return age<28;
                        }
                    }
                );
//
                var tplHtml=tpl.apply(company);



                var myPanel=Ext.create('Ext.Panel',{
                    id:'formPanel',
                    html:tplHtml
                });

                Ext.Viewport.add(myPanel);
            },
            failure:function(){
                Ext.Msg.alert('失败');
            }
        });






//        var company={
//            name:'Shanghai SAP Labs',
//            employer:[{
//                name:'Martin',
//                age:'26',
//                hobby:['Apple','Football','Swimming','Sax']
//            },{
//                name:'Kaka',
//                age:'29',
//                hobby:['Football','Games','Travel']
//            },{
//                name:'Cristiano',
//                age:'27',
//                hobby:['Golf','Football']
//            }]
//        };
//        var tpl=new Ext.XTemplate(
//            '<p>Company:<br/></p>',
//        '<table border="1" class="psq">',
//            '<tr>',
//            '<th>月份</th>',
//            '<th>存款</th>',
//            '</tr>',
//            '<tr>',
//            '<td>一月</td>',
//            '<td>1000 元</td>',
//            '</tr>',
//            '<tr>',
//            '<td>二月</td>',
//            '<td>1500 元</td>',
//            '</tr>',
//            '</table>',
//            '<tpl for=".">',
//                'name:{name}<br/>',
//                '<p>Employee:</p>',
//                '<tpl for="employer">',
//                    '<tpl if="this.isYounger(age)">',
//                        '<p>{#}.name:{name},age:{age},at Company:{parent.name}<br/>hobbies:',
//                        '<tpl for="hobby">',
//                            '<tpl if="xindex&gt;1">',
//                            ',',
//                            '</tpl>',
//                            '{.}',
//                        '</tpl>',
//                        '({[values.hobby.length]}items)',
//                        '<tpl if="[xindex+1]==xcount">',
//                            '<br/> The count of employee:',
//                            '{[xcount]} persons',
//                        '</tpl>',
//                    '</tpl>',
//                '</tpl>',
//            '</tpl>',
//            {
//                compiled:true,
//                isYounger:function(age){
//                    return age<28;
//                }
//            }
//        );
////
//        var tplHtml=tpl.apply(company);
//
//
//
//        var myPanel=Ext.create('Ext.Panel',{
//            id:'formPanel',
//            html:tplHtml
//        });
//
//        Ext.Viewport.add(myPanel);
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