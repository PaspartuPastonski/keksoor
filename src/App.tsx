import { memo } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import DiscordComingSoon from "./pages/DiscordComingSoon";
import Error404 from "./pages/Error404";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path="/"
               element={
                  <>
                     <NavigationBar />
                     <Outlet />
                     <Footer />
                  </>
               }
            >
               <Route index Component={Home} />
               <Route path="termsOfUse" Component={TermsOfUse} />
               <Route path="privacyPolicy" Component={PrivacyPolicy} />
               <Route path="cookiePolicy" Component={CookiePolicy} />
               <Route path="discordComingSoon" Component={DiscordComingSoon} />
               <Route path="*" Component={Error404} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default memo(App);
