

export class User{
    constructor(name =' ', gender = ' ', email = ' ', loginUsername = ' ' , phone = ' ', sourceImage = null) {
        this.name = name;
        this.gender = gender;
        this.email = email;
        this.loginUsername = loginUsername;
        this.phone = phone;
        this.sourceImage = sourceImage;
    }

}