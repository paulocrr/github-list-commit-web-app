require('dotenv').config();
const { Octokit, App, Action } = require("octokit");
const express = require('express');
const app = express();
const port = process.env.PORT;
const apiVersion = 'v1';
const githubAccessKey = process.env.GITHUB_TOKEN;


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get(`/api/${apiVersion}/commits`, async (req, res) => {
    
    const repoOwner = 'paulocrr';
    const repoName = 'github-list-commit-web-app';
    const octokit = new Octokit({auth: githubAccessKey});
    let result = await octokit.request('GET /repos/{owner}/{repo}/commits', {
        owner: repoOwner,
        repo: repoName
    });
    console.log(result['data']);
    res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});