import auth from '@react-native-firebase/auth';


export async function firebaseOtp(mobile) {
    const phonenumber = '+91' + mobile
    return await auth().signInWithPhoneNumber(phonenumber)
}