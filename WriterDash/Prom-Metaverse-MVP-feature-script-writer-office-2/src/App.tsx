import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import Welcome from "./Pages/Welcome";
import "./App.scss";
import SignInPage from "./Pages/SignInPage";
import "react-toastify/dist/ReactToastify.css";
import CharacterCreation from "./Pages/ChatacterCreation";
import OnBoarding from "./Pages/Onboarding";
import InvalidWallet from "./Layouts/Wallet/InvalidWallet";
import ScriptPage from "./Pages/ScriptPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import ScriptPageNotOwner from "./Pages/ScriptPageNotOwner";
import AccountCreation from "./Pages/AccountCreation";
import SetUpTFAPage from "./Pages/SetUpTFAPage";
import EmailVerificationPage from "./Pages/EmailVerificationPage";
import PasswordVerificationPage from "./Pages/PasswordVerificationPage";
import UpdatePasswordPage from "./Pages/UpdatePasswordPage";
import PasswordSuccessResetPage from "./Pages/PasswordSuccessResetPage";
import ScriptUploadFile from "./Layouts/Scripts/ScriptUploadFile";
import ScriptUploadFileNew from "./Layouts/Scripts/ScriptUploadFileNew";
import Billboard from "./Layouts/Popup/BillboardPopup/Billboard";
import BillboardNew from "./Layouts/Popup/BillboardPopup/BillboardNew";
import BillboardNews from "./Layouts/Popup/BillboardPopup/BillboardNews";
import BillboardAdvertisment from "./Layouts/Popup/BillboardPopup/BillboardAdvertisment";
import BillboardSingleNews from "./Layouts/Popup/BillboardPopup/BillboardSingleNews";
import CharacterCreation_backup from "./Pages/_bkp_ChatacterCreation";
import ScriptwriterOfficePage from "./Pages/ScriptwriterOfficePage";
import ScriptwriterOffice from "./Layouts/Popup/ScriptwriterOffice/ScriptwriterOffice";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />

          <Route path="/account" element={<AccountCreation />} />

          <Route path="/setup-tfa" element={<SetUpTFAPage />} />

          <Route
            path="/email-verification"
            element={<EmailVerificationPage />}
          />

          <Route
            path="/password-verification"
            element={<PasswordVerificationPage />}
          />

          <Route path="invalid-wallet" element={<InvalidWallet />} />

          <Route path="/signin" element={<SignInPage />} />

          <Route
            path="/character-creation-backup"
            element={<CharacterCreation_backup />}
          />

          <Route path="/character-creation" element={<CharacterCreation />} />

          <Route path="/onboarding" element={<OnBoarding />} />
          <Route
            path="/scriptwriter-office"
            element={<ScriptwriterOfficePage />}
          />
          <Route
            path="/scriptwriter-office/dashboard"
            element={<ScriptwriterOffice />}
          />

          <Route path="/script" element={<ScriptPage></ScriptPage>} />

          <Route path="/script-not-owner" element={<ScriptPageNotOwner />} />

          <Route path="/script-upload" element={<ScriptUploadFile />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          <Route path="/update-password" element={<UpdatePasswordPage />} />

          <Route path="/billboard" element={<Billboard />} />
          <Route path="/billboardNew" element={<BillboardNew />} />
          <Route path="/billboardNews" element={<BillboardNews />} />

          <Route
            path="/billboardAdvertisement"
            element={<BillboardAdvertisment />}
          />
          <Route
            path="/billboardSingleNews"
            element={<BillboardSingleNews />}
          />

          <Route path="/billboard" element={<Billboard />} />
          <Route path="/billboardNew" element={<BillboardNew />} />
          <Route path="/billboardNews" element={<BillboardNews />} />

          <Route
            path="/billboardAdvertisement"
            element={<BillboardAdvertisment />}
          />
          <Route
            path="/billboardSingleNews"
            element={<BillboardSingleNews />}
          />

          <Route
            path="/password-success-reset"
            element={<PasswordSuccessResetPage />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
