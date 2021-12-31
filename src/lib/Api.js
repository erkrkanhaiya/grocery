
import Helper from './Helper';


export const User = {


  home: (data) => Helper.makeRequest({ method: 'post', data: data, }),
  login: (data) => Helper.makeRequest({ method: 'post', data: data }),

  withImage: (data, imgkey, imgvalue) => Helper.makeRequest({ method: 'post', data: data, imgkey, imgvalue }),
  withMultiImage: (data, imgdata) => Helper.makeRequest({ method: 'post', data: data, imgkey: false, imgdata }),

  // // Yapme Apies

  // checkUser: (data) => Helper.makeRequest({ url: 'user/social-login', method: 'post', data: data }),


  // getotp: (data) => Helper.makeRequest({ url: 'user/check-user', method: 'post', data: data }),
  // checkphonenumber: (data) => Helper.makeRequest({ url: 'user/check-phone-no', method: 'post', data: data }),


  // updatePhoneNo: (data) => Helper.makeRequest({ url: 'user/update-phone-no', method: 'post', data: data }),



  // addUserName: (data) => Helper.makeRequest({ url: 'user/add-user-name', method: 'post', data: data }),
  // changepassword: (data,) => Helper.makeRequest({ url: 'user/change-password', data: data, method: 'post', }),
  // updateProfile: (data) => Helper.makeRequest({ url: 'user/update-profile', method: 'post', data: data }),
  // forgotpassword: (data) => Helper.makeRequest({ url: 'user/forgot', method: 'post', data: data }),
  // logout: (data) => Helper.makeRequest({ url: 'user/logout', data: data, method: 'post', }),
  // validateuser: (data) => Helper.makeRequest({ url: 'user/validate-data', method: 'post', data: data, loader: false }),

  // updateProfilePic: (data) => Helper.makeRequest({ url: 'user/update-profile-image', method: 'post', data: data }),


  // checkvalue: (data) => Helper.makeRequest({ url: 'checkvalue', method: 'post', data: data, }),

  // sendotp: (data) => Helper.makeRequest({ url: 'send-otp', method: 'post', data: data, }),
  // verifyotp: (data) => Helper.makeRequest({ url: 'verify-otp', method: 'post', data: data }),
  // resendOtp: (data) => Helper.makeRequest({ url: 'resend-otp', method: 'post', data: data }),
  // confirmotp: (data) => Helper.makeRequest({ url: 'confirm-otp', method: 'post', data: data }),
  // mydogs: () => Helper.makeRequest({ url: 'my-dogs', method: 'get', }),


  // getbreeds: (data) => Helper.makeRequest({ url: 'get-breeds', method: 'get', }),
  // adddog: (data) => Helper.makeRequest({ url: 'add-dog', data: data, method: 'post', }),
  // updatedog: (data) => Helper.makeRequest({ url: 'update-dog', data: data, method: 'post', }),











  // userProfile: (data, userId) => Helper.makeRequest({ url: `user-profile/${userId}/`, method: 'put', data: data, isImage: true }),  // remain update 
  // getUserInfo: (userId) => Helper.makeRequest({ url: `user-profile/${userId}/`, method: 'get', }),





  // getCountrycode: (data) => Helper.makeRequest({ url: 'get-country', method: 'get', }),
  // forgotPassword: (data) => Helper.makeRequest({ url: 'forgot-password/', data: data, method: 'post', }),
  // forgetChangePassword: (data) => Helper.makeRequest({ url: 'forget-change-password/', data: data, method: 'put', }),



};

export default { User };
