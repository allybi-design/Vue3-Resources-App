import {v4 as uuidv4 } from "uuid";

const coaches = {
  state: {
    coaches: [
      {
        id: "c1",
        firstName: "Maximilian",
        lastName: "Schwarzmüller",
        areas: ["frontend", "backend", "career"],
        avatar: "av1.jpg",
        description: `<p>Starting out at the age of 13 I never stopped learning new programming skills and languages. Early I started creating websites for friends and just for fun as well. Besides web development I also explored Python and other non-web-only languages. This passion has since lasted and lead to my decision of working as a freelance web developer and consultant. The success and fun I have in this job is immense and really keeps that passion burningly alive.<p>

          <p>Starting web development on the backend (PHP with Laravel, NodeJS, Python) I also became more and more of a frontend developer using modern frameworks like React, Angular or VueJS in a lot of projects. I love both worlds nowadays!</p>

          <p>As a self-taught developer I had the chance to broaden my horizon by studying Business Administration where I hold a Master's degree. That enabled me to work in a major strategy consultancy as well as a bank. While learning, that I enjoy development more than these fields, the time in this sector greatly improved my overall experience and skills.</p>

          <h5>Experience as Instructor</h5>

          <p>As a self-taught professional I really know the hard parts and the difficult topics when learning new or improving on already-known languages. This background and experience enables me to focus on the most relevant key concepts and topics. My track record of many 5-star rated courses, more than 1,000,000 students on Udemy as well as a successful YouTube channel is the best proof for that.</p>
          `,
        hourlyRate: 30,
      },
      {
        id: "c2",
        firstName: "Julie",
        lastName: "Jones",
        areas: ["frontend", "career"],
        avatar: "av2.png",
        description: `<p>Hi, I'm Julie and a senior developer within a big tech company, I can help you get your first job or progress in your current role.</p>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eos officia doloribus! Illo adipisci saepe asperiores magnam ipsa id earum odio, aperiam, nemo repellendus in deleniti possimus? Distinctio sit, totam fuga aperiam accusantium dicta atque pariatur iste, officiis quisquam deleniti debitis omnis cupiditate optio consectetur ex porro, maiores praesentium aspernatur sequi blanditiis corrupti aliquam. Harum facere quos commodi quas laudantium deserunt obcaecati aspernatur eveniet consequatur velit dicta, vel, quo error nihil sapiente officiis rerum pariatur iure ex accusamus delectus? Possimus suscipit iste numquam perferendis ullam, earum ratione alias, dolorem aperiam ducimus explicabo accusamus labore laudantium tempore, est cum voluptate.</p>
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dicta, et eveniet consequuntur perspiciatis fugiat voluptates non iusto commodi quia ipsum quidem veritatis porro ducimus at, provident dolorum. At ad laborum ut, cumque et libero ea quis aspernatur velit voluptas voluptatum non tempore inventore praesentium corporis eum cum deserunt voluptates itaque ullam architecto perferendis perspiciatis. Magni, temporibus ad. Eaque corporis incidunt voluptate dolorem pariatur ad illo consequuntur! Beatae rerum quam voluptate ea adipisci provident aut.</p>
          
          `,
        hourlyRate: 30,
      },
    ],
  },
  mutations: {
    ADD_COACH(state, payload) {
      state.coaches.push({
        id: uuidv4(),
        avatar: "av2.png",
        ...payload,
      });
    },
  },
  actions: {
    addCoach({ commit }, payload) {
      commit("ADD_COACH", payload);
    },
  },
  getters: {
    getCoaches: (state) => {
      return state.coaches;
    },
    getCoachById: (state) => (id) => {
      return state.coaches.find((coach) => coach.id === id);
    },
    hasCoaches: (state) => {
      return state.coaches && state.coaches.length > 0;
    },
  },
};

export default coaches;
