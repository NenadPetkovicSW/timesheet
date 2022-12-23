import * as React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Clients from './pages/Clients';
import DashboardPage from './pages/DashboardPage';
import Projects from './pages/Projects';
import Reports from './pages/Reports';
import TeamMembers from './pages/TeamMembers';
import TimeSheet from './pages/TimeSheet'

function App() {
  window.addEventListener("beforeunload", function(e){
    this.localStorage.clear();
 }, false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage hello="Slay" />} />
          <Route path="TimeSheet" element={<TimeSheet />} />
          <Route path="Clients" element={<Clients />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Categories" element={<DashboardPage />} />
          <Route path="TeamMembers" element={<TeamMembers />} />
          <Route path="Reports" element={<Reports />} />
          <Route path="*" element={<DashboardPage hello="Slay" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}
export default App;



