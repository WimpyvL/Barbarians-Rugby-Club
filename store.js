const store = createStore({
  state: {
    user: null,
    products: [  // add this
      { id: 1, name: 'Product 1', price: '$100' },
      { id: 2, name: 'Product 2', price: '$200' },
      // more products...
    ],
    cart: [],  // to keep track of products in cart
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    ADD_TO_CART(state, productId) {  // add this
      state.cart.push(productId);
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user);
    },
    addToCart({ commit }, productId) {  // add this
      commit('ADD_TO_CART', productId);
    },
  },
  getters: {
    user: (state) => state.user,
    cart: (state) => state.cart,  // to access cart in components
  },
});
