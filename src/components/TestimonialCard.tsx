import React from 'react';
import playIcon from '../assets/play.svg'

interface TestimonialCardProps {
    image?: string;
    profileImage?: string;
    rating?: number;
    name: string;
    role: string;
    text?: string;
    isVideo?: boolean;
    date?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ image, profileImage, rating, name, role, text, isVideo, date }) => {
    return (
        <div className={`${text ? "bg-gray-950 border border-gray-900" : ""} text-white rounded-lg shadow-md overflow-hidden`}>
            {image ? (
                <div className="relative group">
                    <img src={image} alt={name} className="object-cover w-full h-56 transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black bg-opacity-60 p-4 flex justify-between items-end transition-opacity duration-300 group-hover:bg-opacity-30">
                        <div>
                            {rating && (
                                <div className="flex items-center">
                                    {[...Array(rating)].map((_, i) => (
                                        <span key={i} className="text-blue text-lg">&#9733;</span>
                                    ))}
                                </div>
                            )}
                            <h3 className="text-lg font-bold">{name}</h3>
                            <p className="text-sm text-gray-400">{role}</p>
                        </div>
                        {isVideo && (
                            <img src={playIcon} alt="Play" width={20} />
                        )}
                    </div>
                </div>
            ) : (
                <div className='p-4'>
                    <div className="flex items-start">
                        {profileImage && (
                            <img src={profileImage} alt={name} className="w-12 h-12 rounded-full mr-4" />
                        )}
                        <div className="flex-grow">
                            <h3 className="text-lg font-bold">{name}</h3>
                            <p className="text-sm text-gray-400 mb-2">{role}</p>
                        </div>
                    </div>
                    {rating && (
                        <div className="flex items-center ">
                            {[...Array(rating)].map((_, i) => (
                                <span key={i} className="text-blue text-2xl">&#9733;</span>
                            ))}
                        </div>
                    )}
                </div>
            )}
            {(text || date) && (
                <div className={image ? "p-4" : "px-4 pb-4"}>
                    {text && <p className="text-sm font-normal font-roboto text-justify text-gray-200">{text}</p>}
                    {date && <p className="text-xs text-gray-500 mt-4">{date}</p>}
                </div>
            )}
        </div>
    );
};

export default TestimonialCard;
