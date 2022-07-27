import * as S from './Avatar.style';

interface Props {
  size?: string;
  src?: string;
  name?: string;
  layout?: 'intrinsic' | 'fixed' | 'fill';
  placeholder?: 'empty' | 'blur';
}

const defaultProps = {
  size: '24',
  src: `/icons/user_line.svg`,
  layout: 'fill',
  placeholder: 'empty',
};

const Avatar = ({ size, src, name, layout, placeholder }: Props) => {
  return (
    <S.AvatarWrapper>
      <S.AvatarImg
        width={`${size}rem`}
        height={`${size}rem`}
        src={src}
        layout={layout}
        placeholder={placeholder}
        alt="프로필 사진"
      />
      {name && <S.AvatarName>{name}</S.AvatarName>}
    </S.AvatarWrapper>
  );
};

Avatar.defaultProps = defaultProps;

export default Avatar;
