Vue.component('bulma-message', {
		props: ['title', 'body'],
		data (){
			return {
				isVisible: true,
			}
		},
		methods:{
			hideMessage(){
				this.isVisible=false;
			}
		},
  		template: 
			`<article class="message" v-show="isVisible">
			  <div class="message-header">
			    <p>{{title}}</p>
			    <button class="delete" aria-label="delete" @click="hideMessage"></button>
			  </div>
			  <div class="message-body">
			   {{body}}
			  </div>
			</article>`
});
new Vue({
	el:'#message',
})