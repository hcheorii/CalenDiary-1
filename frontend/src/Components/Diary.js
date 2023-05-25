import MyCalendarDia from "./MyCalendarDia";
import ResponsiveAppBar from "./ResponsiveAppBar";
const Diary = () => {
    return (
        <>
            <ResponsiveAppBar />
            <div className="Calendar">
                <div className="profile">
                    <img
                        class="image"
                        src="https://www.outsourcing.co.kr/news/photo/202207/94329_33313_5523.jpg"
                    />
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
