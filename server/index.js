/** Server Configuration */
require('dotenv').config();
const express = require('express');
const app = express();
const port = 3001;
const apiVersion = 'v1';

/** Github API Configuration */
const { Octokit} = require("octokit");
const githubToken = process.env.GITHUB_ACCESS_TOKEN;
const repoOwner = 'paulocrr';
const repoName = 'github-list-commit-web-app';
const repoData = {
    owner: repoOwner,
    repo: repoName
}
const octokit = new Octokit({
    auth: githubToken
});

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.get(`/api/${apiVersion}/commits`, async (_, res) => {

    let result = {'status': 0,message: '', data:[]};
    try{
        const requestResult = await octokit.request('GET /repos/{owner}/{repo}/commits', repoData);
        const status = requestResult['status'];
        result['status'] = status;
        console.log(requestResult);
        for(const data of requestResult['data']){
            const commitData = data['commit'];
            const filteredCommitData = {
                sha: data['sha'],
                date: commitData['committer']['date'],
                committer: {
                    name: commitData['committer']['name'],
                    email: commitData['committer']['email'],
                    username: data['committer']['login'],
                    profile_url: data['committer']['html_url'] 
                },
                message: data['commit']['message'],
            }
            result.data.push(filteredCommitData);
        }

        result['message'] = 'OK';

    }catch(e){

        result['status'] = e['status'];
        result['message'] = e['response']['data']['message'];

    }finally{

        res.json(result);

    }
    

});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});