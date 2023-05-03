<template>
  <v-app>
    <Dashboard />
    <v-container class="my-container">
      <v-form v-form ref="form" @submit.prevent="addride()">
        <v-card v-for="(passenger, index) in passengers" :key="index">
          <v-card-title>Passenger details</v-card-title>
          <v-card-text>
            <v-text-field
              v-if="addride"
              label="Name*"
              v-model="passenger.name"
              outlined
              required
            ></v-text-field>
            <v-row>
              <v-col cols="6">
                <div>Select Gender</div>
                <v-radio-group v-model="passenger.gender" row outlined required>
                  <v-radio label="Male" value="Male"></v-radio>
                  <v-radio label="Female" value="Female"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="6">
                <!-- Your second option here -->
                <v-text-field
                  v-model="passenger.age"
                  label="Age*"
                  outlined
                  type="number"
                  min="0"
                  max="100"
                  step="1"
                  maxlength="3"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-text-field
              v-model="passenger.email"
              label="Email - ID*"
              outlined
              :rules="emailRules"
              required
            ></v-text-field>
            <v-text-field
              v-model="passenger.phone"
              label="Phone*"
              outlined
              maxlength="10"
              :rules="[numberRule]"
              required
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="red" @click="addPassenger">Add More Passenger</v-btn>
            <v-btn type="submit" class="primary" :disabled="!isValidForm"
              >submit</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-form>
    </v-container>
  </v-app>
</template>
    <script>
import axios from "axios";
import Dashboard from "@/components/Dashboard.vue";
export default{
  components: {
    Dashboard,
  },
  name: "PassengerInfo",
  props: {
    selectedFlight: Object
  },
  data() {
    return {
      passengers: [
        {
          age: "",
          email: "",
          gender: "",
          name: "",
          phone: "",
        },
      ],
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+/.test(v) || "Email must be valid",
      ],
    };
  },

  methods: {
    addPassenger() {
      this.passengers.push({
        age: "",
        email: "",
        gender: "",
        name: "",
        phone: "",
      });
    },
    async addride() {
  try {
    const responseData = [];
    for (let i = 0; i < this.passengers.length; i++) {
      const passenger = this.passengers[i];
      const response = await axios.post("http://localhost:8081/passenger/add", {
        age: passenger.age,
        email: passenger.email,
        gender: passenger.gender,
        name: passenger.name,
        phone: passenger.phone,
      });
      responseData.push(response.data);
    }
    console.log("passenger details",responseData); // do something with the array of response data 
    this.$router.push({
      name: "Mybooking",
      props: {
        flightInfo: this.flightInfo,
        passengerInfo: responseData
      }
    });
      } catch (error) {
        console.error("Error while saving passenger data:", error);
      }
    },


  },
  computed: {
    isValidForm() {
      return this.passengers.every(
        (p) => p.name && p.gender && p.age && p.email && p.phone
      );
    },
    numberRule() {
      return (value) => {
        if (!value) {
          return "Number is required";
        }
        if (!/^\d{10}$/.test(value)) {
          return "Number must be 10 digits";
        }
        return true;
      };
    },
    flightInfo() {
      return this.selectedFlight;
    }
  },
};
</script>
 <style scoped>
.my-container {
  padding: 8px; /* adjust the padding as needed */
  margin: 0 auto; /* centers the container */
  max-width: 600px; /* set a max-width to prevent the container from expanding too much */
}
</style>