import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ms } from 'react-native-size-matters';
import { Storie } from '..';
import { Container, Image, Name } from './styles';

interface Props {
  item: Storie;
}

const RenderItem = ({ item }: Props) => {
  return (
    <Container>
      <TouchableOpacity activeOpacity={0.5}>
        <LinearGradient
          colors={[
            '#00FFFF',
            '#17C8FF',
            '#329BFF',
            '#4C64FF',
            '#6536FF',
            '#8000FF',
          ]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={styles.gradient}
        >
          <Image source={{ uri: item.imageUrl }} resizeMode="cover" />
        </LinearGradient>
      </TouchableOpacity>
      <Name numberOfLines={1}>{item.username}</Name>
    </Container>
  );
};

const styles = StyleSheet.create({
  gradient: {
    height: ms(60),
    alignItems: 'center',
    justifyContent: 'center',
    width: ms(60),
    borderRadius: ms(30),
  },
});

export default RenderItem;
