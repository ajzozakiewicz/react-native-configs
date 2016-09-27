# react-native-configs

A module similar to npm-config for React Native.

It can be used for setting environment variables based on React Native
__DEV__ flag. The __DEV__ variable will be true when running in debug mode.  
  
When the you build your code for release in Xcode or with dev=false as a build param, react-native-config  
will look in the root of your project for a `config` folder. That folder should contain a `debug.json` and  
a `release.json` file. Inside of each file you can set a json object with whatever environment variable you wish.  

Project structure should look like this:

```
-- My_Project_Root
    |
    -- config
        |
        -- debug.json
        -- release.json
```

## How to install

#### 1. Install

``` bash
$ npm install react-nativ-configs
```

#### 2. Add the json files to the `config` directory in the root of your project.


## Why build this module?

When I starting working with React Native, I was wanting a module that I could easily control API urls based on environment.  
This module was created in order to achieve that goal. When developing locally, API URLs can be pulled from the `debug.json`.  
Once you are ready to deploy, the code should be built for release and the variables are nicely swapped out for the `release.jsom`.  

