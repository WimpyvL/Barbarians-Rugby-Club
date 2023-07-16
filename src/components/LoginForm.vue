<template>
  <form @submit.prevent="handleSubmit" class="max-w-lg mx-auto bg-white bg-opacity-75 rounded-lg px-8 py-6 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
      <input v-model="email" class="neu-inset shadow-inner rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="email" type="email" placeholder="Email">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
      <input v-model="password" class="neu-inset shadow-inner rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="password" type="password" placeholder="******************">
    </div>
    <div class="flex items-center justify-between">
      <button class="neu-press shadow-inner bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg focus:outline-none" type="submit">
        Log In
      </button>
    </div>
  </form>
</template>
  
  <script>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const store = useStore();
      const router = useRouter();
  
      const email = ref('');
      const password = ref('');
  
      const handleSubmit = async () => {
        // This is where you'd usually call your API to log the user in.
        // For now, we'll just simulate a successful login.
  
        // Example of user data returned from API
        const user = {
          id: 1,
          name: 'John Doe',
          email: email.value
        };
  
        store.dispatch('setUser', user);
        router.push('/'); // Redirect to home page
      };
  
      return { email, password, handleSubmit };
    }
  };
  </script>
  
  <style scoped>
  .neu-inset {
    border: 1px solid #E0E0E0;
    background-color: #EEE;
    box-shadow: inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF;
  }
  
  .neu-press {
    box-shadow: inset -2px -2px 6px #FFF, inset 2px 2px 6px #BABECC;
  }
  </style>