import React, {useMemo} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {VARIANT} from 'src/Constants/Types';
import {useThemeValue} from 'src/HookState/themeState';

interface PaperProps {
  children?: any;
  center?: boolean;
  right?: boolean;
  middle?: boolean;
  bottom?: boolean;
  b?: number;
  m?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
  mv?: number;
  mh?: number;
  p?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  pv?: number;
  ph?: number;
  row?: boolean;
  flex?: number;
  w?: number;
  w100?: boolean;
  h?: number;
  h100?: boolean;
  style?: ViewStyle;
  br?: number;
  borderColor?: string;
  bg?: string;
  elevation?: number;
  overflow?: 'visible' | 'hidden' | 'scroll' | undefined;
  spaced?: boolean;
  z?: number;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined;
  ratio?: number;
  minHeight?: number;
  maxHeight?: number;
  opacity?: number;
  variant?: VARIANT;
}

function Paper(props: PaperProps) {
  const {
    children,
    center,
    right,
    middle,
    bottom,
    b,
    m,
    ml,
    mr,
    mt,
    mb,
    mv,
    mh,
    p,
    pl,
    pr,
    pt,
    pb,
    pv,
    ph,
    row,
    flex,
    w,
    w100,
    h,
    h100,
    style,
    br,
    borderColor,
    bg,
    elevation = 0,
    overflow,
    spaced,
    z,
    flexWrap,
    ratio,
    minHeight,
    maxHeight,
    opacity,
    variant,
  } = props;
  const theme = useThemeValue();

  const iosShadowElevation = useMemo(
    () =>
      elevation === 0
        ? {}
        : {
            shadowOpacity: 0.0015 * elevation + 0.18,
            shadowRadius: 0.54 * elevation,
            shadowOffset: {
              height: 0.6 * elevation,
              width: 0.6 * elevation,
            },
            shadowColor: theme.colors.onSurface,
          },
    [elevation, theme.colors.onSurface],
  );

  const styles = useMemo(
    () =>
      StyleSheet.create({
        paperStyle: {
          flex: flex,
          flexWrap: flexWrap,
          aspectRatio: ratio,
          flexDirection: row ? 'row' : 'column',
          justifyContent: middle
            ? 'center'
            : bottom
            ? 'flex-end'
            : spaced
            ? 'space-between'
            : undefined,
          alignItems: center ? 'center' : right ? 'flex-end' : undefined,
          zIndex: z,
          width: w100 ? '100%' : w,
          height: h100 ? '100%' : h,
          minHeight: minHeight,
          maxHeight: maxHeight,
          backgroundColor: bg
            ? bg
            : variant
            ? theme.colors[variant]
            : 'transparent',
          overflow: overflow,
          opacity: opacity,
          borderWidth: b,
          borderRadius: br,
          borderColor: borderColor || 'grey',
          elevation: elevation,
          margin: m,
          marginLeft: ml,
          marginTop: mt,
          marginBottom: mb,
          marginRight: mr,
          marginVertical: mv,
          marginHorizontal: mh,
          padding: p,
          paddingLeft: pl,
          paddingRight: pr,
          paddingTop: pt,
          paddingBottom: pb,
          paddingHorizontal: ph,
          paddingVertical: pv,
          ...iosShadowElevation,
          ...style,
        },
      }),
    [
      b,
      bg,
      borderColor,
      bottom,
      br,
      center,
      elevation,
      flex,
      flexWrap,
      h,
      h100,
      iosShadowElevation,
      m,
      maxHeight,
      mb,
      mh,
      middle,
      minHeight,
      ml,
      mr,
      mt,
      mv,
      opacity,
      overflow,
      p,
      pb,
      ph,
      pl,
      pr,
      pt,
      pv,
      ratio,
      right,
      row,
      spaced,
      style,
      theme.colors,
      variant,
      w,
      w100,
      z,
    ],
  );

  return <View style={styles.paperStyle}>{children}</View>;
}

export default Paper;
