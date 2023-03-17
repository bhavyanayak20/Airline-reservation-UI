<template>
    <v-app>
        <v-main>
            <v-container>
            <v-row align="left" justify="left" dense>
              <v-col cols="12" sm="8">
            <v-card width="500" elevation="5">
              <v-toolbar dark color="primary">
                  <v-spacer />
                  <v-toolbar-title><h3>BOOK TICKET</h3></v-toolbar-title>
                  <v-spacer />
                </v-toolbar>
    <v-list-item>
    <v-list-item-content>
      <v-text-field outlined v-model="searchTerm" prepend-inner-icon="mdi-near-me" placeholder="Origin"  @input="searchTrain"></v-text-field>
    </v-list-item-content>
      <v-icon>mdi-swap-horizontal</v-icon>
    <v-list-item-content>
      <v-text-field outlined v-model="searchTerm" prepend-inner-icon="mdi-map-marker" placeholder="Destination" @input="searchTrain"></v-text-field>
    </v-list-item-content>
  </v-list-item>
<v-list-item> 
  <v-list-item-content>
  <v-container grid-list-md>
  <v-layout row wrap>
    <v-flex xs12 lg14>
      <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :nudge-right="40" :return-value.sync="date" lazy transition="scale-transition" offset-y full-width min-width="290px" >
        <template v-slot:activator="{ on }">
          <v-text-field v-model="date" label="Select Date" prepend-inner-icon="event" readonly v-on="on" outlined></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>
    </v-layout>
  </v-container>
</v-list-item-content>
<v-list-item-content>
  <v-select
  outlined
  label="Select Class"
  :items="['Economy', 'Business', 'Premium Economy']"
  variant="solo"
></v-select>
</v-list-item-content>
</v-list-item>  
<v-list-item>
  <div class="button-container-div">
<v-btn color="primary" rounded="pill">Search<v-icon color="white">mdi-magnify</v-icon></v-btn>
</div>
      </v-list-item>
      
            </v-card> 
          </v-col>
          <v-col cols="12" sm="4" style="margin-top: 150px;" >
            <h1 >AIRLINE RESERVATION</h1>
          </v-col>
        </v-row>

        </v-container>
         
        </v-main>
    </v-app>
</template>
  
  <script>
  export default {
      name: 'Home',
      data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false
    })
  }
  </script>
  
<style scoped>
main{
background-image:url('../assets/flight.webp') ;
background-size: cover;
}
.button-container-div {
            margin: auto;
        }

</style>