import React from 'react';
import { View } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';
import Camera from '../../../assets/camera_outline.svg';
import CaretDown from '../../../assets/caret_down.svg';
import Chat from '../../../assets/chat_fill.svg';
import Funnel from '../../../assets/funnel.svg';
import Share from '../../../assets/share.svg';
import {
  ButtonCamera,
  ButtonChat,
  ButtonFilters,
  ButtonFollowing,
  ButtonShare,
  Container,
  ContainerGroupRow,
  ContainerIconFilter,
  ContainerTitleRow,
  Count,
  Description,
  Name,
  TextButton,
  TextButtonFilters,
  Time,
  Title,
} from './styles';

const RenderHeader = () => {
  return (
    <Container>
      <ContainerTitleRow>
        <View>
          <Title>Praia do Meio, Natal-RN</Title>
          <Description>Hoje, Sábado 17 de abril 2021 • 07h às 10h</Description>
        </View>
        <ButtonShare>
          <Share height={mvs(15)} width={ms(15)} color={'#666'} />
        </ButtonShare>
      </ContainerTitleRow>
      <ContainerTitleRow>
        <ContainerGroupRow>
          <ButtonCamera>
            <Camera height={mvs(20)} width={ms(20)} color={'#666'} />
          </ButtonCamera>
          <Name>Manoel</Name>
        </ContainerGroupRow>
        <ContainerGroupRow>
          <ButtonChat>
            <Chat height={mvs(18)} width={ms(18)} color={'#666'} />
          </ButtonChat>
          <ButtonFollowing>
            <TextButton>Seguindo</TextButton>
          </ButtonFollowing>
        </ContainerGroupRow>
      </ContainerTitleRow>
      <ContainerTitleRow alignCenter paddingVReduced>
        <Count>260 fotos</Count>
        <ButtonFilters>
          <ContainerIconFilter>
            <Funnel height={mvs(15)} width={ms(15)} color={'#fff'} />
          </ContainerIconFilter>
          <TextButtonFilters>Filtrar por surfista</TextButtonFilters>
          <CaretDown height={mvs(12)} width={ms(12)} color={'#2587fe'} />
        </ButtonFilters>
      </ContainerTitleRow>
      <ContainerTitleRow paddingVReduced>
        <Time>6h -7h</Time>
      </ContainerTitleRow>
    </Container>
  );
};

export default RenderHeader;
