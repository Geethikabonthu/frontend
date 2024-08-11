 import React from "react";
 import { useParams } from 'react-router-dom';
 import { Navigation } from "./Components/navigation";
 import { Signin } from "./Components/signin";
import { Signup } from "./Components/signup";
import * as reactRouterDom from 'react-router-dom';
// import SignOut from "./Components/signout";
function App () { 
    return(
      <>
      {/* <Signin/> */}
     {/* <Signup/>  */}
     <Navigation/> 
     {/* <SignOut/> */}
      </>
    );
  }
export default App;
// import React from 'react';
// import Signup from "./Components/signup";

// const App = () => {
//   return (
//     <div>
//       <h1>My Application</h1>
//       <Signup />
//     </div>
//   );
// };

// export default App;