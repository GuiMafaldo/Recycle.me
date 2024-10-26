import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import styled from 'styled-components';

const CalendarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin: 0 auto;
    margin-top: 60px;
    position: relative;

    & .close-calendar {
        display: flex;
        right: 8px;
        top: -50px;
        position: absolute;
        width: 16px;
        height: 16px;
        cursor: pointer;

        > img {
            width: 16px; 
        }
    }

    & .calendar {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90vw;
        margin: 0 auto;
        margin-top: 20px;
        gap: 20px;
    }

    h2 {
        margin-bottom: 40px; 
    }

    > div {
        h3 {
            margin-top: 80px;
            margin-bottom: 40px;
        } 
    }
`;

const localizer = momentLocalizer(moment);

const CalendarioDatas = () => {
    return (
        <CalendarContainer>
            <div className='close-calendar'>
                <a href="/central"><img src="./assets/close.png" alt="icone de fechar" /> </a>
            </div>
            <h2>Calendário Grande</h2>
            <Calendar className='calendar'
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                views={['month', 'week', 'day']}
            />
        </CalendarContainer>
    )
}

export default CalendarioDatas