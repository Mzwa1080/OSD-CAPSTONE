<template>

<NavbarDash />

        <div class="hero  vh-100 d-flex align-items-center" id="home">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 mx-auto text-center">
                        <h1 class="display-4 text-white">Welcome to One Stop Dot Connect</h1>
                        <p class="text-white my-3">One Stop Dot Connect is a registered company that consists of individuals 
                            who are innovative and planning to provide a One (<b>STOP</b>) Solution and 
                            Connect many Service Providers as possible around the community with our customers through our digital solution.</p>
                        <RouterLink to="/contact"  class="btn btn-outline-light">Contact Us</RouterLink>
                    </div>
                </div>
            </div>
        </div>

    



</template>

<script>
import NavbarDash from '@/components/NavbarDash.vue';

export default{
    name : 'HomeVieww',
    components : {
        NavbarDash
    }
}

</script>


<style scoped>
.hero{
    background-image: url('https://i.ibb.co/GWS1Ld4/Whats-App-Image-2024-03-12-at-07-45-58.jpg');
    background-repeat: no-repeat; 
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    z-index: 2;
}
.hero::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(21, 20, 51, 0.8);
    z-index: -1;
}

</style>
import NavbarDash from '@/components/NavbarDash.vue';
