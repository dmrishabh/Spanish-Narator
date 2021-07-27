import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

// import Sound from 'react-native-sound';
var Sound = require('react-native-sound');
const soundList = [
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
];

const App = () => {
  const playSound = sound => {
    const soundVar = new Sound(sound, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound');
      }
    });

    setTimeout(() => {
      soundVar.play();
    }, 600);

    soundVar.release();
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={'#1b262c'} />
      <Image source={require('./assets/logo.png')} style={styles.logo}></Image>

      <View style={styles.gridView}>
        {soundList.map(sound => (
          <TouchableOpacity key={sound} style={styles.touch} onPress={()=>{playSound(sound)}} >
            <Text style={styles.text}>{sound}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },

  logo: {
    alignSelf: 'center',
    marginTop: 20,
    height: 180,
    width: 180,
  },

  gridView: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  touch: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    width: '46%',
    marginVertical: 6,
    backgroundColor: '#0f4c75',
    borderRadius: 5,
    shadowColor: '#393e46',
    elevation: 5,
    shadowRadius: 4,
  },
  text: {
    color: '#ff4301',
    fontSize: 50,
  },
});
