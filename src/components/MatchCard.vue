<template>
  <v-card class="mx-auto" height="100%">
    <v-card-text>
      <v-row>
        <v-col cols="10">
          <span class="text-subtitle-2 pb-3" v-if="match.competition">{{ match.competition?.name }} | </span>
          <span class="text-caption pb-3">{{ match.stage }}</span>
        </v-col>
        <v-col cols="2" class="text-right">
          <div class="text-caption pb-3">{{ match.utcDate | formatDate }}</div>
        </v-col>
      </v-row>

      <v-container>
        <v-row>
          <v-col cols="5" class="text-right text-h5">
            <router-link
              :to="{ name: 'team-calendar', params: { id: match.homeTeam.id } }"
              class="green--text text--darken-1"
              v-if="match.homeTeam.id"
            >
              {{ match.homeTeam.name }}
            </router-link>
            <span v-if="!match.homeTeam.id">?</span>
          </v-col>
          <v-col cols="auto" class="text-center text-h4">
            {{ match.score.fullTime.homeTeam || 0 }} :
            {{ match.score.fullTime.awayTeam || 0 }}
          </v-col>
          <v-col cols="5" class="text-h5">
            <router-link
              :to="{ name: 'team-calendar', params: { id: match.awayTeam.id } }"
              class="green--text text--darken-1"
              v-if="match.awayTeam.id"
            >
              {{ match.awayTeam.name }}
            </router-link>
            <span v-if="!match.awayTeam.id">?</span>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "MatchCard",
  props: {
    match: Object,
  },

  filters: {
    formatDate(date) {
      return date.slice(0, 10);
    },
  },
};
</script>
