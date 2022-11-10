import React from 'react';
import spinner from '../../images/spinner-pre-angular.webp'

const Loading = () => {
    return (
        <div className=' bg-white'>
            <img className='w-1/2 mx-auto h-[500px] bg-transparent' src={spinner} alt="" />
        </div>
    );
};

export default Loading;