import React from 'react';
import {StyleSheet, View} from 'react-native';
import HighlightExample from './src/highlight/highlight';

const example =
  'Khi người viết lần đầu biết đến câu nói nổi tiếng trên của nhà triết học lẫy lừng Nietzsche, ấn tượng đầu tiên của...';

export default function App() {
  return (
    <View style={styles.container}>
      <HighlightExample example={example} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
