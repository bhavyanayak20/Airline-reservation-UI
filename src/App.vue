<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name:'App',
 
  data: () => ({
    //
  }),
};
</script>

<style scoped>
#app {
  background-color:white;
  background-size: cover;
}

</style>
