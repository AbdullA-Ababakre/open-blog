### two kinds of databases

- SQL(e.g. Mysql)
  
  SQL is a standard language for accessing and manipulating databases.SQL lets you access and manipulate databases
  
- noSQL(e.g. MongoDB)

NoSQL stands for “Not Only SQL” or “Not SQL.”

![在这里插入图片描述](https://img-blog.csdnimg.cn/3ee1708598854cadad3bbf25feeb0e5f.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQWJ1ZHVsYV9f,size_20,color_FFFFFF,t_70,g_se,x_16)


NoSQL Databases are mainly categorized into four types:

Types of NoSQL Databases:

- Key-value Pair Based

- Column-oriented Graph
- Graphs based
- Document-oriented


## Steps(SQL)


- install mysql server and mysql workbench
- install sql npm package [see more](https://www.npmjs.com/package/mysql2)

````
npm install --save mysql2
````

- connect to the DB(demo code) [see more](https://www.npmjs.com/package/mysql2)

````
// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',   // the database name
  password: ''  // the password
});

// simple query
connection.query(
  'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

// with placeholder
connection.query(
  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  ['Page', 45],
  function(err, results) {
    console.log(results);
  }
);
````

- Use the sequelize [see more](https://sequelize.org/master/)

> sequelize is the third package library ,an object-relational mapping library,which convenients us to write the javascript object code rather than sql command .


## 参考

https://www.guru99.com/nosql-tutorial.html

https://academind.com/tutorials/sql-vs-nosql


## Steps(MongoDB)


- create mongoDB atlas [mongoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_footprint_row_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624584&adgroup=115749713703&gclid=Cj0KCQiA_c-OBhDFARIsAIFg3ezZ5r7rycYS26_9H2-raqb5zj_kZy6ITb7_U-d-B-GjJuBtJ52oVQYaAqBlEALw_wcB)

- create cluster ,create user ,add IP address

- 