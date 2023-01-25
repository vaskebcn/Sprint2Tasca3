
db.createCollection( 'Orders', {validator: {$jsonSchema: {bsonType: 'object',title:'Orders',required: [         'time',          'takeAway',          'quantity',          'price',          'products',          'Restaurant'],properties: {time: {bsonType: 'timestamp'},takeAway: {enum: },quantity: {bsonType: 'string'},price: {bsonType: 'double'},products: {bsonType: 'array',items: {
title:'object',required: [         'id',          'type',          'name',          'price'],properties: {id: {bsonType: 'int'},type: {bsonType: 'string'},name: {bsonType: 'object',
title:'object',properties: {description: {bsonType: 'string'},image: {bsonType: 'string'}}},price: {bsonType: 'double'}}}},clients: {bsonType: 'array',items: {
title:'object',properties: {id: {bsonType: 'string'},name: {bsonType: 'string'},surname: {bsonType: 'string'},phone: {bsonType: 'int'},address: {bsonType: 'object',
title:'object',properties: {street: {bsonType: 'string'},number: {bsonType: 'int'},floor: {bsonType: 'string'},door: {bsonType: 'string'},zipcode: {bsonType: 'int'},province: {bsonType: 'string'},district: {bsonType: 'string'}}}}}},Restaurant: {bsonType: 'objectId'}}         }      }});  