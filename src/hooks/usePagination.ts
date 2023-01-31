import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function usePagination() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [page, setPage] = useState<number>(1);

  function nextPage() {
    setPage(page + 1);
    navigate(`/?page=${page + 1}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  function previousPage() {
    setPage(page - 1);
    navigate(`/?page=${page - 1}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  function backToHome() {
    setPage(1);
    navigate('/');
  }

  useEffect(() => {
    // eslint-disable-next-line radix
    setPage(parseInt(searchParams.get('page')!) || 1);
  }, [searchParams]);

  return {
    nextPage,
    previousPage,
    setPage,
    page,
    backToHome,
  };
}
