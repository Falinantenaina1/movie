import { useNavigate } from "react-router";

export function Pagination({
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  const pages = [];
  const navigate = useNavigate();

  // construit la liste des numéros de page
  if (currentPage > 8) {
    pages.push(1);
    pages.push(2);
    pages.push(null);
    for (let i = currentPage - 2; i < currentPage + 4; i++) {
      pages.push(i);
    }
  } else {
    for (let i = 1; i <= 10; i++) {
      pages.push(i);
    }
  }

  return (
    <nav className="my-4 flex justify-center space-x-1">
      {pages.map((page) => (
        <div key={page}>
          {page ? (
            <button
              className={`rounded px-3 py-1 transition ${
                page === currentPage
                  ? "bg-[#950000] text-white"
                  : "text-[#950000] hover:bg-[#950000] hover:text-white"
              } `}
              onClick={() => {
                navigate(`/movie?page=${page}`);
              }}
            >
              {page}
            </button>
          ) : (
            <span className="cursor-not-allowed text-[#950000]">...</span>
          )}
        </div>
      ))}
    </nav>
  );
}
