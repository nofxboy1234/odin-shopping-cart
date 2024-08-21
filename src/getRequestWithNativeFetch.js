const getRequestWithNativeFetch = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url).then((res) => {
      if (!res.ok) {
        reject(new Error('server error'));
      }
      resolve(res.json());
    });
  });
};

// const getRequestWithNativeFetch = (url) => {
//   fetch(url).then((res) => {
//     if (!res.ok) {
//       throw new Error('server error');
//     }
//     return res.json();
//   });
// };

export default getRequestWithNativeFetch;
