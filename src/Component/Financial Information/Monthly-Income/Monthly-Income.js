import './Monthly-Income.css'
const MonthlyIncome = () => {
    return ( 
        <div>
        <p className='Heading mt-5 mb-1'>Monthly Income:</p>
        <table className='container'>
          <tr>
            <th className="col-4 border-0"></th>
            <th className="col-2 border-0"></th>
            <th className="col-2 border-0"></th>
            <th className="col-4 text-center thd" colSpan='2'>Complete if not yet retired</th>
          </tr>
          <tr>
            <th className="col-4 border-0"></th>
            <th className='thd text-center'>Client #1 Current</th>
            <th className="thd text-center">Client #2 Current</th>
            <th className="thd text-center">Client #1 Projected Retirement</th>
            <th className="thd text-center">Client #2 Projected Retirement</th>
          </tr>
          <tr>
            <td className='ps-2 tdd'>Social Security (gross):</td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
          </tr>
          <tr>
            <td className='ps-2 tdd'>Employment (gross):</td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
          </tr>
          <tr>
            <td className='ps-2 tdd'>Pension (gross):</td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
          </tr>
          <tr>
            <td className='ps-2 tdd'>IRAs, annuities, etc. (gross):</td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
          </tr>
          <tr>
            <td className='ps-2 tdd'>Income from investments:</td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
          </tr>
          <tr>
            <td className='ps-2 tdd'>Rental income (net, before taxes):</td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
          </tr>
          <tr>
            <td className='ps-2 tdd'>Business Interests (net, EBITDA):</td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
            <td className='tdd'><input type="text" className='w-100 dirrgt' /></td>
          </tr>
          <tr>
            <td className='text-end fw-bold p-1 tdd'>TOTAL</td>
            <td className='fw-bold tdd'>$<input type="text" className='w-75'/></td>
            <td className='fw-bold tdd'>$<input type="text" className='w-75'/></td>
            <td className='fw-bold tdd'>$<input type="text" className='w-75'/></td>
            <td className='fw-bold tdd'>$<input type="text" className='w-75'/></td>
          </tr>
        </table>
        <p className="p1 mt-3">How much do you contribute, monthly, to your retirement?
        <input type='text' className='border-bottom border-1 border-dark ms-2'/>
        </p>
        <p>Which sources of income have a benefit for a surviving spouse?</p>
        <input type='text' className='border-bottom border-1 border-dark w-100'/>
        <input type='text' className='border-bottom border-1 border-dark w-100'/>
        <p className='mt-4'>Do you anticipate any changes to your income?</p>
        <input type='text' className='border-bottom border-1 border-dark w-100'/>
        <input type='text' className='border-bottom border-1 border-dark w-100'/>
        <p className="p1 mt-3">Is your monthly income less than, equal to, or greater than your monthly expenses?
        <input type='text' className='border-bottom border-1 border-dark ms-2'/>
        </p>
        </div>
     );
}
 
export default MonthlyIncome;