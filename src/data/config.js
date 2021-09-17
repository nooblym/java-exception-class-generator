 export let configData = {
     "temp": {
         "editExceptionCache": {
             "id": "l1",
             "exceptionName": "ServerException",
             "data": {
                 "message": {
                     "value": "",
                     "defaultValue": "1",
                     "type": "string"
                 },
                 "httpCode": {
                     "value": 200,
                     "defaultValue": 200,
                     "type": "string"
                 },
                 "messageForClient": {
                     "value": "",
                     "defaultValue": "messageForClient",
                     "type": "string"
                 },
                 "code": {
                     "value": "code",
                     "defaultValue": "code",
                     "type": "string"
                 }
             },
             "newFields": [
                 {
                     "id": "1",
                     "title": "",
                     "fieldName": "newF1",
                     "fieldType": "string",
                     "defaultValue": "newF1",
                     "updateFlag": false,
                     "deleteFlag": false,
                     "newFlag": false
                 },
                 {
                     "fieldName": "newF1",
                     "defaultValue": "newF1",
                     "updateFlag": false,
                     "deleteFlag": false,
                     "newFlag": false
                 }
             ],
             "config": {
                 "inheritable": true
             },
             "subException": [
                 {
                     "id": "l1:l1",
                     "exceptionName": "BadRequestException",
                     "config": {
                         "inheritable": true
                     },
                     "data": {
                         "message": {
                             "value": "",
                             "defaultValue": "1",
                             "type": "string"
                         },
                         "httpCode": {
                             "value": 200,
                             "defaultValue": 200,
                             "type": "string"
                         },
                         "messageForClient": {
                             "value": "",
                             "defaultValue": "messageForClient",
                             "type": "string"
                         },
                         "code": {
                             "value": "code",
                             "defaultValue": "code",
                             "type": "string"
                         }
                     },
                     "newFields": [
                         {
                             "id": "1",
                             "title": "",
                             "fieldName": "newF1",
                             "fieldType": "string",
                             "defaultValue": "1"
                         },
                         {
                             "fieldName": "code",
                             "defaultValue": "200"
                         }
                     ]
                 },
                 {
                     "id": "l1:l2",
                     "exceptionName": "BadGatewayException",
                     "config": {
                         "inheritable": true
                     },
                     "data": {
                         "message": {
                             "value": "",
                             "defaultValue": "1",
                             "type": "string"
                         },
                         "httpCode": {
                             "value": 200,
                             "defaultValue": 200,
                             "type": "string"
                         },
                         "messageForClient": {
                             "value": "",
                             "defaultValue": "messageForClient",
                             "type": "string"
                         },
                         "code": {
                             "value": "code",
                             "defaultValue": "code",
                             "type": "string"
                         }
                     },
                     "newFields": [
                         {
                             "title": "",
                             "fieldName": "newF2",
                             "fieldType": "string",
                             "defaultValue": "newF2"
                         }
                     ]
                 }
             ],
             "inherited-fields": [
                 {
                     "fieldName": "message",
                     "defaultValue": "1"
                 },
                 {
                     "fieldName": "httpCode",
                     "defaultValue": 200
                 },
                 {
                     "fieldName": "messageForClient",
                     "defaultValue": "messageForClient"
                 },
                 {
                     "fieldName": "code",
                     "defaultValue": "code"
                 }
             ]
         }
         ,
         "baseException":{ }
     },
     "predefine": {
         "editExceptionDialogVisible": false,
         "editBaseExceptionDialogVisible":false,
         "baseExceptions": [
             {
                 "className": "Exception",
                 "classFullName": "java.lang.Exception",
                 "classFields":[
                     {
                         "field":"message",
                         "type":"string"
                     }
                 ]
             },
             {
                 "className": "RuntimeException",
                 "classFullName": "java.lang.RuntimeException",
                 "classFields":[
                     {
                         "field":"message",
                         "type":"string"
                     }
                 ]
             },
             {
                 "className": "自定义",
                 "classFullName": null
             }
         ]
     },
     "config": {
         "meta": {
             "version": "1.0Beta",
             "author": "lym",
             "create_time": "2021-09-14",
             "update_time": "2021-09-14",
             "support": "elementui",
             "description": "ceshi"
         },
         "settings": {
             "basePackage": "me.lym.exception",
             "baseExceptionClassName": "Exception",
             "baseExceptionClassFullName": "java.lang.Exception",
             "baseExceptionFields":[
                 {
                     "field":"message",
                     "type":"String"
                 }
             ],
             "useLombok": "true",
             "suffix": "Exception",
             "hiddenSuffix": true
         },
         "cols": [
             {
                 "index": 0,
                 "prop": "exceptionName",
                 "title": "类名",
                 "defaultValue": "defaultValue"
             },
             {
                 "index": 1,
                 "prop": "message",
                 "title": "message",
                 "defaultValue": "defaultValue"
             }
         ],
         "exceptions": [
             {
                 "id": "l1",
                 "exceptionName": "ServerException",
                 "data": {
                     "message":{
                         "value": "",
                         "defaultValue": "1",
                         "type": "string"
                     }
                 },
                 "newFields": [
                 ],
                 "config": {
                     "inheritable": true
                 },
                 "subException": [
                     {
                         "id": "l1:l1",
                         "exceptionName": "BadRequestException",
                         "config": {
                             "inheritable": true
                         },
                         "data": {
                             "message":{
                                 "value": "",
                                 "defaultValue": "1",
                                 "type": "string"
                             }
                         },
                         "newFields": [
                         ]
                     },
                     {
                         "id": "l1:l2",
                         "exceptionName": "BadGatewayException",
                         "config": {
                             "inheritable": true
                         },
                         "data": {
                             "message":{
                                 "value": "",
                                 "defaultValue": "1",
                                 "type": "string"
                             },
                         },
                         "newFields": [
                         ]
                     }
                 ]
             }
         ]
     }
 }
