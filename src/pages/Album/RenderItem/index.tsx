import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AlbumItem } from '..';
import { Container, Image } from './styles';

interface Props {
  item: AlbumItem;
}

const RenderItem = ({ item }: Props) => {
  return (
    <Container>
      <TouchableOpacity activeOpacity={0.5}>
        <Image resizeMode="cover" source={{ uri: item.imageUrl }} />
      </TouchableOpacity>
    </Container>
  );
};

export default RenderItem;
