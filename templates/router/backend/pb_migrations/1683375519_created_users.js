migrate((db) => {
  const collection = new Collection({
    "id": "u66vvx6nsk2itu6",
    "created": "2023-05-06 12:18:39.051Z",
    "updated": "2023-05-06 12:18:39.051Z",
    "name": "users",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "eunlqi1p",
        "name": "username",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "v4uu7wuc",
        "name": "password",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("u66vvx6nsk2itu6");

  return dao.deleteCollection(collection);
})
