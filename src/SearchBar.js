import React, { useContext } from "react";
import { ThemeContext } from "./theme";
import LightDarkButton from "./LightDarkButton";
import 'bootstrap/dist/css/bootstrap.min.css';


// onChange={}


function SearchPage() {


  const { theme } = useContext(ThemeContext);


  const themeColor = theme ? "secondary" : "success"


  return (
    <main>
      <div className="container-fluid" style={{position: "fixed", top:"0"}}>
        
        
        <section className="header-main border-bottom bg-white">
            <div className="container-fluid">
                <div className="row p-2 pt-3 pb-3 d-flex align-items-center">
                    <div className="col-md-2">
                      <LightDarkButton />

                    </div>
                    <div className="col-md-8">
                  <div className="d-flex form-inputs" style={{width: "600px", height:"50px"}}>
                    <input className="form-control" type="text" placeholder="Search any item..."/>

                    <i className="bx bx-search"></i>
                  </div>
                    </div>

                  
                  <hr/>
                  <br></br>
                  <br></br>
                    
                    {/* Personal divs and hover css */}
                    <div className="categoryGrid">

                      <h2>All</h2>

                      <div className="vl"></div>
                      <h2>Sneakers</h2>

                      <div className="vl"></div>
                      <h2>Apparel</h2>

                      <div className="vl"></div>
                      <h2>Electronics</h2>

                    </div>

                  <div className="categoryGrid">

                    <button className={`badge bg-${themeColor}`} style={{ borderRadius: "5px"}}>Filter Brands</button>

                    {/* j stock logo */}
                    <img src="https://i.etsystatic.com/33329294/r/il/727f47/3627737931/il_1588xN.3627737931_eicj.jpg" alt="jordan signs"/>

                    <button className={`badge bg-${themeColor}`} style={{ borderRadius: "5px"}}>Sort Prices</button>


                  </div>
     
                </div>
            </div> 
          </section>

      </div>

    </main>
  );
}

export default SearchPage;