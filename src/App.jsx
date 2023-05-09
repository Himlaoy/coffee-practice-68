
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffee from './components/Coffee'

function App() {

  const coffees = useLoaderData()
  console.log(coffees)


  return (
    <div>
      <h2 className='text-4xl text-fuchsia-300'>Hot cold coffee</h2>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <Coffee key={coffee._id} coffee={coffee}></Coffee>)
        }
      </div>
    </div>
  )
}

export default App
