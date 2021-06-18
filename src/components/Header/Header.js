
import React from 'react'
import './Header.css'


function Header (props){
         
        return (
            <div className="jumbotron jumbotron-fluid ">
                <div className="container">

                    <h1 className="display-1 brand">
                        <span class="material-icons brand-icon">
                            restaurant
                        </span>
                      &nbsp;Grub Crust</h1>
                    <div className="input-group w-50 mx-auto" >
                        <input type="text" className="form-control" onChange={props.onInputChange} placeholder="Search For Recipie" value={props.search}/>
                        <div className="input-group-append">
                            <button className="btn btn-dark btn-lg" onClick={props.onSearchClick}>Search</button>
                        </div>
                    </div>


                </div>
            </div>
        )
    
}
export default Header;
