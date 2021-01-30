import Input from './Input';
import theme from '../utils/Theme';
import Box from './Box';
import Text from './Text';
import * as React from 'react';

function FormInput({LeftIcon, RightIcon, placeholderText}) {
  return (
    <Box position="relative" px={24}>
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
        bg="white"
        height={56}
        color={theme.colors.mainText}
        borderWidth={1}
        fontSize={15}
        borderColor={theme.colors.borderColor}
        placeholder={placeholderText}
        placeholderTextColor={theme.colors.secondaryText}
        pl={56}
        borderRadius={theme.radii.input}
      />
      {LeftIcon && (
        <Box position="absolute" left={48} top={16}>
          <LeftIcon height={5} />
        </Box>
      )}
      {RightIcon && (
        <Box position="absolute" right={50} top={16}>
          <RightIcon />
        </Box>
      )}
    </Box>
  );
}
export default FormInput;
