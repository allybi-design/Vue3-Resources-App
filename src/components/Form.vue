<template>
  <form @submit.prevent="onSubmit">
    <Input
      label="Name"
      type="text"
      placeHolder="Please Enter a valid Name"
      v-model:value="form.name"
      :isFieldInValid="isFieldInValid"
      @hasBlured="validateValue"
      validationMessage=" Please enter a valid Name"
    />

    <Input
      label="Age (Years)"
      type="Number"
      placeHolder="Please Enter a valid Age"
      v-model:value="form.age"
      :isFieldInValid="isFieldInValid"
      @hasBlured="validateValue"
      validationMessage=" Please enter a valid Age"
    />

    <div class="mb-3">
      <label class="form-label"
        >How did you here of Us(Native select element):</label
      >
      <select
        class="form-select"
        v-model="form.selection"
        name="selectionBox"
        @change="onClicked(selectedValue)"
      >
        <option
          v-for="option in selectionOptions"
          :key="option"
          :name="option"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>

    <CustomSelect
      label="How did you find us (Custon Select Element):"
      v-model:selectedValue="selection"
      :options="['Video', 'Blog', 'Other']"
    />

    <RadioInput
      label="Rate your skill level:"
      v-model="form.rateing"
      :options="radioOptions"
    />

    <div class="mb-3">
      <label class="form-check-label">What are your interests:</label>
      <CheckBox
        v-for="option in checkOptions"
        :key="option"
        :fieldId="option"
        v-model:names="form.interests"
        :value="option"
      />
    </div>

    <hr />

    <div id="Confirm Button" class="mb-2">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          v-model="form.confirmed"
        />
        <label class="form-check-label">Click to confirm</label>
      </div>
    </div>

    <div id="SubMit Button" class="mt-3 col-12">
      <button class="btn btn-success" :disabled="submitDisabled" type="submit">
        Submit form
      </button>
    </div>
  </form>
</template>

<script>
import Input from "@/components/Input";

import CheckBox from "@/components/CheckBox";
import RadioInput from "@/components/RadioInput";
import CustomSelect from "@/components/CustomSelect.vue";

export default {
  name: "Form",
  components: {
    Input,
    RadioInput,
    CheckBox,
    CustomSelect,
  },
  data() {
    return {
      form: {
        name: "",
        age: "",
        selection: "",
        interests: [],
        confirmed: false,
        rateing: null,
      },
      selection: "a start value",
      selectionOptions: ["Video", "Blog", "Other"],
      radioOptions: ["Beginner", "Intermediate", "Expert"],
      checkOptions: ["React", "Vue.js", "AngularJS", "jQuery", "JavaScript"],
      checkedAnswers: [],
      isFieldInValid: false,
      submitDisabled: false,
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
      console.log(this.selection);
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
