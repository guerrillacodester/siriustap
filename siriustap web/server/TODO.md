# Server Markdown TODO List

- [x] Implement server boilerplate.

  - [x] npm install -D babel-cli babel-preset-env for ES6 support. MUST BE DONE AFTER express --git since this command resets all installs!
  - [x] generate express --git.
  - [x] Add "start": "babel-node ./bin/www" to package.json
  - [x] Add "runtimeExecutable": "\${workspaceFolder}/node_modules/.bin/babel-node", to launch.json
  - [x] touch .bowerrc at the root level to define where the various packages (bootstrap, bootswatch, etc) should be installed.
  - [x] npm install
  - [x] npm start test successful.
  - [x] Debug test.

- [x] Convert Express App to JSON API Boilerplate

  - [x] Remove view rendering.
  - [x] Remove routes folder
  - [x] Remove static serve and public folder.
  - [x] Update error handling
  - [x] Add GET '/'
