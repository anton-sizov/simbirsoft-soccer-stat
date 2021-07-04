<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model.trim="competitionsFilter"
          label="Фильтр лиг"
          @input="updateQueryParams()"
          outlined
          clearable
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="competition of filteredCompetitions"
        :key="competition.id"
        cols="2"
        sm="3"
        xs="6"
      >
        <router-link
          :to="{ name: 'competition-teams', params: { id: competition.id } }"
        >
          <CompetitionCard :competition="competition"></CompetitionCard>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CompetitionCard from "@/components/CompetitionCard.vue";
import { getEuropeCompetitions } from "@/api/api";

export default {
  name: "Home",
  components: {
    CompetitionCard,
  },

  data: function () {
    return {
      competitionsFilter: "",
      competitions: [],
    };
  },

  computed: {
    filteredCompetitions: function () {
      return this.competitions.filter((competition) =>
        competition.name
          .toLowerCase()
          .includes(this.competitionsFilter.toLowerCase())
      );
    },
  },

  mounted: function () {
    this.restoreQueryParams();

    getEuropeCompetitions().then(
      (response) => {
        this.competitions = response.data.competitions;
      },
      () => {
        this.competitions = [];
      }
    );
  },

  methods: {
    restoreQueryParams: function () {
      this.competitionsFilter = this.$route.query.filter || "";
    },

    updateQueryParams: function () {
      this.$router.push({
        path: this.$router.path,
        query: { filter: this.competitionsFilter.toLowerCase() },
      });
    },
  },
};
</script>
