import React from "react";
import { NavLink } from "react-router-dom";

function Home({ data, passData }) {
  const arrList = data.length ? (
    data.map((element, index) => {
      return (
        // <ul
        //  
        //   className="table table-bordered table-condensed table-hover"
        // >
        //   <input
        //     type="checkbox"
        //     checked={element.checked}
        //     id={`custom-checkbox-${element.value}`}
        //     onChange={() => passData(element.id)}
        //     value={element.value}
        //   />

        //   <li>{element.value}</li>

        // </ul>
           <tr  key={index}>
           <th> <label class="customcheckbox"> 
           <input type="checkbox" class="listCheckbox" 
           checked={element.checked}
          id={`custom-checkbox-${element.value}`}
           onChange={() => passData(element.id)}
        value={element.value}/> <span class="checkmark"></span> </label> </th>
           <td>{element.value}</td>
       </tr>
      );
    })
  ) : (
    <h1>No data found</h1>
  );

  return (
    <>
    

<div class="container">
<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-body text-center">
                <h5 class="card-title m-b-0">List of Items</h5>
            </div>
            <div class="table-responsive">
                <table class="table">
                    <thead class="thead-light">
                        <tr>
                        <th scope="col">Select Items</th>
                           <th scope="col">Items</th>
                            
                        </tr>
                    </thead>
                    <tbody class="customtable">
                    {arrList}
                       
                    </tbody>
                </table>
            </div>
            
      <NavLink to="/favourites">
        <button className="btn btn-primary" style={{marginBottom: "10px", marginLeft:"45%"}}>Show Favorate</button>
      </NavLink>
        </div>
    </div>
</div>
</div>
</>
  );
}

export default Home;
