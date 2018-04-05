[sapioNotes](https://notes.sapioweb.com/)
=========

## Installation
This repository contains all required structuring and unifying components for sapioNotes.

#### Technical Requirements
- node
- npm

```
// Clone the repo
$ git@github.com:Sapioweb/sapioNotes.git

// Install packages
$ npm install

// Create .env file
$ node setup.js

// Run application
$ node server.js
```

While running `node setup.js` you should have a `.env` file available, where you can fill in or add your own sensitive variable data.

You can now navigate to `localhost:3000`. The default port is *3000*. If for any reason you would like to edit the port, you may do so in your `server.js` file.


## Todo
- [ ] On successful ajax request, show success message and redirect
- [ ] On adding new note, update or create if same title/slugs
- [ ] do not allow empty save
- [ ] force title require
- [x] Show total notes on home
