Vue.component('modal', {
  		template: 
			`<div class="modal is-active">
			  <div class="modal-background"></div>
			  <div class="modal-content">
			  	<div class="box">
			    <slot></slot>
			    </div>
			  </div>
			  <button class="modal-close is-large" aria-label="close" @click="$emit('close-modal')"></button>
			</div>`
});

new Vue({
	el:'#modal',
	data: {
		showModal:true,
		},
	methods:  {
			closeModal(){
			this.showModal=false;
			}

	}
})