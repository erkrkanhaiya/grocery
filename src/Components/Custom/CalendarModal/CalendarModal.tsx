import React, { useEffect, useCallback, useState, useRef } from 'react';
import {
  Country,
  FlagType,
  getAllCountries,
} from 'react-native-country-picker-modal';
import { getCountryCallingCodeAsync } from 'react-native-country-picker-modal/lib/CountryService';
import { getLocales } from 'react-native-localize';
import CountryPicker from 'react-native-country-picker-modal';
import scaler from 'src/utils/scaler';
import useCountryCode from 'src/Hooks/Shared/useCountryCode';
import { Image, Pressable } from 'react-native';
import images from 'src/assets/images';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IconButton } from 'react-native-paper';
type Props = {
  getCountryCode: Function;
  styles?: any;
  backgroundColor?: string;
  opacity?: number;
  fontColor?: string;
  iconColor?: string;
  dropDownIconColor: string;
  coachSignup?: boolean;
};
function CalendarModal(props: Props) {
  const {
    getCountryCode,
    styles,
    backgroundColor,
    opacity,
    fontColor,
    iconColor,
    dropDownIconColor,
    coachSignup,
  } = props;
  const [countryCode, setCountryCode] = useState<any>('');
  const [country, setCountry] = useState(null);
  const [initialCode, setInitialCode] = useState('');
  const ccc = useCountryCode();
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState('');
  useEffect(() => {
    (async () => {
      if (countryCode === '') {
        const [{ countryCode: _countryCode }]: any = getLocales();
        setCountryCode(ccc);
        const callingCode = await getCountryCallingCodeAsync(ccc);
        console.log('callingcode', _countryCode);

        setInitialCode('+' + callingCode);
        getCountryCode('+' + callingCode);
      } else {
        const callingCode = initialCode.replace('+', '');
        const countries = await getAllCountries(FlagType.FLAT);
        const country: Country | undefined = countries.find(
          (country) => country.callingCode.indexOf(callingCode) !== -1,
        );

        if (country) {
          setCountryCode(country.cca2);
        }
      }
    })();
  }, [countryCode, ccc]);

  const onSelect = useCallback(({ callingCode, cca2 }: Country) => {
    const [callCode] = callingCode;
    setCountryCode(cca2);
    setInitialCode('+' + callingCode);
    getCountryCode('+' + callingCode);
    setVisible(false);
  }, []);

  return (
    <Pressable
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: scaler(5),
        borderWidth: scaler(1),
        borderColor: 'gray',
        backgroundColor: backgroundColor,
        opacity: opacity ?? 1,
        justifyContent: 'space-between',
        paddingRight: scaler(20),
      }}
      onPress={() => {
        setVisible(true), setColor('gray')
      }}>
      <Image
        source={images.glob_icon}
        style={{
          tintColor: iconColor ?? 'gray',
          height: scaler(20),
          width: scaler(20),
          marginHorizontal: scaler(6),
          marginLeft: scaler(8),
        }}
      />
      <CountryPicker
        countryCode={countryCode}
        withCallingCode
        withCallingCodeButton
        onSelect={onSelect}
        excludeCountries={['AQ', 'TF', 'HM', 'BV']}
        withFilter
        visible={visible}
        theme={{
          fontSize: scaler(17),
          onBackgroundTextColor: color ? color : fontColor,
          // filterPlaceholderTextColor :'gray',
          // primaryColor : 'blue',
          // backgroundColor :'blue',
          // primaryColorVariant : 'red'
        }}
        containerButtonStyle={styles}
        onOpen={() => setColor('gray')}
        onClose={() => {
          setVisible(false), setColor(fontColor)
        }}
      />
      {/* <Spacer size={scaler(150)} horizontal /> */}
      <Image
        source={images.dropdown}
        style={{
          height: scaler(10),
          width: scaler(10),
          tintColor: dropDownIconColor ?? 'gray',
        }}
      />
    </Pressable>
  );
}

export default CalendarModal;
