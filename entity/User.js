/**
 * User class
 */
class User {

    constructor() {
        this.userEmail = document.getElementById('user_email');
        this.userPassword = document.getElementById('user_password');
    }

    registration(userEmail, userPassword){
        localStorage.setItem("user_id", "1");
        localStorage.setItem("user_email", userEmail);
        localStorage.setItem("user_password", userPassword);

        return true;
    }

    login(userEmail, userPassword){
        if(localStorage.getItem('user_email') == userEmail && localStorage.getItem('user_password') == userPassword){
            return true;
        }

        return false;
    }

    logout(){
        localStorage.setItem("user_id", null);
        localStorage.setItem("user_email", null);
        localStorage.setItem("user_password", null);
    }

    getUserEmail() {
        return localStorage.getItem("user_email");
    }


}

export default User;
