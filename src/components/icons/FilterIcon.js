import * as React from 'react';
import Svg, {Defs, G, Circle, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgFilterIcon(props) {
  return (
    <Svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      className=""
      {...props}>
      <Defs></Defs>
      <G id="filter-icon_svg__Outline">
        <Circle className="filter-icon_svg__cls-1" cx={21} cy={18} r={3} />
        <Circle className="filter-icon_svg__cls-1" cx={44} cy={32} r={3} />
        <Circle className="filter-icon_svg__cls-1" cx={31} cy={46} r={3} />
        <Path
          className="filter-icon_svg__cls-1"
          d="M24 18h30M11 18h7M34 46h20M11 46h17M47 32h7M11 32h30"
        />
        <Path fill="none" d="M0 0h64v64H0z" />
      </G>
    </Svg>
  );
}

export default SvgFilterIcon;
