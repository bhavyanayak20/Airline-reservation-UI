<template>
  <v-app>
     <v-main>
        <v-container fluid fill-height>
           <v-layout align-center justify-center>
              <v-flex xs12 sm8 md4>
                 <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                      <v-spacer />
                       <v-toolbar-title>  {{isRegister ? stateObj.register.name : stateObj.login.name}}</v-toolbar-title>
                       <v-spacer />
                    </v-toolbar>
                    <v-card-text>
                    <form ref="form" @submit.prevent="isRegister ? register() : login()">
                          <v-text-field label="Enter your email" name="email" prepend-inner-icon="mdi-email" type="email" class="rounded-0" required></v-text-field>
                          <v-text-field v-if="isRegister" v-model="username" label="Enter your name" name="username" prepend-inner-icon="mdi-account" type="text" required class="rounded-0" ></v-text-field>
                          <v-text-field  v-model="password" label="Enter Password" :type="showPassword ? 'text' : 'password'" prepend-inner-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword" required class="rounded-0" />
                          <v-text-field v-if="isRegister" v-model="confirmPassword" label="Confirm Password" name="confirmPassword" prepend-inner-icon="mdi-lock-outline" type="password" required ></v-text-field>
                          <div class="red--text"> {{errorMessage}}</div>
                          <v-btn type="submit" class="mt-4" color="primary" value="log in">{{isRegister ? stateObj.register.name : stateObj.login.name}}</v-btn>
                          <div class="grey--text mt-4" v-on:click="isRegister = !isRegister;">
                             {{toggleMessage}} 
                              <a>Click here</a>
                          </div>
                     </form>
                    </v-card-text>
                 </v-card>
               
              </v-flex>
           </v-layout>
        </v-container>
     </v-main>
  </v-app>
</template>

<script>
export default {
 name: "App",
 data() {
   return {
     email: "",
     username: "",
     password: "",
     showPassword:false,
     confirmPassword: "",
     isRegister : false,
     errorMessage: "",
     stateObj: {
        register :{
           name: 'REGISTER',
           message: 'Aleady have an Acoount?'
        },
        login : {
           name: 'LOGIN',
           message: 'If you are new to this?'
        }
     }
   };
 },
 methods: {
   login() {
     const { email } = this;
     this.$router.replace({ name: "dashboard", params: { email: email } });
   },
   register() {
      if(this.password == this.confirmPassword){
         this.isRegister = false;
         this.errorMessage = "";
         this.$refs.form.reset();
      }
      else {
        this.errorMessage = "password did not match"
      }
   }
 },
     computed: {
      toggleMessage : function() { 
         return this.isRegister ? this.stateObj.register.message : this.stateObj.login.message }
   },
};
</script>
<style scoped>
main{
background-image:url('../assets/flight.webp') ;
background-size: cover;
}
</style>
