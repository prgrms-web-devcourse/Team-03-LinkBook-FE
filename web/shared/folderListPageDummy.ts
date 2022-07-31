import CardDummyData from './categoryCardDummy';
import { Folder } from './DummyDataType';

const FolderListDummy: Folder[] = [];

for (let i = 0; i < 301; i++) {
  FolderListDummy.push(CardDummyData[0]);
}

export default FolderListDummy;
