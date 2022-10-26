import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Animation(props) {
  return (
    <View style={styles.container}>
      {props.listLocation.map(location => {
        return (
          <>
            <View
              style={[
                styles.containerHighlight,
                {
                  top: location.y,
                  marginLeft: 10 + 90 * Number(location.id % 6),
                },
              ]}>
              <Text
                style={[styles.txtTitleNote]}
                onPress={() => {
                  console.log('Nhajap teen nhap ten');
                }}>
                Nhập tên
              </Text>
            </View>
          </>
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
    position: 'absolute',
    width: 60,
    height: 100,
    backgroundColor: 'red',
  },
});
