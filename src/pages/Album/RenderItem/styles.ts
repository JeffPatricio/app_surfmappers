import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
const width = Dimensions.get('window').width;

export const Container = styled.View`
  width: ${width / 3}px;
  height: ${width / 3}px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: ${width / 3.03}px;
  height: ${width / 3.03}px;
`;
