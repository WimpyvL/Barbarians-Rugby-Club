<template>
  <!-- Full Width Container -->
  <div class="w-full">

    <!-- Header -->
    <nav class="flex items-center justify-between py-6 px-4 sm:px-8 bg-white shadow-md">
      <h1 class="text-3xl font-bold text-gray-900">Barbarians Rugby Club</h1>
      <div class="flex items-center">
        <a href="#" class="text-gray-600 mx-2 hover:underline">About</a>
        <a href="#" class="text-gray-600 mx-2 hover:underline">Listings</a>
        <a href="#" class="text-gray-600 mx-2 hover:underline">Contact</a>
        <button class="text-blue-500 mx-2" @click="showLoginForm = !showLoginForm">Login</button>
        <button class="text-blue-500 mx-2" @click="showRegisterForm = !showRegisterForm">Register</button>
      </div>
    </nav>

    <!-- Hero -->
    <div class="text-center py-4 sm:py-8 bg-blue-500 text-white w-full">
      <h2 class="text-4xl font-bold mb-4">Welcome to Barbarians Rugby Club</h2>
      <p class="text-lg mb-4">We are a community rugby club dedicated to promoting the sport and fostering a love for rugby.</p>
      <button class="bg-white hover:bg-gray-200 text-blue-500 font-bold py-2 px-4 rounded">
        Join Us
      </button>
    </div>

    <!-- User forms -->
    <div v-if="!user">
      <div v-if="showLoginForm || showRegisterForm" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full neumorphic">
            
            <!-- close button -->
            <button @click="closeForms" class="text-gray-700 absolute top-2 right-2 p-2 focus:outline-none hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <login-form v-if="showLoginForm" />
            <register-form v-if="showRegisterForm" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import LoginForm from './LoginForm.vue';
import RegisterForm from './RegisterForm.vue';
import { reactive, toRefs } from 'vue';

export default {
  components: {
    LoginForm,
    RegisterForm,
  },
  setup() {
    const store = useStore();

    // Create a reactive state object
    const state = reactive({
      user: store.state.user,
      showLoginForm: false,
      showRegisterForm: false
    });

    // Create a function to close both forms
    const closeForms = () => {
      state.showLoginForm = false;
      state.showRegisterForm = false;
    };

    // Return the state properties and the closeForms function
    // The toRefs function is used to convert the reactive state into ref objects
    return { ...toRefs(state), closeForms };
  },
};
</script>

<style scoped>
.container {
  max-width: 960px;
}

/* Neumorphic styling */
.neumorphic {
  background: #e0e0e0;
  border-radius: 1rem;
  box-shadow: -8px -8px 16px #fff, 
              8px 8px 16px rgba(209, 205, 199, 0.5),
              4px 4px 6px rgba(209, 205, 199, 0.5) inset,
              -4px -4px 6px #fff inset;
}
</style>
