import React, { PureComponent } from "react";
import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
// import Api from "../Lib/Api";
// import Helper from "../Lib/Helper";

export default class ResendOTP extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      timer: null,
      time_remaining: 90,
    };
    this.setInterval();
  }

  setInterval() {
    let timer = setInterval(() => {
      if (this.state.time_remaining > 0) {
        this.setState({ time_remaining: this.state.time_remaining - 1 });
      } else {
        clearInterval(this.state.timer);
      }
    }, 1000);
    this.setState({ timer });
  }

  startTimer() {
    this.setState({ time_remaining: 3 });
    this.setInterval();
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  resend() {
    // this.setState({ isLoading: true });
    // Api.User.resendOtp(formdata).then(response => {
    //   this.setState({ isLoading: false });
    //   if (response) {
    //     // Helper.showToast(response.message)
    //     this.startTimer();
    //   }
    // })
    // }
  }

  render() {
    let { isLoading } = this.props;
    return (
      <View>
        {isLoading ? (
          <ActivityIndicator size={'small'} color={"#000"} style={{}} />
        ) : (
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
            onPress={() =>
              this.state.time_remaining == 0 ? this.props.resend() : null
            }
          >
            <Text
              style={{
                color: "#a9adb0",
                fontSize: 14,
                fontFamily: "Roboto-Regular",
              }}
            >
              Didn't get the code?
            </Text>
            <Text
              style={{
                color: "#00a99d",
                fontSize: 14,
                fontFamily: "Roboto-Bold",
              }}
            >
              {this.state.time_remaining == 0 ? " Resend" : ` Resend in ${this.state.time_remaining} sec.`}
            </Text>

            {/* <Text style={[ { fontWeight: 'bold' }]}>{this.state.time_remaining == 0 ? 'Resend Otp' : `Resend in ${this.state.time_remaining} sec.`}</Text> */}
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
