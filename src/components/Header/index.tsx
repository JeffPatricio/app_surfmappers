import React from 'react';
import { Alert } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';
import Caret from '../../assets/caret-left.svg';
import Cart from '../../assets/cart.svg';
import Chat from '../../assets/chat.svg';
import { goBack } from '../../navigators/navigationRef';
import {
  Container,
  ContainerRow,
  Logo,
  PressableIcon,
  PressableOptionIcon,
  Title,
} from './styles';

interface HeaderProps {
  title: string;
  backIconHidden?: boolean;
  showLogo?: boolean;
  showCartIcon?: boolean;
  showChatIcon?: boolean;
}

const Header = ({
  title,
  backIconHidden,
  showLogo = false,
  showCartIcon = false,
  showChatIcon = false,
}: HeaderProps) => {
  return (
    <Container>
      <ContainerRow>
        {!backIconHidden && !showLogo && (
          <PressableIcon hitSlop={30} onPress={goBack}>
            <Caret height={mvs(22)} width={ms(22)} color="#000" />
          </PressableIcon>
        )}

        {!!showLogo && (
          <Logo
            source={require('../../assets/logo.png')}
            resizeMode="contain"
          />
        )}

        {!showLogo && <Title>{title}</Title>}
      </ContainerRow>
      <ContainerRow>
        {!!showCartIcon && (
          <PressableOptionIcon
            hitSlop={30}
            onPress={() => Alert.alert('Opa', 'Você cllicou')}
          >
            <Cart height={mvs(25)} width={ms(25)} color="#212121" />
          </PressableOptionIcon>
        )}

        {!!showChatIcon && (
          <PressableOptionIcon
            hitSlop={30}
            onPress={() => Alert.alert('Opa', 'Você cllicou')}
          >
            <Chat height={mvs(25)} width={ms(25)} color="#212121" />
          </PressableOptionIcon>
        )}
      </ContainerRow>
    </Container>
  );
};

export default Header;
