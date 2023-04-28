// import {useState, useEffect} from 'react';
// export const usePostApi = (url, body = null) => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       const options = {
//         method: 'post',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: body ? JSON.stringify(body) : null,
//       };

//       try {
//         const response = await fetch(url, options);
//         const json = await response.json();
//         setData(json);
//         setIsLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [url, method, body]);

//   return {data, isLoading, error};
// };

// export const useGetApi = (url, method = 'GET', body = null) => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       const options = {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: body ? JSON.stringify(body) : null,
//       };

//       try {
//         const response = await fetch(url, options);
//         const json = await response.json();
//         setData(json);
//         setIsLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [url, method, body]);

//   return {data, isLoading, error};
// };
// import {useState, useEffect} from 'react';
// const usePostApi = url => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   const postData = async params => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//           'Content-Type': 'application/json',
//           // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify(params), // body data type must match "Content-Type" header
//       });

//       const json = await response.json();
//       setData(json);
//       setIsLoading(false);
//     } catch (error) {
//       setError(error.message);
//       setIsLoading(false);
//     }
//   };

//   return {data, isLoading, error, postData};
// };

// export default usePostApi;
import {useState, useEffect} from 'react';

const usePostApi = url => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const postData = async params => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });
      const json = await response.json();
      setData(json);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return {data, isLoading, error, postData};
};

export const useGetApi = url => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const postData = async params => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      setData(json);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return {data, isLoading, error, postData};
};
export default usePostApi;
