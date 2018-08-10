<template>
	<div class="svg-circle-wrap" :style="{width:width+'px',height:width+'px'}">
		<svg :width="width" :height="width" viewbox="0 0 60 60" class="svg-circle" preserveAspectRatio="xMidYMid meet">
		    <circle 
		    :cx="width/2" :cy="width/2" 
		    :r="(width-strokeWidth)/2" 
		    :stroke-width="strokeWidth" 
		    :stroke="progressColor" 
		    fill="none"  
		    :stroke-dasharray="s1">
		    </circle>
		    <circle 
		    :cx="width/2" :cy="width/2" 
		    :r="(width-strokeWidth)/2" 
		    :stroke-width="strokeWidth" 
		    :stroke="progressColor" 
		    fill="none" 
		    stroke-opacity="0.3">
		    </circle>
		</svg>
		<div class="svg-num">{{progress}}%</div>
	</div>
</template>
<script>
	export default {
		name: 'VueSvgCircle',
		props:{
			// 圆的大小
			width:{
				type:Number,
				default:60
			},
			// 圆环的宽度
			strokeWidth:{
				type:Number,
				default:5
			},
			// 背景圆环颜色
			bgColor:{
				type:String,
				default:'#F0F0F0'
			},
			// 进度条颜色
			progressColor:{
				type:String,
				default:'#20A0FF'
			},
			// 进度
			progress:{
				type:Number,
				default:30,
			},
		},
		data (){
			return {
				s1:0,
				s2:0,
			}
		},
		mounted (){
			let a = parseInt(this.width);
			let b = parseInt(this.strokeWidth);
			let r = Math.round((a-b)/2);		
			let percent = this.progress / 100, perimeter = Math.PI * 2 * r;
			this.s1 = perimeter * percent + ' ' + perimeter * (1- percent);
		}
	}
</script>
<style lang="less">
.svg-circle-wrap{
	position: relative;
	.svg-circle{
		transform:rotate(-90deg);
	}
	circle {
		-webkit-transition: stroke-dasharray 1.25s;
		transition: stroke-dasharray 1.25s;
	}
	.svg-num{
		position: absolute;
		left: 50%;
		top: 50%;
		transform:translate(-50%,-50%);
	}
}
</style>