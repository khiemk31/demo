import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {DragResizeBlock} from 'react-native-drag-resize';
export default function Animation(props) {
  const [resize, setResize] = useState(50);
  return (
    <View style={styles.container}>
      {props.listLocation.map(location => {
        return (
          <View
            style={{
              position: 'absolute',
              top: location.y,
              marginLeft: 10 + 90 * Number(location.id % 6),
            }}>
            <DragResizeBlock
              isDraggable={false}
              key={location.id}
              y={70}
              h={50}
              onResize={value => setResize(value)}>
              <View style={[styles.containerHighlight]}>
                <Text
                  style={[styles.txtTitleNote]}
                  onPress={() => {
                    console.log('Nhập tên');
                  }}>
                  Nhập tên
                </Text>
              </View>
            </DragResizeBlock>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f3ff',
    padding: 30,
    textAlign: 'center',
  },
  txtTitleNote: {
    textAlign: 'center',
    position: 'absolute',
    width: 60,
    color: '#000',
    fontSize: 14,
    top: -20,
  },
  containerHighlight: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
});
