import styled from '@emotion/styled';

const Container = styled.div`
  width: 500px;
  height: 180px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.h[1]};
`;

const TextContainer = styled.div`
  margin-right: 20px;
  display: flex;
  gap: 45px;

  font-family: 'Noto Sans KR', sans-serif;
`;

const Strong = styled.span`
  width: 100px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.b[1]};
`;

const Plane = styled.span`
  font-size: ${({ theme }) => theme.fontSize.b[1]};
  color: ${({ theme }) => theme.colors.gray[2]};
`;

const S = {
  Container,
  Title,
  TextContainer,
  Strong,
  Plane,
};

export default S;
