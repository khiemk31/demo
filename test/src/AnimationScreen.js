import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export default function Animation(props) {
  return (
    <View style={styles.container}>
      {props.location != '' &&
      props.location != null &&
      props.location != undefined ? (
        <>
          <TextInput
            placeholder="Nhập tên"
            style={[
              styles.inputTxt,
              {top: props.location.y - 20, marginLeft: props.location.x + 30},
            ]}
          />
          <View
            style={[
              styles.containerHighlight,
              {
                marginTop: props.location.y,
                marginLeft: props.location.x,
              },
            ]}
          />
        </>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f3ff',
    padding: 30,
  },
  inputTxt: {
    position: 'absolute',
    width: 60,
    flex: 1,
    color: '#000',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#044579',
  },
  containerHighlight: {
    position: 'relative',
    width: 60,
    height: 40,
    backgroundColor: 'red',
  },
});
