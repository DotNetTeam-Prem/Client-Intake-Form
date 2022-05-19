import './Tax-Information.css'
const TaxInformation = () => {
    return ( 
        <div>
        <p className='Heading2 mt-5 mb-1 border-0'>Tax Information:</p>
        <table>
          <tr>
            <td className='tdd'>Adjusted Gross Income (AGI):</td>
            <td className='tdd'><input type="text" className='w-100 dirrgt'/></td>
          </tr>
          <tr>
            <td className='tdd'>Taxable Income:</td>
            <td className='tdd'><input type="text" className='w-100 dirrgt'/></td>
          </tr>
          <tr>
            <td className='tdd'>Total Taxes:(AGI):</td>
            <td className='tdd'><input type="text" className='w-100 dirrgt'/></td>
          </tr>
          <tr>
            <td className='tdd'>Marginal Tax Rate:</td>
            <td className='tdd'><input type="text" className='w-100 dirrgt'/></td>
          </tr>
          <tr>
            <td className='tdd'>Effective Tax Rate:</td>
            <td className='tdd'><input type="text" className='w-100 dirrgt'/></td>
          </tr>
        </table>
        </div>
    );
}
 
export default TaxInformation;