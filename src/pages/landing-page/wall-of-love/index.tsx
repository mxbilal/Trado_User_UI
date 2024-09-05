import React from 'react';
import { Button, Input } from '@material-tailwind/react';
import TestimonialCard from '../../../components/TestimonialCard';
import wall1 from '../../../assets/landing-page/wall1.png'
import wall2 from '../../../assets/landing-page/wall2.png'
import wall3 from '../../../assets/landing-page/wall3.png'
import dp from '../../../assets/landing-page/dp.png'
import Masonry from 'react-masonry-css';
import './walls.css'

const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
};


const testimonials = [
    {
        image: wall1,
        rating: 5,
        name: 'Justin Veenema',
        role: 'Founder at Traddoo',
        text: 'Super simple onboarding, great UX and an absolute joy to use. ✨',
        isVideo: true,
        date: "Jan 8, 2023"
    },
    {
        image: wall2,
        rating: 4,
        name: 'Brad Gumbers',
        role: 'CTO at Tech Corp',
        text: 'I always had a slightly awkward stance toward tech solutions, but this one is actually enjoyable to use.',
        isVideo: true,
        date: "Jan 10, 2023"
    },
    {
        image: wall3,
        rating: 5,
        name: 'Zack Swift',
        role: 'CEO at Swift Solutions',
        isVideo: true,
    },
    {
        profileImage: dp,
        rating: 5,
        name: "Jay Clouse",
        date: "Jan 10, 2023",
        role: '@jayclouse',
        text: 'HUGE fan of the Senja product and team. Less than a month into implementing Senja and I`ve already seen a tangible impact on revenue and conversion',
        isVideo: true,
    },
    {
        image: wall3,
        rating: 3,
        name: 'Zack Swift',
        role: 'CEO at Swift Solutions',
        isVideo: true,
    }, {
        image: wall2,
        rating: 4,
        name: 'Brad Gumbers',
        role: 'CTO at Tech Corp',
        text: 'I always had a slightly awkward stance toward tech solutions, but this one is actually enjoyable to use.',
        isVideo: true,
        date: "Jan 10, 2023"
    },
    {
        profileImage: dp,
        rating: 5,
        name: "Jay Clouse",
        date: "Jan 10, 2023",
        role: '@jayclouse',
        text: `HUGE fan of the Senja product and team. Less than a month into implementing Senja and I've already seen a tangible impact on revenue and conversion 5 minutes to get started with collecting reviews Senja seems like a well thought-out product. I'm really happy that we've found Senja and will absolutely be recommending the product to our audience. If you're on the fence, sign up for a free trial and
see how it works for you. Getting reviews from
your audience is a great dopamine hit. Don't miss
out on that ! We were able to import existing reviews as well,
which is such an important feature to have. `,
        isVideo: true,
    }, {
        profileImage: dp,
        rating: 5,
        name: "Jay Clouse",
        date: "Jan 10, 2023",
        role: '@jayclouse',
        text: 'HUGE fan of the Senja product and team. Less than a month into implementing Senja ',
        isVideo: true,
    }, {
        profileImage: dp,
        rating: 4,
        name: "Jay Clouse",
        date: "Jan 10, 2023",
        role: '@jayclouse',
        text: 'HUGE fan of the Senja product and team. Less than a month into implementing Senja and I`ve already seen a tangible impact on revenue and conversion',
        isVideo: true,
    }, {
        profileImage: dp,
        rating: 2,
        name: "Jay Clouse",
        date: "Jan 10, 2023",
        role: '@jayclouse',
        text: 'Senja and I`ve already seen a tangible impact on revenue and conversion',
        isVideo: true,
    }, {
        profileImage: dp,
        rating: 5,
        name: "Jay Clouse",
        date: "Jan 10, 2023",
        role: '@jayclouse',
        text: 'HUGE fan of the Senja product and team. Less than a month into implementing Senja and I`ve already seen a tangible impact on revenue and conversion',
        isVideo: true,
    }, {
        profileImage: dp,
        rating: 4,
        name: "Jay Clouse",
        date: "Jan 10, 2023",
        role: '@jayclouse',
        text: 'HUGE fan of the Senja product and team. Less than a month into implementing Senja and I`ve already seen a tangible impact on revenue and conversion',
        isVideo: true,
    },
];
const WallOfLove = () => {
    return (
        <div className=" text-white py-12 px-2 md:px-8">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Wall Of Love</h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600">
                    Earn Trading Challenge by entering competitions. Place Top 10 and begin your trading journey with traddoo.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button placeholder="" className="bg-gray-900 border border-gray-800 text-blue text-xs capitalize font-normal " >
                        💖 All testimonials
                    </Button>
                    <Button placeholder="" className="bg-gray-900 border border-gray-800 text-xs capitalize font-normal ">
                        Video testimonials
                    </Button>
                    <Button placeholder="" className="bg-gray-900 border border-gray-800 text-xs capitalize font-normal ">
                        Love from Creators
                    </Button>
                    <Button placeholder="" className="bg-gray-900 border border-gray-800 text-xs capitalize font-normal ">
                        Love from SaaS
                    </Button>
                    <Button placeholder="" className="bg-gray-900 border border-gray-800 text-xs capitalize font-normal ">
                        👔 Love from Agencies
                    </Button>
                    <Button placeholder="" className="bg-gray-900 border border-gray-800 text-xs capitalize font-normal ">
                        People who switched
                    </Button>
                </div>
            </div>
            <div className="py-12 px-4 md:px-8">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </Masonry>
                <div className="text-center mt-8">
                    <Button placeholder='' className="bg-blue">
                        View More
                    </Button>
                </div>
            </div>

            <div className="bg-gray-950 flex items-center justify-center  py-8 ">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join our Newsletter</h1>
                    <form className="flex justify-center p-2 bg-black rounded-xl border border-gray-600 gap-2">
                        <Input
                            crossOrigin={undefined}
                            type="email"
                            placeholder="John@gmail.com"
                            className="w-64 px-4 py-2 border-none text-white focus:outline-none focus:ring-2 focus:ring-blue"
                        />
                        <Button
                            placeholder=""
                            type="submit"
                            className="bg-blue text-white px-6 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Join
                        </Button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default WallOfLove;
