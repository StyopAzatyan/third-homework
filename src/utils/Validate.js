  
export const validate = (values) => {
    const {userName, password} = values; 
    if(userName === '' || password === '') {
        return " Invalid fields Username and Password can't be empty"
    } else if(password.length < 8) {
        return "Password must contain more then 7 characters"
    } else {
        return "Welcome";
    }
}