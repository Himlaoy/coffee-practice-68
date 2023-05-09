
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffee from './components/Coffee'
import { useState } from 'react'

function App() {

  const loadCoffees = useLoaderData()
  // console.log(coffees)
  const [coffees, setCoffees] = useState(loadCoffees)


  return (
    <div>
      <h2 className='text-4xl text-fuchsia-300'>Hot cold coffee</h2>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <Coffee key={coffee._id} 
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></Coffee>)
        }
      </div>
    </div>
  )
}

export default App
