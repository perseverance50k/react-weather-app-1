const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "041b0ea519msh578f6149e831217p177095jsn6e2358a47bab",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

const getCities = async (namePrefix) => {
  const targetUrl = url + `?namePrefix=${namePrefix}`;

  try {
    const response = await fetch(targetUrl, options);
    const result = await response.json();
    console.log("GeoDB API: " + JSON.stringify(result));

    return result;
  } catch (error) {
    console.error(error);

    throw new Error(error);
  }
};

export { getCities };
