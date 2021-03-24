<template>
  <Modal v-if="isModalOpen">
    <div class="modal-slot">
      <button type="button" class="btn-close" @click="closeModal"></button>
      <Form @submit="submitForm" :validation-schema="schema">
        <div class="row">
          <header class="text-center">
            <h2>Please {{ authMethod }}</h2>
            <p @click="toggleAuth">
              (or Click to
              {{ authMethod !== "Register" ? "Register" : "Log In" }})
            </p>
          </header>
        </div>
        <div class="row mt-4">
          <div class="col-6">
            <Field
              name="email"
              type="email"
              class="form-control"
              placeholder="email"
              :rules="{
                email: true,
                required: true,
              }"
              v-model.trim="email"
              @focus="clrErrors"
            />
            <ErrorMessage name="email" class="text-danger" />
          </div>
          <div class="col-6">
            <Field
              name="password"
              type="password"
              v-model.trim="password"
              class="form-control"
              placeholder="password"
              :rules="{ min: 8, require: true }"
              @focus="clrErrors"
            />
            <ErrorMessage name="password" class="text-danger" />
          </div>
        </div>
        <div class="row text-center my-3">
          <span v-if="errorMsg" class="text-danger">{{ errorMsg }}</span>
        </div>

        <button type="submit" class="btn btn-primary mt-4">Submit</button>
      </Form>
    </div>
  </Modal>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { object, string } from "yup";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Register-SignIn-Form",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      authMethod: "Log In",
      email: "",
      password: "123456789",
      schema: object({
        email: string()
          .required("Email is Required")
          .email("Enter Valid Email."),
        password: string()
          .required("Password is Required")
          .min(8, "Min 8 char Max 16 char"),
      }),
    };
  },
  computed: {
    ...mapGetters({
      errorMsg: "getError",
      isModalOpen: "getIsModalOpen",
    }),

    // disabled() {
    //   // return this.email === "" || this.password === "" ? true : false;
    //   return useIsFormValid();
    // },
  },

  methods: {
    ...mapActions(["toggleModal", "createUser", "signIn", "clearErrors"]),

    toggleAuth() {
      if (this.authMethod === "Register") {
        this.authMethod = "Log In";
      } else {
        this.authMethod = "Register";
      }
    },
    closeModal() {
      
      this.toggleModal();
    },

    submitForm(values, { resetForm }) {
      if (this.authMethod === "Register") this.createUser(values);
      if (this.authMethod === "Log In") this.signIn(values);

      resetForm();
    },
    clrErrors() {
      this.clearErrors();
    },
  },
};
</script>
