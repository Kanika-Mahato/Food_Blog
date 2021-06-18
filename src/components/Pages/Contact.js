import React from 'react'
import './Contact.css'

 function Contact() {
    return (
        <div>
            <div class="container" id="contact">
                <div class="inner">
               <form className="form" >
                   <label>Name&nbsp;&nbsp;</label>
                   <input type="text" placeholder="enter your name"/><br/><br/>
                   <label>Phone&nbsp;&nbsp;</label>
                   <input type="text"  placeholder="enter your phone"/><br/><br/>
                   <label>Email&nbsp;&nbsp;</label>
                   <input type="email"  placeholder="enter your email"/><br/><br/>
                   
                   <textarea cols="80" rows="4" ></textarea><br/>
                   <label>Comments</label><br/><br/>
                   <button className="btn btn-light">Submit</button>
               </form>
               </div>
          </div>

            
        </div>
    )
}
export default Contact;