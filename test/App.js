// import React from 'react';
// import {StyleSheet, View} from 'react-native';
// import HighlightExample from './src/highlight/highlight';

// const example =
//   'Khi người viết lần đầu biết đến câu nói nổi tiếng trên của nhà triết học lẫy lừng Nietzsche, ấn tượng đầu tiên của...';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <HighlightExample example={example} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableNativeFeedback} from 'react-native';
import HighlightExample from './src/highlight/highlight';

export default function App() {
  const [marginLeft, setMarginLeft] = useState(0);
  const [marginRight, setMarginRight] = useState(0);
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'blue',
            zIndex: 1,
            position: 'absolute',
          }}
        />
        {marginLeft != 0 && marginRight != 0 && marginLeft < marginRight ? (
          <View
            style={{
              height: '100%',
              width: marginRight - marginLeft,
              backgroundColor: 'red',
              marginLeft: marginLeft,
              zIndex: 2,
              position: 'absolute',
            }}
          />
        ) : (
          <></>
        )}
        {marginLeft != 0 && marginRight != 0 && marginLeft > marginRight ? (
          <View
            style={{
              height: '100%',
              width: marginLeft - marginRight,
              backgroundColor: 'red',
              marginLeft: marginRight,
              zIndex: 2,
              position: 'absolute',
            }}
          />
        ) : (
          <></>
        )}
        <Text
          onPress={() => {}}
          onPressIn={e => {
            setMarginLeft(0),
              setMarginRight(0),
              setMarginLeft(e.nativeEvent.locationX);
          }}
          onPressOut={e => setMarginRight(e.nativeEvent.locationX)}
          style={{color: 'white', zIndex: 3}}>
          If you want more flexibility than what is offered by a button
        </Text>
      </View>
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
