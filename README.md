## First node.js Server Application
This is my first web-application made with *Node.js* <br>
To run this project, you need to install *Nodejs and npm (Node Package Manager)* <br>

### Linux Usage
To install Node you can use NVM (**Node Version Manager**) that permit to install multiple versions of Node and Npm on your machine

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
$ export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
$ nvm install node
$ nvm use node
$ npm install
$ npm start # or npm run start-express
```

### Windows usage
To install Node.js and NPM on your Windows machine, you can go to https://nodejs.org/it and download the exe file to install this package.

After, you can open an cmd.exe and install all dependencies

```bash
> npm install body-parser express jade --save
> npm start # or npm run start-express
```