import circleComponent from './component/VueSvgCircle.vue'

const VueSvgCircle = {
	install:function(Vue){
		if(typeof window !== 'undefined' && window.Vue){
			Vue = window.Vue
		}
		Vue.component('VueSvgCircle',circleComponent)
	}
}
export default VueSvgCircle