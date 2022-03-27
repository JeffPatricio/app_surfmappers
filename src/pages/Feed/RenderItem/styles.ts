import { Dimensions } from 'react-native';
import { ms, mvs } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';
const width = Dimensions.get('window').width;

export const Container = styled.View`
  padding: ${mvs(20)}px ${ms(15)}px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
  align-items: center;
  position: relative;
  z-index: 2;
`;

export const Image = styled.Image`
  width: ${width - ms(30)}px;
  height: ${mvs(180)}px;
  border-radius: ${ms(10)}px;
  margin-bottom: ${mvs(10)}px;
`;

export const Title = styled.Text`
  font-size: ${ms(16)}px;
  color: #2587fe;
  font-weight: bold;
  max-width: ${ms(300)}px;
`;

export const Description = styled.Text`
  font-size: ${ms(13)}px;
  color: #666666;
  margin-top: ${mvs(2)}px;
  margin-bottom: ${mvs(8)}px;
  font-weight: bold;
`;

export const PressableOptionIcon = styled.Pressable`
  margin-right: ${ms(15)}px;
  margin-left: ${ms(3)}px;
`;

export const PressableCameraIcon = styled.Pressable`
  margin-right: ${ms(5)}px;
`;

export const UserName = styled.Text`
  font-size: ${ms(14)}px;
  color: #212121;
  font-weight: 700;
  max-width: ${ms(100)}px;
`;

interface DotProps {
  active?: boolean;
}

export const Dot = styled.View<DotProps>`
  width: ${ms(6)}px;
  height: ${ms(6)}px;
  border-radius: ${ms(3)}px;
  background-color: #bbb;
  margin: 0 ${ms(1.5)}px;

  ${(props) =>
    props.active &&
    css`
      background-color: #2587fe;
      width: ${ms(8)}px;
      height: ${ms(8)}px;
      border-radius: ${ms(4)}px;
    `}
`;

export const ContainerDots = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  flex-direction: row;
`;
