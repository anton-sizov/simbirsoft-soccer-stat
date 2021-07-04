<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4">
        <date-range-picker
          v-model="dates"
          :label="'Период поиска'"
        ></date-range-picker>
      </v-col>

      <v-col cols="12" sm="4">
        <v-select
          v-model="season"
          :items="seasons"
          label="Сезон"
          outlined
        ></v-select>
      </v-col>

      <v-col cols="12" sm="4">
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
import { getCompetitionInfo, getCompetitionMatches } from "@/api/api";

export default {
  name: "CompetitionCalendar",
  props: ["id"],
  components: {
    DateRangePicker,
    MatchCard,
  },

  data: function () {
    return {
      competitionId: 0,
      matches: [],
      dates: [],
      season: new Date().getFullYear().toString(),
      seasons: [],
    };
  },

  mounted: function () {
    this.restoreQueryParams();
    this.loadInitialData();
  },

  methods: {
    restoreQueryParams: function () {
      this.competitionId = this.$route.params.id;
      this.season =
        this.$route.query.season || new Date().getFullYear().toString();

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
          season: this.season,
        },
      });
    },

    loadInitialData: function () {
      getCompetitionInfo(this.competitionId)
        .then(
          (response) => {
            this.seasons = response.data.seasons.map((season) =>
              season.startDate.slice(0, 4)
            );
          },
          () => {
            this.seasons = [];
          }
        )
        .finally(() => {
          this.loadMatches();
        });
    },

    loadMatches: function () {
      this.matches = [];
      const params = {
        season: this.season,
        dateFrom: this.dates[0],
        dateTo: this.dates[1],
      };

      getCompetitionMatches(this.competitionId, params).then(
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
