
db.createCollection( 'address', {validator: {$jsonSchema: {bsonType: 'object',title:'address',required: [         'address',          'address.street',          'address.number',          'address.zipcode',          'address.province',          'address.district'],properties: {address: {bsonType: 'object',
title:'object',},address.street: {bsonType: 'string'},address.number: {bsonType: 'string'},address.floor: {bsonType: 'string'},address.door: {bsonType: 'string'},address.zipcode: {bsonType: 'string'},address.province: {bsonType: 'string'},address.district: {bsonType: 'string'}}         }      }});  