/** Server Configuration */
const express = require('express');
const app = express();
const port = 3000;
const apiVersion = 'v1';

/** Github API Configuration */
const { Octokit} = require("octokit");
const repoOwner = 'paulocrr';
const repoName = 'github-list-commit-web-app';
const repoData = {
    owner: repoOwner,
    repo: repoName
}
const octokit = new Octokit();

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.get(`/api/${apiVersion}/commits`, async (_, res) => {

    let result = {'status': 0,message: '', data:[]};
    try{
        const requestResult = await octokit.request('GET /repos/{owner}/{repo}/commits', repoData);
        const status = requestResult['status'];
        result['status'] = status;

        for(const commit of requestResult['data']){
            const commitData = commit['commit'];
            const filteredCommitData = {
                sha: commit['sha'],
                date: commitData['committer']['date'],
                committer: {
                    name: commitData['committer']['name'],
                    email: commitData['committer']['email'],
                    username: commit['committer']['login'],
                    profile_url: commit['committer']['url'] 
                },
                message: commit['commit']['message'],
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