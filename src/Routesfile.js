import React from 'react'
import Register from './Components/Login/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Verifyotp from './Components/Login/Verifyotp'
import Sixdigitotp from "./Components/Login/Sixdigitotp";
// import Header from "./Components/Common/Header";
import RegisterEng from './Components/Login/RegisterEng';
import Verifyotpeng from "./Components/Login/Verifyotpeng";
import SixdigitotpEng from "./Components/Login/SixdigitotpEng";
import HeaderEng from "./Components/Common/HeaderEng";
import HomePage from "./pages/HomePage"
import Aboutus from "./pages/Aboutus";
import AboutusEng from "./pages/AboutusEng";
import HomePageEng from './pages/HomePageEng';
import LegislativeCouncil from './pages/LagislativeCouncil';
import LegislativeAssembly from './pages/LegislativeAssembly';
import PortalRegisterEng from "./Components/Login/PotalRegisterEng";
import PortalRegister from "./Components/Login/PortalRegister";
import Phonelogin from './Components/Login/Phone-login';
import LegislativeCouncilEng from './pages/LegislativeCouncilEng';
import LegislativeAssemblyEng from './pages/LegislativeAssemblyEng';
import LegislativeCommitteeEng from './pages/Legislature/Legislative-committeesEng';
import SessionCalender from './pages/Session-calender';
import LegislativeCommittee from './pages/Legislature/Legislative-commitee';
import PhoneloginEng from './Components/Login/Phone-LoginEng';
import SessionCalenderEng from './pages/Session-calenderEng';
import LinkSection from './pages/Link-section';
import HelpDesk from './pages/Help-desk';
import HelpDeskEng from './pages/Help-deskEng';
import Feedback from './pages/Feedback';
import CouncilMemberEng from './pages/CouncilMemberEng';
import AssemblyMemberEng from './pages/AssemblyMemberEng';
import MemberDetailEng from './pages/MemberDetailsEng';
import SignupPortalEng from './Components/Login/SignupPortalEng';
import SignupPortal from './Components/Login/SignupPortal';
const Routesfile = () => {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/Header" element={<Header />} /> */}
            <Route path="/HeaderEng" element={<HeaderEng />} />
            <Route path="/Verifyotp" element={<Verifyotp />} />
            <Route path='/SignupPortalEng' element={<SignupPortalEng/>}/>
            <Route path="/Register" element={<Register />} />
            <Route path="/Sixdigitotp" element={<Sixdigitotp />} />
            <Route path="/RegisterEng" element={<RegisterEng />} />
            <Route path="/PortalRegisterEng" element={<PortalRegisterEng />} />
            <Route path="/PortalRegister" element={<PortalRegister />} />
            <Route path="/Verifyotpeng" element={<Verifyotpeng />} />
            <Route path="/SixdigitotpEng" element={<SixdigitotpEng />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/HomePageEng" element={<HomePageEng />} />
            <Route path="/AboutusEng" element={<AboutusEng />} />
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/Phone-login" element={<Phonelogin />} />
            <Route path="/Phone-loginEng" element={<PhoneloginEng />} />
            <Route path="/Link-section" element={<LinkSection />} />
            <Route
              path="/LegislativeCouncil"
              element={<LegislativeCouncil />}
            />
            <Route
              path="/LegislativeCouncilEng"
              element={<LegislativeCouncilEng />}
            />
            <Route
              path="/LegislativeAssembly"
              element={<LegislativeAssembly />}
            />
            <Route
              path="/LegislativeAssemblyEng"
              element={<LegislativeAssemblyEng />}
            />
            <Route
              path="/Legislative-committeesEng"
              element={<LegislativeCommitteeEng />}
            />
            <Route
              path="/Legislative-commitee"
              element={<LegislativeCommittee />}
            />
            <Route
              path="/Session-calenderEng"
              element={<SessionCalenderEng />}
            />
            <Route path="/Session-calender" element={<SessionCalender />} />
            <Route path="/Help-desk" element={<HelpDesk />} />
            <Route path="/Help-deskEng" element={<HelpDeskEng />} />
            <Route path="/Feedback" element={<Feedback />} />
            <Route path="/CouncilMemberEng" element={<CouncilMemberEng />} />
            <Route path="/AssemblyMemberEng" element={<AssemblyMemberEng />} />
            <Route path="/MemberDetailsEng" element={<MemberDetailEng />} />
            <Route path='/SignupPortal' element={<SignupPortal/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default Routesfile
