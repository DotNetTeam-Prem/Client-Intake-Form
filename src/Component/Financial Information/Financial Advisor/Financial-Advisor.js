import './Financial-Advisor.css';
const FinancialAdvisor = () => {
    return (
        <div className="content">
        <br/>
        <p className='Heading'>Financial Advisor</p>
        <div className='div-financial-addvisor'>
             <label>Advisor's Full Name: <input type="text" className='fa-name'></input></label><br/>
             <label>Company: <input type="text" className='fa-company'></input></label><br/>
             <label>Address: <input type="text" className='fa-address'></input></label><br/>
             <label>City: <input type="text" className='fa-city'></input></label>
             <label>State: <input type="text" className='fa-state'></input></label>
             <label>Zip Code: <input type="text" className='fa-zipcode'></input></label><br/>
             <label>Phone Number (s): <input type="text" className='fa-phoneno'></input></label><br/>
             <label>Email: <input type="text" className='fa-email'></input></label><br/>
             <label>How long have you used this advisor?<input type="text" className ="fa-line1"></input></label><br/>
             <label>Are you happy with this financial advisor?<input type="checkbox" className ="fa-line2"></input>Yes<input type="checkbox" className ="fa-chkbox-no"></input>No</label><br/>
             <label>Are you comfortable with your current financial plan?<input type="checkbox" className ="fa-line3"></input>Yes<input type="checkbox" className ="fa-chkbox-no"></input>No</label><br/>
             <label>Do you worry about the adequacy of your assets?<input type="checkbox" className ="fa-line4"></input>Yes<input type="checkbox" className ="fa-chkbox-no"></input>No</label><br/>
             <label>Do you consider your financial planner to be anything more than an investment advisor?<input type="checkbox" className ="fa-line5"></input>Yes<input type="checkbox" className ="fa-chkbox-no"></input>No</label><br/>
             <label>Will there be a continuity of services if this advisor retires, becomes disabled, or dies?<input type="checkbox" className ="fa-line6"></input>Yes<input type="checkbox" className ="fa-chkbox-no"></input>No</label><br/>
             <label>Are you open to a second opinion?<input type="checkbox" className ="fa-line7"></input>Yes<input type="checkbox" className ="fa-chkbox-no"></input>No</label><br/>
             <label>Do you understand the cost of investment?<input type="checkbox" className ="fa-line8"></input>Yes<input type="checkbox" className ="fa-chkbox-no"></input>No</label><br/>
             <label className='for-bold'>What services does your financial advisor provide to you besides investment advice?</label><br/>
             <input type="text" className='fa-line9'></input>
             <input type="text" className='fa-line10'></input><br/><br/>

        </div>
        </div>
    );
}
 
export default FinancialAdvisor;