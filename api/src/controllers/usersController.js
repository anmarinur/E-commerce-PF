const axios = require("axios").default;
const { ACCESS_TOKEN, AUTH0_FIND_USER } = process.env;

const getUser = ( req, res) => {
    const { email } = req.query;
    const options = {
        method: 'GET',
        url: AUTH0_FIND_USER,
        params: {email},
        headers: {authorization: `Bearer ${ACCESS_TOKEN}`}
        };
        
        axios.request(options).then(function (response) {
        const data = response.data[0];
        const user = {
            user_id: data.user_id.split("|")[1],
            email: data.email,
            name: data.name,
            nickname: data.nickname,
            email_verified: data.email_verified
        }
        res.json(user);
    }).catch(function (error) {
        console.error(error);
        res.json(error);
        });
}

module.exports = {
    getUser,
}