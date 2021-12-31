import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Notification from '../screens/Notification/Notification';
import Login from '../screens/Login/Login';
import Signup from '../screens/Signup/Signup';
import Forgotpassword from '../screens/Forgotpassword/Forgotpassword';
import ChangePassword from '../screens/Changepassword/Changepassword';
import Addnewaddress from '../screens/Address/Addnewaddress';
import CustomeDrawer from '../screens/Sidemenu/CustomeDrawer';
import Productlist from '../screens/Productlist/Productlist';
import Addresslist from '../screens/Address/Addresslist';
import Cart from '../screens/Cart/Cart';
import Search from '../screens/Search/Search';
import Myaccount from '../screens/Myaccount/Myaccount';
import PlaceOrder from '../screens/Placeorder/PlaceOrder';
import Thanku from '../screens/Thanku/Thanku';
import Myorder from '../screens/MyOrder/Myorder';
import Orderdetails from '../screens/OrderDetails/Orderdetails';
import Otpverify from '../screens/Otpverify/Otpverify';
import OTPScreen from '../Components/OtpScreens/OtpScreen';
import Splash from '../screens/Splash/Splash';



// export default function Rootnav() {
//     return (
//         <View>
//             <Home />
//         </View>
//     )
// }


const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();


const DrawerStack = () => {
    return (
        <Drawer.Navigator
            initialRouteName="ProductList"
            // screenOptions={{
            //     headerShown: false
            // }}
            drawerContent={(props) => <CustomeDrawer {...props} />}
        >
            {/* initialRouteName="ProductList"> */}
            <Drawer.Screen name="Home" component={Home} />
            {/* <Drawer.Screen name="Notification" component={Notification} /> */}
        </Drawer.Navigator>
    );
};

export default function Rootnav() {
    // return (
    //     <NavigationContainer>
    //         <Stack.Navigator initialRouteName="Home">
    //             <Stack.Screen name="Home" component={Home}
    //             />
    //             {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
    //         </Stack.Navigator>
    //     </NavigationContainer>
    // )

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />

                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: false }} name="DrawerStack" component={DrawerStack} />
                <Stack.Screen name="Otpverify" component={Otpverify} />
                <Stack.Screen name="Productlist" component={Productlist} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
                <Stack.Screen name="ChangePassword" component={ChangePassword} />
                <Stack.Screen name="Notification" component={Notification} />
                <Stack.Screen name="Addnewaddress" component={Addnewaddress} />
                <Stack.Screen name="Addresslist" component={Addresslist} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="Myaccount" component={Myaccount} />
                <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
                <Stack.Screen name="Thanku" component={Thanku} />
                <Stack.Screen name="Myorder" component={Myorder} />
                <Stack.Screen name="Orderdetails" component={Orderdetails} />


            </Stack.Navigator>


        </NavigationContainer>
    );
}
