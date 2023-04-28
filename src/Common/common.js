export const PROFILE =
  'https://images.alphacoders.com/112/thumb-1920-1127205.png';
import {Platform} from 'react-native';
export function convertDate(inputFormat) {
  function pad(s) {
    return s < 10 ? '0' + s : s;
  }
  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
}
export function get_dob(date) {
  const month_diff = Date.now() - date.getTime();
  const age_dt = new Date(month_diff);
  const year = age_dt.getUTCFullYear();
  return Math.abs(year - 1970);
}
export const uniqueArray = arr => {
  const newarray = arr.filter(function (item, pos) {
    return arr.indexOf(item) == pos;
  });
  return newarray;
};
export function subtractYears(date, years) {
  date.setFullYear(date.getFullYear() - years);
  return date;
}
export function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + ' yr';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' mth';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' day';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' hr';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' min';
  }
  return Math.floor(seconds) + 'sec';
}
export const Device_Info = () => {
  return Platform.OS == 'android' ? 2 : 1;
};
export const filter = (arr, id, sort_key) => {
  return arr.filter(e => {
    return e[sort_key] == id;
  });
};
export const debugLog = a => {
  if (true) return console.log(a);
};
export const getyoutube_data = async id => {
  const apiKey = 'AIzaSyBscMykMnskIuida5xoxnlTWhDJVlH2M4Y';

  const url = `https://www.googleapis.com/youtube/v3/videos?id=${id}&part=snippet&key=${apiKey}`;
  const first_data = await fetch(url)
    .then(response => response.json())
    .then(data => {
      return data.items;
      debugLog(data.items);
      const video = data.items[0];
      const title = video.snippet.title;
      const thumbnail = video.snippet.thumbnails.high.url;
      console.log(title);
      console.log(thumbnail);
      debugLog(data.items[0].snippet.thumbnails);
    })
    .catch(error => console.error(error));
  const second_data = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?id=${id}&part=contentDetails&key=${apiKey}`,
  )
    .then(response => response.json())
    .then(data => {
      const duration = data.items[0].contentDetails.duration;
      return duration.slice(2, 4);
    })
    .catch(error => console.error(error));
  return {data1: first_data, data2: second_data};
};

export function _get_date() {
  const date = new Date(); // replace with your date
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthsOfYear = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const formattedDate = `${daysOfWeek[date.getDay()]}, ${date.getDate()} ${
    monthsOfYear[date.getMonth()]
  }`;

  return formattedDate;
}
