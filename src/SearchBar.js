import React, {useState, useContext } from "react";
import { ThemeContext } from "./theme";
import LightDarkButton from "./LightDarkButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import logo from './jStockSneakerBoxWall.png';




function SearchPage({handleCatorgeyChange, itemSearch, sortHandleHighLow, sortHandleLowHigh, sortHighLow, sortLowHigh}) {

  const { theme } = useContext(ThemeContext);


  const themeColor = theme ? "secondary" : "success"

  const [key, setKey] = useState("All");


  function knowKey(k){
    setKey(k)
    handleCatorgeyChange(k)

  }


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
      
                        <input className="form-control" type="text" placeholder="Search any item..." onChange={itemSearch}/>
                      </div>
                    </div>

                  
                  <hr/>
                  <br></br>
                  <br></br>
                    
                    {/* Personal divs and hover css */}
                    <div style={{textAlign: "center", position: "relative"}}>

                      <Tabs id="controlled-tab-example" activeKey={key} onSelect={knowKey} className="mb-3">
                        <Tab eventKey="All" title="All"></Tab>                        
                        <Tab eventKey="Apparel" title="Apparel"></Tab>
                        <Tab eventKey="Electronics" title="Electronics"></Tab>
                        <Tab eventKey="Sneakers" title="Sneakers"></Tab>
                      </Tabs>

                    </div>

                  <div className="categoryGrid">

                    {/* <div className={`badge bg-${themeColor}`} style={{ borderRadius: "5px"}}> */}
                      {/* Filter Brands */}
                      {/* <br></br>
                      <br></br>
                      <br></br> */}
                      {/* <button >Filter Brands</button> */}

                      {/* Brands dropdown will match with whatever catorgey the page is in */}
                      {/* All - Jordan, Kith, Sony | Sneakers - Jordan, Nike, New Balance */}
                      {/* <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Filter Brands
                        </button>
                        <ul className="dropdown-menu">
                          <li className="dropdown-item">Action</li>
                          <li className="dropdown-item">Another action</li>
                          <li className="dropdown-item">Something else here</li>
                        </ul>
                      </div> */}
                    {/* </div> */}

                    <div>
                      {/* j stock logo */}
                      <img src={logo} alt="logo" style={{ height: "150px", width: "350px"}}/>
                    </div>
                    
                    <div className={`badge bg-${themeColor}`} style={{ borderRadius: "5px"}}>
                      Sort Prices

                      <br></br>
                      <br></br>

                      {sortHighLow ? (
                        <button onClick={sortHandleHighLow} style={{ color: "blue"}} className="btn btn-light">(High to Low) ⬆️</button>
                      ) : (
                        <button onClick={sortHandleHighLow} className="btn btn-light">(High to Low) ⬆️</button>
                      )}

                      <br></br>
                      <br></br>

                      {sortLowHigh ? (
                        <button onClick={sortHandleLowHigh} style={{ color: "blue"}} className="btn btn-light">(Low to High) ⬇️</button>
                      ) : (
                        <button onClick={sortHandleLowHigh} className="btn btn-light">(Low to High) ⬇️</button>
                      )}
                    
                    
                    
                    </div>

                  </div>
     
                </div>
            </div> 
          </section>

      </div>

    </main>
  );
}

export default SearchPage;