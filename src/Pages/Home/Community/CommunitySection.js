import React from 'react';
import Icon1 from '../../../Assets/Manage-Icon/Icon01.png'
import Icon2 from '../../../Assets/Manage-Icon/Icon02.png'
import Icon3 from '../../../Assets/Manage-Icon/Icon03.png'
const CommunitySection = () => {
    const communityData = [
        {
            id: 1,
            img: Icon1,
            title: "Membership Organisations",
            para: "Our membership management software provides full automation of membership renewals and payments"
        },
        {
            id: 2,
            img: Icon2,
            title: "National Associations",
            para: "Our membership management software provides full automation of membership renewals and payments"
        },
        {
            id: 3,
            img: Icon3,
            title: "Clubs And Groups",
            para: "Our membership management software provides full automation of membership renewals and payments"
        }
    ]
    const boxShadow = {
        boxShadow: '0px 2px 4px 0px rgba(171, 190, 209, 20%)',
    }
    return (
        <div className=' bg-white-900 my-10'>
            <div className=' max-w-[1152px] mx-auto lg1:px-4'>
                <div className='max-w-[542px] mx-auto pb-16'>
                    <h2 className=' pb-2 normal-case font-Inter font-semibold  text-indigo-500 xm2:text-[25px] xm2:leading-[35px] text-[36px] leading-[44px]'>Manage your entire community in a single system</h2>
                    <p className=' font-Inter font-normal normal-case text-indigo-400 leading-[24px] text-[16px] '>Who is Nextcent suitable for?</p>
                </div>
                <div className=' grid grid-cols-3 sm:grid-cols-1 sm1:grid-cols-1 md1:grid-cols-2 lg:gap-16 gap-32'>
                    {
                        communityData.map(comm => <div class="card bg-base-100" key={comm.id} style={boxShadow}>
                            <figure class="px-4 pt-6">
                                <img className='w-[65px] h-[56px]' src={comm.img} alt="Shoes" class="rounded-xl" />
                            </figure>
                            <div class="card-body pt-4 p-[24px] items-center text-center">
                                <h3 class=" px-[16px] capitalize font-Inter font-bold text-[28px] leading-[36px] text-indigo-500">{comm.title}</h3>
                                <p className='font-Inter font-normal normal-case text-[14px] leading-[20px] text-indigo-400'>{comm.para}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CommunitySection;