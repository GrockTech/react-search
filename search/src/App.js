import { useEffect, useState } from 'react';
import Table from './Table';
// import {data} from './Users'
import axios from 'axios'

function App() {
  const [query, setQuery] =  useState("")

  const [data, setData] = useState([])
 
 useEffect(()=>{
    const fetchUser = async () =>{
        const res = await axios.get("http://localhost:8800")
        setData(res.data)
    }
    fetchUser()
 }, [])  
  
 ///FRONT END SEARCH OPTION 
  // const keys = ["first_name", "last_name", "email"]


  
// const search = (userData) =>{
//   return userData.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query))
  
// //   item.first_name.toLowerCase().includes(query) 
// //   || item.last_name.toLowerCase().includes(query)
// //  || item.email.toLowerCase().includes(query)
//   )
// }
 

  function handleChange (e){
    const value = e.target.value
    setQuery(value)
    // console.log(data.filter(item=>item.first_name.toLowerCase().includes("a"))) /// taking data from search 
  }

  return (
    <div className="container">
      <input type="text" 
      placeholder="search" 
      onChange={handleChange }
      value={query}
      className="search"/>

      {/* <ul className="list"> 
    {data.filter(user=> user.first_name.toLowerCase().includes(query)).map(user =>(
         <li key={user.id}>{user.first_name}</li>                    
    )
      
    )}

       
      </ul> */}

        <Table Data={data}/>

    </div>
  );
}

export default App;
