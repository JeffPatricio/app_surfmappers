import { Dimensions } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';
import styled from 'styled-components/native';
const width = Dimensions.get('window').width;

export const Container = styled.TouchableOpacity`
  padding: ${mvs(15)}px ${ms(15)}px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
`;

export const Image = styled.Image`
  width: ${width - ms(30)}px;
  height: ${mvs(180)}px;
  border-radius: ${ms(10)}px;
`;

export const Title = styled.Text`
  font-size: ${ms(16)}px;
  color: #2587fe;
  font-weight: bold;
  max-width: ${ms(280)}px;
`;

export const Description = styled.Text`
  font-size: ${ms(13)}px;
  color: #666666;
  margin-top: ${mvs(2)}px;
  margin-bottom: ${mvs(8)}px;
`;
