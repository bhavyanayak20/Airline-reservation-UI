<template>
  <nav>
    <v-toolbar app dark color="blue darken-4" elevation="15" rounded shaped>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-list-item-title
        >AIRLINE RESERVATION <v-icon>mdi-airplane</v-icon></v-list-item-title
      >
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon left>expand_more</v-icon>
            <span>Book</span>
          </v-btn>
        </template>
        <v-list flat>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
            active-class="border"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon left>expand_more</v-icon>
            <span>Manage</span>
          </v-btn>
        </template>
        <v-list flat>
          <v-list-item
            v-for="list in lists"
            :key="list.text"
            router
            :to="list.route"
            active-class="border"
          >
            <v-list-item-title>{{ list.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

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

      <v-btn text router to="/">
        <span>Log out</span>
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" dark app class="blue darken-4">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100" class="ml-4">
            <img src="@/assets/user.png" alt="" />
          </v-avatar>
          <p class="white--text subheading mt-1 text-center">welcome</p>
        </v-flex>
        <v-flex class="mt-4 mb-4">
          <Popup />
        </v-flex>
      </v-layout>
      <v-list flat>
        <v-list-item router to="/listflight">
          <v-list-item-action>
            <v-icon class="mdi-rotate-45">mdi-airplane</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Book a Flight</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router to="/book">
          <v-list-item-action>
            <v-icon>mdi-timetable </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Flight Status</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router to="/mybooking">
          <v-list-item-action>
            <v-icon>mdi-ticket</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>View Bookings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router to="/contact">
          <v-list-item-action>
            <v-icon>mdi-message</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact us</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <slot></slot>
  </nav>
</template>
  <script>
import Listflight from "@/components/Listflight.vue";
export default {
  name: "Dashboard",
  components: {
    Listflight,
  },
  data: () => ({
    drawer: true,
    links: [
      { text: "Flights", route: "/listflight" },
      { text: "Group Booking", route: "" },
    ],
    lists: [
      { text: "Edit Booking", route: "" },
      { text: "Change Flight", route: "" },
    ],
    items: [
      { text: "Flight Status", route: "" },
      { text: "Cargo service", route: "" },
      { text: "Conditions of carriage", route: "/condition" },
      { text: "Fees and charges", route: "/fees" },
      { text: "Destinations", route: "" },
      { text: "Additional Info", route: "" },
    ],
  }),
  methods: {
    Listflight() {
      this.$router.replace({ name: "Listflight" });
    },
  },
};
</script>
  
  <style scoped>
.border {
  border-left: 4px solid black;
}
.myDiv {
  width: 100px;
}
.myDiv1 {
  width: 150px;
}
.border {
  border-left: 4px solid #0ba518;
}
</style>