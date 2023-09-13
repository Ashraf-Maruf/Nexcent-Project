import React from 'react';
import Icon1 from '../../../Assets/OurClients-Icon/Icon01.png'
import Icon2 from '../../../Assets/OurClients-Icon/Icon02.png'
import Icon3 from '../../../Assets/OurClients-Icon/Icon03.png'
import Icon4 from '../../../Assets/OurClients-Icon/Icon04.png'
import Icon5 from '../../../Assets/OurClients-Icon/Icon05.png'
import Icon6 from '../../../Assets/OurClients-Icon/Icon06.png'
import Icon7 from '../../../Assets/OurClients-Icon/Icon07.png'
const OurClientsSection = () => {
    const clienstData = [
        {
            id: 1,
            img: Icon1,
        },
        {
            id: 2,
            img: Icon2,
        },
        {
            id: 3,
            img: Icon3,
        },
        {
            id: 4,
            img: Icon4,
        },
        {
            id: 5,
            img: Icon5,
        },
        {
            id: 6,
            img: Icon6,
        },
        {
            id: 7,
            img: Icon7,
        },
    ]
    return (
        <div className=' bg-white-900 my-20'>
            <div className=' max-w-[1148px] mx-auto lg1:px-4'>
                <div>
                    <h2 className=' pb-2 capitalize font-Inter font-semibold  text-indigo-500 text-[36px] leading-[44px]'>Our Clients</h2>
                    <p className=' font-Inter font-normal normal-case text-indigo-400 leading-[24px] text-[16px] '>We have been working with some Fortune 500+ clients</p>
                </div>
                <div className=' flex justify-between xm2:flex-wrap xm2:gap-12 mt-10'>
                    {
                        clienstData.map(cliens => <img src={cliens.img} alt='Icon' key={cliens.id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurClientsSection;