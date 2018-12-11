Vue.component('todolist', {
  // data: function () {
  //   return {
  //     count: 0
  //   }
  // },
  
  
		data: function () {
  			return {
				tasks: [
				{name: '1', compleate: true},
				{name: '2', compleate: false},
				{name: '3', compleate: false},
				{name: '4', compleate: true},
				{name: '5', compleate: false},
				{name: '6', compleate: true}
				]
			}
		},
		methods:{
			checked(task){
				return task.status=='compleate'
			}
		},
		computed:{
			incompleate(){
				return this.tasks.filter(task=>!task.compleate);
			},
		},
  		template: '<div ><h3>All tasks</h3><ul><li v-for="task in tasks"><span>{{task.name}}</span><input type="checkbox" v-model:checked="task.compleate"></li></ul><h3>Incomplete tasks</h3><ul><li v-for="task in incompleate" v-text="task.name"> </li></ul></div>'


})
new Vue({
	el:'#root2',
})