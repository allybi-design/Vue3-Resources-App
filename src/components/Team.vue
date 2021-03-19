<template>
  <h3>{{ team.dept }}</h3>
  <h5>{{ team.teamMembers.length }} member</h5>
  <button
    type="button"
    class="btn"
    :class="roleClass"
    @click="onClick(team.deptId)"
  >
    View Members
  </button>
  
</template>

<script>
export default {
  name: "Team",
  props: ["team"],

  computed: {
    roleClass() {
      if (this.team.dept.includes("Engineer")) {
        return "btn-primary";
      }
      if (this.team.dept.includes("Designer")) {
        return "btn-success";
      }
      if (this.team.dept.includes("Developer")) {
        return "btn-danger";
      }
      return null;
    },
  },
  methods: {
    onClick(deptId) {
      this.$router.push(`/teams/${deptId}`);
    },
  },
};
</script>

