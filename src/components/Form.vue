<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-3">
      <label class="form-label">Name:</label>
      <input type="text" class="form-control" />
    </div>
    <div class="mb-3">
      <label class="form-label">Your Age (Years):</label>
      <input type="number" class="form-control" />
    </div>
    <div class="mb-3">
      <select class="form-select">
        <option selected>Open this select menu</option>
        <option value="Google">Google</option>
        <option value="Vue3">Vue3</option>
        <option value="React">React</option>
      </select>
    </div>
    <div class="mb-3">
      <label class="form-check-label">What are you interested in</label>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" />
        News
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" checked />
        Tutorials
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" checked />
        Nothing
      </div>
    </div>
    <div class="mb-3">
      <label class="form-check-label" for="flexRadioDefault1">
        How do you learn?
      </label>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" />
        Video Courses
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" />
        Blog Posts
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          checked
        />
        Other
      </div>

      <div class="mt-3 col-12">
        <button class="btn btn-success" type="submit">Submit form</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      
    }
  },
  methods: {
    onSubmit() {
      console.log("Submitted Form")
    }
  }
};
</script>

<style lang="scss" scoped></style>
