import React, { useState } from 'react';
 
const ChangeState = () => {

    const name = "Lorna"
 
    const [fullName, setFullName] = useState("Add the cart"); 
    
    //standard component setup
    return (
        <> 
      
              {/*button with an arrow function setFullName */}
            {/* <button onClick={() => (setFullName("In cart"))}> 
                {fullName}
            </button> */}
            {/* <button onClick={() => (setFullName(name))}>
                Reset Name here!
            </button> */}
        </>
    );
}
 
export default ChangeState;