import styled from '@emotion/styled';
import Text from "../Text";

interface Props {
  version?: string;
  reverseCard?: boolean;
}

export const Container = styled.div`
  position: relative;
`

export const Card = styled.div<Props>`
  overflow: hidden;
  width: ${({version}) => (version === 'default' ? "300px" : "340px")};
  height: auto;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  transition-duration: 1s;
  transform: ${({reverseCard}) => reverseCard ? 'rotateY(180deg)' : 'rotateY(0)'};
  backface-visibility: hidden;
`;

export const ContentContainer = styled.div`
  cursor: pointer;
`

export const ImageWrapper = styled.div`
  height: 200px;
  overflow: hidden;
`

export const Content = styled.div<Props>`
  padding: 16px;
  padding-bottom: ${({version}) => (version === 'default' ? "0" : "16px")};
`

export const TitleWrapper = styled.div`
  // title을 2줄만 받고 그 이상은 말줌임 표시 처리 합니다.
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 46px;
  white-space:normal;
  overflow: hidden;
`

export const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSize.b[0]};
  font-weight: 600;
  line-height: 25px;
`

export const TagWrapper = styled.div`
  padding-top: 8px;
  &>div >div {
    font-size: 14px;
  }
`

export const Info = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({version}) => (version === 'default' ? "16px" : "28px")};
`

export const Likes = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 6px;
  font-size: 12px;
`

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2px;
  padding: 16px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[4]};
`

export const StyledLink = styled.a`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.main[0]};
  cursor: pointer;
`