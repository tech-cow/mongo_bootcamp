<h3 style="text-align:center;font-weight: 300;" align="center">
  <img src="img/readme.png" width="100%">
</h3>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-yellow.svg?style=flat-square">
  <img src="https://img.shields.io/badge/downloads-0k-yellow.svg?style=flat-square">
  <img src="https://img.shields.io/badge/build-passing-yellow.svg?style=flat-square">
</p>



> Well A lot of learn about MongoDB - MY MANG

## Things to Learn

🔥 Filler

⚡ Filler

💥 Filler

🍱 Filler

<br>

## Run

Initial Mongod Bootup:
```bash
mongod --directoryperdb --dbpath C:\Users\yuzhou\Dropbox\Tools\MongoDB\data\db
```

On a new cmd window:
```bash
mongo
```
<br>



## MongoDB Command

Display dbs
```bash
> show dbs
```

Create and switch to `mycustomers` db
```bash
> use mycustomers
```

Create a `user1` user on `mycustomers` database:
```bash
db.createUser( { user: "user1",
                 pwd: "123",
                 customData: { employeeId: 123 },
                 roles: ["readWrite", "dbAdmin"]
               });
```


## External Libraries

Third Party libraries are used in this Learning

| Package           |   Description |
| ------------- |:-------------:|
| `example`     |  Blah  |


#### Image Source: [Dribbble](https://dribbble.com/shots/4382078-Sunshine?utm_source=gold_browser_extension)

## License

🌱 MIT 🌱

---

> ![home](http://yuzhoujr.com/emoji/home.svg)
[yuzhoujr.com](http://www.yuzhoujr.com) &nbsp;&middot;&nbsp;
> ![github](http://yuzhoujr.com/emoji/github.svg)  [@yuzhoujr](https://github.com/yuzhoujr) &nbsp;&middot;&nbsp;
> ![linkedin](http://yuzhoujr.com/emoji/linkedin.svg)  [@yuzhoujr](https://linkedin.com/in/yuzhoujr)
