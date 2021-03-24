<template>
  <Form @submit="submitForm" :validation-schema="schema">
    <div class="mb-3">
      <div class="col">
        <Field
          type="email"
          name="email"
          class="form-control"
          placeholder="Email"
          v-model.trim="email"
        />
        <ErrorMessage name="email" class="text-danger" />
      </div>
    </div>

    <div class="mb-3">
      <label for="description" class="form-label">Message to Coach</label>
      <Field
        as="textarea"
        type="text"
        name="message"
        class="form-control"
        rows="10"
        v-model="message"
      />
      <ErrorMessage name="message" class="text-danger" />
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
import { object, string } from "yup";

export default {
  name: "CoachContactForm",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  emit: "saveFormData",
  data() {
    return {
      email: "",
      message: "A message line to say Hi!",
      isFormValid: true,
      schema: object({
        email: string().email().required("Email is Required"),
        message: string().required("Please leave a note to the coach"),
      }),
    };
  },
  computed: {
    uid() {
      return this.$store.getters.getUserId;
    },
    disabled() {
      if (this.email !== "" && this.message !== "") {
        return false;
      }
      return this.isFormValid;
    },
  },
  methods: {
    submitForm() {
      const contactFormData = {
        email: this.email,
        message: this.message,
        uid: this.uid,
      };
      
      this.$emit("onCoachContact", contactFormData);
    },
  },
};
</script>
