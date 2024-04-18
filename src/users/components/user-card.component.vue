<script>
import {User} from "../model/user.entity.js";
export default {
  name: "user-card",
  props: {user:Object}

}
</script>

<template>
<pv-card id="card-user" class="m-1" >
  <template #header>
    <img :alt = "user.name" :src="user.sourceImage">
  </template>
  //Titulo el nombre del usuario
  <template #title>
    <h1>{{user.name}}</h1>
  </template>
  <template #content>
    <p class="m-0">
      <span class="flex align-items-center justify-content-center mr-2 xl:flex-column">
          <p>Nombre: {{user.name}}</p>
        <p>Genero: {{user.gender}}</p>
        <p>Correo: {{user.email}}</p>
        <p>Telefono: {{user.phone}}</p>
        <p>Login Username: {{user.loginUsername}}</p>
      </span>
      <span class="flex align-items-center justify-content-center">
        <p>Esta es la info de -> {{user.name}}</p>
      </span>
    </p>
  </template>


</pv-card>


</template>

<style scoped>
#card-user {
  background-color: #9e3333; /* Gris claro, pero puedes cambiarlo por cualquier color */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}


</style>
