<div id="top"></div>

<!-- PROJECT SHIELDS -->
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT TITLE -->
<br />
<div align="center">
  <h3 align="center">Github Commit List Application</h3>
  <p align="center">
    This project is in both the frontend and the backend of an application to be able to see the commits that are made in this repository.
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#server-installation">Server Installation</a></li>
        <li><a href="#client-installation">Client Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Commit List App][product-screenshot]](https://github.com/paulocrr/github-list-commit-web-app)

This web application allows you to see different data of the commits that have been made and will be made on this repository.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React.js](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com)
* [Octokit](https://www.npmjs.com/package/octokit)
* [Expressjs](https://expressjs.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

To run this project you need the following
* Git you can download from this link: [https://git-scm.com/downloads](https://git-scm.com/downloads)
* A Github account, if you dont have one you can created from: [GitHub](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)
* NodeJs It can be downloaded from the following link: [https://nodejs.org/en/](https://nodejs.org/en/)
* npm
  ```sh
  npm install npm@latest -g
  ```
* Create a Personal Access Token on Github from [https://github.com/settings/tokens/new](https://github.com/settings/tokens/new), give a name to your new token and check all the repo scope and click on "Generate token".

* Clone the repo
   ```sh
   git clone https://github.com/paulocrr/github-list-commit-web-app.git
   ```

## Installation
### Server Installation
1. Open a bash in the folder where you cloned the repository
2. Navigate to the server folder
    ```sh
    cd github-list-commit-web-app/server
    ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a .env file and create a variable named GITHUB_ACCESS_TOKEN and copy and paste your github access personal token wich you created earlier , if you have doubts, consult the .env.example file for reference.
   ```
   GITHUB_ACCESS_TOKEN = <ENTER YOUR GITHUB ACCESS PERSONAL TOKEN>
   ```
5. Then start the server using the following command
   ```sh
   nodemon
   ```
6. The server will start in the following direction [http://localhost:3001/](http://localhost:3001/), if you enter to that url and you see the message Hello World in the browser you setup correctly de server enviroment.

7. To test de API functionality enter the following url [http://localhost:3001/api/v1/commits](http://localhost:3001/api/v1/commits), if you see a json response with a status 200 attibute the api is working correctly.

### Client Installation
1. Open a bash in the folder where you cloned the repository
2. Navigate to the client folder
    ```sh
    cd github-list-commit-web-app/client
    ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Then start the react server using the following command
   ```sh
   npm start
   ```
5. The react server will start in the following direction [http://localhost:3000/](http://localhost:3000/), If you can see a UI like the one seen in the screenshot that is in this README then the react server is working correctly. 


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

The client interface shows a table of all the commits made in this repository, per commit shows the following data: the commit identifier, the date and time it was made, the name of the person who made it, the email of the person, the user (if you click on the username this will take you to your profile on github), and a button to see details, if you click on that button it will show you a modal showing the message that that commit had, the identifier complete and date. If you click on the name of the row you can sort the table with respect to that column, the columns that have a function are: Date, Name, Email, User. To have a better visibility, the table is paginated and by clicking on the arrows at the bottom of the table you can navigate between the different pages, you can also control the number of records shown per page.

Also in the search field you can write part of a commit identifier and you will be able to see all the commits that that string contains in its identifier. Finally, if you click on the Clear button, what you wrote in the filter input will be deleted and all the commits will be displayed.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Paulo Rodriguez - [@twitter_handle](https://twitter.com/paulo_crr) - paulo_crr@hotmail.com

Project Link: [https://github.com/paulocrr/github-list-commit-web-app](https://github.com/paulocrr/github-list-commit-web-app)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/paulo-cesar-r-01a2b367/
[product-screenshot]: screenshot.png