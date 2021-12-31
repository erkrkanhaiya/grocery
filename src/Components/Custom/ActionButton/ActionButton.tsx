/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Pressable } from 'react-native';
import { useTheme } from 'react-native-paper';
import Row from 'src/Components/Shared/Row/Row';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/utils/scaler';

interface actionButtonProps {
  icon?: any;
  title?: any;
  titleColor?: string;
  onPress?: any;
  height?: number | string;
  width?: number | string;
  borderRadius?: number | string;
}

function ActionButton(props: actionButtonProps) {
  const { icon, title, titleColor, onPress, height, width, borderRadius } = props;
  const theme = useTheme();
  const { colors } = theme;

  return (
    <Pressable onPress={onPress}>
      <Row
        style={{
          width: width ?? scaler(72),
          height: height ?? scaler(28),
          borderRadius: borderRadius ?? scaler(14),
          backgroundColor: colors.white,
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,
          elevation: 1,
        }}>
        {icon && (
          <Image
            source={icon}
            style={{
              height: scaler(16),
              width: scaler(16),
              resizeMode: 'contain',
            }}
          />
        )}
        <Spacer horizontal size={scaler(6)} />
        {title && (
          <Typography type={'regular'} fontSize={scaler(10)} color={titleColor}>
            {title}
          </Typography>
        )}
      </Row>
    </Pressable>
  );
}

export default ActionButton;
