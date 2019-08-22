import axios from 'axios';

const apiGithub = {
    getByUsername : (username)=>{
        return axios.get(`https://api.github.com/users/${username}`);
    },
    getReposUsername : (username)=>{
        return axios.get(`https://api.github.com/users/${username}/repos`);
    }
};



export default apiGithub;