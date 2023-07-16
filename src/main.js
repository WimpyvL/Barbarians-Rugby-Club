import { createApp } from 'vue';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';
import 'tailwindcss/tailwind.css';
import App from './App.vue';
import HomePage from './components/HomePage.vue';

const store = createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user);
    },
  },
  getters: {
    user: (state) => state.user,
  },
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    // other routes...
  ],
});

createApp(App).use(store).use(router).mount('#app');
