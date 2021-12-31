import {useFocusEffect} from '@react-navigation/core';
import React, {useCallback, useMemo} from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
} from 'react-native';
import {Surface, useTheme} from 'react-native-paper';

export type ContainerProps = {
  children?: React.ReactNode;
  backgroundColor?: string;
  statusBarBackgroundColor?: string;
  statusBarStyle?: StatusBarStyle;
  fullScreen?: boolean;
};

function Container(props: ContainerProps) {
  const {
    children,
    backgroundColor,
    fullScreen,
    statusBarBackgroundColor,
    statusBarStyle,
  } = props;
  const theme = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        statusBarStyle: {
          flex: 0,
          backgroundColor:
            statusBarBackgroundColor ??
            (fullScreen ? 'transparent' : theme.colors.white),
        },
        containerStyle: {
          flex: 1,
          backgroundColor: backgroundColor ?? theme.colors.white,
        },
      }),
    [backgroundColor, fullScreen, statusBarBackgroundColor, theme.colors.white],
  );

  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === 'android') {
        StatusBar.setTranslucent(fullScreen ?? false);
        StatusBar.setBackgroundColor(
          statusBarBackgroundColor ??
            (fullScreen ? 'transparent' : theme.colors.white),
        );
      }
      StatusBar.setBarStyle(statusBarStyle ?? 'dark-content');
    }, [
      fullScreen,
      statusBarBackgroundColor,
      statusBarStyle,
      theme.colors.white,
    ]),
  );

  return (
    <Surface style={styles.containerStyle}>
      <SafeAreaView style={styles.statusBarStyle} />
      <SafeAreaView style={styles.containerStyle}>{children}</SafeAreaView>
    </Surface>
  );
}

export default Container;
