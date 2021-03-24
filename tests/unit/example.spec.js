import { shallowMount } from "@vue/test-utils";
import BaseButton from "@/components/BaseButton.vue";

describe("BaseButton.vue", () => {
  //Testing here
  test("BaseButton will take a slot component", () => {
    // Arrasnge
    const wrapper = shallowMount(
      <BaseButton>
        <p>Hello</p>
      </BaseButton>
    );

    //Act
    // wrapper

    //Asserts
    expect(wrapper.html()).toContain("<p>");
  });
});
