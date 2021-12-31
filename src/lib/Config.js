
const ENV = 'uat';

export default {
  url: 'https://damp-journey-96434.herokuapp.com/api/mobile/firebaseUser',
  // ip_address:'171.79.187.54',
  app_name: 'SunCrypto',
  googleClientId: '',
  iv: 3245894651650123,
  key: 'ZSeqv5zPrIjP51WI'

};

export const FF = ({
  uat: {
    login: true,
    signup: true,
  },
  staging: {
    login: true,
    signup: false,
  },
  production: {
    login: true,
    signup: false,
  }
})[ENV || 'production'];