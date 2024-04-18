// RandomUser API Service

import axios from 'axios';

const http = axios.create({
    baseURL: 'https://randomuser.me/api/'

});

export class RandomUserApiService {
    //methods

    // Esta funcion hace una peticion a la API de RandomUser para obtener un usuario aleatorio
    getRandomUser() {
        return http.get('?results=1' ); //Con esto me aseguro que tengo un solo usuario
    }

}

