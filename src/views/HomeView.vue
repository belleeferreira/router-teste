<template>
  <main>
    <p>login realizado com sucesso {{ userName }}</p>
  </main>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
name: 'HomeView',
computed: {
  userName () {
    return localStorage.getItem('username')
  }
}
})
</script>