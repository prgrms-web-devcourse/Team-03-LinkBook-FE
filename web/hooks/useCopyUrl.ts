type onCopyUrl = (url: string) => Promise<boolean>;

export const useCopyUrl = (): onCopyUrl => {
  const onCopy: onCopyUrl = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);

      alert('url 복사 성공'); // 추후에 Toast로 하면 좋을 거 같습니다
      return true;
    } catch (error) {
      console.error('url 복사 실패', [error]);

      return false;
    }
  };

  return onCopy;
};

export default useCopyUrl;
