import React, { Fragment } from 'react';
import { FlatList } from 'react-native';
import Header from '../../components/Header';
import ListStories from './ListStories';
import RenderHeader from './RenderHeader';
import RenderItem from './RenderItem';
import { Container, ContainerSafe } from './styles';

export interface AlbumItem {
  id: number;
  imageUrl: string;
}

const DATA: AlbumItem[] = [];

for (let index = 1; index < 50; index++) {
  DATA.push({
    id: index,
    imageUrl: `https://picsum.photos/${200 + index}/${200 + index}`,
  });
}

const Feed = () => {
  const renderItem = ({ item }: { item: AlbumItem }) => {
    return <RenderItem item={item} />;
  };

  return (
    <Container>
      <ContainerSafe>
        <Header showLogo showCartIcon showChatIcon />
        <FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderItem}
          ListHeaderComponent={
            <Fragment>
              <ListStories />
              <RenderHeader />
            </Fragment>
          }
        />
      </ContainerSafe>
    </Container>
  );
};

export default Feed;
