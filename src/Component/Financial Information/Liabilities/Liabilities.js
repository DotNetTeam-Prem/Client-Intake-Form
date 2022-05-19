import './Liabilities.css'
const Liabilities = () => {
    return ( 
        <div>
        <p className='Heading mt-5 mb-1'>Liabilities:</p>
        <p className='p3'>Mortgages, Notes to Banks, Notes to Others, Loans on Insurance, Other:</p>
        <table className='container text-center'>
          <tr>
            <th className='col-4 thd'>Description</th>
            <th className='col-3 thd'>Name of Lender</th>
            <th className='col-1 thd'>Payoff Date</th>
            <th className='col-2 thd'>Outstanding Balance</th>
            <th className='col-2 thd'>Monthly Payment Amount</th>
          </tr>
          <tr>
            <td className="tdd"><input type="text" className='w-100' /></td>
            <td className="tdd"><input type="text" className='w-100' /></td>
            <td className="tdd"><input type="text" className='w-100'/></td>
            <td className="tdd"><input type="text" className='w-100'/></td>
            <td className="tdd"><input type="text" className='w-100'/></td>
          </tr>
          <tr>
            <td className="tdd"><input type="text" className='w-100' /></td>
            <td className="tdd"><input type="text" className='w-100' /></td>
            <td className="tdd"><input type="text" className='w-100'/></td>
            <td className="tdd"><input type="text" className='w-100'/></td>
            <td className="tdd"><input type="text" className='w-100'/></td>
          </tr>
          <tr>
            <td className="tdd"><input type="text" className='w-100' /></td>
            <td className="tdd"><input type="text" className='w-100' /></td>
            <td className="tdd"><input type="text" className='w-100'/></td>
            <td className="tdd"><input type="text" className='w-100'/></td>
            <td className="tdd"><input type="text" className='w-100'/></td>
          </tr>
          <tr>
            <td className="tdd"><input type="text" className='w-100' /></td>
            <td className="tdd"><input type="text" className='w-100' /></td>
            <td className="tdd"><input type="text" className='w-100'/></td>
            <td className="tdd"><input type="text" className='w-100'/></td>
            <td className="tdd"><input type="text" className='w-100'/></td>
          </tr>
          <tr>
            <td className="tdd"><input type="text" className='w-100' /></td>
            <td className="tdd"><input type="text" className='w-100' /></td>
            <td className="tdd"><input type="text" className='w-100'/></td>
            <td className="tdd"><input type="text" className='w-100'/></td>
            <td className="tdd"><input type="text" className='w-100'/></td>
          </tr>
          <tr>
            <td className="border-0" colSpan='2'></td>
            <td className='text-end fw-bold p-1 tdd'>TOTAL</td>
            <td className='fw-bold tdd'>$<input type="text" className='w-75'></input></td>
            <td className='fw-bold tdd'>$<input type="text" className='w-75'></input></td>
            </tr>
        </table>
        <p className='p3 mt-5'><u>Current Expenses:</u></p>
        <p>Please summarize your current <u className='fw-bold'>monthly</u> expenses, including expenses you may incur only once a year, or occasionally (e.g., property taxes, prescription drug costs, etc.).  Feel free to use additional paper as necessary.</p>
        <div className="container">
          <div className="row">
          <div className="col-6">
            <table className='container'>
              <tr>
                <th className='col-4 border-0'></th>
                <th className='col-2 text-center thd'>Monthly</th>
              </tr>
              <tr>
                <td className='ps-2 tdd'>Housing:</td>
                <td className="tdd"><input type="text" className='w-100 dirrgt' /></td>
              </tr>
              <tr>
                <td className='ps-2 tdd'>Insurance:</td>
                <td className="tdd"><input type="text" className='w-100 dirrgt' /></td>
              </tr>
              <tr>
                <td className='ps-2 tdd'>Medications:</td>
                <td className="tdd"><input type="text" className='w-100 dirrgt' /></td>
              </tr>
              <tr>
                <td className='ps-2 tdd'>Food:</td>
                <td className="tdd"><input type="text" className='w-100 dirrgt' /></td>
              </tr>
              <tr>
                <td className='ps-2 tdd'>Auto:</td>
                <td className="tdd"><input type="text" className='w-100 dirrgt' /></td>
              </tr>
              <tr>
                <td className='ps-2 tdd'>Taxes:</td>
                <td className="tdd"><input type="text" className='w-100 dirrgt' /></td>
              </tr>
              <tr>
                <td className='ps-2 tdd'>Clothes:</td>
                <td className="tdd"><input type="text" className='w-100 dirrgt' /></td>
              </tr>
              <tr>
                <td className='ps-2 tdd'>Travel:</td>
                <td className="tdd"><input type="text" className='w-100 dirrgt' /></td>
              </tr>
              <tr>
                <td className='ps-2 tdd'>Gym:</td>
                <td className="tdd"><input type="text" className='w-100 dirrgt' /></td>
              </tr>
              <tr>
                <td className='ps-2 tdd'>Charity:</td>
                <td className="tdd"><input type="text" className='w-100 dirrgt' /></td>
              </tr>
              <tr>
                <td className='ps-2 tdd'>Entertainment:</td>
                <td className="tdd"><input type="text" className='w-100 dirrgt' /></td>
              </tr>
              <tr>
                <td className='ps-2 tdd'>Savings:</td>
                <td className="tdd"><input type="text" className='w-100 dirrgt' /></td>
              </tr>
              <tr>
                <td className='ps-2 tdd'>Retirement Savings:</td>
                <td className="tdd"><input type="text" className='w-100 dirrgt' /></td>
              </tr>
              <tr>
                <td className='ps-2 tdd'>Miscellaneous:</td>
                <td className="tdd"><input type="text" className='w-100 dirrgt' /></td>
              </tr>
              <tr>
              <td className="tdd"><input type="text" className='w-100 ' /></td>
              <td className="tdd"><input type="text" className='w-100 dirrgt' /></td>
              </tr>
              <tr>
              <td className='text-end fw-bold p-1 tdd'>TOTAL</td>
            <td className='fw-bold tdd'>$<input type="text" className='w-75'></input></td>
              </tr>
            </table>
          </div>
          <div className='col-1'>
          </div>
          <div className="col-5 text-center">
            <table className='container'>

            <tr>
                <th className='col-5 thd' colSpan='2'>Non-Monthly Expenses</th>
            </tr>
            <tr>
                <th className='col-5 thd' colSpan='2'>Example: Property Taxes, etc.</th>
            </tr>
            <tr>
            <th className='col-3 thd'>Description</th>
            <th className='col-2 thd'>Amount</th>
            </tr>
            <tr>
              <td className="tdd"><input type="text" className='w-100 ' /></td>
              <td className="tdd"><input type="text" className='w-100 dirrgt' /></td>
            </tr>
            <tr>
              <td className="tdd"><input type="text" className='w-100 ' /></td>
              <td className="tdd"><input type="text" className='w-100 dirrgt' /></td>
            </tr>
            <tr>
              <td className="tdd"><input type="text" className='w-100 ' /></td>
              <td className="tdd"><input type="text" className='w-100 dirrgt' /></td>
            </tr>
            <tr>
              <td className="tdd"><input type="text" className='w-100 ' /></td>
              <td className="tdd"><input type="text" className='w-100 dirrgt' /></td>
            </tr>
            <tr>
              <td className="tdd"><input type="text" className='w-100 ' /></td>
              <td className="tdd"><input type="text" className='w-100 dirrgt' /></td>
            </tr>
            <tr>
              <td className="tdd"><input type="text" className='w-100 ' /></td>
              <td className="tdd"><input type="text" className='w-100 dirrgt' /></td>
            </tr>
            <tr>
              <td className="tdd"><input type="text" className='w-100 ' /></td>
              <td className="tdd"><input type="text" className='w-100 dirrgt' /></td>
            </tr>
            </table>
          </div>
          </div>
        </div>
        </div>
    );
}
 
export default Liabilities;