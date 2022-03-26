import { mvs } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-self: stretch;
  border-bottom-width: 0.5px;
  border-bottom-color: #ddd;
  padding-top: ${mvs(10)}px;
  padding-bottom: ${mvs(20)}px;
`;
