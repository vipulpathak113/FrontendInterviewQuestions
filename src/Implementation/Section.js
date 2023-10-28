import React from 'react'

export default function Section() {
  return (
    <div>
        <div style={{position:"fixed"}}>
        <a href='#section1'>Section1</a>
        <a href='#section2'>Section2</a>
        <a href='#section3'>Section3</a>
        <a href='#section4'>Section4</a>
        </div>
      <div style={{marginTop:"30px"}}>
        <section style={{height:"400px"}} id='section1'>Section1</section>
        <section style={{height:"400px"}} id='section2'>Section2</section>
        <section style={{height:"400px"}} id='section3'>Section3</section>
        <section style={{height:"400px"}} id='section4'>Section4</section>
        </div>
    </div>
  )
}
