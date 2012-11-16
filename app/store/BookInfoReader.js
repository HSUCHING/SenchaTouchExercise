/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 11/14/12
 * Time: 1:01 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('SenchaTouchExercise.store.BookInfoReader',{
    extend:'Ext.data.Store',
    config:{
        model:'SenchaTouchExercise.model.BookInfo',
        autoLoad:true,
        remoteSort:true,
        pageSize:2,
        proxy:{
            type:'ajax',
//            url:'resources/xml/bookInfo.xml',
//            reader:{
//                type:'xml',
//                record:'book'
//            }
//            enablePagingParams:false,
            url : 'resources/json/bookInfo.json',
            reader: {
                type: 'json',
                rootProperty: 'books',
                totalProperty:'bookCount'
            }
        },
        scope:this,
        listeners:{
            load:function(store,records,successful,operation){
//                读取数据失败
                if(!successful){
                    Ext.Msg.alert("读取失败!");
                }else{
//                    console.log("载入");
                    var recordCount=records.length;
                    var pageSize=this.getPageSize();
                    pageCount=(recordCount-recordCount%pageSize)/pageSize;
                    if(recordCount%pageSize>0){
                        pageCount+=1;
                        Ext.getCmp('pageInfo').setText(String(this.currentPage)+"/"+pageCount+"页");
                    }else{
                        Ext.getCmp('pageInfo').setText(String(this.currentPage)+"/"+pageCount+"页");
                    }
                }
            }
        }
    }
});