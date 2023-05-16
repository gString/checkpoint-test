const STORED_USER = "user";
const STORED_PASSWORD = "password";

export const login_check = (user: string, pass: string) => {
    return new Promise((resolve) => {
        if (user === STORED_USER && pass === STORED_PASSWORD) resolve(true);
        resolve(false);
    })

};