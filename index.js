require('dotenv').config();

const express = require('express');

const app = express();

const githubdata = {
    "login": "RahulKrSahu",
    "id": 163813667,
    "node_id": "U_kgDOCcOZIw",
    "avatar_url": "https://avatars.githubusercontent.com/u/163813667?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/RahulKrSahu",
    "html_url": "https://github.com/RahulKrSahu",
    "followers_url": "https://api.github.com/users/RahulKrSahu/followers",
    "following_url": "https://api.github.com/users/RahulKrSahu/following{/other_user}",
    "gists_url": "https://api.github.com/users/RahulKrSahu/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/RahulKrSahu/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/RahulKrSahu/subscriptions",
    "organizations_url": "https://api.github.com/users/RahulKrSahu/orgs",
    "repos_url": "https://api.github.com/users/RahulKrSahu/repos",
    "events_url": "https://api.github.com/users/RahulKrSahu/events{/privacy}",
    "received_events_url": "https://api.github.com/users/RahulKrSahu/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 1,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-03-18T05:32:17Z",
    "updated_at": "2024-03-18T05:32:17Z"
}

app.get('/', (req, res) => {
    res.send('<h2>Welcome to my website</h2>');
});

app.get('/github', (req, res) => {
    res.json(githubdata);
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening at PORT ${process.env.PORT}`);
});