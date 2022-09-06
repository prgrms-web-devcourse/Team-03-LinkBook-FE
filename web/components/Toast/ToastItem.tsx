import styled from '@emotion/styled';
import { useState } from 'react';
import { Text } from '../';
import useTimeout from '../../util/useTimeout';
import * as S from './Toast.style';

export interface Toast {
  id: number;
  message: string;
  duration: number;
}

interface ToastItemProps {
  toast: Toast;
  onDone?: () => void;
}

const ToastItem = ({ toast, onDone }: ToastItemProps) => {
  const { message, duration } = toast;
  const [show, setShow] = useState(true);

  useTimeout(() => {
    setShow(false);
    setTimeout(() => onDone && onDone(), 400);
  }, duration);

  return (
    <S.ToastBox show={show}>
      <S.ProgressBar duration={duration} />
      <Text>{message}</Text>
    </S.ToastBox>
  );
};

export default ToastItem;
