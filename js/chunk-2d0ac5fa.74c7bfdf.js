(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ac5fa"],{"18eb":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Фильтр команд",outlined:"",clearable:""},on:{input:function(e){return t.updateQueryParams()}},model:{value:t.teamsFilter,callback:function(e){t.teamsFilter="string"===typeof e?e.trim():e},expression:"teamsFilter"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-select",{attrs:{items:t.seasons,label:"Сезон",outlined:""},on:{change:function(e){t.loadTeams(),t.updateQueryParams()}},model:{value:t.season,callback:function(e){t.season=e},expression:"season"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("router-link",{staticClass:"green--text text--darken-1",attrs:{to:{name:"competition-calendar",params:{id:t.competitionId}}}},[t._v(" Календарь лиги ")])],1)],1),a("v-row",t._l(t.filteredTeams,(function(t){return a("v-col",{key:t.id,attrs:{cols:"2",sm:"3",xs:"6"}},[a("router-link",{attrs:{to:{name:"team-calendar",params:{id:t.id}}}},[a("TeamCard",{attrs:{team:t}})],1)],1)})),1)],1)},n=[],r=(a("d3b7"),a("25f0"),a("4de4"),a("caad"),a("2532"),a("b0c0"),a("d81d"),a("fb6a"),a("4e82"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto",attrs:{height:"100%"}},[a("v-img",{attrs:{src:t.team.crestUrl,height:"200",contain:""}}),a("v-card-title",{staticClass:"justify-center green--text text--darken-2"},[t._v(" "+t._s(t.team.name)+" ")])],1)}),o=[],i={name:"TeamsCard",props:{team:Object}},l=i,c=a("2877"),u=a("6544"),m=a.n(u),d=a("b0af"),f=a("99d9"),h=a("adda"),p=Object(c["a"])(l,r,o,!1,null,null,null),v=p.exports;m()(p,{VCard:d["a"],VCardTitle:f["b"],VImg:h["a"]});var b=a("4ec3"),w={name:"CompetitionTeams",props:["id"],components:{TeamCard:v},data:function(){return{competitionId:0,teamsFilter:"",teams:[],season:(new Date).getFullYear().toString(),seasons:[]}},computed:{filteredTeams:function(){var t=this;return this.teams.filter((function(e){return e.name.toLowerCase().includes(t.teamsFilter.toLowerCase())}))}},mounted:function(){this.restoreQueryParams(),this.loadInitialData()},methods:{restoreQueryParams:function(){this.competitionId=this.$route.params.id,this.teamsFilter=this.$route.query.filter||"",this.season=this.$route.query.season||(new Date).getFullYear().toString()},updateQueryParams:function(){this.$router.push({path:this.$router.path,query:{filter:this.teamsFilter.toLowerCase(),season:this.season}})},loadInitialData:function(){var t=this;Object(b["a"])(this.competitionId).then((function(e){t.seasons=e.data.seasons.map((function(t){return t.startDate.slice(0,4)}))}),(function(){t.seasons=[]})).finally((function(){t.loadTeams()}))},loadTeams:function(){var t=this;this.teams=[],Object(b["c"])(this.competitionId,{season:this.season}).then((function(e){t.teams=e.data.teams,t.teams.sort((function(t,e){return t.name>e.name?1:-1}))}),(function(){t.teams=[]}))}}},C=w,g=a("62ad"),x=a("a523"),y=a("0fd9"),T=a("b974"),k=a("8654"),F=Object(c["a"])(C,s,n,!1,null,null,null);e["default"]=F.exports;m()(F,{VCol:g["a"],VContainer:x["a"],VRow:y["a"],VSelect:T["a"],VTextField:k["a"]})}}]);
//# sourceMappingURL=chunk-2d0ac5fa.74c7bfdf.js.map