Vue.component ('tab', {
	props: {
			name: {required:true},
			selected:{default:false}
	},
	data(){
		return{isActive:false}
	},
	computed:{
		href(){
			return '#'+this.name.toLowerCase().replace(/ /g, '-');
		}
	},
	template:`
		 <div v-show="isActive"><slot></slot></div>
	`,
		mounted() {
		this.isActive=this.selected;
	}
})

Vue.component ('tabs', {
	data() {
		return{
			 tabs:[]
		}
	},
	methods: {
		selectTab(selectedTab){
			this.tabs.forEach(tab=>{
				tab.isActive=(tab.name==selectedTab.name)
			})
		}
	},
	template:`
			<div>
			
 				 <div class="tabs">
				  <ul>
				   
					<li v-for="tab in tabs" :class="{'is-active':tab.isActive}">
						<a :href="tab.href" @click="selectTab(tab)">
							{{tab.name}} 
						</a>
					</li>
				  
				   
				  </ul>
				 </div>
				 
				 <div> 
				 	<slot></slot>
				 </div>
			 </div>
	`,
	created() {
		this.tabs=this.$children

	}

})
new Vue({
	el: '#tabs'
})