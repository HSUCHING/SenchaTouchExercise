/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 10/9/12
 * Time: 2:37 PM
 * To change this template use File | Settings | File Templates.
 */


var store=Ext.create('Ext.data.store',{
    model:'SenchaTouchExercise.model.User',
    data:[
        {name:'Hsuching',sex:'male',password:'0304',age:27},
        {name:'Mmy',sex:'female',password:'0106',age:24}
    ]
})