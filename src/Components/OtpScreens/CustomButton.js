import { StyleSheet, TouchableOpacity, Text, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';


const CustomButton = function (props) {
  const style = {};
  if (props.type === 'fill') {
    style.backgroundColor = 'blue';
    style.borderWidth = 0;
  } else if (props.type === 'default') {
    style.borderColor = 'blue';
  } else if (props.type === 'link') {
    style.borderWidth = 0;
  }
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.buttonStyle,
        style,
        props.buttonStyle,
        props.disabled ? styles.disabled : {},
      ]}>
      <Text style={[styles.textStyle, props.textStyle]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderWidth: 1,
    borderRadius: 3,
    alignSelf: 'flex-start',
  },
  textStyle: {
    textTransform: 'uppercase',
    fontSize: 12,
    color: 'pink',
  },
  disabled: {
    opacity: 0.5,
  },
});

CustomButton.defaultProps = {
  type: 'default',
  disabled: false,
};

CustomButton.propTypes = {
  type: PropTypes.oneOf(['default', 'fill', 'link']).isRequired,
  buttonStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default CustomButton;