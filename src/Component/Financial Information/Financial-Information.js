import './Financial-Information.css';
import FinancialAdvisor from './Financial Advisor/Financial-Advisor';
import Accountant from './Accountant/Accountant';
import Assets from './Assets/Assets';
import Liabilities from './Liabilities/Liabilities';
import MonthlyIncome from './Monthly-Income/Monthly-Income';
import TaxInformation from './Tax-Information/Tax-Information';
import FutureExpectations from './Future-Expectations/Future-Expectations';
const title ='Financial Information';
const FinancialInformation = () => {
    return ( 
        <div className="content container">
        <h2 className='title'>{title}</h2>
        <div className='blackk'>
        <p className='p1'>Please remember to bring the following information with you to your appointment.</p>
        <ul>
        <li><input type="checkbox" value="" />Latest Tax Return</li><br/>
        <li><input type="checkbox" value="" />Long-Term Care Policy (i.e., a complete copy of your policy, if you have one)</li><br/>
        <li><input type="checkbox" value="" />Life Insurance Policy (i.e., a complete copy of your policy and latest statement with current values, if you have one)</li><br/>
        <li><input type="checkbox" value="" />Latest Financial Statement(s): (e.g., Bank, Investment, Retirement accounts)</li><br/>
        <li><input type="checkbox" value="" />Deed(s) to real property</li>
        </ul>
        

        <FinancialAdvisor/>
        <Accountant/>
        <Assets/>
        <Liabilities/>
        <MonthlyIncome/>
        <TaxInformation/>
        <FutureExpectations/>

        </div>
        </div>

     ); 
}
 
export default FinancialInformation;