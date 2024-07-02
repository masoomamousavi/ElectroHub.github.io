import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages === 0) return null;

    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="flex justify-center mt-5">
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`mx-2 px-3 py-1 rounded-md focus:outline-none ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                        }`}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
