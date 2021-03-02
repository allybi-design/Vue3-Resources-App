const auth = {
  state: {
    products: [
      {
        id: "p1",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg",
        title: "Book Collection",
        description:
          "A collection of must-read books. All-time classics included!",
        price: 100,
      },
      {
        id: "p2",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg",
        title: "Mountain Tent",
        description: "A tent for the ambitious outdoor tourist.",
        price: 50,
      },
      {
        id: "p3",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
        title: "Food Box",
        description:
          "May be partially expired when it arrives but at least it is cheap!",
        price: 25,
      },
    ],
  },
  mutations: {
    // SET_AUTH(state, payload) {
    //   state.isAuth = payload.auth;
    // },
  },
  actions: {
   
    // signIn({ commit }) {
      //   commit("SET_AUTH", { auth: true });
      // },
      // signOut({ commit }) {
        //   commit("SET_AUTH", { auth: false });
      // },
  },

  getters: {
    getProducts(state) {
      return state.products;
    },
  },
};

export default auth;