import React, { useState,forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";
import { ko } from "date-fns/esm/locale";
import { getMonth, getDate } from "date-fns";
import styled from "styled-components";


function Datepicker() {
    const [startDate, setStartDate] = useState(new Date());

    // const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    //     <button className="example-custom-input" onClick={onClick} ref={ref}>
    //       {value}
    //     </button>
    //   ));
    return (
        <>
            <Box>
                <DatePicker
                    className="picker"
                    locale={ko}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="yyyy년 MM월 dd일"
                    showPopperArrow={false}  
                    customInput={		  
                        <Form.Control as="textarea" rows={1} style={{width:"250px"}}/>
                    }
                    dayClassName={(d) =>
                        getDate(d) === getDate(startDate) && getMonth(d) === getMonth(startDate)
                            ? 'normal-day selected-day'
                            : 'normal-day'
                    }
                />
            </Box>
        </>
    );
}

const Box = styled.div`
    .picker {

    }
`;
export default Datepicker;

