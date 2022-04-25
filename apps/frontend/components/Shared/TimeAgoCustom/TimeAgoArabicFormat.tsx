import React, { FC, useState, useEffect } from 'react'
import { getTimeAgoArabicFormat } from '../../../services/Util';

const TimeAgoArabicFormat:FC<any> = ({date}) =>{
    const [timeAgo, setTimeAgo] = useState<any>([]);

    useEffect(() => {
        // set Time Ago in Arabic format
        setTimeAgo(getTimeAgoArabicFormat(new Date(date)))

    }, [date])

  return (
    <span>{timeAgo}</span>
  )
}

export default TimeAgoArabicFormat;