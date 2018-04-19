# Hull Connector Tester

This is a cli utility which runs multiple [checks](./src/checks) on the connector code base to make sure it complies with official Hull Connector standards.

When any of the check fails the command exits with error code to fail CI job.
The main goal of the tool is to easily enforce specific best standards across wide connectors code base.

## Continuous Integration usage

All [official Hull connectors](https://github.com/hull-ships/) run latest version of `hull-connector-tester` on each CI build.

This is how the Circle CI configuration file (`.circleci/config.yml`) last step looks like:

```
- run: npm i --no-save --no-cache hull-connector-tester@latest && ./node_modules/.bin/hull-connector-tester
```

## Manual usage

To manually test the Connector code base, the tool should be installed globally and run in connector directory:

```
cd hull-connector-name/

npm i -g --no-cache hull-connector-tester@latest && hull-connector-tester
```


## How to add new check?

1. Add new file in [src/checks](./src/checks) directory with the name of the check
2. Create a function taking no arguments and returning `true` in case of success or `string` in case of error with error message
3. Export this new check in [src/checks/index.js](./src/checks/index.js)
4. bump version and update [CHANGELOG.md](./CHANGELOG.md)