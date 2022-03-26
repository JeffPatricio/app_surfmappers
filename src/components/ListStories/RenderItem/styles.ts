import { ms, mvs } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  margin-right: ${ms(15)}px;
`;

export const Image = styled.Image`
  width: ${ms(55)}px;
  height: ${ms(55)}px;
  border-radius: ${ms(28)}px;
`;

export const Name = styled.Text`
  font-size: ${ms(12)}px;
  max-width: ${ms(50)}px;
  color: #212121;
  margin-top: ${mvs(5)}px;
`;
