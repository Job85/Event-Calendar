import React, { useEffect, useRef, useState } from 'react'
import { Calendar } from 'react-date-range'
import format from 'date-fns/format'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const CalendarComp = () => {

    // date state
    const [calendar, setCalendar] = useState('')

    // open close
    const [open, setOpen] = useState(false)

    // get target element to toggle
    const refOne = useRef(null)

    useEffect(() => {
        // set current date on component load
        setCalendar(format(new Date(), 'MM/dd/yyyy'))
        document.addEventListener('keydown', hideOnEscape, true)
        document.addEventListener('click', hideOnClickOutside, true)
    }, [])

    //hide dropdown on press esc
    const hideOnEscape = (e) => {
        if (e.key === 'Escape') {
            setOpen(false)
        }
    }

    // hide on click outside input box
    const hideOnClickOutside = (e) => {

        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false)
        }
    }

    // on date change, store date in state
    const handleSelect = (date) => {
        setCalendar(format(date, 'MM/dd/yyyy'))
    }

    return (
        <div className='calendarWrap'>
            <input
                value={calendar}
                readOnly
                className='inputBox'
                onClick={() => setOpen(open => !open)}
            />
            <div ref={refOne}>
                {open &&
                    <Calendar
                        date={new Date()}
                        onChange={handleSelect}
                        className='calendarElement'
                    />
                }
            </div>
        </div>
    )
}


export default CalendarComp