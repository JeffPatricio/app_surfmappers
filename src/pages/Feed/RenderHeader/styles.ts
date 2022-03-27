import { ms, mvs } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  padding: ${mvs(15)}px ${ms(15)}px;
`;

interface TitleProps {
  fontWeight700?: boolean;
}

export const Title = styled.Text<TitleProps>`
  font-size: ${ms(22)}px;
  color: #000000;

  ${(props) =>
    props.fontWeight700 &&
    css`
      font-weight: 700;
    `}
`;

export const ContainerInput = styled.View`
  background-color: #eee;
  height: ${mvs(45)}px;
  border-radius: ${ms(5)}px;
  margin-top: ${mvs(15)}px;
  align-self: stretch;
  padding: 0 0 0 ${ms(15)}px;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  font-size: ${ms(16)}px;
  color: #000000;
  height: ${mvs(45)}px;
  align-self: stretch;
  padding: 0 ${ms(10)}px;
  flex: 1;
`;
