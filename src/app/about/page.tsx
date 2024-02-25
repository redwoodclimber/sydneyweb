import Image from 'next/image';
import leftPic from '/public/IMG_0858.jpg';
import rightPic from '/public/IMG_6439.jpg';

// do grid instead of flexbox

export default function About() {
    return (
        <div className="flex flex-col bg-white pt-10 container mx-auto">
            <div className="flex flex-row space-x-16">
                <Image src={leftPic} className="object-cover w-1/3 " width={500} height={750} quality={80} alt="on a boat" />
                <div className="text-center w-1/3">
                    <h1 className="text-4xl font-bold pt-5">About Me</h1>
                    <p className="pt-8 text-justify">Hey there! My name is Sydney Knowland (she/her), and I am originally from San Diego, California. I am currently in my final year at the University of North Carolina School of the Arts with a concentration in Stage Management. Fostering a safe & creative environment is my goal for every project I get to be a part of, as well as putting on a successful production. In my free time, I enjoy cooking as well as painting somewhat okay looking pictures. I am an avid music listener, and a loyal viewer of The Bachelor. I am currently looking for Stage / Production Management Positions in 2024 and Look forward to meeting you! </p>
                </div>
                <Image src={rightPic} className="object-cover w-1/3 " width={500} height={750} quality={80} alt="hanging with friends" />
            </div>
            {/* <div className="flex flex-row">
                <div className="flex flex-col justify-center space-y-5">
                    <div className="text-center w-1/3">
                        <h1 className="text-4xl font-bold pt-5">About Me</h1>
                        <p className="pt-8 text-justify">Hey there! My name is Sydney Knowland (she/her), and I am originally from San Diego, California. I am currently in my final year at the University of North Carolina School of the Arts with a concentration in Stage Management. Fostering a safe & creative environment is my goal for every project I get to be a part of, as well as putting on a successful production. In my free time, I enjoy cooking as well as painting somewhat okay looking pictures. I am an avid music listener, and a loyal viewer of The Bachelor. I am currently looking for Stage / Production Management Positions in 2024 and Look forward to meeting you! </p>
                    </div>
                    <Image src={leftPic} className="w-1/3" quality={80} alt="on a boat" />
                    <Image src={rightPic} className="w-1/3" quality={80} alt="hanging with friends" />
                </div>
            </div> */}
        </div>
    );
}