<template>
  <v-app>
    <Dashboard />
    <v-container>
      <h1>Condition of carriage</h1>
      <v-img
        src="@/assets/condition.jpg"
        alt="Image description"
        height="200"
        width="auto"
      ></v-img>
    </v-container>
  </v-app>
</template>
<script>
import Dashboard from "@/components/Dashboard.vue";
export default {
  name: "Destination",
  components: {
    Dashboard,
  },
};
</script>

<style>
</style>