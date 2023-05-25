import MyCalendar from "./Components/MyCalendar";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
const Calendar = () => {
    return (
        <>
            <ResponsiveAppBar />
            <div className="Calendar">
                <div className="profile">
                        <img
                            src="frontend/src/Images/profile.jpg"
                            alt="img"
                        />
                    <h1>TaeKyu Lee</h1>
                    <h3>Chief Executive Offic</h3>
                </div>
                <div className="MyCalendar">
                    <MyCalendar />
                </div>
            </div>
        </>
    );
};
export default Calendar;
