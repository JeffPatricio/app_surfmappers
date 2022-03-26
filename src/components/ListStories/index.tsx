import React from 'react';
import { FlatList } from 'react-native';
import ListHeader from './ListHeader';
import RenderItem from './RenderItem';
import { Container } from './styles';

export interface Storie {
  id: number;
  username: string;
  imageUrl: string;
}

const DATA: Storie[] = [];

for (let index = 1; index < 20; index++) {
  DATA.push({
    id: index,
    username: 'usuario' + index,
    imageUrl: 'https://picsum.photos/200/200',
  });
}

console.log(DATA);

const renderItem = ({ item }: { item: Storie }) => {
  return <RenderItem item={item} />;
};

const ListStories = () => {
  return (
    <Container>
      <FlatList
        data={DATA}
        ListHeaderComponent={ListHeader}
        keyExtractor={(item) => String(item.id)}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default ListStories;
