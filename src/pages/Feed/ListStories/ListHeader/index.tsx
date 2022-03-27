import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';
import Camera from '../../../../assets/camera_fill.svg';
import { Container, ContainerButton, Title } from './styles';

const ListHeader = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <TouchableOpacity activeOpacity={0.5}>
        <ContainerButton>
          <Camera height={mvs(22)} width={ms(22)} color={'#2587fe'} />
        </ContainerButton>
      </TouchableOpacity>
      <Title>{t('pages.feed.add')}</Title>
    </Container>
  );
};

export default ListHeader;
