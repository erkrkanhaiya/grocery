/* eslint-disable react-native/no-inline-styles */
import React, { ComponentProps, useMemo } from 'react';
import { Button, useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import scaler from 'src/utils/scaler';

type ButtonProps = ComponentProps<typeof Button>;

function Touchable(props: ButtonProps) {
  const {
    children,
    loading,
    mode,
    color,
    style,
    labelStyle,
    contentStyle,
    uppercase,
  } = props;

  const theme = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        button: {
          height: scaler(48),
          borderRadius: scaler(24),
          backgroundColor: color ?? theme.colors.primary,
        },
        content: { height: scaler(48) },
      }),
    [color, theme.colors.primary],
  );

  return (
    <Button
      {...props}
      mode={mode ?? 'contained'}
      loading={loading}
      disabled={loading}
      uppercase={uppercase ?? false}
      theme={{
        colors: {
          primary: theme.colors.primary,
        },
      }}
      style={[styles.button, style]}
      contentStyle={[styles.content, contentStyle]}
      labelStyle={[
        {
          fontSize: scaler(18),
          color: theme.colors.white,
          ...theme.fonts.regular,
        },
        labelStyle,
      ]}>
      {children}
    </Button>
  );
}
export default Touchable;
