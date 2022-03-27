import { Dimensions } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';
import styled from 'styled-components/native';
const width = Dimensions.get('window').width;

export const Container = styled.View`
  width: ${width / 3}px;
  height: ${width / 3}px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Image = styled.Image`
  width: ${width / 3.03}px;
  height: ${width / 3.03}px;
`;

export const ContainerIcon = styled.View`
  position: absolute;
  z-index: 2;
  top: ${mvs(5)}px;
  right: ${ms(5)}px;
  background-color: #2587fe;
  border-radius: ${ms(5)}px;
  width: ${ms(26)}px;
  height: ${ms(26)}px;
  align-items: center;
  justify-content: center;
`;
