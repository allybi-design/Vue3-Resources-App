<template>
  <BaseCard shadow>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <div class="row g-3">
          <div class="col-5">
            <input
              type="text"
              class="form-control"
              placeholder="First name"
              v-model.trim="firstName"
              id="firstName"
            />
          </div>
          <div class="col-5">
            <input
              type="text"
              class="form-control"
              placeholder="Last name"
              v-model.trim="lastName"
              id="lastName"
            />
          </div>
          <div class="col-2">
            <div class="input-group mb-3">
              <span class="input-group-text" id="currency">£</span>
              <input
                type="number"
                class="form-control"
                placeholder="Hourly Rate"
                step="5"
                v-model.number="rate"
                id="hourlyRate"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="mb-3">
        <label for="description" class="form-label">About You</label>
        <textarea
          class="form-control"
          id="description"
          rows="10"
          v-model="description"
        />
      </div>

      <label class="form-check-label" for="flexCheckDefault"
        >Areas of Expertise</label
      >
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="frontend"
          v-model="areas"
          id="areaFrontEnd"
        />
        <label class="form-check-label" for="areaFrontEnd">
          Front-End
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="backend"
          v-model="areas"
          id="areaBackEnd"
        />
        <label class="form-check-label" for="areaBackEnd">
          Back-End
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="career"
          v-model="areas"
          id="areaCareer"
        />
        <label class="form-check-label" for="areaCareer">
          Career Advisor
        </label>
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </BaseCard>
</template>

<script>
export default {
  name: "CoachForm",
  emit: "saveFormData",
  data() {
    return {
      firstName: "",
      lastName: "",
      description:
        "<p>Starting out at the age of 13 I never stopped learning new programming skills and languages. Early I started creating websites for friends and just for fun as well. Besides web development I also explored Python and other non-web-only languages. This passion has since lasted and lead to my decision of working as a freelance web developer and consultant. The success and fun I have in this job is immense and really keeps that passion burningly alive.<p><p>Starting web development on the backend (PHP with Laravel, NodeJS, Python) I also became more and more of a frontend developer using modern frameworks like React, Angular or VueJS in a lot of projects. I love both worlds nowadays!</p><p>As a self-taught developer I had the chance to broaden my horizon by studying Business Administration where I hold a Master's degree. That enabled me to work in a major strategy consultancy as well as a bank. While learning, that I enjoy development more than these fields, the time in this sector greatly improved my overall experience and skills.</p><h5>Experience as Instructor</h5><p>As a self-taught professional I really know the hard parts and the difficult topics when learning new or improving on already-known languages. This background and experience enables me to focus on the most relevant key concepts and topics. My track record of many 5-star rated courses, more than 1,000,000 students on Udemy as well as a successful YouTube channel is the best proof for that.</p>",
      rate: 20,
      areas: [],
    };
  },
  methods: {
    submitForm() {
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        description: this.description,
        hourlyRate: this.rate,
        areas: this.areas,
      };

      // console.log(formData)
      this.$emit("saveFormData", formData);
    },
  },
};
</script>

<style lang="scss" scoped></style>
