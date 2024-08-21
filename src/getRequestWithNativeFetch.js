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

export default getRequestWithNativeFetch;
