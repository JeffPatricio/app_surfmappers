import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import ListStories from '../../components/ListStories';
import { Container, ContainerBody, ContainerSafe } from './styles';

const Feed = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <ContainerSafe>
        <Header
          title={t('headerTitles.profile')}
          showLogo
          showCartIcon
          showChatIcon
        />
        <ContainerBody>
          <ListStories />
        </ContainerBody>
      </ContainerSafe>
    </Container>
  );
};

export default Feed;
