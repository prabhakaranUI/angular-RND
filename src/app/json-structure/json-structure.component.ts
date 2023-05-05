import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-json-structure',
    templateUrl: './json-structure.component.html',
    styleUrls: ['./json-structure.component.scss']
})
export class JsonStructureComponent implements OnInit {
    columns =  {"name":"REQUIREMENTS","type":"row(minimum row(windows row(memory varchar, os varchar, graphics varchar, processor varchar), linux row(memory varchar, os varchar, graphics varchar, processor varchar)))","typeSignature":{"rawType":"row","arguments":[{"kind":"NAMED_TYPE","value":{"fieldName":{"name":"minimum"},"typeSignature":{"rawType":"row","arguments":[{"kind":"NAMED_TYPE","value":{"fieldName":{"name":"windows"},"typeSignature":{"rawType":"row","arguments":[{"kind":"NAMED_TYPE","value":{"fieldName":{"name":"memory"},"typeSignature":{"rawType":"varchar","arguments":[{"kind":"LONG","value":2147483647}]}}},{"kind":"NAMED_TYPE","value":{"fieldName":{"name":"os"},"typeSignature":{"rawType":"varchar","arguments":[{"kind":"LONG","value":2147483647}]}}},{"kind":"NAMED_TYPE","value":{"fieldName":{"name":"graphics"},"typeSignature":{"rawType":"varchar","arguments":[{"kind":"LONG","value":2147483647}]}}},{"kind":"NAMED_TYPE","value":{"fieldName":{"name":"processor"},"typeSignature":{"rawType":"varchar","arguments":[{"kind":"LONG","value":2147483647}]}}}]}}},{"kind":"NAMED_TYPE","value":{"fieldName":{"name":"linux"},"typeSignature":{"rawType":"row","arguments":[{"kind":"NAMED_TYPE","value":{"fieldName":{"name":"memory"},"typeSignature":{"rawType":"varchar","arguments":[{"kind":"LONG","value":2147483647}]}}},{"kind":"NAMED_TYPE","value":{"fieldName":{"name":"os"},"typeSignature":{"rawType":"varchar","arguments":[{"kind":"LONG","value":2147483647}]}}},{"kind":"NAMED_TYPE","value":{"fieldName":{"name":"graphics"},"typeSignature":{"rawType":"varchar","arguments":[{"kind":"LONG","value":2147483647}]}}},{"kind":"NAMED_TYPE","value":{"fieldName":{"name":"processor"},"typeSignature":{"rawType":"varchar","arguments":[{"kind":"LONG","value":2147483647}]}}}]}}}]}}}]}};
    formattedStructure = {};
    innerObject = {};
    collectObject = {};
    childArgumentsObj = {};
    isArrayName: string;
    formattedColumns = {};
    childIndex: number;
    dataJsonResponse = [[["1", " Windows 7 SP1+", "", " SSE2 instruction set support"], ["", "", "", ""]]];

    constructor() {
    }

    ngOnInit(): void {
        console.log(this.columns, 'columns');
        console.log({
            "name": "entities",
            "type": "row(hashtags array(row(indices array(row(numberInt varchar)), text varchar)), urls array(row(expanded_url varchar, indices array(row(numberInt varchar)), url varchar)), user_mentions array(row(id row(numberInt varchar), indices array(row(numberInt varchar)), name varchar, screen_name varchar)))",
            "typeSignature": {
                "rawType": "row",
                "arguments": [
                    {
                        "kind": "NAMED_TYPE",
                        "value": {
                            "fieldName": {
                                "name": "hashtags"
                            },
                            "typeSignature": {
                                "rawType": "array",
                                "arguments": [
                                    {
                                        "kind": "TYPE",
                                        "value": {
                                            "rawType": "row",
                                            "arguments": [
                                                {
                                                    "kind": "NAMED_TYPE",
                                                    "value": {
                                                        "fieldName": {
                                                            "name": "indices"
                                                        },
                                                        "typeSignature": {
                                                            "rawType": "array",
                                                            "arguments": [
                                                                {
                                                                    "kind": "TYPE",
                                                                    "value": {
                                                                        "rawType": "row",
                                                                        "arguments": [
                                                                            {
                                                                                "kind": "NAMED_TYPE",
                                                                                "value": {
                                                                                    "fieldName": {
                                                                                        "name": "numberInt"
                                                                                    },
                                                                                    "typeSignature": {
                                                                                        "rawType": "varchar",
                                                                                        "arguments": [
                                                                                            {
                                                                                                "kind": "LONG",
                                                                                                "value": 2147483647
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                {
                                                    "kind": "NAMED_TYPE",
                                                    "value": {
                                                        "fieldName": {
                                                            "name": "text"
                                                        },
                                                        "typeSignature": {
                                                            "rawType": "varchar",
                                                            "arguments": [
                                                                {
                                                                    "kind": "LONG",
                                                                    "value": 2147483647
                                                                }
                                                            ]
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "kind": "NAMED_TYPE",
                        "value": {
                            "fieldName": {
                                "name": "urls"
                            },
                            "typeSignature": {
                                "rawType": "array",
                                "arguments": [
                                    {
                                        "kind": "TYPE",
                                        "value": {
                                            "rawType": "row",
                                            "arguments": [
                                                {
                                                    "kind": "NAMED_TYPE",
                                                    "value": {
                                                        "fieldName": {
                                                            "name": "expanded_url"
                                                        },
                                                        "typeSignature": {
                                                            "rawType": "varchar",
                                                            "arguments": [
                                                                {
                                                                    "kind": "LONG",
                                                                    "value": 2147483647
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                {
                                                    "kind": "NAMED_TYPE",
                                                    "value": {
                                                        "fieldName": {
                                                            "name": "indices"
                                                        },
                                                        "typeSignature": {
                                                            "rawType": "array",
                                                            "arguments": [
                                                                {
                                                                    "kind": "TYPE",
                                                                    "value": {
                                                                        "rawType": "row",
                                                                        "arguments": [
                                                                            {
                                                                                "kind": "NAMED_TYPE",
                                                                                "value": {
                                                                                    "fieldName": {
                                                                                        "name": "numberInt"
                                                                                    },
                                                                                    "typeSignature": {
                                                                                        "rawType": "varchar",
                                                                                        "arguments": [
                                                                                            {
                                                                                                "kind": "LONG",
                                                                                                "value": 2147483647
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                {
                                                    "kind": "NAMED_TYPE",
                                                    "value": {
                                                        "fieldName": {
                                                            "name": "url"
                                                        },
                                                        "typeSignature": {
                                                            "rawType": "varchar",
                                                            "arguments": [
                                                                {
                                                                    "kind": "LONG",
                                                                    "value": 2147483647
                                                                }
                                                            ]
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "kind": "NAMED_TYPE",
                        "value": {
                            "fieldName": {
                                "name": "user_mentions"
                            },
                            "typeSignature": {
                                "rawType": "array",
                                "arguments": [
                                    {
                                        "kind": "TYPE",
                                        "value": {
                                            "rawType": "row",
                                            "arguments": [
                                                {
                                                    "kind": "NAMED_TYPE",
                                                    "value": {
                                                        "fieldName": {
                                                            "name": "id"
                                                        },
                                                        "typeSignature": {
                                                            "rawType": "row",
                                                            "arguments": [
                                                                {
                                                                    "kind": "NAMED_TYPE",
                                                                    "value": {
                                                                        "fieldName": {
                                                                            "name": "numberInt"
                                                                        },
                                                                        "typeSignature": {
                                                                            "rawType": "varchar",
                                                                            "arguments": [
                                                                                {
                                                                                    "kind": "LONG",
                                                                                    "value": 2147483647
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                {
                                                    "kind": "NAMED_TYPE",
                                                    "value": {
                                                        "fieldName": {
                                                            "name": "indices"
                                                        },
                                                        "typeSignature": {
                                                            "rawType": "array",
                                                            "arguments": [
                                                                {
                                                                    "kind": "TYPE",
                                                                    "value": {
                                                                        "rawType": "row",
                                                                        "arguments": [
                                                                            {
                                                                                "kind": "NAMED_TYPE",
                                                                                "value": {
                                                                                    "fieldName": {
                                                                                        "name": "numberInt"
                                                                                    },
                                                                                    "typeSignature": {
                                                                                        "rawType": "varchar",
                                                                                        "arguments": [
                                                                                            {
                                                                                                "kind": "LONG",
                                                                                                "value": 2147483647
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                {
                                                    "kind": "NAMED_TYPE",
                                                    "value": {
                                                        "fieldName": {
                                                            "name": "name"
                                                        },
                                                        "typeSignature": {
                                                            "rawType": "varchar",
                                                            "arguments": [
                                                                {
                                                                    "kind": "LONG",
                                                                    "value": 2147483647
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                {
                                                    "kind": "NAMED_TYPE",
                                                    "value": {
                                                        "fieldName": {
                                                            "name": "screen_name"
                                                        },
                                                        "typeSignature": {
                                                            "rawType": "varchar",
                                                            "arguments": [
                                                                {
                                                                    "kind": "LONG",
                                                                    "value": 2147483647
                                                                }
                                                            ]
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        }, 'entity');
        this.formatTreeStructure(this.columns);
    }

    formatTreeStructure(json): void {
        if (json.type !== 'varchar') {
            for (const argument of json.typeSignature.arguments) {
                if (argument.kind === 'NAMED_TYPE') {
                    if (argument.value.typeSignature.rawType === 'array' && argument.value.fieldName) {
                        this.formattedStructure[argument.value.fieldName.name] =
                            [this.nestedArrayList(argument.value.typeSignature.arguments, 'parent')];
                    } else if (argument.value.typeSignature.rawType === 'row' && argument.value.fieldName) {
                        const rowObject = {};
                        for (const argument1 of argument.value.typeSignature.arguments) {
                            if (argument1.value.typeSignature.rawType === 'varchar') {
                                rowObject[argument1.value.fieldName.name] = null;
                            } else if(argument1.value.typeSignature.rawType === 'array'){
                                rowObject[argument1.value.fieldName.name] =
                                    [this.nestedArrayList(argument1.value.typeSignature.arguments, 'parent')];
                            }else if (argument1.value.typeSignature.rawType === 'row'){
                                rowObject[argument1.value.fieldName.name] =
                                    this.nestedArrayList(argument1.value.typeSignature.arguments, 'parent');
                            }
                        }

                        this.formattedStructure[argument.value.fieldName.name] = rowObject;
                    }
                    else {

                        this.formattedStructure[argument.value.fieldName.name] = null;
                    }
                }
            }
        } else {
            this.formattedStructure[json.name] = null;
        }
        this.formattedColumns = {...this.formattedColumns, ...this.formattedStructure};
        this.formattedStructure = {};
        if (this.dataJsonResponse.length === Object.keys(this.formattedColumns).length) {
            this.joinKeyValue();
        }
    }

    nestedArrayList(typeSignature, type: string): any {

        if (type === 'parent') {
            this.collectObject = {};
        }
        for (const typeSignatureElement of typeSignature) {
            if (typeSignatureElement?.value?.arguments) {
                for (const argument of typeSignatureElement.value.arguments) {
                    if (argument.kind === 'NAMED_TYPE') {

                        if (argument.value.typeSignature.rawType === 'array') {
                            this.isArrayName = argument.value.fieldName.name;
                            this.collectObject[argument.value.fieldName.name] = [];
                            this.nestedArrayList(argument.value.typeSignature.arguments, 'child');
                        } else if (argument.value.typeSignature.rawType === 'varchar' && type === 'parent') {
                            this.collectObject[argument.value.fieldName.name] = null;
                        } else if (argument.value.typeSignature.rawType === 'varchar' && type === 'child') {
                            this.collectObject[this.isArrayName] = [{[argument.value.fieldName.name]: null}];
                        } else if (argument.value.typeSignature.rawType === 'row') {

                            const rowObject = {};
                            for (const argument1 of argument.value.typeSignature.arguments) {
                                if (argument1.value.typeSignature.rawType === 'varchar') {
                                    rowObject[argument1.value.fieldName.name] = null;
                                } else if (argument1.value.typeSignature.rawType === 'row') {
                                    rowObject[argument1.value.fieldName.name] = null;
                                }
                            }
                            this.collectObject[argument.value.fieldName.name] = rowObject;
                        }
                    } else if (argument.kind === 'TYPE') {
                        if (argument.value.rawType === 'array') {
                            return this.nestedRow(argument.value.arguments, 'parent');
                        }
                    }
                }
            } else if (typeSignatureElement.value.typeSignature.rawType === 'varchar') {
                this.collectObject[typeSignatureElement.value.fieldName.name] = null;
            }
        }
        if (type === 'parent') {
            return this.collectObject;
        }
    }

    nestedRow(childArguments, type): any{
        if (type === 'parent') {
            this.childArgumentsObj = {};
        }
        for (const argument of childArguments) {
            if (argument.value.rawType === 'row' && argument.kind === 'TYPE') {
                this.nestedRow(argument.value.arguments, 'child');
            } else if (argument.kind === 'NAMED_TYPE' && argument.value.typeSignature.rawType === 'varchar')  {
                this.childArgumentsObj[argument.value.fieldName.name] = null;
            }
        }
        if (type === 'parent') {
            return this.childArgumentsObj;
        }

    }

    joinKeyValue(): void {
        const joinKeyValueObject = ((valueObject, dataJsonResponse) => {
              if (Array.isArray(valueObject)) {
                  valueObject.forEach((value: any, Index: number) => {
                      if (value && (typeof value !== 'string')) {
                          joinKeyValueObject(value, dataJsonResponse);
                      } else {
                          valueObject[value] = dataJsonResponse;
                      }
                  });
            } else if (typeof valueObject === 'object') {
                  Object.keys(valueObject).forEach((value: any, Index: number) => {
                      if (valueObject[value] && (typeof valueObject[value] !== 'string')) {
                          joinKeyValueObject(valueObject[value], dataJsonResponse[Index]);
                      } else {
                       if (typeof dataJsonResponse === 'string'){
                          valueObject[value] = dataJsonResponse;
                          } else {
                           valueObject[value] = dataJsonResponse[Index];
                       }
                      }
                  });
              }
              return  valueObject;
        });

        joinKeyValueObject( this.formattedColumns, this.dataJsonResponse);

    }

}
