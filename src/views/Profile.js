import * as React from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from 'react-native';
import selo from '../img/selo.jpg';
import theme from '../utils/Theme';
import {Share2} from '../components/icons';
import RecipeCard from '../components/RecipeCard';
import {ScrollView} from 'react-native-gesture-handler';

export default function ProfileScreen() {
  return (
    <Box as={SafeAreaView} bg={'white'} flex={1} position="relative">
      <Box position="absolute" top={24} right={24}>
        <Share2 stroke={theme.colors.mainText} />
      </Box>
      <Box alignItems="center">
        <Image
          source={selo}
          style={{width: 100, height: 100, borderRadius: 9999, marginTop: 56}}
        />
        <Text
          fontWeight={700}
          fontSize={17}
          color={theme.colors.mainText}
          mt="24px">
          Selim Öztürk
        </Text>
      </Box>
      <Box flexDirection="row" mt="24px" justifyContent="space-around">
        <Box flexDirection="column" alignItems={'center'}>
          <Text fontWeight={700} fontSize={17} color={theme.colors.mainText}>
            32
          </Text>
          <Text
            mt={2}
            fontWeight={500}
            fontSize={15}
            color={theme.colors.secondaryText}>
            Recipes
          </Text>
        </Box>
        <Box flexDirection="column" alignItems={'center'}>
          <Text fontWeight={700} fontSize={17} color={theme.colors.mainText}>
            782
          </Text>
          <Text
            mt={2}
            fontWeight={500}
            fontSize={15}
            color={theme.colors.secondaryText}>
            Following
          </Text>
        </Box>
        <Box flexDirection="column" alignItems={'center'}>
          <Text fontWeight={700} fontSize={17} color={theme.colors.mainText}>
            1287
          </Text>
          <Text
            mt={2}
            fontWeight={500}
            fontSize={15}
            color={theme.colors.secondaryText}>
            Followers
          </Text>
        </Box>
      </Box>
      <Box mt={24} height={8} bg={theme.colors.mainGray} />
      <ScrollView>
        <Box flexDirection="row" px={24} flexWrap="wrap">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </Box>
      </ScrollView>
    </Box>
  );
}
