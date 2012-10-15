/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 10/9/12
 * Time: 5:46 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('SenchaTouchExercise.store.genreStoreProxyReader',{
    extend:'Ext.data.JsonStore',
    config:{
        model:'SenchaTouchExercise.model.genre',
        autoLoad:true,
        proxy:{
            type:'ajax',
            url:'resources/json/genre.json',
            reader:{
                type:'json'
            }
        }
    }
});