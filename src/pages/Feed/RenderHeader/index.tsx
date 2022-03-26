import React from 'react';
import { ms, mvs } from 'react-native-size-matters';
import SearchIcon from '../../../assets/search.svg';
import { Container, ContainerInput, Input, Title } from './styles';

const RenderHeader = () => {
  return (
    <Container>
      <Title>
        Onde você <Title style={{ fontWeight: 'bold' }}>surfou hoje</Title>?
      </Title>
      <ContainerInput>
        <SearchIcon height={mvs(18)} width={ms(18)} color={'#666'} />
        <Input
          placeholder="Onde você surfou hoje?"
          placeholderTextColor={'#666'}
        />
      </ContainerInput>
    </Container>
  );
};

export default RenderHeader;
