import './FiduciaryAssignmentForm.css'
const FiduciaryAssignmentForm = () => {
    return ( 
        <div>
            <table className='container  '>
                <tr>
                    <th colSpan='3' className='col-6 text-center p3'>Client #1</th>
                    <th colSpan='3' className='col-6 text-center p3'>Client #2</th>
                </tr>
                <tr>
                    <th className='col-1'></th>
                    <th className='col-3'>Name</th>
                    <th className="col-2">Relationship</th>
                    <th className='col-1'></th>
                    <th className='col-3'>Name</th>
                    <th className="col-2">Relationship</th>
                </tr>
                <tr>
                    <th>1st Choice</th>
                    <th><input type='text' className='border-bottom border-dark w-75'/></th>
                    <th><input type='text' className='border-bottom border-dark w-75'/></th>
                    <th>1st Choice</th>
                    <th><input type='text' className='border-bottom border-dark w-75'/></th>
                    <th><input type='text' className='border-bottom border-dark w-75'/></th>
                </tr>
                <tr>
                    <th>2st Choice</th>
                    <th><input type='text' className='border-bottom border-dark w-75'/></th>
                    <th><input type='text' className='border-bottom border-dark w-75'/></th>
                    <th>2st Choice</th>
                    <th><input type='text' className='border-bottom border-dark w-75'/></th>
                    <th><input type='text' className='border-bottom border-dark w-75'/></th>
                </tr>
                <tr>
                    <th>3st Choice</th>
                    <th><input type='text' className='border-bottom border-dark w-75'/></th>
                    <th><input type='text' className='border-bottom border-dark w-75'/></th>
                    <th>3st Choice</th>
                    <th><input type='text' className='border-bottom border-dark w-75'/></th>
                    <th><input type='text' className='border-bottom border-dark w-75'/></th>
                </tr>
            </table>
        </div>
     );
}
 
export default FiduciaryAssignmentForm;