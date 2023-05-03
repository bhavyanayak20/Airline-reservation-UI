<template>
  <v-app>
    <nav>
      <v-toolbar app dark color="blue darken-4" elevation="15" rounded shaped>
        <v-list-item-title
          >AIRLINE RESERVATION <v-icon>mdi-airplane</v-icon></v-list-item-title
        >
        <v-spacer></v-spacer>

        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
              <v-icon left>expand_more</v-icon>
              <span>Info</span>
            </v-btn>
          </template>
          <v-list text>
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

        <v-btn text router to="/login">
          <span>Log in</span>
          <v-icon right>mdi-login</v-icon>
        </v-btn>
      </v-toolbar>
    </nav>
    <v-main>
      <v-container>
        <v-row align="center" justify="center" dense>
          <v-col cols="12" sm="10">
            <v-card width="auto" elevation="5">
              <v-list-item>
                <v-list-item-content class="list-margin">
                  <v-autocomplete
                    v-model="origin"
                    :items="filteredOrigins"
                    label="Origin"
                    prepend-inner-icon="mdi-near-me"
                    placeholder="Enter origin"
                    outlined
                  ></v-autocomplete>
                </v-list-item-content>
                <v-icon>mdi-swap-horizontal</v-icon>
                <v-list-item-content class="list-margin">
                  <v-autocomplete
                    v-model="destination"
                    :items="filteredDestinations"
                    label="Destination"
                    prepend-inner-icon="mdi-map-marker"
                    placeholder="Enter destination"
                    outlined
                  ></v-autocomplete>
                </v-list-item-content>
                <v-list-item-content>
                  <v-container grid-list-md>
                    <v-layout row wrap>
                      <v-flex xs12 lg14 style="margin-top: 30px">
                        <v-menu
                          ref="menu"
                          v-model="menu"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          :return-value.sync="flightDate"
                          lazy
                          transition="scale-transition"
                          offset-y
                          full-width
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on }">
                            <v-text-field
                              v-model="flightDate"
                              label="Select Date"
                              prepend-inner-icon="event"
                              readonly
                              v-on="on"
                              outlined
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="flightDate"
                            no-title
                            scrollable
                            :min="new Date().toISOString().substr(0, 10)"
                            :max="
                              new Date(
                                new Date().setMonth(new Date().getMonth() + 6)
                              )
                                .toISOString()
                                .substr(0, 10)
                            "
                          >
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="menu = false"
                              >Cancel</v-btn
                            >
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.menu.save(flightDate)"
                              >OK</v-btn
                            >
                          </v-date-picker>
                        </v-menu>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-list-item-content>
                <div class="button-container-div">
                  <v-btn @click="search" x-large color="primary"
                    >Search<v-icon color="white">mdi-magnify</v-icon></v-btn
                  >
                </div>
              </v-list-item>
            </v-card>
            <br />
          </v-col>
        </v-row>

        <v-carousel
          :show-arrows="false"
          hide-delimiters
          height="500"
          delimiter-icon="mdi-minus"
          cycle
          :style="{ maxWidth: '980px' }"
          class="my-carousel"
        >
          <v-carousel-item src="@/assets/c2.jpg" cover></v-carousel-item>
          <v-carousel-item src="@/assets/c3.jpg" cover></v-carousel-item>
        </v-carousel>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import router from "@/router";
import { DataTable } from "vuetify/lib";
export default {
  name: "Searchflight",
  components: {
    DataTable,
  },

  data: () => ({
    origin: "",
    destination: "",
    flightDate: new Date().toISOString().substr(0, 10),
    items: [],
    menu: false,
    modal: false,
    menu2: false,
    filterRecord: [],
    lists: [
      { text: "Flight Status", route: "" },
      { text: "Cargo service", route: "" },
      { text: "Conditions of carriage", route: "/condition" },
      { text: "Fees and charges", route: "/fees" },
      { text: "Destinations", route: "" },
      { text: "Additional Info", route: "" },
    ],
    return: {
      origin: "",
      destination: "",
      flightDate: "",
      headers: [
        { text: "Flight Origin", value: "origin" },
        { text: "Flight Destination", value: "destination" },
        { text: "Flight date", value: "flightDate" },
        { text: "Price", value: "price" },
        { text: " ", value: "actions", sortable: false },
      ],
      results: [], //filterd data
    },
  }),
  computed: {
    filteredOrigins() {
      return this.items
        .filter((item) =>
          item.origin.toLowerCase().startsWith(this.origin.toLowerCase())
        )
        .map((item) => item.origin)
        .filter((value, index, self) => self.indexOf(value) === index);
    },
    filteredDestinations() {
      return this.items
        .filter((item) =>
          item.destination
            .toLowerCase()
            .startsWith(this.destination.toLowerCase())
        )
        .map((item) => item.destination)
        .filter((value, index, self) => self.indexOf(value) === index);
    },
  },
  created() {
    axios
      .get("http://localhost:8081/route/list")
      .then((response) => {
        this.items = response.data;
        console.log("onload", this.items);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  methods: {
    search() {
      const filteredData = this.items.filter((flight) => {
        return (
          flight.origin === this.origin &&
          flight.destination === this.destination &&
          flight.flightDate === this.flightDate
        );
      });
      router.push({
        name: "listflight",
        query: { results: JSON.stringify(filteredData) },
      });
    },
  },
};
</script>



<style scoped>
.button-container-div {
  margin: auto;
}

.list-margin {
  margin-top: 28px;
}
.my-carousel {
  margin-left: auto;
  margin-right: auto;
}

.v-autocomplete__content {
  max-height: 200px; /* Set the maximum height of the suggestions list */
  overflow-y: auto;
}

#app {
  background-image: url("@/assets/bg.jpg");
  background-size: cover;
}
</style>