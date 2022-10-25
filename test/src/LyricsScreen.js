import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const listLyrics = [
  {id: 0, lyric: 'Ta mang cho em 1 đoá quỳnh'},
  {id: 1, lyric: 'Quỳnh Thơm hay môi em thơ'},
  {id: 2, lyric: 'Em mang cho ra 1 chút tình '},
  {id: 3, lyric: 'Miệng cười khúc khích trên lưng'},
  {id: 4, lyric: 'Đêm này đêm'},
  {id: 5, lyric: 'Buồn bã với những môi hôn'},
  {id: 6, lyric: 'Trong vườn trăng'},
  {id: 7, lyric: 'Vừa khép những đóa mong manh'},
];

export default function LyricsScreen(props) {
  const [listLocationY, setLocationY] = useState([]);
  const [location, setLocation] = useState('');

  function getLocation(id, x, y) {
    var location1 = {
      id: id,
      x: x * Number(id),
      y: y,
    };
    setLocation(location1);
    if (location != '' && location != null && location != undefined) {
      sendLocation(location);
    }
  }

  const sendLocation = location => {
    props.setLocation(location);
  };
  return (
    <View style={styles.container}>
      {listLyrics.map(map => {
        return (
          <TouchableOpacity
            style={styles.containerLyrics}
            key={map.id}
            onLayout={event => {
              var {x, y, width, height} = event.nativeEvent.layout;
              var locationY = Number(y) - Number(height);
              setLocationY(listLocationY => [...listLocationY, locationY]);
            }}
            onPress={() => {
              getLocation(map.id, 20, listLocationY[map.id]);
            }}>
            <Text style={styles.textLyrics}>{map.lyric}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0345432',
    padding: 30,
  },
  textLyrics: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  containerLyrics: {
    backgroundColor: 'red',
    marginTop: 5,
  },
});
