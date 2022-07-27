import axios from "axios";
const fetchData = async () => {
    try {
        const data = await axios.get(
          `https://discover.search.hereapi.com/v1/discover?apikey=0bNcsVhBQj0_tvmM63iURT7dO6ZnW277UUrwtQt36EA&q=restaurant&in=circle:23.78031,90.40707;r=3000`
        );
        return data.data.items; 
    } catch (error:any) {
        console.log(error.message);
    }
 
};

export {fetchData};
