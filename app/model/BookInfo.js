/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 11/14/12
 * Time: 12:52 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('SenchaTouchExercise.model.BookInfo',{
    extend:'Ext.data.Model',
    config:{
        fields:[{
            name:'image_url',type:'string'
        },{
            name:'book_name',type:'string'
        },{
            name:'author',type:'string'
        },{
            name:'description',type:'string'
        }]
    }
})