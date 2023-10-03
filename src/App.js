
import './App.css';
import Cards from './components.js/Cards';
import car from './car.json'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'

function App() {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = car.slice(firstIndex, lastIndex);
  const npage = Math.ceil(car.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1)

  return (
    <>
      <div className="App">
        <div className='main'>
          <form>
            <input typeof='text' onChange={(e) => setSearch(e.target.value)} placeholder='Seacrh....' className='input'>
            </input>
          </form>
          <div className='icon'>
            <SearchIcon style={{ fontSize: 50 }} />
          </div>
          <form className='rel1'>
            <p>Relevance</p>
            <select className='rel'>
            </select>
            <p className='all'>All Brands</p>
            <select className='all-brands'>
            </select>
          </form>
        </div>
        <div className='main-card'>
          {records.filter((e) => {
            return search.toLowerCase() === '' ? e : e.Name.toLowerCase().includes(search);
          }).map((e, i) => {
            return (
              <Cards
                key={i}
                image={e.Image}
                name={e.Name}
                year={e.Year}
                people={e.People}
                pet={e.Petrol}
                speed={e.Speed}
                automatic={e.Automatic}
                price={e.Price}
              />
            )
          })}
        </div>
        <nav>
          <ul className='pagination'>
            <li className='page-item'>
              <a href='#' className='page-link' onClick={prePage} style={{fontSize: 50, alignItems:"center", display:"flex", justifyContent:"space-around", margin:50}}>Prev</a>
            </li>
            {
              numbers.map((n , i) => {
                <li className={`page-item ${currentPage === n ? 'active' : ''}` }key={i}>
                <a href='#' className='page-link' onClick={()=> changeCPage(n)}>{n}</a>

                </li>
              })
            }
            <li className='page-item'>
              <a href='#' className='page-link' onClick={nextPage} style={{fontSize: 50, alignItems:"center", display:"flex", justifyContent:"space-around", margin:80 }}>Next</a>
            </li>

          </ul>
        </nav>
      </div>

    </>
  );
  function prePage() {
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1)
    }
  }
  function changeCPage(id) {
    setCurrentPage(id)
  }
  function nextPage() {
    if(currentPage !== npage){
      setCurrentPage(currentPage + 1)
    }
    
  }
}

export default App;
