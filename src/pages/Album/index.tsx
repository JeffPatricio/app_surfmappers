import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import Header from '../../components/Header';
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
    imageUrl: 'https://picsum.photos/200/200',
  });
}

const Album = () => {
  const { t } = useTranslation();

  const renderItem = ({ item }: { item: AlbumItem }) => {
    return <RenderItem item={item} />;
  };

  return (
    <Container>
      <ContainerSafe>
        <Header
          title={t('headerTitles.album')}
          showCartIcon
          showChatIcon
          showDotsIcon
        />
        <FlatList
          ListHeaderComponent={RenderHeader}
          data={DATA}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderItem}
        />
      </ContainerSafe>
    </Container>
  );
};

export default Album;
