const handleReq = async (res) => {
  if (res.ok) {
    return res.json();
  }

  throw new Error(res.statusText);
};

const get = (url) => {
  return fetch(url).then(handleReq);
};

const api = { get };

export default api;
