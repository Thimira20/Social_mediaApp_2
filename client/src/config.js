let BASE_URL = "http://18.212.30.151:4000";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:4000/";
}

export { BASE_URL };
