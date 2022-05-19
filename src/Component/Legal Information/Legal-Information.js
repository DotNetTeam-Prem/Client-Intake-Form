import './Legal-Information.css'
const title='Legal Information';
const LegalInformation = () => {
    return ( 
        <div className='container mt-5'>
            <h2 className='title'>{title}</h2>
            <p className='p1'>Please provide us with copies of any applicable existing Legal Estate Planning and Trust documents at your meeting.</p>
            <p className='p1'>When were the following legal documents created?</p>
            <table className="container border-0">
                <tr>
                    <th className='col-4'></th>
                    <th className='col-2'><p className='p3 text-center'>Date Executed</p></th>
                    <th className='col-6'></th>
                </tr>
                <tr>
                    <th className=''>Last Will and Testament:</th>
                    <th className=''><input type="text" className="w-100 border-bottom border-dark border-1" /></th>
                </tr>
                <tr>
                    <th className=''>Community Property Agreement:</th>
                    <th className=''><input type="text" className="w-100 border-bottom border-dark border-1" /></th>
                </tr>
                <tr>
                    <th className=''>Pre/Post-Nuptial Agreement:</th>
                    <th className=''><input type="text" className="w-100 border-bottom border-dark border-1" /></th>
                </tr>
                <tr>
                    <th className=''>Durable Power of Attorney:</th>
                    <th className=''><input type="text" className="w-100 border-bottom border-dark border-1" /></th>
                </tr>
                <tr>
                    <th className=''>Living Will/Healthcare Proxy:</th>
                    <th className=''><input type="text" className="w-100 border-bottom border-dark border-1" /></th>
                </tr>
                <tr>
                    <th className=''>Revocable or Irrevocable Trust:</th>
                    <th className=''><input type="text" className="w-100 border-bottom border-dark border-1" /></th>
                </tr>
                <tr>
                    <th className=''>Deed for Residence (if trust exists or is desired):</th>
                    <th className=''><input type="text" className="w-100 border-bottom border-dark border-1" /></th>
                </tr>
                <tr>
                    <th className=''>Funeral or Burial Plan:</th>
                    <th className=''><input type="text" className="w-100 border-bottom border-dark border-1" /></th>
                </tr>
            </table>
            <p className='fw-bold mt-4'>What is the location of your important papers?
            <input type='text' className='border-bottom border-dark ms-1 w-50'/></p>
            <span className='mt-3'>I am the legally appointed guardian of:
            <input type='text' className='border-bottom border-dark ms-5 w-50'/></span><br/>
            <span>I have been appointed agent under a Power of Attorney:
            <input type='checkbox' className='li-chkbx-y1'/><span className='ms-1'>Yes</span>
            <input type='checkbox' className='ms-4'/><span className='ms-1'>No</span></span><br/>
            <span>I am serving as executor or administrator of an estate:
            <input type='checkbox' className='li-chkbx-y2'/><span className='ms-1'>Yes</span>
            <input type='checkbox' className='ms-4'/><span className='ms-1'>No</span></span><br/>
            <span>I am involved in a lawsuit:
            <input type='checkbox' className='li-chkbx-y3'/><span className='ms-1'>Yes</span>
            <input type='checkbox' className='ms-4'/><span className='ms-1'>No</span></span><br/>
            <span>I have lived in a separate property state:
            <input type='checkbox' className='li-chkbx-y4'/><span className='ms-1'>Yes</span>
            <input type='checkbox' className='ms-4'/><span className='ms-1'>No</span></span><br/>
            <small className='text-mdnry'>(any state except: Arizona, California, Idaho, Louisiana, Nevada, New Mexico, Texas, Washington, Wisconsin)</small><br/><br/>
            <span className=''>Who do you want to inherit your assets?
            <input type='text' className='border-bottom border-dark ms-5 w-50'/></span><br/>
            <span className=''>Do you have any special needs beneficiaries?
            <input type='text' className='border-bottom border-dark ms-3 w-50'/></span><br/>



        </div>
     );
}
 
export default LegalInformation;