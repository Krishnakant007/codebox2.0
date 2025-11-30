"use client"
import Image from 'next/image';
import React from 'react'

const ExplorMoreOptions = [
    {
        id: 1,
        title: 'Quizz Pack',
        desc: 'Practice what you learned with bite-sized code challenges.',
        icon: '/tree.png'
    },
    {
        id: 2,
        title: 'Video Courses',
        desc: 'Learn with structured video lessons taught step-by-step.',
        icon: '/game.png'
    },
    {
        id: 3,
        title: 'Community Project',
        desc: 'Build real-world apps by collaborating with the community.',
        icon: '/growth.png'
    },
    {
        id: 4,
        title: 'Explore Apps',
        desc: 'Explore prebuild app which you can try demo and build it.',
        icon: '/start-up.png'
    },
];


function ExploreMore() {
  return (
      <div className='mt-8'>
          <h2 className='text-3xl mb-2 font-game'>Explore More</h2>
          <div className='grid grid-cols-2 gap-5'>
              {ExplorMoreOptions.map((option, index) => (
                  <div
  key={index}
  className="flex items-center gap-3 p-3 border rounded-xl bg-zinc-900"
>
  <Image
    src={option?.icon}
    alt={option.title}
    width={80}
    height={80}
    className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
  />

  <div className="flex flex-col justify-center">
    {/* Your content here */}
    <p className="text-white font-semibold text-base sm:text-lg">{option.title}</p>
  </div>
</div>

              ))}
      </div>
    </div>
  )
}

export default ExploreMore
