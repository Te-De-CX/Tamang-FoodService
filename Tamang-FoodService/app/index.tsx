import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

const App = () => {
  const slides = [
    {
      id: 1,
      text: 'Welcome to My App!',
      image: require('@/assets/images/plate1.png'), // Update the path to your image
    },
    {
      id: 2,
      text: 'Explore Amazing Features',
      image: require('@/assets/images/plate2.png'), // Update the path to your image
    },
    {
      id: 3,
      text: 'Get Started Today',
      image: require('@/assets/images/plate3.png'), // Update the path to your image
    },
  ];

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        loop={false}
        autoplay={false}
        showsPagination={true}
        removeClippedSubviews={false}
        scrollEnabled={true}
        bounces={true}
        horizontal={true}
        index={0}
        onIndexChanged={(index) => console.log('Current slide:', index)}
      >
        {slides.map((slide) => (
          <View key={slide.id} style={styles.slide}>
            <Image source={slide.image} style={styles.image} resizeMode="contain" />
            <Text style={styles.text}>{slide.text}</Text>
          </View>
        ))}
      </Swiper>

      {/* Login/Signup Button on the last slide */}
      <TouchableOpacity
        style={styles.button}
        // onPress={() => navigation.navigate('Login')} // Ensure navigation is passed as a prop
      >
        <Text style={styles.buttonText}>Login / Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: width * 0.8, // 80% of screen width
    height: height * 0.5, // 50% of screen height
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: '#000',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  button: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;