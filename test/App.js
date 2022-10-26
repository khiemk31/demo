import React, {useState, useRef} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Animation from './src/AnimationScreen';
import LyricsScreen from './src/LyricsScreen';

export default function App() {
  const [listLocation, setListLocation] = useState([]);
  const getLocation = location => {
    if (listLocation.length > 0) {
      for (item of listLocation) {
        if (item.id != location.id) {
          setListLocation([...listLocation, location]);
        } else {
          console.log('Trùng rồi');
        }
      }
    } else {
      setListLocation([location]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{width: '50%', flex: 1}}>
        <LyricsScreen setLocation={getLocation} />
      </View>
      <View style={{width: '50%', flex: 1}}>
        <Animation listLocation={listLocation} />
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
