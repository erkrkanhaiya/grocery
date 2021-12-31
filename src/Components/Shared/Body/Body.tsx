// import React, {useMemo} from 'react';
// import {ScrollView, ScrollViewProps, StyleSheet} from 'react-native';

// interface BodyProps extends ScrollViewProps {
//   backgroundColor?: string;
//   children?: any;
// }

// function Body(props: BodyProps) {
//   const {style, backgroundColor} = props;

//   const styles = useMemo(
//     () =>
//       StyleSheet.create({
//         containerStyle: {flexGrow: 1, backgroundColor},
//       }),
//     [backgroundColor],
//   );

//   return (
//     <ScrollView
//       contentContainerStyle={[styles.containerStyle, style]}
//       keyboardShouldPersistTaps={'handled'}
//       {...props}
//     />
//   );
// }

// export default Body;


import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';
import { useTheme } from 'react-native-paper';

interface BodyProps extends KeyboardAwareScrollViewProps {
  backgroundColor?: string;
  children?: any;
}

function Body(props: BodyProps) {
  const {style, backgroundColor} = props;
const theme = useTheme()
  const styles = useMemo(
    () =>
      StyleSheet.create({
        containerStyle: {
          flexGrow: 1,
          backgroundColor: backgroundColor
            ? backgroundColor :
             'transparent',
        },
      }),
    [backgroundColor, theme.colors],
  );

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[styles.containerStyle, style]}
      keyboardShouldPersistTaps={'handled'}
      enableOnAndroid={false}
      showsVerticalScrollIndicator={false}
      {...props}
    />
  );
}

export default Body;