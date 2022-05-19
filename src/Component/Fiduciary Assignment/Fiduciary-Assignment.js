import './Fiduciary-Assignment.css';
import FiduciaryAssignmentForm from './Fiduciary Assignment Form/FiduciaryAssignmentForm';
const title='Fiduciary Assignment'
const FiduciaryAssignment = () => {
    return (
        <div className="container mt-5">
            <h2 className='title'>{title}</h2>
            <p className='Heading mt-5 mb-1'>Personal Representative/Trustee</p>
            <p className='p1 text-center'>Please identify your choices of trusted individuals who will be your Personal Representatives/Trustee:<br/>
            <span className='p2'>Your personal representative will be identified in your legal documents & may be: executor of your Will, administrator of your estate, and/or trustee of any Trusts created within your Last Will and Testament.</span>
            </p>

            <FiduciaryAssignmentForm/>

            <p className='Heading mt-5 mb-1'>Durable Power of Attorney for Finances</p>
            <p className='p1'>Please identify your choices of trusted individuals who will be your Agent Under Durable Power of Attorney for Finances:<br/>
            <span className='p2 ms-5'>Your Durable Power of Attorney for Finances gives your choice of individual (agent) legal authority to manage your finances on your behalf.</span>
            </p>

            <FiduciaryAssignmentForm/>

            <p className='Heading mt-5 mb-1'>Durable Power of Attorney for Healthcare</p>
            <p className='p1'>Please identify your choices for Agent Under Durable Power of Attorney for Healthcare:<br/>
            <span className='p2 ms-5'>Your Durable Power of Attorney for Healthcare gives your choice of individual (agent) legal authority to make necessary decisions on your behalf concerning healthcare.</span>
            </p>

            <FiduciaryAssignmentForm/>


        </div>
    );
}
 
export default FiduciaryAssignment;