// import Helper from "./Helper";
import SnackbarHandler from '../Utils/Shared/SnackbarHandler';

export const VALIDATE = {
  EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  ALPHABET_ONLY: /^[a-zA-Z \s]*$/,
  NUMBER: /^[0-9]*$/,
  MOBILE: /^[0-9]{1,20}$/,
  STREET: /^[a-zA-Z0-9 '-.~!@#$%^&*()_+={}[];':"<>,.\s]*$/,
  PASSWORD: /[d\-_\s]+$/,
  INCLUDE_DOT: /[^a-zA-Z0-9_. ]/,
};
const validationFunctions = {
  checkAlphabet: (name, min, max, value) => {
    var min = min || 5;
    var max = max || 40;
    if (value) {
      if (!VALIDATE.ALPHABET_ONLY.test(value)) {
        // Helper.showToast(name + ' is Invalid');
        return false;
      } else if (value.length < min || value.length > max) {
        // Helper.showToast(`${name} must be entered between ${min} to ${max} Characters`);
        return false;
      }
      return true;
    } else {
      // Helper.showToast(name + " is Required!");
      return false;
    }
  },

  checkUserName: (name, min, max, value) => {
    var min = min || 5;
    var max = max || 40;
    if (value) {
      if (VALIDATE.INCLUDE_DOT.test(value)) {
        SnackbarHandler.errorToast(name + ' is invalid');
        return false;
      } else if (value.length < min || value.length > max) {
        SnackbarHandler.errorToast(
          `${name} must be entered between ${min} to ${max} Characters`,
        );
        return false;
      }
      return true;
    } else {
      SnackbarHandler.errorToast(name + ' is required! ');
      return false;
    }
  },

  checkEmail: (name, value) => {
    if (value) {
      if (!VALIDATE.EMAIL.test(value)) {
        SnackbarHandler.errorToast(`${name} is invalid.`);
        return false;
      }
    } else {
      SnackbarHandler.errorToast(`${name} is required.`);
      return false;
    }
    return true;
  },

  checkNumber: (name, min, max, value) => {
    var min = min || 7;
    var max = max || 15;
    if (value) {
      if (!VALIDATE.NUMBER.test(value)) {
        SnackbarHandler.errorToast(`${name} is invalid.`);
        return false;
      } else if (value.length < min || value.length > max) {
        SnackbarHandler.errorToast(
          `${name} entered must be between ${min} to ${max} Characters.`,
        );
        return false;
      }
      return true;
    } else {
      SnackbarHandler.errorToast(`${name} is required.`);
      return false;
    }
  },

  checkPhoneNumber: (name, min, max, value) => {
    var min = min || 7;
    var max = max || 15;
    if (value) {
      if (!VALIDATE.MOBILE.test(value)) {
        SnackbarHandler.errorToast(`${name} is invalid.`);
        return false;
      } else if (value.length < min || value.length > max) {
        SnackbarHandler.errorToast(
          `${name} must be between ${min} to ${max} Digits.`,
        );
        return false;
      }
      return true;
    } else {
      SnackbarHandler.errorToast(`${name} is required.`);
      return false;
    }
  },

  checkNotNull: (name, min, max, value) => {
    var min = min || 5;
    var max = max || 40;
    if (value) {
      if (value.length < min || value.length > max) {
        SnackbarHandler.errorToast(`${name} is required.`);

        //  Helper.showToast(`${name} must be between ${min} to ${max} Characters.`);
        return false;
      }
      return true;
    } else {
      // Helper.showToast(`${name} is Required.`);
      return false;
    }
  },

  checkRequire: (name, value) => {
    if (value) {
      return true;
    } else {
      // Helper.showToast(`${name} is Required.`);
      SnackbarHandler.errorToast(`${name} is Required.`);

      return false;
    }
  },

  checkPassword: (name, min, max, value) => {
    var min = min || 7;
    var max = max || 15;
    if (value) {
      if (VALIDATE.PASSWORD.test(value)) {
        // Helper.showToast(`${name} is Invalid.`);
        return false;
      } else if (value.length < min || value.length > max) {
        //  Helper.showToast(`${name} entered must be between ${min} to ${max} Characters.`);
        return false;
      }
      return true;
    } else {
      // Helper.showToast(`${name} is Required.`);
      return false;
    }
  },

  checkMatch: (name, value, name2, value2) => {
    var min = min || 5;
    var max = max || 40;
    if (value == value2) {
      return true;
    } else {
      //  Helper.showToast(`${name} and ${name2} should be same.`);
      return false;
    }
  },

  checkStreet: (name, min, max, value) => {
    var min = min || 7;
    var max = max || 15;
    if (value) {
      if (VALIDATE.STREET.test(value)) {
        // Helper.showToast(`${name} is Invalid.`);
        return false;
      } else if (value.length < min || value.length > max) {
        // Helper.showToast(`${name} entered must be between ${min} to ${max} Characters.`);
        return false;
      }
      return true;
    } else {
      // Helper.showToast(`${name} is Required.`);
      return false;
    }
  },

  checkArrayLength: (name, value) => {
    if (value.length > 0) {
      return true;
    } else {
      // Helper.showToast(`${name} is Required.`);
      return false;
    }
  },

  checkObjectLength: (name, value) => {
    if (Object.keys(value).length > 0) {
      return true;
    } else {
      // Helper.showToast(`${name} is Required.`);
      return false;
    }
  },
};

export default validationFunctions;
