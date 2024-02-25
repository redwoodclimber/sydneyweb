import React from 'react';
import Image from 'next/image';
import resumeThumb from '/public/sydresthumb.jpg';

function DisplayResume({ ...props }) {
    return(
        <div {...props}>
            <a href="sydney_resume.pdf" target="_blank">
                <Image src={resumeThumb} quality={100} alt="Sydney Knowland Resume" />
            </a>
        </div>
    );
}

export default function Resume() {

    return (
        <div className="flex flex-col bg-white container mx-auto">
            <p className="flex justify-center text-slate-400 italic pt-5">Click document for downloadable PDF</p>
            <DisplayResume className="flex justify-center"/>
        </div>
    );
}