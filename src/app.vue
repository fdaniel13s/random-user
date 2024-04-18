//Mostrar el card de random User

<script>


import UserCard from "./users/components/user-card.component.vue";
import {User} from "./users/model/user.entity.js";
import {RandomUserApiService} from "./users/services/random-user-API.service.js";
import ToolbarContent from "./public/toolbar.component.vue";
import FooterContent from "./public/footer-content.component.vue";

export default {
  name: "app",
  components: {FooterContent, ToolbarContent, UserCard},
  data(){
    return {
      user: null,
      userService: new RandomUserApiService()
    }
  },

  //Asignar a user un RandomUserService
  created() {
    this.buildUser();
  },
  methods: {
    //Construir un usuario
    buildUser() {
      this.userService.getRandomUser().then(response => {
        // Asumiendo que la respuesta incluye los campos correctamente
        const userData = response.data.results[0];
        this.user = new User(
            `${userData.name.first} ${userData.name.last}`, // Combina nombre y apellido
            userData.gender,
            userData.email,
            userData.login.username, // Usa login.username según la estructura de la respuesta
            userData.phone,
            userData.picture.large // Usa picture.large para la imagen
        );
      }).catch(e => console.error(e));
    }
  }
}

</script>

<template>
<toolbar-content></toolbar-content>
<user-card v-if="user" :user="user"></user-card>
  <footer-content></footer-content>
</template>