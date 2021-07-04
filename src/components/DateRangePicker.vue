<template>
  <v-layout>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :return-value.sync="dateVal"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="dateRangeText"
          :label="label"
          prepend-icon="mdi-calendar"
          v-bind="attrs"
          v-on="on"
          readonly
          outlined
          clearable
        ></v-text-field>
      </template>
      <v-date-picker v-model="dateVal" no-title range scrollable locale="ru-ru">
        <v-spacer></v-spacer>
        <v-btn
          text
          color="primary"
          @click="
            menu = false;
            updateDate();
          "
        >
          Отмена
        </v-btn>
        <v-btn
          text
          color="primary"
          @click="
            $refs.menu.save(dateVal);
            updateDate();
          "
        >
          OK
        </v-btn>
      </v-date-picker>
    </v-menu>
  </v-layout>
</template>

<script>
export default {
  name: "DateRangePicker",
  props: ["value", "label"],

  data() {
    return {
      menu: false,
      dateVal: [],
    };
  },

  watch: {
    value: {
      deep: true,
      handler(newVal) {
        this.dateVal = newVal;
      },
    },
  },

  computed: {
    dateRangeText() {
      return this.dateVal.join(" ~ ");
    },
  },

  methods: {
    updateDate() {
      this.$emit("input", this.dateVal);
    },
  },
};
</script>
