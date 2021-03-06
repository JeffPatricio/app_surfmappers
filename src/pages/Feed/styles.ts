import { mvs } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
`;

export const ContainerSafe = styled.SafeAreaView`
  flex: 1;
`;

export const ContainerBody = styled.ScrollView`
  flex: 1;
  padding: ${mvs(15)}px 0;
`;
