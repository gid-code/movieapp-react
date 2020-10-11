export const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN;
export const TMDB_BASEURL = process.env.REACT_APP_TMDB_BASEURL;
export const TMDB_IMGURL = process.env.REACT_APP_TMDB_IMGURL;

//setup with token
export const tokenConfig = () => {
	//headers
	const config = {
		headers: {
			"Content-Type": "application/json;charset=utf-8",
			Authorization: `Bearer ${TMDB_TOKEN}`,
		},
	};

	return config;
};
