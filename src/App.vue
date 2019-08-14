<template>
  <div id="app">
   
  
    <section class="form">
  <div class="field">
    <label class="label">Name</label>
    <div class="control">
      <input v-model="email" class="input" type="text" placeholder="Text input">
      <button @click="checkGuest">Check</button>
    </div>
  </div>
</section>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
     
        email: '',
        posts: [],
        errors: [],
     
    }
  },
  methods: {
    checkGuest() {
      console.log(this.email)
      axios.get(`http://ec2-54-237-192-230.compute-1.amazonaws.com/api/rsvps/`+this.email)
      
    .then(response => {
      // JSON responses are automatically parsed.
     console.log(response.data)
    })
    .catch(e => {
      this.errors.push(e)
    })

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
