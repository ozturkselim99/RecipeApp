import React from 'react';
import theme from '../utils/Theme';
import Box from './Box';
import {Image} from 'react-native';
import Text from './Text';
import Heart from './icons/Heart';
import {Dimensions} from 'react-native';
import Button from './Button';
import {S3Image} from 'aws-amplify-react-native';
import {useNavigation} from '@react-navigation/native';
import AuthContext from '../context/AuthContext';
import {createLike, deleteLike} from '../graphql/mutations';
import {API, graphqlOperation} from 'aws-amplify';

const width = Dimensions.get('window').width;

const RecipeCard = ({item, onPress, profile}) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [likeId, setLikeId] = React.useState('');
  const navigation = useNavigation();
  const {userId} = React.useContext(AuthContext);

  React.useEffect(() => {
    //TODO: BEĞENİ KONTROLÜ DÜZELTİLMELİ
    item.likes.items.map((like) => {
      if (like.user.id === userId) {
        setIsFavorite(true);
        setLikeId(like.id);
      }
    });
  }, [item.likes.items, userId]);

  const likeHandler = async () => {
    const likeRecipe = {
      userId: userId,
      recipeId: item.id,
    };

    await API.graphql(graphqlOperation(createLike, {input: likeRecipe})).then(
      (response) => {
        setLikeId(response.data.createLike.id);
        setIsFavorite(true);
      },
    );
  };

  const unLikeHandler = async () => {
    await API.graphql(graphqlOperation(deleteLike, {input: {id: likeId}})).then(
      () => {
        setIsFavorite(false);
        setLikeId('');
      },
    );
  };

  return (
    <Box flexDirection="column" width={width * 0.41}>
      {!profile && (
        <Box
          as={Button}
          justifyContent={'flex-start'}
          onPress={() => {
            if (userId === item.user.id) {
              navigation.navigate('ProfileTab', {
                screen: 'ProfileDetail',
                params: {id: userId, myProfile: true},
              });
            } else {
              navigation.navigate('Profile', {id: item.user.id});
            }
          }}>
          <S3Image
            imgKey={item.user.avatar}
            resizeMode="contain"
            style={{width: 31, height: 31, borderRadius: 11}}
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
      )}

      <Button mt={12} onPress={onPress}>
        <Box
          as={Button}
          onPress={isFavorite ? unLikeHandler : likeHandler}
          position="absolute"
          top={16}
          size="32px"
          zIndex={10}
          right={16}
          borderRadius="8px"
          bg="rgba(255, 255, 255, 0.6)"
          justifyContent="center"
          alignItems="center">
          <Heart
            stroke={!isFavorite && theme.colors.secondaryText}
            fill={isFavorite ? theme.colors.mainGreen : 'transparent'}
          />
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
