import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGoogle(props) {
  return (
    <Svg
      height="21"
      viewBox="0 0 512 512"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      {...props}>
      <Path d="M457.732 216.625c2.628 14.041 4.063 28.743 4.063 44.098C461.796 380.688 381.481 466 260.204 466c-116.023 0-210-93.977-210-210s93.977-210 210-210c56.704 0 104.077 20.867 140.44 54.73l-59.204 59.197v-.135c-22.046-21.002-50-31.762-81.236-31.762-69.297 0-125.604 58.537-125.604 127.841 0 69.29 56.306 127.968 125.604 127.968 62.87 0 105.653-35.965 114.46-85.312h-114.46v-81.902h197.528z" />
    </Svg>
  );
}

export default SvgGoogle;
