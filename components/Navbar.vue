<template>
  <nav>
    <v-toolbar app dark color="blue darken-4" elevation="15" rounded shaped>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="myDiv">
      <v-list-item  router to="/home" >
        <v-icon>mdi-home </v-icon>
        <v-list-item-title >Home</v-list-item-title>  
      </v-list-item ></div>
      <div class="myDiv">
      <v-list-item  router to="/book" >
        <v-icon>mdi-airplane </v-icon>
        <v-list-item-title >book</v-list-item-title>    
      </v-list-item> </div>
      <div class="myDiv1">
      <v-list-item router to="/mybooking">
        <v-icon>mdi-ticket </v-icon>
        <v-list-item-title >My Booking</v-list-item-title>
      </v-list-item> </div>
   
    
          <v-spacer></v-spacer>

      <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          v-on="on"
        >
          <v-icon left>expand_more</v-icon>
            <span>Menu</span>
        </v-btn>
      </template>
    </v-menu>


           <v-btn text router to="/">
               <span>LogOut</span>
               <v-icon right >exit_to_app</v-icon>
            </v-btn>
      </v-toolbar>

      <v-navigation-drawer  v-model="drawer" dark app class="blue darken-4">
          <v-layout column align-center>
               <v-flex class="mt-5"> 
                    <v-avatar size="100">
                            <img src="@/assets/user.png" alt="">
                    </v-avatar>
                    <p class="white--text subheading mt-1 text-center">Username</p>
               </v-flex>
               <v-flex class="mt-4 mb-4">
                <Popup />
               </v-flex>
          </v-layout>
          <v-list flat>
            <v-list-item  router to="/home" >
              <v-list-item-action>
              <v-icon >mdi-home </v-icon>
            </v-list-item-action>
            <v-list-item-content >
                <v-list-item-title >Home</v-list-item-title>
              </v-list-item-content>  
                </v-list-item>

                <v-list-item  router to="/book" >
                  <v-list-item-action>
                  <v-icon>mdi-airplane </v-icon>
                </v-list-item-action>
                <v-list-item-content >
                <v-list-item-title >Book</v-list-item-title>
              </v-list-item-content>    
                </v-list-item>

                <v-list-item router to="/mybooking">
                  <v-list-item-action>
                  <v-icon>mdi-ticket </v-icon>
                </v-list-item-action>
                <v-list-item-content >
                <v-list-item-title >My Booking</v-list-item-title>
              </v-list-item-content>
                </v-list-item>
                
                <v-list-item router to="">
                  <v-list-item-action>
                  <v-icon>mdi-alert-circle-outline </v-icon>
                </v-list-item-action>
                  <v-list-item-content >
                <v-list-item-title >About</v-list-item-title>
              </v-list-item-content>
                </v-list-item>

                <v-list-item router to="/contact">
                  <v-list-item-action>
                    <v-icon>mdi-message</v-icon>
                </v-list-item-action>
                  <v-list-item-content >
                <v-list-item-title >Contact us</v-list-item-title>
              </v-list-item-content>
                </v-list-item>
          </v-list>
      </v-navigation-drawer>

  </nav>
</template>
<script>
export default {
  name: 'Navbar',
  data: () => ({
    drawer: true,
  })
}
</script>

<style scoped>
.border{
  border-left: 4px solid black;
}
.myDiv{
  width: 100px;
}
.myDiv1{
  width: 150px;
}
</style>