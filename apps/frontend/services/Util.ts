/**
 * Function to get date in arabic format 
 * Ex: الخميس، 14 أبريل 2022 | 6:02 صباحًا
 */
export const GetArabicFormattedDateAndTime = (dateVal: string) =>
{
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

/**
 * Function to get Time Ago in arabic format 
 * Ex: منذ 5 دقائق
 */
export const getTimeAgoArabicFormat = function(date: any) {
        const dateNow = new Date();
        const UTCsecondsNow = (dateNow.getTime() + dateNow.getTimezoneOffset() * 60 * 1000);
        const UTCseconds = (date.getTime() + date.getTimezoneOffset() * 60 * 1000);
        const diff = UTCsecondsNow - UTCseconds;
        const tense = 'منذ '; // ago
        
        if (diff === 0) return 'الآن'; // return Just Now if no diff

        // 365.25 * 24 * 60 * 60 * 1000
        const years = pluralized(Math.round(diff / 31557600000), 'عام'); // أعوام
        if (years)
          return tense + years;

        // 30 * 24 * 60 * 60 * 1000
        const months = pluralized(Math.round(diff / 2592000000), 'شهر'); // الشهور
        if (months)
          return tense + months;

        // 24 * 60 * 60 * 1000
        const days = pluralized(Math.round(diff / 86400000), 'يوم'); // أيام
        if (days)
          return tense + days;

        // 60 * 60 * 1000 
        const hours = pluralized(Math.round(diff / 3600000), 'ساعة'); // ساعات
        if (hours)
          return tense + hours;

        // 60 * 1000  
        const mins = pluralized(Math.round(diff / 60000), 'اللحظة'); // الدقائق
        if (mins)
          return tense + mins;

        // 1000   
        const secs = pluralized(Math.round(diff / 1000), 'ثانيا'); // ثواني
        if (secs)
          return tense + secs;
      };


const pluralized = function(num: number, str: string) {

        const pluralObj = {
                "عام": "أعوام",
                "شهر": "الشهور",
                "يوم": "أيام",
                "ساعة": "ساعات",
                "اللحظة": "الدقائق",
                "ثانيا": "ثواني"
        }

        if (num > 0) {
                if (num === 1){
                        return ' 1 ' + str + ' ';
                } else {
                        return num + ' ' + pluralObj[str] + ' ';
                }
        } else {
              return '';     
        }

};