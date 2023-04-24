import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { colors } from '../global/style';

const carouselData = [
  {
    id: 1,
    image: require('../../assets/OfferSliderImages/img1.png'),
  },
  {
    id: 2,
    image: require('../../assets/OfferSliderImages/img2.png'),
  },
  {
    id: 3,
    image: require('../../assets/OfferSliderImages/img3.png'),
  },
];

const OfferSlider = () => {
  return (
    <View>
      <View style={styles.offerSlider}>
        <Swiper
          autoplay={true}
          loop={true}
          autoplayTimeout={7}
          showsButtons={true}
          dotColor={colors.text2}
          activeDotColor={colors.text1}
          nextButton={<Text style={styles.buttonText}>›</Text>}
          prevButton={<Text style={styles.buttonText}>‹</Text>}
        >
          {carouselData?.map((item) => (
            <View key={item.id} style={styles.slide}>
              <Image source={item.image} style={styles.image} />
            </View>
          ))}
        </Swiper>
      </View>
    </View>
  );
};

export default OfferSlider;

const styles = StyleSheet.create({
  offerSlider: {
    width: '100%',
    height: 200,
    backgroundColor: colors.col1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  slide: {
    width: '100%',
    height: 200,
    backgroundColor: colors.col1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  buttonText: {
    color: colors.text1,
    fontSize: 40,
    fontWeight: 500,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 40,
    height: 40,
    textAlign: 'center',
    lineHeight: 40,
  },
});
