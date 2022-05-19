import './Future-Expectations.css';
const FutureExpectations = () => {
    return (
        <div>
        <p className='Heading2 mt-5 mb-1 border-0'>Future Expectations:</p>
        <p>Do you or your spouse expect an inheritance?
        <input type='checkbox' className="ms-5" /><span className='ms-1'>Yes</span>
        <input type='checkbox' className='ms-3'/><span className='ms-1'>No</span></p>
        <p>If yes, please describe:<input type='text' className='ms-2 border-bottom border-1 border-dark w-75' /></p>
        <p>Are you or your spouse the beneficiary of any trust?
        <input type='checkbox' className="ms-2" /><span className='ms-1'>Yes</span>
        <input type='checkbox' className='ms-3'/><span className='ms-1'>No</span></p>
        <p>If yes, please describe:<input type='text' className='ms-2 border-bottom border-1 border-dark w-75' /></p>
        </div>
    );
}
 
export default FutureExpectations;