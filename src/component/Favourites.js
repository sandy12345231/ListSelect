import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Favourites({ favData }) {
  useEffect(() => {
    console.log("Fav data", favData);
  }, [favData]);

  return (
    <div>
    
      {/* <NavLink to="/">
        <button className="btn btn-primary">back</button>
      </NavLink> */}
      {/* <ul>
        {favData.map((data) => (
          <li>{data.value}</li>
        ))}
      </ul> */}

                    
<div class="container">
<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-body text-center">
                <h5 class="card-title m-b-0">Favourites List Items</h5>
            </div>
            <div class="table-responsive">
                <table class="table">
                    <thead class="thead-light">
                        <tr>
                           
                            <th scope="col">Favorites List </th>
                        </tr>
                    </thead>
                    <tbody class="customtable">
                    {favData.map((data) => ( 
         <tr>
         
         <td>{data.value}</td>
     </tr>
                        ))} 
                       
                    </tbody>
                </table>
            </div>
            
      <NavLink to="/">
        <button className="btn btn-primary" className="btn btn-primary" style={{marginBottom: "10px", marginLeft:"45%"}}>back</button>
      </NavLink>
        </div>
    </div>
</div>
</div>
    </div>
  );
}

export default Favourites;
