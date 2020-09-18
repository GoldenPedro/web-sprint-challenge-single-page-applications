import React from 'react'
import { Link} from "react-router-dom";

function Home(props) {
  return (


    <div className="home">
      <div className="heading">
        <h1>Your favorite food delivered!</h1>

        <Link to='/pizza'><button>Order Pizza</button></Link>




      </div>
    </div>

  )
}

export default Home