const getDay = (timestamp: number) =>
  new Intl.DateTimeFormat('en-us', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).format(new Date(timestamp));

const getHour = (timestamp: number) =>
  new Intl.DateTimeFormat('en-us', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(timestamp));

const getWeekday = (timestamp: number) =>
  new Intl.DateTimeFormat('en-us', {
    weekday: 'short',
  }).format(new Date(timestamp));

export { getDay, getWeekday, getHour };
