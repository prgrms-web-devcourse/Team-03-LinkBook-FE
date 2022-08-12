import { useEffect, useRef, useState } from 'react';
import { Card, Icon, Skeleton, Text } from '../../../../components';
import * as S from './FolderSlider.style';
import { Folder } from '../../../../shared/DummyDataType';
import Image from 'next/image';

interface Props {
  data: Folder[];
  isLoading: boolean;
}

const FolderSlider = ({ data, isLoading }: Props) => {
  const sliderRef = useRef<HTMLUListElement>(null);
  const folderCount = data.length;
  const folders =
    folderCount > 3 ? [data[folderCount - 1], ...data, data[0]] : data;

  const [winX, setWinX] = useState(1440);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickPrevButton = () => {
    const lastIndex = winX > 1280 ? folderCount - 3 : folderCount - 1;
    if (currentIndex <= 0) {
      setCurrentIndex(lastIndex);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleClickNextButton = () => {
    const lastIndex = winX > 1280 ? folderCount - 3 : folderCount - 1;
    if (currentIndex >= lastIndex) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const resizeWindow = () => {
    setWinX(window.innerWidth);
  };

  const isActive = (idx: number) => {
    if (winX <= 1280) {
      return currentIndex + 2 === idx + 1;
    }
    for (let i = 1; i <= 3; i++) {
      if ((currentIndex + i) % (folderCount + 1) === idx) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    setWinX(window.innerWidth);
  }, []);

  useEffect(() => {
    if (!sliderRef.current) {
      return;
    }

    sliderRef.current.style.transition = `all 0.5s `;
    if (winX > 660) {
      if (winX > 1280 && currentIndex > folderCount - 3) {
        setCurrentIndex(0);
        sliderRef.current.style.transform = `translateX(-150px)`;
        return;
      }
      sliderRef.current.style.transform = `translateX(calc(-150px + (-315px * ${currentIndex}))`;
      return;
    }
    sliderRef.current.style.transform = `translateX(calc(-315px + (-315px * ${currentIndex}))`;
  }, [currentIndex, winX]);

  useEffect(() => {
    window.addEventListener('resize', resizeWindow);
    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, []);

  const content = () => {
    if (folders.length === 0) {
      return (
        <S.DefaultContainer>
          <Image
            width={120}
            height={108}
            src="/backgrounds/whale1.svg"
            alt="로그인화면"
            layout="fixed"
          />
          <Text size={14} weight="bold">
            등록된 북마크 폴더가 없어요!
            <br />
            <br />
            <br />
            지금 바로 나만의 북마크 폴더를
            <br />
            만들어 보세요!😊
          </Text>
        </S.DefaultContainer>
      );
    }

    if (folders.length <= 3) {
      return (
        <S.CardList useCarousel={false}>
          {folders.map((bookmark, idx) => (
            <Card key={idx} data={bookmark} />
          ))}
        </S.CardList>
      );
    }
    return (
      <>
        <S.SliderContainer>
          <S.CardList useCarousel={true} ref={sliderRef}>
            {folders.map((bookmark, idx) => (
              <S.CardWrapper key={bookmark.id * idx + 1} active={isActive(idx)}>
                <Card data={bookmark} />
              </S.CardWrapper>
            ))}
          </S.CardList>
          <S.IconWrapper position="left" onClick={handleClickPrevButton}>
            <Icon name="arrowLeft" size={40} />
          </S.IconWrapper>
          <S.IconWrapper position="right" onClick={handleClickNextButton}>
            <Icon name="arrowRight" size={40} />
          </S.IconWrapper>
        </S.SliderContainer>
      </>
    );
  };

  if (isLoading) {
    return (
      <S.Container>
        <S.CardList>
          <Skeleton width={300} height={384} repeat={3} />
        </S.CardList>
      </S.Container>
    );
  }
  return <S.Container>{content()}</S.Container>;
};

export default FolderSlider;
