<template>
  <Form @submit="submitForm" :validation-schema="schema">
    <div class="mb-3">
      <div class="row g-3">
        <div class="col-5">
          <Field
            type="text"
            name="firstname"
            class="form-control"
            placeholder="First Name"
            v-model.trim="firstName"
          />
          <ErrorMessage name="firstname" class="text-danger" />
        </div>
        <div class="col-5">
          <Field
            type="text"
            name="lastname"
            class="form-control"
            placeholder="Last Name"
            v-model.trim="lastName"
          />
          <ErrorMessage name="lastname" class="text-danger" />
        </div>
        <div class="col-2">
          <div class="input-group mb-3">
            <span class="input-group-text" id="currency">£</span>
            <Field
              type="number"
              name="rate"
              class="form-control"
              placeholder="Hourly Rate"
              step="5"
              v-model.number="rate"
            />
            <ErrorMessage name="rate" class="text-danger" />
          </div>
        </div>
      </div>
    </div>

    <div class="mb-3">
      <label for="description" class="form-label">About You</label>
      <Field
        as="textarea"
        type="text"
        name="description"
        class="form-control"
        rows="10"
        v-model="description"
      />
      <ErrorMessage name="description" class="text-danger" />
    </div>

    <label class="form-check-label">Areas of Expertise</label>

    <div class="form-check" >
      <input
        class="form-check-input"
        type="checkbox"
        value="frontend"
        v-model="areas"
      />
      <label class="form-check-label" for="areaFrontEnd">
        Front End
      </label>
    </div>

    <div class="form-check" >
      <input
        class="form-check-input"
        type="checkbox"
        value="backend"
        v-model="areas"
      />
      <label class="form-check-label" for="areaFrontEnd">
        Back End
      </label>
    </div>

    <div class="form-check" >
      <input
        class="form-check-input"
        type="checkbox"
        value="career"
        v-model="areas"
      />
      <label class="form-check-label" for="areaFrontEnd">
        Career advisor
      </label>
    </div>

    <div class="col-12 mt-4">
      <button type="submit" :disabled="disabled" class="btn btn-primary">
        Submit
      </button>
    </div>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { object, string, number } from "yup";

export default {
  name: "CoachForm",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  emit: "saveFormData",
  data() {
    return {
      firstName: "",
      lastName: "",
      description:
        "<p>Starting out at the age of 13 I never stopped learning new programming skills and languages. Early I started creating websites for friends and just for fun as well. Besides web development I also explored Python and other non-web-only languages. This passion has since lasted and lead to my decision of working as a freelance web developer and consultant. The success and fun I have in this job is immense and really keeps that passion burningly alive.<p><p>Starting web development on the backend (PHP with Laravel, NodeJS, Python) I also became more and more of a frontend developer using modern frameworks like React, Angular or VueJS in a lot of projects. I love both worlds nowadays!</p><p>As a self-taught developer I had the chance to broaden my horizon by studying Business Administration where I hold a Master's degree. That enabled me to work in a major strategy consultancy as well as a bank. While learning, that I enjoy development more than these fields, the time in this sector greatly improved my overall experience and skills.</p><h5>Experience as Instructor</h5><p>As a self-taught professional I really know the hard parts and the difficult topics when learning new or improving on already-known languages. This background and experience enables me to focus on the most relevant key concepts and topics. My track record of many 5-star rated courses, more than 1,000,000 students on Udemy as well as a successful YouTube channel is the best proof for that.</p>",
      rate: 20,
      areas: [],
      isFormValid: true,
      schema: object({
        firstname: string().required("Name is Required"),
        lastname: string().required("Surname is Required"),
        description: string().required("Please enter a little about yourself"),
        rate: number()
          .positive()
          .integer()
          .required("Rate is Required"),
      }),
    };
  },
  computed: {
    uid() {
      return this.$store.getters.getUserId;
    },
    disabled() {
      if (
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.rate &&
        this.description !== "" &&
        this.areas.length !== 0
      ) {
        return false;
      }
      return this.isFormValid;
    },
  },
  methods: {
    submitForm() {
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        description: this.description,
        hourlyRate: this.rate,
        areas: this.areas,
        uid: this.uid,
        avatar: "av2.png",
      };

      this.$emit("saveFormData", formData);
    },
  },
};
</script>


