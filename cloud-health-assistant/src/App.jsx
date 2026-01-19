import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Splash from './pages/Splash';
import Home from './pages/Home';
import HealthMonitor from './pages/HealthMonitor';
import OnlineConsultation from './pages/OnlineConsultation';
import MedicineBox from './pages/MedicineBox';
import HealthReport from './pages/HealthReport';
import Emergency from './pages/Emergency';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Payment from './pages/Payment';

// Reusable Layout Component for Pages with Header
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />

          <Route path="/monitor" element={
            <Layout title="健康监测" backTo="/home">
              <HealthMonitor />
            </Layout>
          } />

          <Route path="/consult" element={
            <Layout title="找医生" backTo="/home">
              <OnlineConsultation />
            </Layout>
          } />

          <Route path="/meds" element={
            <Layout title="我的药箱" backTo="/home">
              <MedicineBox />
            </Layout>
          } />

          <Route path="/report" element={
            <Layout title="健康报告" backTo="/home">
              <HealthReport />
            </Layout>
          } />

          <Route path="/emergency" element={<Emergency />} />

          <Route path="/profile" element={
            <Layout title="个人中心" backTo="/home">
              <Profile />
            </Layout>
          } />

          <Route path="/settings" element={
            <Layout title="设置" backTo="/home">
              <Settings />
            </Layout>
          } />

          <Route path="/payment" element={
            <Layout title="支付确认" backTo="/consult">
              <Payment />
            </Layout>
          } />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
