# JobSearchApp 

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Instagram][instagram-shield]][instagram-url]
[![Gmail][gmail-shield]](mailto:tlswoals2006@gmail.com?subject=[GitHub]%20Source%20Job%20Search%20App)


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/Jason_Logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Job-Search-Web-Application</h3>

  <p align="center">
    General CRUD process for Job searching app.
    <br />
    <a href="https://github.com/jasonn0118/JobSearchApp.git"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jasonn0118/JobSearchApp.git">View Demo</a>
    ·
    <a href="https://github.com/jasonn0118/JobSearchApp/issues">Report Bug</a>
    ·
    <a href="https://github.com/jasonn0118/JobSearchApp/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
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
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Job Search app Index page][product-screenshot]](https://github.com/jasonn0118/JobSearchApp.git)

This app is Job search app. 

Here's why:
* Better build rock solid knowledge on the MERN App.
* Pagination and Search function added.
* You should element DRY principles to the rest of your life :smile:

The concept of Job search app is retrieving data from a database and show the list for clients and Search by string and see the data as I set a own pagination. But the app is not only for displaying but creating, updating and deleting.

### Built With

This section is for the list major frameworks that I built the project using. 

* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [Bootstrap](https://getbootstrap.com)
* [Moment](https://momentjs.com/)


<!-- GETTING STARTED -->
## Getting Started

This is instructions that how you could build the app on locally.


### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jasonn0118/JobSearchApp.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Set up your own Database in `db_config.js` inside `config` folder
  ```JS
  module.exports = {
    url: "YOUR MONGODB URL"
  };
  ```
4. Create local `.env` file in root path and setup port.
   ```JS
   PORT= YOUR PORT
   ```

<!-- CONTACT -->
## Contact

Jason Shin - [LinkedIn][linkedin-url] - tlswoals2006@gmail.com

Address: Vancouver, BC, 🇨🇦

Project Link: [https://github.com/jasonn0118/JobSearchApp.git](https://github.com/jasonn0118/JobSearchApp.git)


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Animate.css](https://daneden.github.io/animate.css)
* [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
* [Sticky Kit](http://leafo.net/sticky-kit)
* [JVectorMap](http://jvectormap.com)
* [Font Awesome](https://fontawesome.com)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jasonshin0118/
[instagram-shield]: https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white
[instagram-url]: https://www.instagram.com/jasonn_dev/
[gmail-shield]:https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[product-screenshot]: images/ScreenShot.png
