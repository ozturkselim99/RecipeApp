import * as React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Box from '../components/Box';
import Text from '../components/Text';
import theme from '../utils/Theme';
import Notification from '../components/Notification';

const sampleData = [
  {
    id: 0,
    user: {
      fullname: 'Furkan Ergün',
      avatar: require('../img/fuku.jpg'),
    },
    type: 'follow',
    time: '10:00',
  },
  {
    id: 1,
    user: {
      fullname: 'Ahmet Selim Öztürk',
      avatar: require('../img/crazy.jpg'),
    },
    type: 'like',
    recipe: {
      title: 'Bol Soslu Hatay Dürüm',
      image: require('../img/durum.jpeg'),
    },
    time: '10:00',
  },
];

export default function NotificationScreen() {
  const renderItem = ({item}) => {
    return <Notification item={item} />;
  };

  const renderSeparator = () => {
    return (
      <Box
        style={{
          marginTop: 15,
          marginBottom: 15,
          height: 1,
          width: '100%',
          backgroundColor: theme.colors.lightGray,
        }}
      />
    );
  };
  return (
    <Box as={SafeAreaView} bg={'white'} flex={1}>
      <Box px={24}>
        <Text
          fontSize="30px"
          fontWeight={700}
          color={theme.colors.mainText}
          mt={12}
          mb={30}>
          Notifications
        </Text>
        <FlatList
          data={sampleData}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
          keyExtractor={(item) => item.id}
        />
      </Box>
    </Box>
  );
}
