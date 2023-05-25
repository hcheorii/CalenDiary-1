import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import {useState} from 'react'
import { useLocation } from 'react-router-dom';

function ResponsiveAppBar() {
    let location = useLocation();
    const navigate = useNavigate();
    const navigateSignin = () => {
        navigate("/SignIn");
        setS("black")
        setC("white")
        setD("white")
    };
    const navigateCalendar = () => {
        navigate("/Calendar");
        setS("white")
        setC("black")
        setD("white")
        if(location.pathname === "/Calendar" || location.pathname === "/Diary") {
            setSign("SIGN OUT")
        }
    };
    const navigateDiary = () => {
        navigate("/Diary");
        setS("white")
        setC("white")
        setD("black")
        if(location.pathname === "/Calendar" || location.pathname === "/Diary") {
            setSign("SIGN OUT")
        }
    };

    const [sign, setSign] = useState("SIGN IN");
    const [c, setC] = useState("white");
    const [s, setS] = useState("black");
    const [d, setD] = useState("white");



    return (
        <div>
            <div className="navbar">
                <Button
                    sx={{ my: 2, color: `${c}`, display: "block" }}
                    onClick={navigateCalendar}
                >
                    Calendar
                </Button>

                <Button
                    sx={{ my: 2, color: `${s}`, display: "block" }}
                    onClick={navigateSignin}
                >
                    {sign}
                </Button>
                <Button
                    sx={{ my: 2, color: `${d}`, display: "block" }}
                    onClick={navigateDiary}
                >
                    Diary
                </Button>
            </div>
        </div>
    );
}
export default ResponsiveAppBar;
