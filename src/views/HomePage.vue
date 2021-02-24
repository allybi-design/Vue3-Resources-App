<template>
  <div>
    <NavBar />

    <BaseCard>
      <div class="center">
        <div class="block" :class="{ blockRotate: rotateBlock }">200x200</div>

        <div class="text-center my-4">
          <button
            class="btn rounded-pill btn-primary px-5"
            @click="animateBlock"
          >
            Animate Me
          </button>
        </div>
      </div>
    </BaseCard>

    <BaseCard>
      <div class="text-center my-4">
        <button class="btn rounded-pill btn-primary px-5" @click="toggleModal">
          Show Modal
        </button>
      </div>
    </BaseCard>

    <BaseCard>
      <button class="btn btn-primary" @click="toggleShow">Show</button>

      <!-- only set css -> false if NO css if ussed in the transition below-->
      <transition
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @enter-cancelled="enterCancelled"
        @leave-cancelled="leaveCancelled"
        name="fade"
      >
        <p v-if="show">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, consectetur.
        </p>
      </transition>
    </BaseCard>

    <BaseCard>
      <ListData />
    </BaseCard>

    <teleport to="body">
      <Modal :open="isModalVisible" @closeModal="toggleModal">
        <h1 class="text-center">Test Modal</h1>
      </Modal>
    </teleport>
  </div>
</template>

<script>
import BaseCard from "../components/BaseCard.vue";
import Modal from "../components/Modal";
import ListData from "../components/ListData";
import NavBar from "../components/NavBar.vue";

export default {
  name: "HomePage",
  components: { BaseCard, Modal, ListData, NavBar },
  data() {
    return {
      rotateBlock: false,
      isModalVisible: false,
      show: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    animateBlock() {
      console.log("rotate clkicked");
      this.rotateBlock = true;
    },
    toggleModal() {
      this.isModalVisible = !this.isModalVisible;
    },
    toggleShow() {
      this.show = !this.show;
    },
    beforeEnter(el) {
      console.log("BeforeEnter Hook");
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log("Enter Hook");
      let iterable = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = iterable * 0.01;
        iterable++;
        if (iterable > 100) {
          clearInterval(this.enterInterval);
          console.log("we're Done()");
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log("AfterEnter Hook");
      console.log(el);
    },
    beforeLeave(el) {
      console.log("BeforeLeave Hook");
      console.log(el);
    },
    leave(el, done) {
      console.log("Leave Hook");
      let iterable = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - iterable * 0.01;
        iterable++;
        if (iterable > 100) {
          clearInterval(this.leaveInterval);
          console.log("we're Done()");
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("AfterLeave Hook");
      el.style.opacity = 0;
    },
    enterCancelled(el) {
      clearInterval(this.enterInterval);
      el.style.opacity = 1;
    },
    leaveCancelled(el) {
      clearInterval(this.leaveInterval);
      el.style.opacity = 0;
    },
  },
};
</script>

<style lang="scss">
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.block {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.7);
  font-size: 2rem;
  transition: transform 1s linear;
}

.blockRotate {
  transform: rotate(360deg);
}
</style>
