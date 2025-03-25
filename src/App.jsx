import Navbar from "./Navbar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Aboutuscontent from "./Aboutuscontent/Aboutuscontent";
import Erpservicenow from "./Erpservicenow";
import Erpsalesforce from "./Erpsalesforce";
import Erpsap from "./Erpsap";
import Erporacle from "./Erporacle";
import Contact from "./Contact";
import Cloud from "./Cloud";
import Uiux from "./Uiux";
import BusinessAutomation from "./BusinessAutomation";
import Viewservices from "./Viewservices";
import EnterpriseResource from "./enterpriseResource";
import Trainingoutsourcing from "./Trainingoutsourcing";
import Coustomersofware from "./Coustomersofware";
function App() {
  return (
    <div className="bg-black">
      <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<Aboutuscontent/>} />
      <Route path="/custom-software" element={<Coustomersofware/>}/>
      <Route path="/erp-servicenow" element={<Erpservicenow/>}/>
      <Route path="/erp-salesforce" element={<Erpsalesforce/>}/>
      <Route path="/erp-sap" element={<Erpsap/>}/>
      <Route path="/erp-oracle" element={<Erporacle/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cloud" element={<Cloud/>}/>
      <Route path="/ui-ux" element={<Uiux/>}/>
      <Route path="/business-automation" element={<BusinessAutomation/>}/>
      <Route path="/services" element={<Viewservices/>}/>
      <Route path="/enterprise-Resource" element={<EnterpriseResource/>}/>
      <Route path="/training-outsourcing" element={<Trainingoutsourcing/>}/>
     </Routes>
    </div>
  );
}

export default App;
