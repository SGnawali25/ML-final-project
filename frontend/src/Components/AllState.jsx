import React, {useEffect} from 'react'
import axios from 'axios'
import Individual from './Individual'

const AllState = async() => {
    const {data} = await axios.get("https://api.census.gov/data/2021/pep/population?get=NAME,POP_2020&POP_2021&RANK_POP_2020&RANK_POP_2021&for=state:*") 
    
    console.log(data)
  
    return (
    <div className='state_map'>
        {
            data.map((state)=> (<Individual state = {state}/>))
        }
    </div>
  )
}

export default AllState