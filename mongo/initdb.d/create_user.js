db = db.getSiblingDB("admin");
db.createUser({
  user: "root",
  pwd: "secret",
  roles: [{role: "root", db: "admin"}]
});

db = db.getSiblingDB("mongo-db");
db.createUser({
  user: "devUser",
  pwd: "secret",
  roles: [
    { role : "dbOwner", db : "mongo-db" },
    { role : "dbAdmin", db : "mongo-db" },
    { role : "readWrite", db : "mongo-db" },
  ]
});