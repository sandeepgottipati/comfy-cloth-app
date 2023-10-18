import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();

  const { pageCount, page } = meta.pagination;
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParam = new URLSearchParams(search);

    searchParam.set("page", pageNumber);
    navigate(`${pathname}?${searchParam.toString()}`);
  };
  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="join-item btn btn-xs sm:btn-md"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
        >
          Prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              className={`join-item btn btn-xs sm:btn-md border-none ${
                pageNumber === page ? "bg-base-300 border-base-300" : ""
              }`}
              onClick={() => handlePageChange(pageNumber)}
              key={pageNumber}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className="join-item btn btn-xs sm:btn-md"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default PaginationContainer;
