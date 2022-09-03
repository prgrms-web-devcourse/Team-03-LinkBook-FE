import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';
import ToastItem, { Toast } from './ToastItem';
import * as S from './Toast.style';

export type CreateToast = (message: string, duration: number) => void;

interface ToastManagerProps {
  bind: (createToast: CreateToast) => void;
}

const ToastManager = ({ bind }: ToastManagerProps) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const createToast = useCallback((message: string, duration: number) => {
    const newToast = {
      id: Math.random(),
      message,
      duration,
    };
    setToasts((oldToasts) => [...oldToasts, newToast]);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts((oldToasts) => oldToasts.filter((toast) => toast.id !== id));
  }, []);

  useEffect(() => {
    bind(createToast);
  }, [bind, createToast]);

  return (
    <S.ToastContainer>
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onDone={() => removeToast(toast.id)}
        />
      ))}
    </S.ToastContainer>
  );
};

export default ToastManager;
