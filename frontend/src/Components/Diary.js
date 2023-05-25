import MyCalendarDia from "./MyCalendarDia";
import ResponsiveAppBar from "./ResponsiveAppBar";
const Diary = () => {
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
                    <MyCalendarDia />
                </div>
            </div>
        </>
    );
};
export default Diary;
