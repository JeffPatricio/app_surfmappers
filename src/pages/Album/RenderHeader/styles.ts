import { ms, mvs } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

export const Container = styled.View``;

interface ContainerTitleRowProps {
  alignCenter?: boolean;
  paddingVReduced?: boolean;
}

export const ContainerTitleRow = styled.View<ContainerTitleRowProps>`
  padding: ${mvs(20)}px ${ms(15)}px;
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
  border-bottom-width: 0.5px;
  border-bottom-color: #ddd;

  ${(props) =>
    props.alignCenter &&
    css`
      align-items: center;
    `}

  ${(props) =>
    props.paddingVReduced &&
    css`
      padding: ${mvs(15)}px ${ms(15)}px;
    `}
`;

export const Title = styled.Text`
  font-size: ${ms(22)}px;
  color: #000000;
  font-weight: bold;
  margin-bottom: ${mvs(2)}px;
`;

export const ButtonShare = styled.TouchableOpacity`
  width: ${ms(28)}px;
  height: ${ms(28)}px;
  border-radius: ${ms(6)}px;
  border: 1px solid #2587fe;
  margin-top: ${mvs(2)}px;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.Text`
  font-size: ${ms(13)}px;
  color: #666666;
`;

export const ContainerGroupRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Time = styled.Text`
  font-size: ${ms(17)}px;
  color: #000000;
  font-weight: bold;
`;

export const ButtonCamera = styled.TouchableOpacity`
  width: ${ms(28)}px;
  height: ${ms(28)}px;
  border-radius: ${ms(6)}px;
  border: 1px solid #666;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  margin-left: ${ms(5)}px;
  font-size: ${ms(14)}px;
  color: #666;
  font-weight: bold;
`;

export const Count = styled.Text`
  font-size: ${ms(16)}px;
  color: #2587fe;
  font-weight: bold;
`;

export const ButtonChat = styled.TouchableOpacity`
  width: ${ms(28)}px;
  height: ${ms(28)}px;
  border-radius: ${ms(6)}px;
  border: 1px solid #2587fe;
  margin-right: ${ms(15)}px;
  align-items: center;
  justify-content: center;
`;

export const ButtonFollowing = styled.TouchableOpacity`
  border-radius: ${ms(6)}px;
  height: ${ms(28)}px;
  padding: ${mvs(5)}px ${ms(10)}px;
  background: #2587fe;
  margin-top: ${mvs(2)}px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: ${ms(14)}px;
  color: #ffffff;
  font-weight: bold;
`;

export const ButtonFilters = styled.TouchableOpacity`
  border-radius: ${ms(14)}px;
  padding: ${mvs(5)}px ${ms(8)}px;
  background: #c5eff9;
  margin-top: ${mvs(2)}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const TextButtonFilters = styled.Text`
  font-size: ${ms(12)}px;
  color: #2587fe;
  font-weight: bold;
  margin-right: ${ms(10)}px;
  margin-left: ${ms(10)}px;
`;

export const ContainerIconFilter = styled.View`
  background: #2587fe;
  align-items: center;
  justify-content: center;
  width: ${ms(25)}px;
  height: ${ms(25)}px;
  border-radius: ${ms(15)}px;
`;
