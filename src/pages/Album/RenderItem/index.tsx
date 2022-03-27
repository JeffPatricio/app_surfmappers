import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';
import { AlbumItem } from '..';
import Images from '../../../assets/images.svg';
import { Container, ContainerIcon, Image } from './styles';

interface Props {
  item: AlbumItem;
}

const RenderItem = ({ item }: Props) => {
  return (
    <Container>
      <TouchableOpacity activeOpacity={0.5}>
        <Image resizeMode="cover" source={{ uri: item.imageUrl }} />
      </TouchableOpacity>

      {/* load only in some components */}
      {item.imagesCount % 2 === 0 && (
        <ContainerIcon>
          <Images height={mvs(16)} width={ms(16)} color={'#fff'} />
        </ContainerIcon>
      )}
    </Container>
  );
};

export default RenderItem;
