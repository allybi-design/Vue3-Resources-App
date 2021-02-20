import { createStore } from "vuex";

export default createStore({
  state: {
    users: [
      { id: "u1", name: "Max", role: "Engineer", deptId: 1 },
      { id: "u2", name: "Bob", role: "Designer", deptId: 2 },
      { id: "u3", name: "Sue", role: "Developer", deptId: 3 },
      { id: "u4", name: "Jon", role: "Engineer", deptId: 1 },
      { id: "u5", name: "Tim", role: "Developer", deptId: 3 },
      { id: "u6", name: "Ann", role: "Developer", deptId: 3 },
    ],
    teams: [
      { deptId: 1, dept: "Engineers", teamMembers: ["u1", "u4"] },
      { deptId: 2, dept: "Designers", teamMembers: ["u2"] },
      { deptId: 3, dept: "Developers", teamMembers: ["u3", "u5", "u6"] },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getUsers: (state) => {
      return state.users;
    },
    getTeams: (state) => {
      return state.teams;
    },
    getFilteredUsers: (state) => (deptId) => {
      const selectedMembers = [];

      const members = state.teams.find((team) => team.deptId === Number(deptId))
        .teamMembers;

      members.forEach((member) => {
        selectedMembers.push(state.users.find((user) => user.id === member));
      });

      return selectedMembers;
    },
    getDeptName: (state) => (deptId) => {
      return state.teams.find((team) => team.deptId === Number(deptId)).dept;
    },
  },
});
