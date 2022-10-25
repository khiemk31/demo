import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Animation from './src/AnimationScreen';
import LyricsScreen from './src/LyricsScreen';

export default function App() {
  const [location, setLocation] = useState('');
  const getLocation = location => {
    setLocation(location);
  };

  return (
    <View style={styles.container}>
      <View style={{width: '50%', flex: 1}}>
        <LyricsScreen setLocation={getLocation} />
      </View>
      <View style={{width: '50%', flex: 1}}>
        <Animation location={location} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
});
