<template>
<NavbarDash />
    <div>
        <section id="contact">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-md-8 mx-auto text-center">
                        <h6 class="text-primary">CONTACT</h6>
                        <h1>Get In Touch</h1>
                 </div>
                </div>

                <form action="https://formspree.io/f/xeqylvko" method="POST" class="row g-3 justify-content-center">

                    <div class="col-md-5">
                        <input type="text" name="fullName" class="form-control" placeholder="Full Name">
                    </div>
                    <div class="col-md-5">
                        <input type="text " name="email" class="form-control" placeholder="Enter E-mail">
                    </div>
                    <div class="col-md-10">
                        <input type="text" name="title" class="form-control" placeholder="Enter Subject">
                    </div>
                    <div class="col-md-10">
                        <textarea name="Message" id="" cols="30" rows="5" class="form-control"
                            placeholder="Enter Message">
                        </textarea>
                    </div>
                    <div class="col-md-10 d-grid">
                        <button class="btn btn-primary" type="submit">Contact</button>
                    </div>
                </form>

            </div>
        </section>
    </div>

</template>

<script>
import NavbarDash from '@/components/NavbarDash.vue';

export default {
    name: 'ContactVieew',
    components :{
        NavbarDash
    }
}

</script>

<style scoped>
section {
    padding-top: 120px;
    padding-bottom: 120px;
}
</style>


"first_name": "Mzwakhe",
            "last_name": "Louw",
            "userRole": "admin",
            "email": "mzwakheR@gmail.com",
            "address": "34 khaltsha street",
            "password": "