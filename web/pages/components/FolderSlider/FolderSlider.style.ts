import styled from '@emotion/styled';

interface Prop {
  position?: string;
  active?: boolean;
  useCarousel?: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding-top: 60px;
  padding-bottom: 30px;
`;

export const SliderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 1260px;
  height: 415px;
  overflow: hidden;

  @media (max-width: 1280px) {
    width: 660px;
  }
  @media (max-width: 660px) {
    width: 300px;
  }
`;

export const CardList = styled.ul<Prop>`
  display: flex;
  justify-content: ${({useCarousel}) => useCarousel ? 'flex-start' : 'center'};;
  gap: 15px;
  width: 100%;
  transform: ${({useCarousel}) => useCarousel ? 'translateX(-150px)' : 'none'};
`;

export const CardWrapper = styled.div<Prop>`
  transition: 1s opacity;
  opacity: ${({active}) => active ? '1' : '0.4'};
  // active에 따라 클릭 이벤트 설정
  pointer-events: ${({active}) => active ? 'auto' : 'none'};
`;

export const IconWrapper = styled.div<Prop>`
  position: absolute;
  top: 43%;
  left: ${({position}) => position === 'left' && '3%'};
  right: ${({position}) => position === 'right' && '3%'};
  cursor: pointer;

  @media (max-width: 660px) {
    left: ${({position}) => position === 'left' && '3%'};
    right: ${({position}) => position === 'right' && '3%'};
  }
`;