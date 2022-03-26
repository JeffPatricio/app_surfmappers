import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { ms } from 'react-native-size-matters';
import Caret from '../../assets/caret-right.svg';
import Header from '../../components/Header';
import { navigate } from '../../navigators/navigationRef';
import {
  Container,
  ContainerBody,
  ContainerSafe,
  Instructions,
  Link,
  Text,
} from './styles';

const Profile = () => {
  const { t } = useTranslation();

  const navigateToChangeLanguage = () => {
    navigate('changeLanguage');
  };

  return (
    <Container>
      <ContainerSafe>
        <Header title={t('headerTitles.profile')} />
        <ContainerBody>
          <Link onPress={navigateToChangeLanguage}>
            <View>
              <Text>{t('pages.profile.language')}</Text>
              <Instructions>{t('pages.profile.changeLanguage')}</Instructions>
            </View>
            <Caret height={ms(18)} width={ms(18)} color="#666" />
          </Link>
        </ContainerBody>
      </ContainerSafe>
    </Container>
  );
};

export default Profile;
