import { Toast } from '../components';

type onCopyUrl = (url: string) => Promise<boolean>;

export const useCopyUrl = (): onCopyUrl => {
  const onCopy: onCopyUrl = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);

      Toast.show('url 복사 성공');
      return true;
    } catch (error) {
      console.error('url 복사 실패', [error]);

      return false;
    }
  };

  return onCopy;
};

export default useCopyUrl;
