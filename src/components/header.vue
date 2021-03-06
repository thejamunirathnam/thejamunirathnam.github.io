<template>
    <div>
        <header id="header" class="fixed-top header-inner-pages" style="padding:0;" >
    <div class="container d-flex align-items-center">

      <h1 class="logo"><img src="../assets/img/prompaylogo.gif" alt="" class="img-fluid" style=" max-height: 75px;"></h1>
      <nav class="nav-menu d-none d-lg-block nav_a">

        <ul>
          <li><a href="index.html">Home</a></li>

          <li><a href="#">About</a>
          </li>

          <li class="drop-down"><a href="services.html">Apparel</a>
          <ul>
              <li class="drop-down"><a href="about.html">T-Shirts</a>
              <ul>
                  <li><a href="#">Basic</a></li>
                  <li><a href="#">Long Sleeve</a></li>
                  <li><a href="#">Tank Tops</a></li>
                  <li><a href="#">Performance</a></li>
                  <li><a href="#">Pocketed</a></li>
                  <li><a href="#">Ladies</a></li>
                  <li><a href="#">Youth</a></li>
                </ul>
              </li>
              <li class="active"><a href="team.html">Sports Shirt</a></li>
              <li ><a href="#">Outerwear</a></li>
              <li ><a href="#">Woven Shirts</a></li>
              <li ><a href="#">Fleece</a></li>
          </ul>    <!-- Apparel ul   -->
          </li>
          <li class="drop-down"><a href="portfolio.html">Promotional</a>
          <ul>
                  <li><a href="#">Aprons</a></li>
                  <li class="drop-down"><a href="#">Bags</a>
                   <ul>
                  <li><a @click="products">Briefcase</a></li>
                  <li><a href="#">Bagpacks</a></li>
                  <li><a href="#">Coolers</a></li>
                  <li><a href="#">Technology</a></li>
                  <li><a href="#">Drinkware</a></li>
                  </ul>
                  </li>
                  <li><a href="#">Tote Bags</a></li>
                  <li><a href="#">Portable chairs</a></li>
                  <li><a href="#">Technology</a></li>
                </ul>
          </li>
          
          <li><a @click="contactprom">Contact</a></li>

        </ul>
      </nav>

      <a href="index.html" class="get-started-btn ml-auto" style="color:white">Register</a>
      
    </div>
  </header>
    </div>
</template>

<script>
export default {
   
  name: "Login",
  data () {
      return{

      }
  },
  methods: {
      register(){
           this.$router.push('/RegisterForm');
      },
       contactprom(){ 
         this.$router.push('/about');
      },
      products(){
         this.$router.push('/product');
      }
  
    }
};
</script>
<style>
.nav_a ul li a{
  color:black;
}
</style>

