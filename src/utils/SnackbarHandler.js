import React from 'react';
import SnackBar from 'react-native-snackbar-component';
import Helper from '../lib/Helper';
// import Helper from '../../lib/Helper';
import { Keyboard } from 'react-native';
import { showMessage, hideMessage } from "react-native-flash-message";

export default class CustomSnackBar extends React.Component {
  constructor() {
    super();
    this.state = {
      Visible: false,
      msg: ''
    };
  }
  componentDidMount() {
    Helper.registerSnack(this);
  }
  render() {
    return (
      <>
        {this.state.Visible && (
          <SnackBar
            visible={true}
            position="top"
            textMessage={this.state.msg || 'CustomSnackBar'}
            // actionHandler={() => {
            //   console.log('snackbar button clicked!');
            // }}
            // actionText="let's go"
            autoHidingTime={1}
          />
        )}
      </>
    );
  }
}



class SnackbarHandler {
  getCurrentTheme = () => {
    // return ThemeAtomInstance.fetchState();
  };
  closeKeyboard = () => {
    Keyboard.dismiss();
  };

  showSimpleMessage(type = "default", props = {}) {
    this.closeKeyboard()
    const message = {
      message: "Some message title",
      description: "Lorem ipsum dolar sit amet",
      icon: { icon: "auto", position: "left" },
      type,
      ...props,
    };
    showMessage(message);
  }


  successMessage(SuccessMessage) {
    showMessage({
      message: SuccessMessage,
      // description: SuccessMessage,
      type: "success",
    })
  }

  errorMessage(ErrorMessage) {
    showMessage({
      message: ErrorMessage,
      // description: ErrorMessage,
      type: "danger",
    })
  }
}

export const GlobalHandler = new SnackbarHandler();






// import Snackbar, {SnackBarOptions} from 'react-native-snackbar';
// import {DayTheme} from 'src/Constants/Theme';

// class SnackbarHandler {
//   errorToast = (text: string, options?: SnackBarOptions) => {
//     Snackbar.show({
//       backgroundColor: DayTheme.colors.error,
//       duration: 5000,
//       ...options,
//       text,
//     });
//   };

//   successToast = (text: string, options?: SnackBarOptions) => {
//     Snackbar.show({
//       backgroundColor: DayTheme.colors.success,
//       duration: 5000,
//       ...options,
//       text,
//     });
//   };

//   normalToast = (text: string, options?: SnackBarOptions) => {
//     Snackbar.show({
//       backgroundColor: DayTheme.colors.black,
//       duration: 5000,
//       ...options,
//       text,
//     });
//   };
// }

// export default new SnackbarHandler();
