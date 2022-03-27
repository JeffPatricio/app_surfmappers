import { Platform } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: ${Platform.OS === 'ios' ? mvs(50) : mvs(60)}px;
  background-color: #ffffff;
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${ms(15)}px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${ms(17)}px;
  color: #000000;
  font-weight: bold;
  margin-left: ${ms(5)}px;
`;

export const PressableIcon = styled.Pressable`
  margin-left: -${ms(5)}px;
`;

export const PressableOptionIcon = styled.Pressable`
  margin-left: ${ms(15)}px;
  position: relative;
`;

export const Badge = styled.View`
  position: absolute;
  width: ${ms(12)}px;
  height: ${ms(12)}px;
  border-radius: ${ms(6)}px;
  right: -2px;
  top: 0px;
  border: 2px solid #fff;
  background-color: #f00;
  z-index: 2;
`;

export const Logo = styled.Image`
  width: ${ms(140)}px;
  height: ${mvs(40)}px;
`;
