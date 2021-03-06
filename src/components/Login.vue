<template>
 <div class="container" style="padding:0;">

   <headercontent/>
  
  <section id="hero" >
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      img-width="100%"
      img-height="100%"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide >
      <b-img :src="require('../assets/img/slideimage1.jpg')" class="car-width"></b-img></b-carousel-slide>
      <b-carousel-slide> 
      <b-img :src="require('../assets/img/slideimage2.jpg')" class="car-width"></b-img></b-carousel-slide>
      <b-carousel-slide>
      <b-img :src="require('../assets/img/slideimage3.jpg')" class="car-width"></b-img></b-carousel-slide>
      <b-carousel-slide>
      <b-img :src="require('../assets/img/slideimage4.jpg')" class="car-width"></b-img></b-carousel-slide>
      <b-carousel-slide>
      <b-img :src="require('../assets/img/slideimage5.jpg')" class="car-width"></b-img></b-carousel-slide> 
    </b-carousel>   
  </section><!-- End Hero -->
  <footercontent/>


 </div>    

</template>

<script>
import headercontent from "./header.vue";
import footercontent from "./footer.vue";


export default {
   
  name: "Login",
  data () {
      return{
      }
  },
  components: {
    headercontent,
    footercontent,
    
  },
  methods: {
      register(){
           this.$router.push('/RegisterForm');
      },
       contactprom(){ 
         this.$router.push('/about');
      },
  
    }
};
</script>
<style>
.car-width{
  width: 100%;
  height: 100%;
}

.carousel-caption{
    width: 100%;
    top: 99px;
    height: 100%;
    right: 0;
    left: 0;
    padding-top: 0;
    position: absolute;
    bottom: 0;
    padding-bottom: 0;
}
</style>

