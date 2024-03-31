
<p align="center">
  <img src="https://github.com/ajitkumar1264/carseller/blob/main/src/assets/logo-removebg-preview.png">
</p>
<p align="center">
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white">
  &nbsp;
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB">
  &nbsp;
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
  &nbsp;
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
</p>
<p align="center">
  <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white">
  &nbsp;
  <img src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101">
  &nbsp;
  <img src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white">
</p>







# OEM Parts Catalog.


Our Project is dedicated to providing comprehensive, accurate information about various car parts. From engines to exhausts, from brakes to batteries, we cover it all. Our extensive database includes details about parts for a wide range of vehicles, from the latest models to classic cars. We aim to empower car owners and enthusiasts by providing them with the knowledge they need to understand their vehicles better and make informed decisions about maintenance and repairs. We believe that a well-informed car owner is a safer, happier, and more satisfied car owner.

 
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#project-scope">Project Scope</a>
      <ul>
        <li><a href="#user-registration">User Registration</a></li>
        <li><a href="#dashboard-view">Dashboard View</a></li>
        <li><a href="#admin-dashboard">Admin Dashboard</a></li>
      </ul>
    </li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#plugins">Plugins</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>


## Project Scope

This project aims to streamline the process of identifying, selecting, and ordering genuine OEM parts for vehicles by leveraging the precision of VINs.

To provide a user-friendly and responsive platform with data visualization of car parts and assemblies for car owners/ warehouse owners.



## Features

#### User Registration


- User Registration
- Email Authentication
- Login

<p align="center">
  <img src="https://github.com/ajitkumar1264/carseller/blob/main/src/assets/logo-removebg-preview.png">
</p>


#### Dashboard View

- Search VIN Number
- Search and view specific Category
- Search and view specific Assembly
- Search and view specific parts
- Image Hotspot
- View and Update Profile



<p align="center">
  <img src="https://github.com/ajitkumar1264/carseller/blob/main/src/assets/logo-removebg-preview.png">
</p>

#### Admin Dashboard

- User management
- User VIN Number History

<p align="center">
  <img src="https://github.com/ajitkumar1264/carseller/blob/main/src/assets/logo-removebg-preview.png">
</p>




## Tech Stack

**Client:** FuseReact, Redux, TailwindCSS

**Server:** Node, Express, socket, Redis

**Database** : MongoDB



## Installation

Clone the repository: `git clone https://github.com/your-repo-link.git`
 
OEM requires [Fuse React](https://fusetheme.com/) v8+ to run.

Install the dependencies and devDependencies and start the Frontend.

```sh
cd frontend
npm i
npm start
```

OEM requires [Node.js](https://nodejs.org/) v16+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd backend
npm i
npm run dev
```

Make sure to set up the required environment variables in the `.env` file before running the application.

## Plugins

OEM is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| GitHub | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |



## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>

