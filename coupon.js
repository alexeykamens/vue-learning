// Vue.component('coupon', {
//   template: `<input @blur="couponApplied">`,
//   methods: {
// 		couponApplied (){
// 			this.$emit('applied');
// 		}
// 	}

// })
// new Vue({
// 	el:'#coupon',
// 	methods: {
// 		onCouponApplied (){
// 			alert('applied!')
// 		}
// 	}
// });
var eventHub= new Vue();
Vue.component('coupon', {
  template: `<input v-model="alertText" @blur="couponApplied">`,
  data(){
  	return{alertText:''}
  },
  methods: {
		couponApplied (){
			eventHub.$emit('applied', { text: this.alertText});
			this.alertText= ''
		}
	}

});
new Vue({
	el:'#coupon',
	created() {

		eventHub.$on('applied', (text)=>alert(text.text));
	}
	
});
