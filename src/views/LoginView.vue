<template>
  <form @submit="login()">
    <h1>Acesse aqui</h1>
    <div class="col-12">
    <button  class="btn btn-primary" type="submit" label="Login">Login</button>
   </div>
  </form>
</template>

<script>
import { defineComponent } from 'vue'
import msalInstance from '../auth'

export default defineComponent({
  name: 'LoginView',
  methods: {
    login () {
      console.log('foi')
      const loginRequest = {
        scopes: ['user.read'] // Add any additional scopes as needed
      }

      msalInstance.loginPopup(loginRequest).then(res => {
        alert('foi')
        alert('Logado com sucesso')
        const userName = res.account.name
        const token = res.accessToken
        localStorage.setItem('access_token', token)
        localStorage.setItem('username', userName)
        alert(token)
        console.log(res)
        this.$router.push('/home')
        // Guardar access (res.accessToken) token e refresh token (res.refreshToken) na store de token/access
      })
        .catch(erro => console.log(erro))
    }
  }
})
</script>