import * as S from './OriginFolderSection.style';
import { OriginFolder } from '../../../../types/folder';
import { PAGE_URL } from '../../../../constants/url.constants';
import Link from 'next/link';

interface Props {
  originFolder: OriginFolder;
}

const OriginFolderSection = ({ originFolder }: Props) => {
  const { id, title, user } = originFolder;
  return (
    <S.Container>
      <S.Description>Scraped from</S.Description>
      <Link href={`${PAGE_URL.DETAIL}/${id}`}>
        <S.Origin>{`${user.name}/${title}`}</S.Origin>
      </Link>
    </S.Container>
  );
};

export default OriginFolderSection;
