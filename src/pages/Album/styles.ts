import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';
import { mvs } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
`;

export const ContainerSafe = styled.View`
  flex: 1;
  margin-top: ${isIphoneX() ? getStatusBarHeight() + mvs(10) : 0}px;
`;

export const ContainerBody = styled.ScrollView`
  flex: 1;
  padding: ${mvs(15)}px 0;
`;
