<template>
  <v-app>
    <v-main>
      <nav>
        <v-toolbar app dark color="blue darken-4" elevation="15" rounded shaped>
          <v-list-item-title
            >AIRLINE RESERVATION
            <v-icon>mdi-airplane</v-icon></v-list-item-title
          >
          <v-spacer></v-spacer>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on">
                <v-icon left>expand_more</v-icon>
                <span>Info</span>
              </v-btn>
            </template>
            <v-list flat>
              <v-list-item
                v-for="item in items"
                :key="item.text"
                router
                :to="item.route"
                active-class="border"
              >
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </nav>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-spacer />
                <v-toolbar-title>
                  {{
                    isRegister ? stateObj.register.name : stateObj.login.name
                  }}</v-toolbar-title
                >
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <form
                  ref="form"
                  @submit.prevent="isRegister ? register() : login()"
                >
                  <v-text-field
                    label="Enter your email"
                    name="email"
                    prepend-inner-icon="mdi-email"
                    type="email"
                    class="rounded-0"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-if="isRegister"
                    v-model="username"
                    label="Enter your name"
                    name="username"
                    prepend-inner-icon="mdi-account"
                    type="text"
                    required
                    class="rounded-0"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    label="Enter Password"
                    :type="showPassword ? 'text' : 'password'"
                    prepend-inner-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                    required
                    class="rounded-0"
                  />
                  <v-text-field
                    v-if="isRegister"
                    v-model="confirmPassword"
                    label="Confirm Password"
                    name="confirmPassword"
                    prepend-inner-icon="mdi-lock-outline"
                    type="password"
                    required
                  ></v-text-field>
                  <div class="red--text">{{ errorMessage }}</div>
                  <v-btn
                    type="submit"
                    class="mt-4"
                    color="primary"
                    value="log in"
                    >{{
                      isRegister ? stateObj.register.name : stateObj.login.name
                    }}</v-btn
                  >
                  <div
                    class="grey--text mt-4"
                    v-on:click="isRegister = !isRegister"
                  >
                    {{ toggleMessage }}
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
  name: "Login",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      showPassword: false,
      confirmPassword: "",
      isRegister: false,
      errorMessage: "",
      stateObj: {
        register: {
          name: "REGISTER",
          message: "Aleady have an Acoount?",
        },
        login: {
          name: "LOGIN",
          message: "Dont have an Account?",
        },
      },
      items: [
        { text: "Flight Status", route: "" },
        { text: "Cargo service", route: "" },
        { text: "Conditions of carriage", route: "/condition" },
        { text: "Fees and charges", route: "/fees" },
        { text: "Destinations", route: "" },
        { text: "Additional Info", route: "" },
      ],
    };
  },
  methods: {
    login() {
      const { email } = this;
      this.$router.replace({ name: "Mybooking", params: { email: email } });
    },
    register() {
      if (this.password == this.confirmPassword) {
        this.isRegister = false;
        this.errorMessage = "";
        this.$refs.form.reset();
      } else {
        this.errorMessage = "password did not match";
      }
    },
  },
  computed: {
    toggleMessage: function () {
      return this.isRegister
        ? this.stateObj.register.message
        : this.stateObj.login.message;
    },
  },
};
</script>
  <style scoped>
main {
  background-image: url("../assets/flight.webp");
  background-size: cover;
}
</style>