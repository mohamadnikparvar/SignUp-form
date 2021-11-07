export const validate = data =>{

    const errors ={}

    if (!data.name.trim()){
        errors.name = "Username required"
    }else{
        delete errors.name
    }

    if(!data.email){
        errors.email = "Email required"
    }else if(!/\S+@\S+\.\s+/.test(data.email)){
        errors.email = "Email adress is invalid"
    }else {
        delete errors.email
    }

    if(!data.password){
        errors.password = "Password required"
    }else if(data.password.length < 6){
        errors.password = "password is too short"
    }else {
        delete errors.password
    }

    if(!data.confirmPassword){
        errors.confirmPassword = "Please confirm your password"
    }else if(data.confirmPassword !== data.password){
        errors.confirmPassword = "Passwords don't match"
    }else {
        delete errors.confirmPassword 
    }

    if(data.isAcceped){
        delete errors.isAcceped
    }else{
        errors.isAcceped ="Please accept privacy policy"
    }

    return errors;
}