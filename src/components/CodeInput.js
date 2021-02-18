import Input from './Input';
import theme from '../utils/Theme';
import * as React from 'react';

export default function CodeInput(props) {
  const [isFocus, setIsFocus] = React.useState(false);
  const {inputRef} = props;
  return (
    <Input
      style={{
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 24,
        shadowOffset: {
          width: 0,
          height: 4,
        },
      }}
      {...props}
      ref={inputRef}
      bg="white"
      height={52}
      width={52}
      color={theme.colors.mainText}
      borderWidth={isFocus ? 2 : 1}
      fontSize={34}
      borderColor={
        isFocus ? theme.colors.mainGreen : theme.colors.secondaryText
      }
      textAlign="center"
      borderRadius="20px"
      keyboardType="numeric"
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      maxLength={1}
    />
  );
}
