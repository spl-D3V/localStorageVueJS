const app = new Vue({
    el:'#app',
    data:{
        titulo: 'CRUD con Vue',
        tareas: [],
        nuevaTarea:''
    },
    methods:{
        agregarTarea: function(){
            if (this.nuevaTarea != ''){
                this.tareas.push({nombre:this.nuevaTarea, estado:false});
                this.actualizarDB();
            }
            this.nuevaTarea = '';
        },
        editarTarea: function(idx){
            this.tareas[idx].estado = true;
            this.actualizarDB();
        },
        eliminarTarea: function(idx){
            this.tareas.splice(idx, 1);
            this.actualizarDB();
        },
        actualizarDB: function(){
            localStorage.setItem('CRUD-VUE', JSON.stringify(this.tareas));
        }
    },
    created: function(){
        let localDB = JSON.parse(localStorage.getItem('CRUD-VUE'));
        if(localDB === null){
            this.tareas = [];
        }else{
            this.tareas = localDB;
        }
    }
});