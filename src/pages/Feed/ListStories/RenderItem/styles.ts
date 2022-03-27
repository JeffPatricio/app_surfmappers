import { ms, mvs } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  margin-right: ${ms(10)}px;
`;

export const Image = styled.Image`
  width: ${ms(57)}px;
  height: ${ms(57)}px;
  border-radius: ${ms(29)}px;
  background-color: #fff;
  border-width: 1px;
  border-color: #fff;
`;

export const Name = styled.Text`
  font-size: ${ms(12)}px;
  max-width: ${ms(60)}px;
  color: #212121;
  margin-top: ${mvs(5)}px;
`;
