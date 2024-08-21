const getRequestWithNativeFetch = async (url, signal = null) => {
  console.log('fetching data');

  const res = await fetch(url, { signal });
  if (!res.ok) {
    throw new Error('server error');
  }
  return res.json();
};

// const getRequestWithNativeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((res) => {
//         if (!res.ok) {
//           reject(new Error('server error'));
//         }
//         resolve(res.json());
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };

export default getRequestWithNativeFetch;
