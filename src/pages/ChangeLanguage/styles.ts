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
  padding: ${mvs(20)}px ${ms(20)}px;
`;

export const Text = styled.Text`
  color: #000000;
  font-size: ${ms(15)}px;
  margin-bottom: ${mvs(10)}px;
  text-align: center;
`;

export const Title = styled.Text`
  color: #000000;
  font-size: ${ms(15)}px;
  margin-bottom: ${mvs(20)}px;
  text-align: center;
`;

export const Instructions = styled.Text`
  color: #666;
  font-size: ${ms(12)}px;
`;

export const Option = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  align-self: stretch;
  padding: ${mvs(10)}px 0;
`;
