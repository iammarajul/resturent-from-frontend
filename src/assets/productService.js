export const ProductService = {
    getProductsData() {
        return [
            {
                "id": 1,
                "image_id": "64839c8f4dbdf06005973fb673f3fc1e",
                "manu_item_name": "Demo Item",
                "manu_item_number": null,
                "item_category": {
                  "code": "2",
                  "name": "Lunch"
                },
                "ingredientTable": [
                  {
                    "weight": 213213,
                    "name": "sdsfe",
                    "_id": {
                      "$oid": "656e06706e1aa4a3eb696eac"
                    }
                  }
                ],
                "has_deep_fried": "no",
                "ingredients_not_listed": "sdxv",
                "item_notes": "fvcd",
                "_id": {
                  "$oid": "656e06706e1aa4a3eb696eab"
                }
            }
        ];
    },

    getProductsWithOrdersData() {
        return [
            {
                "id": 1,
                "image_id": "64839c8f4dbdf06005973fb673f3fc1e",
                "manu_item_name": "Demo Item",
                "manu_item_number": 435,
                "item_category": {
                  "code": "2",
                  "name": "Lunch"
                },
                "ingredientTable": [
                  {
                    "weight": 213213,
                    "name": "sdsfe",
                    "_id": {
                      "$oid": "656e06706e1aa4a3eb696eac"
                    }
                  },
                  {
                    "weight": 234324,
                    "name": "dfgdgdf",
                    "_id": {
                      "$oid": "65a226d7b0f1b1b6ed9c76c1"
                    }
                  },
                  {
                    "weight": 44234,
                    "name": "dfgdgdf",
                    "_id": {
                      "$oid": "65a226d7b0f1b1b6ed9c76c2"
                    }
                  }
                ],
                "has_deep_fried": "no",
                "ingredients_not_listed": "sdxv",
                "item_notes": "sd",
                "_id": {
                  "$oid": "656e06706e1aa4a3eb696eab"
                }
            },
            {
              "id": 2,
              "image_id": "64839c8f4dbdf06005973fb673f3fc1e",
              "manu_item_name": "Demo Item",
              "manu_item_number": 435,
              "item_category": {
                "code": "2",
                "name": "Lunch"
              },
              "ingredientTable": [
                {
                  "weight": 213213,
                  "name": "sdsfe",
                  "_id": {
                    "$oid": "656e06706e1aa4a3eb696eac"
                  }
                },
                {
                  "weight": 234324,
                  "name": "dfgdgdf",
                  "_id": {
                    "$oid": "65a226d7b0f1b1b6ed9c76c1"
                  }
                },
                {
                  "weight": 44234,
                  "name": "dfgdgdf",
                  "_id": {
                    "$oid": "65a226d7b0f1b1b6ed9c76c2"
                  }
                }
              ],
              "has_deep_fried": "no",
              "ingredients_not_listed": "sdxv",
              "item_notes": "sd",
              "_id": {
                "$oid": "656e06706e1aa4a3eb696eab"
              }
          },
          {
            "id": 3,
            "image_id": "64839c8f4dbdf06005973fb673f3fc1e",
            "manu_item_name": "Demo Item",
            "manu_item_number": 435,
            "item_category": {
              "code": "2",
              "name": "Lunch"
            },
            "ingredientTable": [
              {
                "weight": 213213,
                "name": "sdsfe",
                "_id": {
                  "$oid": "656e06706e1aa4a3eb696eac"
                }
              },
              {
                "weight": 234324,
                "name": "dfgdgdf",
                "_id": {
                  "$oid": "65a226d7b0f1b1b6ed9c76c1"
                }
              },
              {
                "weight": 44234,
                "name": "dfgdgdf",
                "_id": {
                  "$oid": "65a226d7b0f1b1b6ed9c76c2"
                }
              }
            ],
            "has_deep_fried": "no",
            "ingredients_not_listed": "sdxv",
            "item_notes": "sd",
            "_id": {
              "$oid": "656e06706e1aa4a3eb696eab"
            }
        },
        {
          "id": 4,
          "image_id": "64839c8f4dbdf06005973fb673f3fc1e",
          "manu_item_name": "Demo Item",
          "manu_item_number": 435,
          "item_category": {
            "code": "2",
            "name": "Lunch"
          },
          "ingredientTable": [
            {
              "weight": 213213,
              "name": "sdsfe",
              "_id": {
                "$oid": "656e06706e1aa4a3eb696eac"
              }
            },
            {
              "weight": 234324,
              "name": "dfgdgdf",
              "_id": {
                "$oid": "65a226d7b0f1b1b6ed9c76c1"
              }
            },
            {
              "weight": 44234,
              "name": "dfgdgdf",
              "_id": {
                "$oid": "65a226d7b0f1b1b6ed9c76c2"
              }
            }
          ],
          "has_deep_fried": "no",
          "ingredients_not_listed": "sdxv",
          "item_notes": "sd",
          "_id": {
            "$oid": "656e06706e1aa4a3eb696eab"
          }
      }
        
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

