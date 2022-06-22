// import dotenv from "dotenv";

// dotenv.config();

export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': 'a49d0eebe2msh8a7b20ae5dac122p1b1b69jsne8f387d25b69',
    },
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}