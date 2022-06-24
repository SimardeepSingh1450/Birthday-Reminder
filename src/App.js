import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [peoples,setPeople]=useState(data)
  return (
    <main>
      <section className='container'>
      <h3>{peoples.length} Birthdays Today</h3>
      <List people={peoples}/>
      <button onClick={()=>{
        setPeople([])
      }}>Clear All</button>
      </section>
    </main>
  )
}

export default App;
