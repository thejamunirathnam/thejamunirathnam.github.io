<template>
<div>
      <footer id="footer">
    <div class="footer-top" style="padding:0">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6">
            <div class="footer-info">
              <h3>About Us</h3>
              <p>
            Promotion Pay$ was established in
            2003 with the objective of authorizing 
            people to buy and custom imprint on our wide 
            variety of merchandise. The promotional products 
            range from T-shirts and a diversity of other apparel 
            to office supplies. As a promotional company, we strive 
            to meet the customer’s needs and ensure their full satisfaction. 
            We make it our personal commitment to provide incomparable quality and pricing.
            <br><br>
                <strong>Phone:</strong> 9345362569<br>
                <strong>Email:</strong> thejasree1996@gmail.com<br>
              </p>
              <div class="social-links mt-3">
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <p>
            Promotion Pay$ was established in
            2003 with the objective of authorizing 
            people to buy and custom imprint on our wide 
            variety of merchandise. The promotional products 
            range from T-shirts and a diversity of other apparel 
            to office supplies. As a promotional company, we strive 
            to meet the customer’s needs and ensure their full satisfaction. 
            We make it our personal commitment to provide incomparable quality and pricing.
            <br><br>
                <strong>Phone:</strong> 9345362569<br>
                <strong>Email:</strong> thejasree1996@gmail.com<br>
              </p>
          </div>

          <div class="col-lg-4 col-md-6 footer-links">
            <h4>Privacy & Policy</h4>
           <p>
            At Promotion Pay$, the details of our service(s) widely are 
            revolved around trust and the confidentiality of our
            clients and those affiliated with Promotion Pay$.
            We consistently work to provide the highest 
            level of security involving projects supplied to us by you the client or affiliate. 
            

            <br><br>
                <strong>Phone:</strong> 9345362569<br>
                <strong>Email:</strong> thejasree1996@gmail.com<br>
              </p>
          </div>

        </div>
      </div>
    </div>

  </footer>
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
  
    }
};
</script>

