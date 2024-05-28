export const options = {
  method: 'GET',
  params:{limit:'2000'},

 

  headers: {
    'X-RapidAPI-Key': '78151c6732mshae4db244058ee41p11cfbcjsn950c734bea7a',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    // 'X-RapidAPI-Key': '78151c6732mshae4db244058ee41p11cfbcjsn950c734bea7a',
    // 'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }

};




export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '78151c6732mshae4db244058ee41p11cfbcjsn950c734bea7a',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
