<template>
  <v-card class="mx-auto" height="100%">
    <v-img
      :src="competition.emblemUrl || competition.area.ensignUrl"
      height="200"
      contain
    ></v-img>

    <v-card-title class="justify-center">{{ competition.name }}</v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "CompetitionCard",
  props: {
    competition: Object,
  },
};
</script>
