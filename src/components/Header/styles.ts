import { Platform } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: ${Platform.OS === 'ios' ? mvs(40) : mvs(50)}px;
  background-color: #ffffff;
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  padding: 0 ${ms(10)}px;
`;

export const Title = styled.Text`
  font-size: ${ms(17)}px;
  color: #000000;
  max-width: ${ms(200)}px;
  font-weight: bold;
  margin-left: ${ms(5)}px;
`;

export const PressableIcon = styled.Pressable``;
