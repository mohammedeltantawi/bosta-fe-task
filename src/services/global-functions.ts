export const getDateDMY = (timestamp: string) : string => {
    const date = new Date(timestamp);
  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth(); // Get the month index
  const month = monthNames[monthIndex]; // Get the month name from the array
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

export const getDateDayDateTime = (timestamp: string) : string => {
    const date = new Date(timestamp);


    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[date.getDay()];

    const dayOfMonth = date.getDate();
    const monthIndex = date.getMonth(); 
    const year = date.getFullYear();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight
    let minutesString = minutes < 10 ? '0' + minutes : minutes;

    const time = hours + ':' + minutesString + ampm;

    return `${dayOfWeek} ${dayOfMonth}/${monthIndex}/${year} ${time}`;
}