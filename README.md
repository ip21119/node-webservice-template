# Installation

> ### Visual code extension for application development

- Eslint extension in vscode

```sh
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
```

- Prettier extension in vscode

```sh
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
```

- Markdown readme

```sh
https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint
```

- Shellscript、Dockerfile、properties、gitignore、dotenv、hosts、jvmoptions, etc DocumentFormat

```sh
https://marketplace.visualstudio.com/items?itemName=foxundermoon.shell-format
```

- Support for dotenv file syntax

```sh
https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv
```

- Display import/require package size in the editor

```sh
https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost
```

> ### install following nodejs packages for code quality

- Command to install packages

```sh
npm install --save-dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react babel-eslint eslint-plugin-prettier
```

> ### Create eslintrc file

- create .eslintrc file in root directory of the repository. paste below configuration.

```json
{
  "root": true,
  "plugins": ["prettier"],
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": { "node": true, "es6": true, "browser": true },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "implicit-arrow-linebreak": "off",
    "comma-dangle": "off",
    "indent": "off",
    "no-trailing-spaces": "off"
  }
}
```

> ### Create .env file in the project root folder by adding following configuration parameters

```env
NODE_ENV=development|testing|staging|production           # Node environment

APP_NAME=webservice # Application name
APP_PROTOCOL=http|https                                   # Http request protocol
APP_HOST=localhost|127.0.0.1|ip address|domain name       # App host
APP_PORT=5003                                               # App port

DB_DIALECT=postgres                                       # Db dialect
DB_HOST=DB_HOST                                           # Db host
DB_PORT=5432                                                # Db port
DB_NAME=DB_NAME                                            # Db name
DB_USERNAME=DB_USERNAME                                   # username
DB_PASSWORD=DB_PASSWORD                                   # password
```
