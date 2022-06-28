import axios from "axios";

export const requestGetItems=()=>{
return axios.request({
    method:"get",
    url:"http://localhost:8000/api/checklist/"
});

}
