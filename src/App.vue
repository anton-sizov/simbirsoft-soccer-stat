<template>
  <v-app>
    <v-app-bar app color="green darken-4" dark>
      <div class="d-flex align-center">
        <router-link :to="{ name: 'home' }">Soccer Stats</router-link>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  a {
    color: white;
    text-decoration: none;
  }
}
</style>
