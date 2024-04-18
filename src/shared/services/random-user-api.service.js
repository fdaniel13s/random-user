//Aquí va la clase de acceso a la API de Random User

export class RandomUserApi {
    baseUrl = 'https://randomuser.me/api/';

    getRandomUser(){
        return fetch(this.baseUrl)
            .then(response => response.json())
            .then(data => data.results[0])
    }

}