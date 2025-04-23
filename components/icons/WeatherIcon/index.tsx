import Svg, { Defs, G, Path, RadialGradient, Stop } from 'react-native-svg'

interface WeatherIconProps {
  width?: number
  height?: number
}

export const WeatherIcon = ({ width = 39, height = 36 }: WeatherIconProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 39 36" fill="none">
      <G>
        <Path
          d="M24.9474 11.3421C24.9474 16.2255 20.9886 20.1842 16.1053 20.1842C11.2219 20.1842 7.26316 16.2255 7.26316 11.3421C7.26316 6.45874 11.2219 2.5 16.1053 2.5C20.9886 2.5 24.9474 6.45874 24.9474 11.3421Z"
          fill="#FBCA1C"
        />
        <Path
          d="M24.9474 11.3421C24.9474 16.2255 20.9886 20.1842 16.1053 20.1842C11.2219 20.1842 7.26316 16.2255 7.26316 11.3421C7.26316 6.45874 11.2219 2.5 16.1053 2.5C20.9886 2.5 24.9474 6.45874 24.9474 11.3421Z"
          fill="url(#paint0_radial)"
          fillOpacity={0.2}
        />
        <Path
          d="M33.3562 16.8158C33.3643 16.6765 33.3684 16.5361 33.3684 16.3947C33.3684 12.4416 30.1637 9.23686 26.2105 9.23686C24.3082 9.23686 22.5793 9.97891 21.2973 11.1893C20.6489 11.0144 19.9669 10.9211 19.2631 10.9211C16.7177 10.9211 14.4575 12.142 13.036 14.0302C12.6027 13.9245 12.15 13.8684 11.6842 13.8684C8.54489 13.8684 6 16.4133 6 19.5526C6 23.423 9.07699 26.5 12.8727 26.5H23.6842C29.0326 26.5 33.3684 22.1642 33.3684 16.8158H33.3562Z"
          fill="white"
        />
        <Path
          d="M33.3562 16.8158C33.3643 16.6765 33.3684 16.5361 33.3684 16.3947C33.3684 12.4416 30.1637 9.23686 26.2105 9.23686C24.3082 9.23686 22.5793 9.97891 21.2973 11.1893C20.6489 11.0144 19.9669 10.9211 19.2631 10.9211C16.7177 10.9211 14.4575 12.142 13.036 14.0302C12.6027 13.9245 12.15 13.8684 11.6842 13.8684C8.54489 13.8684 6 16.4133 6 19.5526C6 23.423 9.07699 26.5 12.8727 26.5H23.6842C29.0326 26.5 33.3684 22.1642 33.3684 16.8158H33.3562Z"
          fill="url(#paint1_radial)"
          fillOpacity={0.2}
        />
      </G>
      <Defs>
        <RadialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(16.4261 9.92857) rotate(46.9847) scale(17.1935 12.2246)"
        >
          <Stop stopColor="#FBCA1C" />
          <Stop offset="1" stopColor="#E4750E" />
        </RadialGradient>
        <RadialGradient
          id="paint1_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(25.1579 10.9211) rotate(121.827) scale(21.5571 34.1759)"
        >
          <Stop stopOpacity="0" />
          <Stop offset="1" stopColor="#4D5E6F" />
        </RadialGradient>
      </Defs>
    </Svg>
  )
}
