import { useEffect, useRef, useState } from 'react';
import { Card, Icon } from '../../../components';
import * as S from './FolderSlider.style';

interface Tags {
  id: string;
  text: string;
}
interface User {
  image: string;
  name: string;
}
interface BookMarks {
  id: number;
  image: string;
  title: string;
  url: string;
}

interface Data {
  id: number;
  image: string;
  title: string;
  tags: Tags[];
  user: User;
  createdAt: string;
  likes: number;
  bookmarks: BookMarks[];
}

interface Props {
  data: Data[];
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
    if (currentIndex === 0) {
      setCurrentIndex(lastIndex);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleClickNextButton = () => {
    const lastIndex = winX > 1280 ? bookmarkCount - 3 : bookmarkCount - 1;
    if (currentIndex === lastIndex) {
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
    if (sliderRef.current) {
      sliderRef.current.style.transition = `all 0.5s `;
      if (winX > 660) {
        sliderRef.current.style.transform = `translateX(calc(-150px + (-315px * ${currentIndex}))`;
      } else {
        sliderRef.current.style.transform = `translateX(calc(-315px + (-315px * ${currentIndex}))`;
      }
    }
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
              {bookmarks.map((cardInfo, idx) => (
                <S.CardWrapper
                  key={cardInfo.id * idx + 1}
                  active={isActive(idx)}
                >
                  <Card data={cardInfo} />
                </S.CardWrapper>
              ))}
            </S.CardList>
          </S.SliderContainer>
          <S.IconWrapper position="left" onClick={handleClickPrevButton}>
            <Icon name="arrowLeft" size={40} />
          </S.IconWrapper>
          <S.IconWrapper position="right" onClick={handleClickNextButton}>
            <Icon name="arrowRight" size={40} />
          </S.IconWrapper>
        </>
      ) : (
        <S.CardList useCarousel={false}>
          {bookmarks.map((cardInfo, idx) => (
            <Card key={idx} data={cardInfo} />
          ))}
        </S.CardList>
      )}
    </S.Container>
  );
};

FolderSlider.defaultProps = defaultProps;

export default FolderSlider;
