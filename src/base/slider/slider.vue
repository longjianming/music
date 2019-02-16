<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {addClass} from 'common/js/dom'
  export default {
    props:{
      loop:{
        type:Boolean,
        default:false,
      },
      autoPlay:{
        type:Boolean,
        default:true,
      },
      interval:{
        type:Number,
        default:4000
      }
    },
    mounted(){
      setTimeout(()=>{
        this._setSliderWidth()
        this._initSlider()
      },20)
      window.addEventListener("resize",()=>{
        if(!this.slider){
          return
        }
        this._setSliderWidth(true)
        this.slider.refrresh();
      })
    },
    methods:{
      _setSliderWidth(){
        this.children=this.$refs.sliderGroup.children
        let width=0
        let sliderWidth=this.$refs.slider.clientWidth
        for(let i=0;i<this.children.length;i++){
          let child =this.children[i]
          addClass(child,'slider-item')
          child.style.width=sliderWidth +"px"
          width+=sliderWidth
          if(this.loop){
            width+= 2*sliderWidth
          }
          this.$refs.sliderGroup.style.width=width + "px"
        }
      },
      _initSlider(){
        this.slider=new BScroll(this.$refs.slider,{
          scrollX:true,
          scrollY:false,
          monentum:false,
          snap:true,
          snapLoop:this.loop,
          snapThreshold:0.3,
          snapSpeed:400,
          click:true
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slider
    width: 100%
    overflow:hidden
    .slider-item
      float: left
      img
        width:100%
        vertical-align:bottom


</style>
