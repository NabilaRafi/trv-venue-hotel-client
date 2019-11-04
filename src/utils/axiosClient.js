import axios from 'axios';

const axiosclient = (reqMethod, reqUrl, reqData) =>
axios({
    method: reqMethod,
    url: reqUrl,
    data: reqData,
    params: reqMethod === 'get' ? reqData : null,
    headers: { 'Content-type': 'application/json', reqData},
});

export default axiosclient;
