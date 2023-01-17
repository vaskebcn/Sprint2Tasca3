
db.createCollection( 'jobType', {validator: {$jsonSchema: {bsonType: 'object',title:'jobType',required: [         'nameJobType'],properties: {nameJobType: {bsonType: 'string'}}         }      }});  