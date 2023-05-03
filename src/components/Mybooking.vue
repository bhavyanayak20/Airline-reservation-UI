<template>
  <v-app>
    <Dashboard />
    <div>
      <h1>My Bookings</h1>
      <v-data-table :headers="headers" :items="bookings" />
    </div>
  </v-app>
</template>

<script>
import axios from "axios";
import Dashboard from "@/components/Dashboard.vue";
export default {
  name: "MyBookings",
  components: {
    Dashboard,
  },
  data: () => ({
    headers: [
      { text: "Flight Origin", value: "origin" },
      { text: "Flight Destination", value: "destination" },
      { text: "Flight date", value: "flightDate" },
      { text: "Price", value: "price" },
      { text: "Flight Number", value: "flight.flightNumber" },
      { text: "Passenger Name", value: "passenger.name" },
      { text: "Passenger Email", value: "passenger.email" },
    ],
    bookings: [],
  }),
  created() {
    // Retrieve bookings from localStorage or API
    const storedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    axios
      .get("http://localhost:8081/booking/list")
      .then((response) => {
        this.bookings = storedBookings.concat(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>