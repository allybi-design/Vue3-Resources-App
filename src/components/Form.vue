<template>
  <form @submit.prevent="onSubmit">
    <Input
      label="Name"
      type="text"
      placeHolder="Please Enter a your Name"
      v-model:value="form.name"
      :isFieldInValid="isFieldInValid"
      @hasBlured="validateValue"
      validationMessage=" Please enter a valid Name"
    />

    <RadioInput
      label="Rate your skill level:"
      v-model="form.rateing"
      :options="radioOptions"
    />

    <SubmitButton label="Submit" />
  </form>
</template>

<script>
import Input from "@/components/Input";
import RadioInput from "@/components/RadioInput";
import SubmitButton from "@/components/Submit";

import { postData } from "@/Http/FetchApi";

export default {
  name: "Form",
  components: {
    Input,
    RadioInput,
    SubmitButton,
  },
  data() {
    return {
      form: {
        name: "",
        rateing: null,
      },
      radioOptions: ["Beginner", "Intermediate", "Expert"],
      isFieldInValid: false,
      submitDisabled: false,
    };
  },
  methods: {
    onSubmit() {
      fetch(
        "https://vue3-hhtp-request-default-rtdb.europe-west1.firebasedatabase.app/surveys.json",
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "no-cors", // no-cors, *cors, same-origin
          // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          // credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          // redirect: "follow", // manual, *follow, error
          // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(this.form), //
        }
      ).then(() => {
        console.log("yeppiiii");
      });
    },
    onSubmit2() {
      postData(
        "https://vue3-hhtp-request-default-rtdb.europe-west1.firebasedatabase.app/surveys.json",
        this.form
      ).then(() => {
        console.log("yeppiiii");
      });
    },
    validateValue() {
      if (this.form.name === "" || this.form.name === null) {
        this.isFieldInValid = true;
      } else {
        this.isFieldInValid = false;
      }
    },
    regesterUpdate() {
      console.log("regester - Update");
    },
    onClicked(value) {
      console.log(`Native Selection wasclicked with value -${value}`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
