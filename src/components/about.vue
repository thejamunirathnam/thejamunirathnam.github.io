

  
  <template>
  <div>
 
   <headercontent/>

  <main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
    
    </section><!-- End Breadcrumbs -->

  
    <!-- ======= Team Section ======= -->
    <section id="team" class="team section-bg" style="padding:0;">
      <div class="container">
        <div class="row">

          <div class="col-lg-6">
            <div class="member d-flex align-items-start">
              
              <div class="member-info">
                <h4>By Email:</h4>
                <span>Chief Executive Officer</span>
                <p>Customer Service...........................................info@promotionpay.com</p>
                <p>Sales.................................................................sales@promotionpay.com</p>
                <p>Tyna(Sales Manager).......................................tyna@promotionpay.com</p>
                <p>Bety...................................................................betty@promotionpay.com</p>
                <p>Efe.....................................................................efe@promotionpay.com</p>
                <p>ArtDepartment................................................artwork@promotionpay.com</p>
              </div>
            </div>
          </div>

           <div class="col-lg-6">
            <div class="member d-flex align-items-start">
              
              <div class="member-info">
               <h4>By Phone:</h4>
                <span>Operating Hours: 9am-5pm</span>
                <p>Customer Service.......................................888-503-3526 ext 1</p>
                <p>Sales................................................................888-503-3526 ext 2</p>
                <p>Tyna(Sales Manager)..................................................888-503-3526 ext 0</p>
                <p>Betty...................................................888-503-3526 ext 4</p>
                <p>Efe....................................................................888-503-3526 ext 5</p>
                <p>International manager .................................................888-503-3526 ext 8</p>
               </div>
            </div>
          </div>


        </div>

      </div>
    </section><!-- End Team Section -->

    <!-- ======= Our Skills Section ======= -->
    <section id="skills" class="skills" style="padding:0;">
      <div class="container">

        <div class="section-title" style="padding-bottom:10px;">
          <h2>Quick Links</h2>
          <p></p>
        </div>

        <div class="row skills-content">

          <div class="col-lg-2">
            <div class="progress">
              <img src="../assets/img/cup.gif" alt="" class="img-fluid" style=" max-height: 35px;">
            </div>
          </div>
         <div class="col-lg-2">
            <div class="progress">
              <img src="../assets/img/hat.gif" alt="" class="img-fluid" style=" max-height: 35px;">
            </div>
         </div>
         <div class="col-lg-2">   
            <div class="progress">
              <img src="../assets/img/note.gif" alt="" class="img-fluid" style=" max-height: 35px;">
            </div>
         </div>
          <div class="col-lg-2">
            <div class="progress">
              <img src="../assets/img/pen.gif" alt="" class="img-fluid" style=" max-height: 35px;">
            </div>
          </div>
        <div class="col-lg-2">
            <div class="progress">
              <img src="../assets/img/tblack.gif" alt="" class="img-fluid" style=" max-height: 35px;">
            </div>
        </div>
        <div class="col-lg-2">
            <div class="progress">
              <img src="../assets/img/us.gif" alt="" class="img-fluid" style=" max-height: 35px;">
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Our Skills Section -->

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
<footercontent/>

  </div>
  <!-- <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a> -->
</template>

<script>
// import $ from 'jquery';
// import axios from 'axios';
import headercontent from "./header.vue";
import footercontent from "./footer.vue";
// import "../assets/img/"

export default {
  name: "about",
  data: () => ({
   
  }),


   components: {
    headercontent,
    footercontent
  },
  mounted(){
    console.log("theja about");
  },

  methods: {
    
      cancel(){ 
         this.$router.push('/');
      }
    
  }  
}
</script>
<style scoped>

</style>