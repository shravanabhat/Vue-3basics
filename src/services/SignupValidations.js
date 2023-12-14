import Validations from "./Validations";

export default class SignupValidations{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    checkValidations(){
        let errors=[];
        //email validation from validation.js 
        if(!Validations.checkEmail(this.email))
        {
            errors['email'] ='Invalid Email'
        }
        //password validations from validation.js
        if (!Validations.checkPass(this.password,8)){
                errors['password'] = 'password must be minimum 8 characters'
        }
        return errors;
    }
}