class User {

    constructor() {
        this.userEmail = document.getElementById('user_email');
        this.userPassword = document.getElementById('user_password');
    }

    registration(userEmail, userPassword){
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
        localStorage.setItem('user_email', null);
        localStorage.setItem('user_password', null);

        return true;
    }

    getUser() {
        return [localStorage.getItem('user_email'), localStorage.getItem('user_password')];
    }


}

export default User;
