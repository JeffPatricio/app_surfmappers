import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';
import Camera from '../../../assets/camera.svg';
import { Container, ContainerButton, Title } from './styles';

const ListHeader = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <TouchableOpacity activeOpacity={0.5}>
        <ContainerButton>
          <Camera height={mvs(26)} width={ms(26)} color={'#2587fe'} />
        </ContainerButton>
      </TouchableOpacity>
      <Title>{t('pages.feed.add')}</Title>
    </Container>
  );
};

export default ListHeader;
