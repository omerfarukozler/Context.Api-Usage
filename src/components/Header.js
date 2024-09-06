import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
function Header() {
    const {deger,id,setDeger} =useContext(GlobalContext)
  return (
    <div className="col-md-6">
 <div className='alert alert-primary'>
    <h2>ID:{id} Contexten gelen veri:{deger}</h2>
    <p>
      <button className='btn btn-danger'onClick={()=>{setDeger("Faruk")}}>
       Değiştir
      </button>
    </p>
 </div>
 </div>
  )
}

export default Header
