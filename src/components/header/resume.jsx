import React from 'react'
import Resume from '../../assets/LizaDeGuerengombaResume.pdf';

const resume = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Connect</a>
    </div>
  )
}

export default resume