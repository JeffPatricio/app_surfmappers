import { ms, mvs } from 'react-native-size-matters';
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

export const Text = styled.Text`
  color: #333333;
  font-size: ${ms(15)}px;
  margin-bottom: ${mvs(6)}px;
  font-weight: bold;
`;

export const Instructions = styled.Text`
  color: #666;
  font-size: ${ms(12)}px;
`;

export const Link = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  align-self: stretch;
  padding: ${mvs(16)}px 0;
`;
