import React from 'react';
import { Routes ,Route , Navigate   }from "react-router-dom"
import { StateContextProvider } from '../contexts/ResultContextProvider';
import {Results} from './Results';
function Router(props) {
    return (

                     
       
     <div  className='p-4' >
          
          <Routes>        
          <Route exact path="/"  element={<Navigate to='/search' />}  /> 
          <Route  exact path="/search" element={<Results/>}/>  
          <Route  exact path= "/image" element={<Results/>}/>  
          <Route  exact path="/news" element={<Results/>}/>  
          <Route  exact path="/videos" element={<Results/>}/>  
              {/* <Route path="authentication" element={<Footer />} /> */}
      {/* <Route path="/dashboard-component" element={<DashboardComponent />} /> */}
          </Routes>
          
      </div>

    );
}

export default Router;