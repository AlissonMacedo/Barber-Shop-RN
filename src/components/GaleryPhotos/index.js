import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
// import { Container } from './styles';

export default function GaleryPhotos({ ImagemUri, texto, tempo, preco }) {
  return (
    <>
      <View
        style={{
          height: 130,
          width: 130,
          marginLeft: 10,
          marginRight: 7,
          borderWidth: 0.5,
          borderColor: '#dddddddd',
        }}>
        <View style={{ flex: 2 }}>
          <Image
            source={ImagemUri}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover',
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            paddingLeft: 7,
            paddingTop: 7,
            backgroundColor: '#fff',
          }}>
          <Text style={{ fontSize: 15 }}>{texto}</Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 3,
              marginLeft: 0,
              marginRight: 10,
            }}>
            <Text style={{ fontSize: 10 }}>{tempo}</Text>
            <Text style={{ fontSize: 10 }}>{preco}</Text>
          </View>
        </View>
      </View>
    </>
  );
}
