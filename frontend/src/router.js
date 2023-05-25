import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalTest1 from "./Pages/ModalTest1";
import ModalTest2 from "./Pages/ModalTest2";
import Modal from "./Components/Modal";
import EmojiModal from "./Components/EmojiModal";
import Main from "./Pages/Main";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Calendar from "./Calendar";
import Diary from "./Components/Diary";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/modaltest1" element={<ModalTest1 />} />
                <Route path="/modaltest2" element={<ModalTest2 />} />
                <Route path="/modal" element={<Modal />} />
                <Route path="/emojimodal" element={<EmojiModal />} />
                <Route path="/" element={<Main />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/Calendar" element={<Calendar />} />
                <Route path="/Diary" element={<Diary />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
