import React, { useState } from "react";
import Form from "./Form";
import RentMessage from "./RentMessage";

function App() {
  const [showMessage, setShowMessage] = useState(false)
  
  const handleFormSubmit = event => {
    event.preventDefault()
    setShowMessage(true)

  }
  return (
    <div>
      {showMessage ?  <RentMessage /> : <Form handleFormSubmit={handleFormSubmit}/>}
      
    </div>
  );
}

export default App;
