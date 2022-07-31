import * as S from './Pagination.style';
import { useState } from 'react';
import Icon from '../Icon';

interface Props {
  defaultPage: number;
  limit: number;
  total: number;
  onChange: (page: number) => void;
}

interface ArrowButtonProps {
  isLeft: boolean;
  onClick: () => void;
}

const ArrowButton = ({ isLeft, onClick }: ArrowButtonProps) => {
  return isLeft ? (
    <S.ArrowButtonWrapper onClick={onClick}>
      <Icon name="arrowLeft" size={42} />
    </S.ArrowButtonWrapper>
  ) : (
    <S.ArrowButtonWrapper onClick={onClick}>
      <Icon name="arrowRight" size={42} />
    </S.ArrowButtonWrapper>
  );
};

const Pagination = ({ defaultPage, limit, total, onChange }: Props) => {
  const [page, setPage] = useState(defaultPage);
  const totalPage = Math.ceil(total / limit);

  const changePage = (newPage: number) => {
    onChange(newPage);
    setPage(newPage);
  };

  const case1 = page < 4;
  const case2 = page > totalPage - 5;

  const filterdArray = Array.from(new Array(totalPage), (_, i) => i).filter(
    (i) => {
      if (case1) {
        return i < 6 || i === totalPage - 1;
      } else if (case2) {
        return i === defaultPage || i > totalPage - 7;
      }
      return (
        i === defaultPage ||
        i === totalPage - 1 ||
        (i >= page - 2 && i <= page + 2)
      );
    },
  );

  return (
    <S.PaginationContainer>
      <ArrowButton isLeft onClick={() => page !== 0 && changePage(page - 1)} />
      {filterdArray.map((i, index) => {
        if (case1) {
          if (index === filterdArray.length - 2)
            return (
              <S.PaginationButton disable key={i}>
                ...
              </S.PaginationButton>
            );
          return (
            <S.PaginationButton
              onClick={() => changePage(i)}
              disable={false}
              key={i}
              active={page === i}
            >
              {i + 1}
            </S.PaginationButton>
          );
        }
        if (case2) {
          if (index === 1)
            return (
              <S.PaginationButton disable key={i}>
                ...
              </S.PaginationButton>
            );
          return (
            <S.PaginationButton
              onClick={() => changePage(i)}
              disable={false}
              key={i}
              active={page === i}
            >
              {i + 1}
            </S.PaginationButton>
          );
        }

        if (index === 1 || index === filterdArray.length - 2)
          return (
            <S.PaginationButton onClick={() => changePage(i)} disable key={i}>
              ...
            </S.PaginationButton>
          );
        return (
          <S.PaginationButton
            onClick={() => changePage(i)}
            disable={false}
            key={i}
            active={page === i}
          >
            {i + 1}
          </S.PaginationButton>
        );
      })}
      <ArrowButton
        isLeft={false}
        onClick={() => page + 1 !== totalPage && changePage(page + 1)}
      />
    </S.PaginationContainer>
  );
};

export default Pagination;
