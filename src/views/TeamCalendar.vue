<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <date-range-picker
          v-model="dates"
          :label="'Период поиска'"
        ></date-range-picker>
      </v-col>

      <v-col cols="12" sm="6">
        <v-btn
          class="green darken-1 white--text filter-button"
          @click="
            loadMatches();
            updateQueryParams();
          "
          block
          x-large
          outlined
        >
          Применить фильтр
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="match of matches" :key="match.id" cols="12" md="6">
        <MatchCard :match="match"></MatchCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DateRangePicker from "@/components/DateRangePicker.vue";
import MatchCard from "@/components/MatchCard.vue";
import { getTeamMatches } from "@/api/api";

export default {
  name: "TeamCalendar",
  props: ["id"],
  components: {
    DateRangePicker,
    MatchCard,
  },

  data: function () {
    return {
      teamId: 0,
      matches: [],
      dates: [],
    };
  },

  mounted: function () {
    this.restoreQueryParams();
    this.loadInitialData();
  },

  methods: {
    restoreQueryParams: function () {
      this.teamId = this.$route.params.id;

      if (this.$route.query.dateFrom && this.$route.query.dateTo) {
        this.dates = [this.$route.query.dateFrom, this.$route.query.dateTo];
      }
    },

    updateQueryParams: function () {
      this.$router.push({
        path: this.$router.path,
        query: {
          dateFrom: this.dates[0],
          dateTo: this.dates[1],
        },
      });
    },

    loadInitialData: function () {
      this.loadMatches();
    },

    loadMatches: function () {
      this.matches = [];
      const params = {
        dateFrom: this.dates[0],
        dateTo: this.dates[1],
      };

      getTeamMatches(this.teamId, params).then(
        (response) => {
          this.matches = response.data.matches;
          this.matches.sort(
            (a, b) => new Date(b.utcDate) - new Date(a.utcDate)
          );
        },
        () => {
          this.matches = [];
        }
      );
    },
  },
};
</script>
