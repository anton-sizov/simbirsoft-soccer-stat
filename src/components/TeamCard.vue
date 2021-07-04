<template>
  <v-card class="mx-auto" height="100%">
    <v-img :src="team.crestUrl" height="200" contain></v-img>

    <v-card-title class="justify-center green--text text--darken-2">
      {{ team.name }}
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "TeamsCard",
  props: {
    team: Object,
  },
};
</script>
