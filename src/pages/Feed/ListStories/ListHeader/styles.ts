import { ms, mvs } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  margin-right: ${ms(15)}px;
  margin-left: ${ms(15)}px;
`;

export const Title = styled.Text`
  font-size: ${ms(12)}px;
  color: #2587fe;
  margin-top: ${mvs(5)}px;
`;

export const ContainerButton = styled.View`
  width: ${ms(60)}px;
  height: ${ms(60)}px;
  border-radius: ${ms(30)}px;
  border: 2px solid #2587fe;
  align-items: center;
  justify-content: center;
`;
