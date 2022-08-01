import { useState } from 'react';

type onCopyUrl = (url: string) => Promise<boolean>;

export const useCopyUrl = (): [boolean, onCopyUrl] => {
  const [isCopy, setIsCopy] = useState<boolean>(false);

  const onCopy: onCopyUrl = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setIsCopy(true);

      alert('url 복사 성공');
      return true;
    } catch (error) {
      console.error('url 복사 실패', [error]);
      setIsCopy(false);

      return false;
    }
  };

  return [isCopy, onCopy];
};

export default useCopyUrl;
