import axios from "axios";

export const getCompetitions = (params) =>
  axios.get("competitions/", { params });

export const getEuropeCompetitions = () =>
  getCompetitions({
    areas: 2077,
    plan: "TIER_ONE",
  });

export const getCompetitionInfo = (id, params) =>
  axios.get(`competitions/${id}`, { params });

export const getCompetitionTeams = (id, params) =>
  axios.get(`competitions/${id}/teams`, { params });

export const getCompetitionMatches = (id, params) =>
  axios.get(`competitions/${id}/matches`, { params });

export const getTeamInfo = (id, params) => axios.get(`teams/${id}`, { params });

export const getTeamMatches = (id, params) =>
  axios.get(`teams/${id}/matches/`, { params });
