import React, {useState, useEffect} from 'react'
import axios from 'axios'

import './App.css'

import Header from './components/UI/Header'
import Search from './components/UI/Search'
import Character from './components/Character/CharacterGrid'

const App = () => {

   const [items, setItems] = useState([])
   const [isLoaded, setIsLoaded] = useState(true)
   const [query, setQuery] = useState('')

   useEffect(() => {
      const fetchItems = async () => {
         const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
         setItems(result.data)
         setIsLoaded(false)
      }

      fetchItems()
   }, [query])


   return (
      <div className="container">
         <h1>Taguara Digital</h1>
         <Header />
         <Search getQuery={(q) => setQuery(q)} />
         <Character isLoaded={isLoaded} items={items} />
      </div>
   );
}

export default App;
