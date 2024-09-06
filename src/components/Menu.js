import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

function Menu() {
    const {deger,id,linkler} =useContext(GlobalContext)
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        {deger}
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {
            linkler.map((link)=>{
                return(
                <li class="nav-item">
          <a class="nav-link " href="#">{link}</a>
        </li>
        )
            })
        }
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Menu
