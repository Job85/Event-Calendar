import React, { useEffect, useRef, useState } from 'react'
import { DateRange } from 'react-date-range'
import format from 'date-fns/format'
import { addDays } from 'date-fns'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const DateRangeComp = () => {

    // date state
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ])

    // open close
    const [open, setOpen] = useState(false)

    // get target element to toggle
    const refOne = useRef(null)

    useEffect(() => {
        // set current date on component load
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



    return (
        <div className='calendarWrap'>
            <input
                value={` ${format(range[0].startDate, 'MM/dd/yyyy')} to ${format(range[0].endDate, 'MM/dd/yyyy')}`}
                readOnly
                className='inputBox'
                onClick={() => setOpen(open => !open)}
            />
            <div ref={refOne}>
                {open &&
                    <DateRange
                        onChange={item => setRange([item.selection])}
                        edittableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        months={1}
                        direction='horizontal'
                        className='calendarElement'
                    />
                }
            </div>
        </div>
    )
}


export default DateRangeComp