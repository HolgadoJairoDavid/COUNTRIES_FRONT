const regexEmail = /\S+@\S+\.\S+/;

const validate = (state) => {
    const errors = {};
    if(!state.email){
        errors.email = "Debe completar con el email"
    } else if(state.email.length > 35){
        errors.email = "No puede tener más de 35 caracteres"
    } else if(!regexEmail.test(state.email)){
        errors.email = "Email no válido"
    }
    else errors.email= "" 
    
    if(state.password.length < 6 || state.password.length > 10){
        errors.password = "Longitud inválida"
    } else if(!/\d/.test(state.password)){
        errors.password = "Debe tener al menos un número"
    } else errors.password = ""
    return errors;
}

export default validate;