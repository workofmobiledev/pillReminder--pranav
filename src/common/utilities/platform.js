import { platform } from "process";
import { Platform } from "react-native";


export const isIos = () => {
  return Platform.OS === 'ios';
};
