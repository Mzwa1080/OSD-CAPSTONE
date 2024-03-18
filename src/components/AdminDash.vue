<template>

    <nav class="navbar d-flex background-img  navbar-expand-lg ">
      <div class="container-fluid ms-4 me-4 justify-content-center">
          <a class="navbar-brand  " href="/">OSD</a>
    
        <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon "></span>
        </button>
        
        <div class="collapse justify-content-end navbar-collapse " id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/user" class="nav-link mt-2">Requested Services</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link mt-2" > Contacts Us</RouterLink>
            </li>  
    
            <li class="nav-item">
              <RouterLink to="/login" class="nav-link " > 
                <button class="btn btn-success"> Logout</button>
              </RouterLink>
            </li>
    
          </ul>
    
    
        </div>
    
    
      </div>
    </nav>
    
    
    
    
    </template>
    
    <script>
          import {useCookies} from 'vue3-cookies';
        export default {
         
          name : 'NavbarDashboardComp',
          
          computed : {
            user(){
              const {cookies} = useCookies();
              // console.log(cookies.keys('LegitUser'));
              // console.log(cookies.get('LegitUser'));
            
            let userId = cookies.get('LegitUser');
            // console.log(userId.result.user_id);
            return userId.result.user_id;
            },
          },
    
    
        }
    </script>
    
    <style scoped>
    
    nav {
      height: 70px;
        box-shadow: .2vw .2vw .4vw .2vw;
        background-position: sticky;
        top: 0;
    }
    </style>