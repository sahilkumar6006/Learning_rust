function createPasswordValidator () {
    return function(password){
        const criteria ={
            minLength : password.length >= 8,
            hasUppercase: /[A-Z]/.test(password),
            hasLowercase: /[a-z]/.test(password),
            hasNumber: /[0-9]/.test(password)
        };
        const isValid = Object.values(criteria).every(Boolean);
        return {criteria, isValid}
    }

}
const validatePassword = createPasswordValidator();

console.log(validatePassword("password"));
console.log(validatePassword("password123"));