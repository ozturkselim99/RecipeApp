import Input from './Input';
import theme from '../utils/Theme';
import Box from './Box';
import * as React from 'react';
import Button from './Button';

function FormInput({
  LeftIcon,
  RightIcon,
  placeholderText,
  onChangeText,
  value,
  setIsValid,
  onFocus,
  pattern,
  password,
  inputRef,
  backgroundColor,
  borderWidth,
  keyboardType,
  autoCapitalize,
}) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isFocus, setIsFocus] = React.useState(false);

  const handleValidation = (_value) => {
    if (!pattern) {
      return true;
    }
    // string pattern, one validation rule
    if (typeof pattern === 'string') {
      const condition = new RegExp(pattern, 'g');
      return condition.test(_value);
    }
    // array patterns, multiple validation rules
    if (typeof pattern === 'object') {
      const conditions = pattern.map((rule) => new RegExp(rule, 'g'));
      return conditions.map((condition) => condition.test(value));
    }
  };
  const onChange = (value) => {
    if (pattern !== null) {
      const isValid = handleValidation(value);
      setIsValid && setIsValid(isValid);
    }
    onChangeText && onChangeText(value);
  };

  const _onFocus = () => {
    setIsFocus(true);
    onFocus && onFocus();
  };

  return (
    <Box position="relative">
      <Input
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        secureTextEntry={password ? !showPassword : false}
        value={value}
        onChangeText={(text) => onChange(text)}
        bg={backgroundColor ? backgroundColor : 'white'}
        height={56}
        ref={inputRef}
        onFocus={_onFocus}
        onBlur={() => setIsFocus(false)}
        color={theme.colors.mainText}
        borderWidth={borderWidth == null ? 1 : borderWidth}
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
        <Box position="absolute" left={24} top={16}>
          <LeftIcon height={5} />
        </Box>
      )}
      {RightIcon && (
        <Box position="absolute" right={24} top={16}>
          <Button onPress={() => setShowPassword(!showPassword)}>
            <RightIcon />
          </Button>
        </Box>
      )}
    </Box>
  );
}
export default FormInput;
