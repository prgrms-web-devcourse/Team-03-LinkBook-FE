import { useEffect, useRef, useState } from 'react';
import { Card, Icon } from '../../../components';
import * as S from './FolderSlider.style';
import { Folder } from '../../../shared/DummyDataType';

interface Props {
  data: Folder[];
}

const defaultProps = {
  data: {},
};

const FolderSlider = ({ data }: Props) => {
  const sliderRef = useRef<HTMLUListElement>(null);
  const bookmarkCount = data.length;
  const bookmarks =
    bookmarkCount > 3 ? [data[bookmarkCount - 1], ...data, data[0]] : data;

  const [winX, setWinX] = useState(1440);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickPrevButton = () => {
    const lastIndex = winX > 1280 ? bookmarkCount - 3 : bookmarkCount - 1;
    if (currentIndex <= 0) {
      setCurrentIndex(lastIndex);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleClickNextButton = () => {
    const lastIndex = winX > 1280 ? bookmarkCount - 3 : bookmarkCount - 1;
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
      if ((currentIndex + i) % (bookmarkCount + 1) === idx) {
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
      if (currentIndex > bookmarkCount - 3) {
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

  return (
    <S.Container>
      {bookmarks.length > 3 ? (
        <>
          <S.SliderContainer>
            <S.CardList useCarousel={true} ref={sliderRef}>
              {bookmarks.map((bookmark, idx) => (
                <S.CardWrapper
                  key={bookmark.id * idx + 1}
                  active={isActive(idx)}
                >
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
      ) : (
        <S.CardList useCarousel={false}>
          {bookmarks.map((bookmark, idx) => (
            <Card key={idx} data={bookmark} />
          ))}
        </S.CardList>
      )}
    </S.Container>
  );
};

FolderSlider.defaultProps = defaultProps;

export default FolderSlider;
