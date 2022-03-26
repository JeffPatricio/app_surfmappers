import React from 'react';
import { ms, mvs } from 'react-native-size-matters';
import Caret from '../../assets/caret-left.svg';
import { goBack } from '../../navigators/navigationRef';
import { Container, PressableIcon, Title } from './styles';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <Container>
      <PressableIcon hitSlop={30} onPress={goBack}>
        <Caret height={mvs(22)} width={ms(22)} color="#000" />
      </PressableIcon>

      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
