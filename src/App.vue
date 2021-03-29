<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>Devwerkz To Do List</h1>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <ToDoList />
    </v-main>
  </v-app>
</template>

<script>
import ToDoList from './components/ToDoList';

export default {
  name: 'App',

  components: {
    ToDoList,
  },

  data: () => ({
    //
  }),
};
</script>
