import React, { useEffect ,useState} from 'react'
import Api from './testApi'
const DisplayTestAPi = () => {
const [unsorted,setunsorted]=useState(Api);
const [data,setData]=useState([]);
const [search,setSearch]=useState("");
const Sorting=()=>{
    const sortedData=unsorted.sort((a,b)=>{   //sort by votes
        return a.upvotess-b.upvotess;
    }
    )
  setData([sortedData]);
}
useEffect(()=>{ 
    Sorting();
}
,[])
const DescSorting=()=>{
    const sortedData=unsorted.sort((a,b)=>{   //sort by votes
        return b.upvotess-a.upvotess;
    }
    )
  setData([...sortedData]);
}
const Descdate=()=>{
    const sortedData=unsorted.sort((a,b)=>{   //sort by votes
        return new Date(b.date)-new Date(a.date);
    }
    )
    setData([...sortedData]);
}

const SearchVotes=(e)=>{
setSearch(e.target.value);
    const Updateddata=data.filter(item=>{
        return (
            Object.values(item).join("").toLowerCase().includes(e.target.value.toLowerCase())
        )
      }
    )
    setData(Updateddata)
   
}
useEffect(()=>{
    if(search==""){
        setData(Api);
    }
   
}   ,[search])
    
  return (
    <div>
        <div className="container">
  <div> <input type="text" onChange={(e)=>SearchVotes(e)}/></div> 

     <button
     onClick={DescSorting}
     className='btn btn-danger'>Upvotes</button>
     <button
      onClick={Descdate}
     className='btn btn-primary'>Date</button>
      <table>
        <thead>
         <td>Name</td>  
         <td>Votes</td> 
         <td>Date</td>  
        </thead>  
        <tbody>
    {
        data.map((item,index)=>{
            return(
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.upvotess}</td>
                    <td>{item.date}</td>
                </tr>
            );
        }
        )
    }
        

            </tbody>    
        </table>
        </div>
    </div>
  )
}

export default DisplayTestAPi
