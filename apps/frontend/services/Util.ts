export const GetArabicFormattedDateAndTime = (dateVal: string) =>
{
        // get the date format like الخميس، 14 أبريل 2022 | 6:02 صباحًا
        const date = new Date(dateVal);
        const strDate = date.toLocaleString('ar-EG-u-nu-latn',{weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'});
        
        let hours = date.getHours();
        let minutes: number | string = date.getMinutes();
        
        const lastPart = hours >= 12 ? 'مساءً' : 'صباحًا';

        hours %= 12;
        hours = hours || 12;    
        minutes = minutes < 10 ? `0${minutes}` : minutes;

        const strTime = `${hours}:${minutes} ${lastPart}`;
        const formattedDateString = `${strDate} | ${strTime}`;

        return formattedDateString;

}


