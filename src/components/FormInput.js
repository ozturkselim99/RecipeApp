import Input from './Input';
import theme from '../utils/Theme';
import Box from './Box';
import Text from './Text';
import * as React from 'react';
import Button from './Button';

function FormInput({
  LeftIcon,
  RightIcon,
  placeholderText,
  onChangeText,
  value,
  setIsValid,
  pattern,
  password,
}) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isFocus, setIsFocus] = React.useState(false);

  const handleValidation = (value) => {
    if (!pattern) {
      return true;
    }
    // string pattern, one validation rule
    if (typeof pattern === 'string') {
      const condition = new RegExp(pattern, 'g');
      return condition.test(value);
    }
    // array patterns, multiple validation rules
    if (typeof pattern === 'object') {
      const conditions = pattern.map((rule) => new RegExp(rule, 'g'));
      return conditions.map((condition) => condition.test(value));
    }
  };

  const onChange = (value) => {
    const isValid = handleValidation(value);
    setIsValid && setIsValid(isValid);
    onChangeText && onChangeText(value);
  };

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
        secureTextEntry={password ? !showPassword : false}
        value={value}
        onChangeText={(text) => onChange(text)}
        bg="white"
        height={56}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        color={theme.colors.mainText}
        borderWidth={1}
        fontSize={15}
        borderColor={
          isFocus ? theme.colors.mainGreen : theme.colors.borderColor
        }
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
          <Button onPress={() => setShowPassword(!showPassword)}>
            <RightIcon />
          </Button>
        </Box>
      )}
    </Box>
  );
}
export default FormInput;
