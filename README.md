# Hull Connector Tester

This is a cli utility which runs multiple [checks](./src/checks) on the connector code base to make sure it complies with official Hull Connector standards.

When any of the check fails the command exits with error code to fail CI job.

## Continuous Integration usage

All [official Hull connectors](https://github.com/hull-ships/) run `hull-connector-tester` on each CI build.

This is how the Circle CI configuration file (`.circleci/config.yml`) last step looks like this:

```
- run: npm i --no-save --no-cache hull-connector-tester@latest && ./node_modules/.bin/hull-connector-tester
```

## Manual usage

To manually test the Connector code base, the tool should be installed globally and run in connector directory:

```
npm i -g hull-connector-tester

cd hull-connector-name/

hull-connector-tester
```


## How to add new check?

1. add new file in [src/checks](./src/checks) directory with the name of the check
2. create a function taking no arguments and returning `true` in case of success or `string` in case of error with error message
3. export this new check in [src/checks/index.js](./src/checks/index.js)
4. bump version and update [CHANGELOG.md](./CHANGELOG.md)