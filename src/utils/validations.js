export const validateEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export const validateName = (name) => {
    const re = /^[A-Za-z ]+$/;
    return re.test(name.trim());
};

export const validatePhoneNumber = (phoneNumber) => {
    const re = /^(\+?91)?[6789]\d{9}$/;
    return re.test(phoneNumber);
};

export const isNumeric = (value) => {
    const re = /^[0-9]+$/;
    return re.test(value);
};

export const isValidOtp = (value) => {
    if (isNumeric(value) && value.length === 6) {
        return true;
    } else {
        return false;
    }
};




