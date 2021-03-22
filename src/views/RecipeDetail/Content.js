import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import Animated from 'react-native-reanimated';

import {HEADER_IMAGE_HEIGHT} from './HeaderImage';
import theme from '../../utils/Theme';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Text from '../../components/Text';
import {Minus, Plus, MilkBottle} from '../../components/icons';
import Donut from '../../components/DonutChart';

const {height} = Dimensions.get('window');

const ingredientsData = [
  {
    id: 1,
    name: 'Süt',
    count: '1 Litle',
    icon: 'MilkBottle',
  },
  {
    id: 2,
    name: 'Su',
    count: '1 Litle',
    icon: 'MilkBottle',
  },
  {
    id: 3,
    name: 'Çikolata',
    count: '1 Adet',
    icon: 'MilkBottle',
  },
  {
    id: 4,
    name: 'Un',
    count: '1 Kilo',
    icon: 'MilkBottle',
  },
  {
    id: 5,
    name: 'Yumurta',
    count: '5 Adet',
    icon: 'MilkBottle',
  },
];

const steps = [
  {
    id: 0,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia venenatis mauris, sed rutrum ligula molestie ut. ',
  },
  {
    id: 1,
    content:
      'Aliquam erat volutpat. Aenean hendrerit turpis et erat rutrum, lacinia rhoncus mi finibus. Duis condimentum ullamcorper odio vel iaculis. Aenean mollis sapien tellus, ac imperdiet elit dapibus non. Donec porta viverra urna, et ultrices ex tristique et. Integer eget orci ultrices, cursus augue sit amet, semper massa.',
  },
  {
    id: 2,
    content:
      'Duis condimentum ullamcorper odio vel iaculis. Aenean mollis sapien tellus, ac imperdiet elit dapibus non. Donec porta viverra urna, et ultrices ex tristique et. Integer eget orci ultrices, cursus augue sit amet, semper massa.',
  },
  {
    id: 3,
    content: 'Integer eget orci ultrices, cursus augue sit amet, semper massa.',
  },
  {
    id: 4,
    content:
      'Duis condimentum ullamcorper odio vel iaculis. Aenean mollis sapien tellus, ac imperdiet elit dapibus non. Donec porta viverra urna, et ultrices ex tristique et. Integer eget orci ultrices, cursus augue sit amet, semper massa.',
  },
];

const menu = [
  {
    name: 'Ingradients',
    Component: () => <Ingredients />,
  },
  {name: 'Steps', Component: () => <Steps />},
  {name: 'Nutrition Facts', Component: () => <NutritionFacts />},
  {name: 'Gimbap Sushi', Component: () => <Ingredients />},
];

const data = [
  {
    percentage: 630,
    color: 'tomato',
    max: 630,
    title: 'Kalori',
  },
  {
    percentage: 14,
    color: 'skyblue',
    max: 20,
    title: 'Protein',
  },
  {
    percentage: 92,
    color: 'gold',
    max: 100,
    title: 'Yağ',
  },
  {
    percentage: 240,
    color: '#222',
    max: 500,
    title: 'Karbonhidrat',
  },
];

export const defaultTabs = menu.map(({name}) => ({name, anchor: 0}));

const styles = StyleSheet.create({
  section: {
    padding: 16,
  },
  placeholder: {
    height: HEADER_IMAGE_HEIGHT,
  },
  text: {
    fontSize: 14,
  },
  title1: {
    fontSize: 24,
  },
  title2: {
    fontSize: 16,
  },
  divider: {
    height: 2,
    backgroundColor: '#e2e3e4',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  ratings: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  link: {
    color: '#247A00',
  },
  item: {
    borderBottomColor: '#e2e3e4',
    borderBottomWidth: 1,
    marginTop: 16,
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    marginBottom: 8,
  },
  price: {
    marginBottom: 16,
  },
});

function Ingredients() {
  const [count, setCount] = React.useState(1);

  const renderItem = (item) => {
    return (
      <Box
        flexDirection={'row'}
        flexGrow={1}
        flexShrink={1}
        flexBasis={'50%'}
        mt={12}>
        <MilkBottle fill={theme.colors.mainGreen} width={27} height={27} />
        <Box>
          <Text>{item.name}</Text>
          <Text fontSize={10}>{item.count}</Text>
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      <Box
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Text>{count} Serve</Text>
        <Box flexDirection={'row'}>
          <Button
            onPress={() => setCount(count + 1)}
            borderWidth={1}
            borderColor={theme.colors.mainGreen}
            borderRadius={theme.radii.full}
            justifyContent={'center'}
            alignItems={'center'}
            px={2}
            mr={6}>
            <Plus height={18} width={18} color={theme.colors.mainGreen} />
          </Button>
          <Button
            onPress={() => setCount(count - 1)}
            borderColor={theme.colors.mainGreen}
            borderWidth={1}
            borderRadius={theme.radii.full}
            justifyContent={'center'}
            alignItems={'center'}
            px={2}>
            <Minus height={18} width={18} color={theme.colors.mainGreen} />
          </Button>
        </Box>
      </Box>
      <Box flexDirection={'row'} flexWrap={'wrap'}>
        {ingredientsData.map((item) => renderItem(item))}
      </Box>
    </Box>
  );
}

function Steps() {
  return (
    <>
      {steps.map((item) => (
        <Box flexDirection={'row'} mt={15}>
          <Box
            borderRadius="12px"
            width={24}
            height={23}
            bg={theme.colors.mainText}
            alignItems="center"
            justifyContent="center">
            <Text color="white">{item.id + 1}</Text>
          </Box>
          <Text ml={10}>{item.content}</Text>
        </Box>
      ))}
    </>
  );
}

function NutritionFacts() {
  return (
    <Box
      mt={10}
      flexDirection={'row'}
      justifyContent={'space-evenly'}
      flexWrap={'wrap'}
      alignItems={'center'}>
      {data.map((p, i) => {
        return (
          <Box alignItems={'center'}>
            <Donut
              key={i}
              percentage={p.percentage}
              color={p.color}
              delay={3000}
              max={p.max}
            />
            <Text>{p.title}</Text>
          </Box>
        );
      })}
    </Box>
  );
}

export default ({onMeasurement}) => {
  return (
    <>
      <View style={styles.placeholder} />
      <Animated.View style={styles.section}>
        <Box flexDirection={'row'} alignItems={'center'}>
          <Image
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/1395220412724883457/vb0KUuq5_400x400.jpg',
            }}
            style={{
              width: 50,
              height: 50,
              borderRadius: theme.radii.full,
            }}
          />
          <Box>
            <Text color={'black'} fontWeight={500} fontSize={20} ml={10}>
              Furkan Ergün
            </Text>
            <Text color={'gray'} fontSize={12} ml={10}>
              123 Recipes - From London
            </Text>
          </Box>
        </Box>
        <Box mt={15}>
          <Box flexDirection={'row'} justifyContent={'space-between'}>
            <Text
              fontWeight={'bold'}
              color={theme.colors.mainText}
              fontSize={20}>
              Reviews
            </Text>
            <Button>
              <Text color={'gray'} fontSize={12}>
                See All
              </Text>
            </Button>
          </Box>
          <Text color={'gray'} fontSize={12}>
            12 Images • 27 Comments
          </Text>
          <Box mt={10} flexDirection={'row'} justifyContent={'space-between'}>
            <Image
              source={{
                uri:
                  'https://im.haberturk.com/2020/11/28/ver1606574471/2885324_810x458.jpg',
              }}
              style={{
                height: 60,
                width: 60,
                borderRadius: theme.radii.input,
              }}
            />
            <Image
              source={{
                uri:
                  'https://www.gursesgazetesi.com/images/haberler/2021/05/manti-nasil-pisirilir-manti-evde-nasil-yapilir.jpg',
              }}
              style={{
                height: 60,
                width: 60,
                borderRadius: theme.radii.input,
              }}
            />
            <Image
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdsP2vuEnQhpAsmMRQSWPE-_s5rthjai5hVH8sOnVyQaPde45Ie9bUYwPPpDUNGqQpN_w&usqp=CAU',
              }}
              style={{
                height: 60,
                width: 60,
                borderRadius: theme.radii.input,
              }}
            />
            <Image
              source={{
                uri:
                  'https://i2.milimaj.com/i/milliyet/75/0x0/5fb2a95055428523348c4936.jpg',
              }}
              style={{
                height: 60,
                width: 60,
                borderRadius: theme.radii.input,
              }}
            />
            <ImageBackground
              source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Mant%C4%B1.jpg/1200px-Mant%C4%B1.jpg',
              }}
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: theme.radii.input,
              }}>
              <Box
                position={'absolute'}
                top={0}
                right={0}
                bottom={0}
                left={0}
                bg={'black'}
                opacity={0.3}
              />
              <Text color={'white'} fontSize={20}>
                + 8
              </Text>
            </ImageBackground>
          </Box>
        </Box>
      </Animated.View>
      <View style={styles.divider} />
      {menu.map(({name, Component}, index) => (
        <View
          style={styles.section}
          key={index}
          onLayout={({
            nativeEvent: {
              layout: {y: anchor},
            },
          }) => onMeasurement(index, {name, anchor: anchor - 142})}>
          <Text style={styles.title1}>{name}</Text>
          <Component />
        </View>
      ))}
      <View style={{height}} />
    </>
  );
};
