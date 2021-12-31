//@ts-ignore
import { create } from 'react-native-pixel-perfect';
// import UltimateConfig from 'react-native-ultimate-config';
import { Dimensions } from 'react-native';



const designResolution = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
const perfectSize = create(designResolution);

const scaler = (size: any) => perfectSize(size);

export default scaler;
