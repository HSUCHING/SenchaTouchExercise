/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 10/9/12
 * Time: 2:30 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('SenchaTouchExercise.model.User',{
    extend:'Ext.data.Model',
    config:{
        fields:[
            {
                name:'name', type:'string'
            },{
                name:'sex', type:'string'
            },{
                name:'password', type:'string'
            },{
                name:'age', type:'int'
            },{
                name:'email', type:'string'
            },{
                name:'url', type:'string'
            },{
                name:'memo', type:'string'
            },{
                name:'alive', type:'boolean',defaultValue:true
            }],
        validations:[
            {type:'presence',field:'name',message:'姓名必须输入'},
            {type:'exclusion',field:'name',list:['admin','administrator','管理员'],message:'不能使用这个姓名'},
            {type:'inclusion',field:'sex',list:['male','female'],message:'必须选择性别'}
        ]
    },

    changeName:function(){
        var oldName=this.get('name'),
            newName=oldName+"The Barbarian";
        this.set('name',newName);
    }
})