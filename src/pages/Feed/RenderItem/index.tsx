import React from 'react';
import { View } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';
import { AlbumItem } from '..';
import Dots from '../../../assets/dots.svg';
import { navigate } from '../../../navigators/navigationRef';
import { Container, ContainerRow, Description, Image, Title } from './styles';

interface Props {
  item: AlbumItem;
}

const RenderItem = ({ item }: Props) => {
  const navigateToAlbum = () => {
    navigate('album');
  };

  return (
    <Container activeOpacity={0.5} onPress={navigateToAlbum}>
      <ContainerRow>
        <View>
          <Title numberOfLines={1}>
            Barra da Tijuca - Posto 6 - Rio de Janeiro Brasil
          </Title>
          <Description numberOfLines={1}>
            Sábado 17 de abril 2021 • 07h às 10h
          </Description>
        </View>
        <Dots height={mvs(22)} width={ms(22)} color="#212121" />
      </ContainerRow>
      <Image resizeMode="cover" source={{ uri: item.imageUrl }} />
    </Container>
  );
};

export default RenderItem;
