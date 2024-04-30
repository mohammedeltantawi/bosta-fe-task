import { t } from "i18next";
export const getDateDMY = (timestamp: string) : string => {
    const date = new Date(timestamp);
  const monthNames = [
    "jan", "feb", "mar", "apr", "may", "june", 
    "july", "aug", "sep", "oct", "nov", "dec"
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth(); // Get the month index
  const month = t(`monthNames.${monthNames[monthIndex]}`); // Get the month name from the array
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

export const getDateDayDateTime = (timestamp: string) : string => {
    const date = new Date(timestamp);


    const days = ['sun', 'mon', 'tues', 'wed', 'thu', 'fri', 'sat'];
    const dayOfWeek = t(`dayOfWeek.${days[date.getDay()]}`);

    const dayOfMonth = date.getDate();
    const monthIndex = date.getMonth(); 
    const year = date.getFullYear();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? t('clock.pm') : t('clock.am');
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight
    let minutesString = minutes < 10 ? '0' + minutes : minutes;

    const time = hours + ':' + minutesString + ampm;

    return `${dayOfWeek} ${dayOfMonth}/${monthIndex}/${year} ${time}`;
}

export const getDateNumbers = (timestamp: string) : string => {
  const date = new Date(timestamp);

  const dayOfMonth = date.getDate();
  const monthIndex = date.getMonth(); 
  const year = date.getFullYear();

  return `${dayOfMonth}/${monthIndex}/${year}`;
}

export const getTime = (timestamp: string) : string => {
  const date = new Date(timestamp);

  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? t('clock.pm') : t('clock.am');
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight
  let minutesString = minutes < 10 ? '0' + minutes : minutes;
  const time = hours + ':' + minutesString + ampm;

  return `${time}`;
}