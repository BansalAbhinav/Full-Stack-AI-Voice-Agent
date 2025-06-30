import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { Children } from 'react'
import { dummyInterviews } from '../constants'

const page = () => {
  return (
  <>
  <h1></h1>
  <section className='card-cta'>
<div className='flex flex-col gap-6 max-w-lg'>
<h2>Get Interview-Ready with Ai-Powered Practice & Feedback</h2>
<p className="text-lg">
Practice on real interview questions & get instant feedback

</p>
<Button  className='btn-primary max-sm:w-full'>
<Link href={"/interview"}> Start an Interview</Link>
</Button>
</div>
<Image className='max-sm:hidden' src= "/robot.png"  alt ="robot-dude" width={400} height={400}/>
  </section>
  <section className='flex flex-col gap-6 mt-8 '>
    <h2> Your Interview</h2>
  
  <div className='interviews-section '>
    {dummyInterviews.map((interview)=>(
      <InterviewCard {...interview} key ={interview.id}/>
    ))}
  
 </div>
  </section>
  <section className=" flex flex-col gap-6 mt-8">
    <h2>Take an Interview</h2>
  <div className='interviews-section '>
    {dummyInterviews.map((interview)=>(
      <InterviewCard {...interview} key ={interview.id}/>
    ))}
    
    <p>There are no interview available</p>
  </div>
  </section>
  
  </>
  )
}

export default page
