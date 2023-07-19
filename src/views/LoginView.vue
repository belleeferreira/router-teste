<template>
        <form class="row justify-center" @submit="login()">
          <p class="col-12 text-h5 text-center">Login</p>
            <div>
              <button label="Login" class="btn btn-primary" type="submit">login</button>
            </div>
        </form>
    </template>

<script>
import { defineComponent } from 'vue'
import msalInstance from '../auth'

export default defineComponent({
  name: 'LoginVue',
  data () {
    return {}
  },
  methods: {
    login () {
      const loginRequest = {
        scopes: ['user.read'] // Add any additional scopes as needed
      }

      msalInstance.loginPopup(loginRequest).then(res => {
        console.log('foi')
        const userName = res.account.name
        const token = res.accessToken
        localStorage.setItem('access_token', token)
        localStorage.setItem('username', userName)
        // this.$store.commit('example/someMutation', true)
        console.log(res)
        this.$router.push('/home')
      })
        .catch(erro => console.log(erro))
    }
  }
})

</script>
