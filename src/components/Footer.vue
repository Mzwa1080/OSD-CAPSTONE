<template>
        <footer>
            <div class="footer-top" style="padding-top:40px; background-color: var(--dark);">
                <div class="container">
                    <div class="row gy-4">
                        <div class="col-lg-4">
                            <img class="logo" src="#" alt="">
                        </div>
                        <div class="col-lg-2 text-black">
                            <h5>Brand</h5> <!--Make Bold-->
                            <ul class="list-unstyled">
                                <li><a href="/about">About</a></li>
                                <li><a href="/dashboard">Services</a></li>
                                <li><a href="/login">Login</a></li>
                                <li><a href="#">Team</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 text-black">
                            <h5>More</h5> <!--Make Bold-->
                            <ul class="list-unstyled">
                                <li><a href="#">FAQ's</a></li>
                                <li><a href="#">Privacy & Policy</a></li>
                                <li><a href="#">Warranty</a></li>
                                <li><a href="#">Shipment</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 text-black">
                            <h5>Contact</h5> <!--Make Bold-->
                            <ul class="list-unstyled">
                                <li>Address: 5 Pine Road, Bongweni, Khayelitsha, 7784</li>
                                <li>Email: info@osd-connect.co.za</li>
                                <li>Phone: +27 79 440 8723</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="footer-bottom py-3">
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-6 justify-content-center">
                            <p class="mb-0">© {{currentDate}} copyright all right reserved | One Stop Dot Connect (PTY)</p>
                        </div>
                        <div class="col-md-6">
                            <div class="social-icons">
                                <a href="#"><i class='bx bxl-youtube'></i></a>
                                <a href="#"><i class='bx bxl-facebook'></i></a>
                                <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                                <a href="#"><i class='bx bxl-whatsapp'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

</template>

<script>

export default{
    name : 'FooterComp',

computed:{
    currentDate (){
        return new Date().getFullYear();
    }
}
}

</script>

<style scoped>


:root {
    --primary: #1e7ff7cb;
    --dark: #21252f;
    --body: #21252f;
    --white: #ffffff;
    --box-shadow: 0 2px 6px rgba(0,0,0,0.3);
}

footer{
    background-color: lightgrey;
}

</style>