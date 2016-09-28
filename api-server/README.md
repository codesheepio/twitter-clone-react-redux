# Twister API Server

## Installation
1. Download & Install [MongoDB](https://www.mongodb.com/download-center#community)
2. Install node dependencies with `npm install`

## Usage

1. Start Mongo Daemon
    ``` bash
    mongod
    ```

2. Seed initial mock data
    ``` bash
    mongorestore ./data-seed
    ```

3. Start API server
    ``` bash
    npm start
    ```

