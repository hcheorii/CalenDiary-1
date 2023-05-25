import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; 
import { Modal } from "@mui/material";


class MyCalendarDia extends Component {
    state = {
        isModalOpen: false,
        currentEvents: []
    };

    date = ({
        year: 2023,
        month: 1,
        day: 1
    })

    handleEvents = (events) => {
        this.setState({
          currentEvents: events,
        });
        console.log("handleEvents")
    };

    handleCloseModal = () => {
        this.setState({
          isModalOpen: false,
        });
    };

    // 달력에 등록된 이벤트를 클릭했을때 실행되는 함수(내용 삭제)
    handleEventClick = (selectInfo) => {
        // 클릭한 내용을 삭제할지 물어보는 확인창
        if (window.confirm(`'${selectInfo.event.title}'을 삭제하시겠습니까?`)) {
        // 클릭한 이벤트 내용 삭제
        selectInfo.event.remove();
        }
    };

    handleDateSelect = (selectInfo) => {
        let title = prompt("새로운 내용을 입력해 주세요."); 
        let calendarApi = selectInfo.view.calendar; 
    
        calendarApi.unselect(); 
    
        if (title) {
          calendarApi.addEvent({
            title,
            start: selectInfo.startStr, 
            end: selectInfo.endStr, 
          });
        }
      };

    render() {

        return (
            <div>
                <FullCalendar
                    initialView="dayGridMonth"
                    plugins={[dayGridPlugin, interactionPlugin]}
                    selectable={true}
                    events={[
                        { title: "event 1", date: "2022-09-01" },
                    ]}
                    eventClick={this.handleEventClick}
                    select={this.handleDateSelect}
                    eventsSet={this.handleEvents}
                />
                {this.state.isModalOpen && (
                    <Modal 
                        open={this.state.isModalOpen} 
                        onClose={this.handleCloseModal}
                        appname={"calendar"}  
                        date={this.date}        
                    />
                )}
            </div>
            
        );
    };
}
export default MyCalendarDia;
