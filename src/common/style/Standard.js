import { Dimensions } from 'react-native';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const standardGapLarge = 32;
export const standardGapMedium = 16;
export const standardGapSmall = 8;

/**
 * Standard for icon
 */
export const iconBig = 50;
export const iconLarge = 24;
export const iconMedium = 20;
export const iconSmall = 8;

/**
 * Standard size for profile picture according device
 */
export const profilePicture = DEVICE_WIDTH / 10;

/**
 * Standard button size
 */
export const buttonLargeWidth = DEVICE_WIDTH / 2;
export const buttonSmallWidth = DEVICE_WIDTH / 3.5;
