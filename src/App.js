import './App.css';
import React from "react";
import Addresse from "./component/profile/Addresse.js";
import Fullname  from './component/profile/FullName';
import Profilephoto from './component/profile/ProfilePhoto.js';

const App=()=>{
  return (
  <React.Fragment>
   <div>
   <Profilephoto/>
   </div>
   <div>
   <h2>My Name is:<Fullname/></h2>
    <h2>I life in:<Addresse/></h2>
    </div>

  
</React.Fragment>

);
};
export default App;
