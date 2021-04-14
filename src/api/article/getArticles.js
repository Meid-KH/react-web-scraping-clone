const { REACT_APP_API_URL } = process.env;

const getArticles = async () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch(
    `${REACT_APP_API_URL}/articles/0/2`,
    requestOptions
  );
  const data = await response.json();
  return data;
};

export default getArticles;
