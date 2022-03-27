import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';
import { AlbumItem } from '..';
import Camera from '../../../assets/camera_outline.svg';
import Dots from '../../../assets/dots.svg';
import Heart from '../../../assets/heart.svg';
import Share from '../../../assets/share.svg';
import { navigate } from '../../../navigators/navigationRef';
import {
  Container,
  ContainerDots,
  ContainerRow,
  Description,
  Dot,
  Image,
  PressableCameraIcon,
  PressableOptionIcon,
  Title,
  UserName,
} from './styles';

interface Props {
  item: AlbumItem;
}

const RenderItem = ({ item }: Props) => {
  const navigateToAlbum = () => {
    navigate('album');
  };

  return (
    <Container>
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
      <TouchableOpacity activeOpacity={0.5} onPress={navigateToAlbum}>
        <Image resizeMode="cover" source={{ uri: item.imageUrl }} />
      </TouchableOpacity>
      <ContainerRow>
        <ContainerRow>
          <PressableOptionIcon>
            <Heart height={mvs(20)} width={ms(20)} color="#212121" />
          </PressableOptionIcon>
          <PressableOptionIcon>
            <Share height={mvs(25)} width={ms(25)} color="#212121" />
          </PressableOptionIcon>
        </ContainerRow>
        <ContainerDots>
          <Dot />
          <Dot />
          <Dot />
          <Dot active />
          <Dot />
          <Dot />
          <Dot />
        </ContainerDots>
        <ContainerRow>
          <PressableCameraIcon>
            <Camera height={mvs(23)} width={ms(23)} color="#212121" />
          </PressableCameraIcon>
          <UserName numberOfLines={1}>yurygargarin</UserName>
        </ContainerRow>
      </ContainerRow>
    </Container>
  );
};

export default RenderItem;
