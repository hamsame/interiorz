# Interiorz
<details><summary><b>Table Of Contents</b></summary>
<ol>
<li><a href="#about-the-project"> About The Project</a></li>
<li><a href="#lessons-learned"> Lessons Learned</a></li>
<li><a href="#getting-started"> Getting Started </a>
  <ul>
    <li><a href="#prerequisites"> Prerequisites</a></li>
     <li><a href="#installation"> Installation</a></li>
</ul>
</li>
</ol>
</details>

### About The Project
A website I made for a fake interior design company built with React JS and a headless Content Management System for the backend named Contentful CMS.

### Lessons Learned
I learned how to use environmental variabales to use secret API keys without exposing them in the codebase where anyone who might have malicious intentions would find it. 

I also learned how to set up the "react-router-dom" package so that a non coder can create, edit and delete webpages just by using a content management system any computer literate person can use with little to no help. This means that each time a new blogpost is made, react makes a new page for that blogpost with the text and media being in the same order it was in the blogpost. 


### Getting Started
This a brief guide on setting this project up locally.
<br>
### Prerequisites
If you do not have npm installed enter the command below into command prompt if you are on windows or into terminal if you are a mac user.
```
$ npm install npm@latest -g
```

### Installation
With npm installed you can then clone (download a copy) of this repository (entire project and history):

```
# Clone this repository
$ git clone https://github.com/hamsame/interiorz/

# Go into the repository
$ cd gamerland

# Remove current origin repository
$ git remote remove origin
```


Enter the commands beneath to start coding
```
# Install dependencies
$ npm install

# Start local development server
$ npm start
```
