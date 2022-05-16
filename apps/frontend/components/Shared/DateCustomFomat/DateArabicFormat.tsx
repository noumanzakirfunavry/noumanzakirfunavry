import React, { FC, useState, useEffect } from 'react'
import { GetArabicFormattedDateAndTime } from '../../../services/Util';

const DateArabicFormat:FC<any> = ({date}) =>{
    const [arabicDateFormat, setArabicDateFormat] = useState<any>([]);

    useEffect(() => {
        // set Time Ago in Arabic format
        setArabicDateFormat(GetArabicFormattedDateAndTime(new Date(date)))

    }, [date])

  return (
    <span>{arabicDateFormat}</span>
  )
}

export default DateArabicFormat;