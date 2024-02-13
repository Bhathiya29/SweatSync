// This is where we are going to connect to rapid API
export const exerciseOptions = {
  method: "GET",
  params: { limit: "10" },
  headers: {
    "X-RapidAPI-Key": "72c7e0947fmsha7c6d4032466706p1dc41cjsn036b14521592",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
  },
};

export const fetchData = async (url, options) => {
  //catching the response
  const response = await fetch(url, options);
  //converting the response to json (applicable if we don't use axios and uses fetch)
  const data = await response.json();

  return data;
};
