import React from 'react';
import startIcon from '../assets/start.svg'
import backIcon from '../assets/back.svg'
import nextIcon from '../assets/next.svg'
import endIcon from '../assets/end.svg'

interface propsPage {
    currentPage: number, totalPages: number, onPageChange: (x: number) => void
}

const LeaderboardPagination = ({ currentPage, totalPages, onPageChange }: propsPage) => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center space-x-2">
                <button
                    className="text-white bg-gray-900 p-3.5 rounded-md"
                    onClick={() => onPageChange(1)}
                    disabled={currentPage === 1}
                >
                    <img src={startIcon} width={20} alt="" />
                </button>
                <button
                    className="text-white bg-gray-900 p-3.5 rounded-md"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <img src={backIcon} width={10} alt="" />
                </button>
                <button
                    className="text-white bg-gray-900 p-3.5 rounded-md"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <img src={nextIcon} width={10} alt="" />
                </button>
                <button
                    className="text-white bg-gray-900 p-3.5 rounded-md"
                    onClick={() => onPageChange(totalPages)}
                    disabled={currentPage === totalPages}
                >
                    <img src={endIcon} width={20} alt="" />
                </button>
            </div>
            <div className="text-white text-sm">
                <span className='text-gray-700'>Page</span> {currentPage} of {totalPages}
            </div>
        </div>
    );
};

export default LeaderboardPagination;
