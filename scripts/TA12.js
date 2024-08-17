const generatePassword = (length) => {
    if (length < 8) {
        console.log("Password length must be at least 8 characters");
    }
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    console.log(password);
};

generatePassword(4);
generatePassword(8);
generatePassword(8);
generatePassword(12);