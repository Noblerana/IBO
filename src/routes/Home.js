import React from 'react'
import "../App.css"
import students from '../images/students.jpg'
import propa from '../images/bananaprop.jpg'

function Home() {
  return (
    <div className='main'>
      <div className='head'>
        <h1>IBO MIXED FARM LTD</h1>
      </div>
      <div className='container'>
       <p>Ibo has been working  above and beyond  with <span>NGO's</span>to add value to agriculture with the best technolgy,flexibilty and reliabilty for all with the aim of fighting poverty in uganda.</p>
      </div>
      <div className='container'>
      <h2>Mind</h2>
      <img src={propa} alt='' className='imge'/>
      <p>20years of market research learning and  insights,optimum utilization and the nerve to keep asking "how" results into ceative solutions that are free of the old isues</p>
      </div>
      <div className='container'>
      <h2>Heart</h2>
      <img src={students} alt='' className='imge'/>
      <p>skilling the youth in Agripreneurship and adquete utilization of land  to provide a balanced Lifestyle that results in overcoming poerty</p>
      </div>
    </div>
  )
}

export default Home
