import { useRouter } from 'next/router';

const userPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <>userPage ID : {id}</>;
};

export default userPage;
