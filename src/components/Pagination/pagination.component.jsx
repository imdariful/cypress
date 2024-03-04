// React Paginate
import ReactPaginate from 'react-paginate';

import styles from './pagination.module.scss';

const Pagination = ({ pageNumber, setPageNumber, info }) => {
  return (
    <ReactPaginate
      className='pagination justify-content-center gap-4 my-5 flex-wrap'
      previousClassName={`btn btn-primary ${styles.paginationBtn}`}
      nextClassName={`btn btn-primary ${styles.paginationBtn}`}
      pageClassName='page-item'
      pageLinkClassName='page-link'
      activeClassName='active'
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      pageCount={info?.pages}
      onPageChange={(selectedPageNumber) => {
        setPageNumber(selectedPageNumber.selected + 1);
      }}
    />
  );
};
export default Pagination;
