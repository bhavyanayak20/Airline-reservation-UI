<template>
  <v-app>
    <Dashboard />
    <v-data-table :headers="headers" :items="items">
      <template v-slot:[`item.actions`]="{ item }">
        <v-btn
          small
          class="mr-2"
          color="primary"
          v-on:click="addtocart(item.id)"
        >
          Book
        </v-btn>
        <v-snackbar v-model="deleteSuccess" :timeout="3000" top>
          Booking successfull.
        </v-snackbar>
      </template>
    </v-data-table>
  </v-app>
</template>

<script>
import axios from "axios";
import Dashboard from "@/components/Dashboard.vue";

export default {
  name: "listflight",
  components: {
    Dashboard,
  },
  data: () => ({
    headers: [
      { text: "Departs", value: "origin" },
      { text: "Arrives", value: "destination" },
      { text: "Date of Journey", value: "flightDate" },
      { text: "Departure time", value: "flightTime" },
      { text: "Price", value: "price" },
      //  {text : 'Flight Number', value: 'flight.flightNumber'},
      { text: " ", value: "actions", sortable: false },
    ],
    items: [],
  }),
  created() {
    const results = this.$route.query.results;
    if (results) {
      this.items = JSON.parse(results);
    } else {
      axios
        .get("http://localhost:8081/route/list")
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  },
  methods: {
    addtocart(id) {
      // Redirect to passenger info page with selected flight ID as a parameter
      this.$router.push({ name: "PassengerInfo", params: { flightId: id } });

      // Get selected flight
      const selectedFlight = this.items.find((item) => item.id === id);
      console.log("selected flight",selectedFlight );
    },
  },
};
</script>
