import styled from '@emotion/styled';

interface Container {
  width: string | number;
  height: string | number;
}

export const SkeletonContainer = styled.div<Container>`
  display: inline-block;
  border-radius: 10px;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height};

  background-image: linear-gradient(
    90deg,
    #dfe3e8 0px,
    #efefef 40px,
    #dfe3e8 80px
  );
  background-size: 200% 100%;
  background-position: 0 center;
  animation: skeleton--zoom-in 0.2s ease-out,
    skeleton--loading 2s infinite linear;
  @keyframes skeleton--zoom-in {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes skeleton--loading {
    0% {
      background-position-x: 100%;
    }
    50% {
      background-position-x: -100%;
    }
    100% {
      background-position-x: -100%;
    }
  }
`;
