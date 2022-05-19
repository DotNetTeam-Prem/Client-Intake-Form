import './Accountant.css';
const Accountant = () => {
    return ( 
        <div>
        <p className='Heading'>Accountant</p>
        <div>
             <label>Accountant’s Full Name: <input type="text" className='a-name'></input></label><br/>
             <label>Company: <input type="text" className='a-company'></input></label><br/>
             <label>Address: <input type="text" className='a-address'></input></label><br/>
             <label>City: <input type="text" className='a-city'></input></label>
             <label>State: <input type="text" className='a-state'></input></label>
             <label>Zip Code: <input type="text" className='a-zipcode'></input></label><br/>
             <label>Phone Number (s): <input type="text" className='a-phoneno'></input></label><br/>
             <label>Email: <input type="text" className='a-email'></input></label><br/>
             <label>How long have you used this accountant?<input type="text" className ="a-line1"></input></label><br/>
             <label>Are you happy with this accountant?<input type="checkbox" className ="a-line2"></input>Yes<input type="checkbox" className ="a-chkbox-no"></input>No</label><br/>
             <label>Will there be a continuity of services if this accountant retires, becomes disabled, or dies?<input type="checkbox" className ="a-line3"></input>Yes<input type="checkbox" className ="a-chkbox-no"></input>No</label><br/>
        </div>
        <br/>
        <p className='p1'>Please provide the following financial information.  This information allows us to better determine which legal devices will best meet your retirement planning needs.</p>
        </div>
     );
}
 
export default Accountant;