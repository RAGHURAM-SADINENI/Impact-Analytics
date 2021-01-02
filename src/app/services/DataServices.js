import axios from "axios"

class DataService {
    static getData = async () => {
        try {
            const res = await axios({
                method: 'get',
                url: "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
}

export default DataService;