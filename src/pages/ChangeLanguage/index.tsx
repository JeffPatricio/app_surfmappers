import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { ms } from 'react-native-size-matters';
import Caret from '../../assets/caret-right.svg';
import Header from '../../components/Header';
import { goBack } from '../../navigators/navigationRef';
import {
  Container,
  ContainerBody,
  ContainerSafe,
  Option,
  Text,
  Title,
} from './styles';

const ChangeLanguage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    goBack();
  };

  return (
    <Container>
      <ContainerSafe>
        <Header title={t('headerTitles.changeLanguage')} />
        <ContainerBody>
          <Title>{t('pages.changeLanguage.selectLanguage')}</Title>
          <Option onPress={() => changeLanguage('en')}>
            <View>
              <Text>{t('languages.english')}</Text>
            </View>
            <Caret height={ms(18)} width={ms(18)} color="#666" />
          </Option>
          <Option onPress={() => changeLanguage('pt-BR')}>
            <View>
              <Text>{t('languages.portuguese')}</Text>
            </View>
            <Caret height={ms(18)} width={ms(18)} color="#666" />
          </Option>
        </ContainerBody>
      </ContainerSafe>
    </Container>
  );
};

export default ChangeLanguage;
