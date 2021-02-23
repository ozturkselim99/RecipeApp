import React from 'react';
import theme from '../utils/Theme';
import Box from './Box';
import {Image} from 'react-native';
import Text from './Text';
import Heart from './icons/Heart';
import {Dimensions} from 'react-native';
import Button from './Button';
import {Storage} from 'aws-amplify';

const width = Dimensions.get('window').width;

const RecipeCard = ({item, onPress}) => {
  const [avatar, setAvatar] = React.useState(null);

  React.useEffect(() => {
    const getAvatar = async () => {
      setAvatar(await Storage.get(item.user.avatar));
    };
    getAvatar();
  }, [item.user.avatar]);

  return (
    <Box flexDirection="column" width={width * 0.41}>
      <Box flexDirection="row" alignItems={'center'}>
        <Image
          source={{uri: avatar}}
          style={{width: 31, height: 31, borderRadius: 11}}
          resizeMode="contain"
        />
        <Text
          style={{textAlignVertical: 'center', textAlign: 'center'}}
          fontSize="12px"
          fontWeight={500}
          color={theme.colors.mainText}
          ml="10px"
          textAlign="justify">
          {item.user.fullname}
        </Text>
      </Box>
      <Button mt={12} onPress={onPress}>
        <Box
          position="absolute"
          top={16}
          size="32px"
          zIndex={10}
          right={16}
          borderRadius="8px"
          bg="rgba(255, 255, 255, 0.6)"
          justifyContent="center"
          alignItems="center">
          <Heart stroke="white" />
        </Box>
        <Image
          source={{uri: item.image[0]}}
          resizeMode="cover"
          style={{
            borderRadius: 16,
            flex: 1,
            position: 'relative',
            height: width * 0.41,
          }}
        />
      </Button>
      <Box mt={15}>
        <Text fontSize="12px" fontWeight={700} color={theme.colors.mainText}>
          {item.title}
        </Text>
        <Text
          fontSize="12px"
          fontWeight={700}
          color={theme.colors.secondaryText}
          mt="5px">
          {item.category.title}
        </Text>
      </Box>
    </Box>
  );
};

export default RecipeCard;
