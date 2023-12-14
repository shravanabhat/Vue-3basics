export default class{
    static checkEmail(email){
        if(
            /^[a-zA-Z0-9.!#$%&''+/=?^_``{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email,)
        ){
            return true;
        }
        return false;
    }
    static checkPass(name,minlength){
        if (name.length<minlength) {
            return false;
            
        }
         return true;
    }
}