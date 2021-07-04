<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model.trim="teamsFilter"
          label="Фильтр команд"
          @input="updateQueryParams()"
          outlined
          clearable
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-select
          v-model="season"
          :items="seasons"
          @change="
            loadTeams();
            updateQueryParams();
          "
          label="Сезон"
          outlined
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <router-link
          :to="{ name: 'competition-calendar', params: { id: competitionId } }"
          class="green--text text--darken-1"
        >
          Календарь лиги
        </router-link>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="team of filteredTeams"
        :key="team.id"
        cols="2"
        sm="3"
        xs="6"
      >
        <router-link
          :to="{
            name: 'team-calendar',
            params: { id: team.id },
          }"
        >
          <TeamCard :team="team"></TeamCard>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TeamCard from "@/components/TeamCard.vue";
import { getCompetitionInfo, getCompetitionTeams } from "@/api/api";

export default {
  name: "CompetitionTeams",
  props: ["id"],
  components: {
    TeamCard,
  },

  data: function () {
    return {
      competitionId: 0,
      teamsFilter: "",
      teams: [],
      season: new Date().getFullYear().toString(),
      seasons: [],
    };
  },

  computed: {
    filteredTeams: function () {
      return this.teams.filter((team) =>
        team.name.toLowerCase().includes(this.teamsFilter.toLowerCase())
      );
    },
  },

  mounted: function () {
    this.restoreQueryParams();
    this.loadInitialData();
  },

  methods: {
    restoreQueryParams: function () {
      this.competitionId = this.$route.params.id;
      this.teamsFilter = this.$route.query.filter || "";
      this.season =
        this.$route.query.season || new Date().getFullYear().toString();
    },

    updateQueryParams: function () {
      this.$router.push({
        path: this.$router.path,
        query: {
          filter: this.teamsFilter.toLowerCase(),
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
          this.loadTeams();
        });
    },

    loadTeams: function () {
      this.teams = [];

      getCompetitionTeams(this.competitionId, { season: this.season }).then(
        (response) => {
          this.teams = response.data.teams;
          this.teams.sort((a, b) => (a.name > b.name ? 1 : -1));
        },
        () => {
          this.teams = [];
        }
      );
    },
  },
};
</script>
