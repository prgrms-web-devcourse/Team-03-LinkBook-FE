import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  version: 'modal' | 'page';
}

const ModalImageUploadForm = () => css`
  width: 155px;
  height: 155px;
  border-radius: 50%;
`;

const PageImageUploadForm = () => css`
  width: 1200px;
  height: 600px;
`;

export const ImageUploadForm = styled.form`
  position: relative;
  background: ${({ theme }) => theme.colors.gray[4]};

  &:hover {
    border: 4px dashed ${({ theme }) => theme.colors.main[0]};
  }

  ${({ version }: Props) => {
    switch (version) {
      case 'modal':
        return ModalImageUploadForm;
      case 'page':
        return PageImageUploadForm;
      default:
        return;
    }
  }}
`;

export const FileLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const FileInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
