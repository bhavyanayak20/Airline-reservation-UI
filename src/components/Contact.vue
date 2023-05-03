<template>
  <v-app>
    <Dashboard />
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" dense>
        <v-col cols="12" sm="8" md="4" lg="4">
          <v-card elevation="5">
            <div class="text-center">
              <v-toolbar dark color="primary">
                <v-spacer />
                <v-toolbar-title><h3>CONTACT US</h3></v-toolbar-title>
                <v-spacer />
              </v-toolbar>
            </div>
            <v-card-text>
              <v-list two-line>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo"> mdi-phone </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>+91 2652896231</v-list-item-title>
                    <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-icon>
                    <v-icon>mdi-message-text</v-icon>
                  </v-list-item-icon>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo"> mdi-email </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>conarb@gmail.com</v-list-item-title>
                    <v-list-item-subtitle>Work</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-icon>
                    <v-icon>mdi-message-text</v-icon>
                  </v-list-item-icon>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo"> mdi-map-marker </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>Corporate Office</v-list-item-title>
                    <v-list-item-subtitle>India</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
   
   <script>
import Dashboard from "@/components/Dashboard.vue";
export default {
  name: "Contact",
  components: {
    Dashboard,
  },
};
</script>
   
   <style>
</style>