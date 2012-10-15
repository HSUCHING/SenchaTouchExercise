/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 10/9/12
 * Time: 3:11 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('SenchaTouchExercise.store.genreStore',{
    extend:'Ext.data.Store',
    config:{
        model:'SenchaTouchExercise.model.genre',
    data:[
        {
            id:'1', genre:'喜剧'
        },                {
            id:'2', genre:'文艺'
        },                {
            id:'3', genre:'动作'
        }
    ]}
});