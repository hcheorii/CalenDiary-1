import ResponsiveAppBar from "./ResponsiveAppBar";
import MyCalendar from "./MyCalendar";

const Calendar = () => {
    return (
        <>
            <ResponsiveAppBar />
            <div className="Calendar">
                <div className="profile">
                    <div
                        className="image"
                    >
                    </div>
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
