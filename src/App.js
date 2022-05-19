import './App.css';
import FinancialInformation from './Component/Financial Information/Financial-Information';
import LegalInformation from './Component/Legal Information/Legal-Information';
import FiduciaryAssignment from './Component/Fiduciary Assignment/Fiduciary-Assignment';
function App() {
  return (
    <div className="App mb-5">
      <div className="content">
        
        <FinancialInformation/>
        <LegalInformation/>
        <FiduciaryAssignment/>
      </div>
    </div>
  );
}

export default App;
