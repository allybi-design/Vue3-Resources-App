import BaseCard from "../components/BaseCard.vue";
import "bootstrap/dist/css/bootstrap.css";

export default {
  component: "BaseCard",
  title: "Components/BaseCard",
  argTypes: {
    bgColor: { control: "color" },
  },
};

const Template = (args) => ({
  components: { BaseCard },
  setup() {
    return { args };
  },
  template:
    '<BaseCard v-bind="args"><h1>A BaseCard that accepts an inner element(s)</h1></BaseCard>',
});

export const Default = Template.bind({});

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: true,
};

export const BgPrimary = Template.bind({});
BgPrimary.args = {
  bgColor: "primary",
  txtColor: "white",
};

export const BgSecondary = Template.bind({});
BgSecondary.args = {
  bgColor: "secondary",
  txtColor: "white",
};
export const BgDark = Template.bind({});
BgDark.args = {
  bgColor: "dark",
  txtColor: "white",
};

export const BgSuccess = Template.bind({});
BgSuccess.args = {
  bgColor: "success",
  txtColor: "white",
};

export const BgDanger = Template.bind({});
BgDanger.args = {
  bgColor: "danger",
  txtColor: "white",
};

export const BgWarning = Template.bind({});
BgWarning.args = {
  bgColor: "warning",
};

export const BgInfo = Template.bind({});
BgInfo.args = {
  bgColor: "info",
};
