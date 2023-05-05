import { Component, OnInit,  Injectable } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject} from 'rxjs';


/**
 * Node for to-do item
 */
export class TodoItemNode {
  children: TodoItemNode[];
  item: string;
}

/** Flat to-do item node with expandable and level information */
export class TodoItemFlatNode {
  item: string;
  level: number;
  expandable: boolean;
}

/**
 * The Json object for to-do list data.
 */


/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
@Injectable()
export class ChecklistDatabase{
  TREE_DATA = {
    "fields": [{
      "refId": "190318cb-80be-4eb8-b311-2238441e1aa5",
      "ordinal": 1,
      "name": "PAGES",
      "dataType": "ARRAY",
      "length": 0,
      "encrypted": false,
      "sorted": false,
      "partitioned": false,
      "bucketing": false,
      "bucketCount": 0,
      "description": "",
      "parentRefId": "9ca4618a-8663-4585-b4fb-6473b99ff5c9",
      "structure_info": {
        "type": "ARRAY",
        "nextedColumn": true,
        "nestedColumnType": ""
      },
      "source": {
        "origin": "SOURCE_SYSTEM",
        "name": "PAGES",
        "typeLength": 0,
        "type": "",
        "index": false
      },
      "fieldProperties": {
        "precision": 0,
        "scale": 0,
        "nullable": false,
        "autoIncrement": false,
        "primaryKey": true
      },
      "dataProperties": {
        "analysed": false,
        "additional": {
          "minValue": 0,
          "maxValue": 0,
          "whiteSpaceCount": 0,
          "highFrequencyCharData": [],
          "nullCount": 0,
          "distinctRecord": 0,
          "lengthUniform": false,
          "allNumeric": false
        }
      },
      "fields": [{
        "refId": "38cae367-8537-401f-992e-0943f83253a9",
        "ordinal": 1,
        "name": "TYPE",
        "dataType": "STRING",
        "length": 0,
        "encrypted": false,
        "sorted": false,
        "partitioned": false,
        "bucketing": false,
        "bucketCount": 0,
        "description": "",
        "parentRefId": "190318cb-80be-4eb8-b311-2238441e1aa5",
        "source": {
          "origin": "SOURCE_SYSTEM",
          "name": "TYPE",
          "typeLength": 0,
          "type": "",
          "index": false
        },
        "fieldProperties": {
          "precision": 0,
          "scale": 0,
          "nullable": false,
          "autoIncrement": false,
          "primaryKey": true
        },
        "dataProperties": {
          "analysed": false,
          "additional": {
            "minValue": 0,
            "maxValue": 0,
            "whiteSpaceCount": 0,
            "highFrequencyCharData": [],
            "nullCount": 0,
            "distinctRecord": 0,
            "lengthUniform": false,
            "allNumeric": false
          }
        },
        "fields": [],
        "_links": {
          "self": {
            "href": "http://192.168.1.188:8000/core-system/application/table/column/38cae367-8537-401f-992e-0943f83253a9"
          },
          "nested_level": {
            "href": "http://192.168.1.188:8000/core-system/application/table/column/38cae367-8537-401f-992e-0943f83253a9/nested-level?level=true"
          }
        }
      },
        {
          "refId": "f9839a5e-d8e6-4d8e-add0-5bfe67a98d1f",
          "ordinal": 2,
          "name": "DISPLAYTITLE",
          "dataType": "STRING",
          "length": 0,
          "encrypted": false,
          "sorted": false,
          "partitioned": false,
          "bucketing": false,
          "bucketCount": 0,
          "description": "",
          "parentRefId": "190318cb-80be-4eb8-b311-2238441e1aa5",
          "source": {
            "origin": "SOURCE_SYSTEM",
            "name": "DISPLAYTITLE",
            "typeLength": 0,
            "type": "",
            "index": false
          },
          "fieldProperties": {
            "precision": 0,
            "scale": 0,
            "nullable": false,
            "autoIncrement": false,
            "primaryKey": true
          },
          "dataProperties": {
            "analysed": false,
            "additional": {
              "minValue": 0,
              "maxValue": 0,
              "whiteSpaceCount": 0,
              "highFrequencyCharData": [],
              "nullCount": 0,
              "distinctRecord": 0,
              "lengthUniform": false,
              "allNumeric": false
            }
          },
          "fields": [],
          "_links": {
            "self": {
              "href": "http://192.168.1.188:8000/core-system/application/table/column/f9839a5e-d8e6-4d8e-add0-5bfe67a98d1f"
            },
            "nested_level": {
              "href": "http://192.168.1.188:8000/core-system/application/table/column/f9839a5e-d8e6-4d8e-add0-5bfe67a98d1f/nested-level?level=true"
            }
          }
        },
        {
          "refId": "58ed7e87-0670-4e6c-b39e-d843312dd88f",
          "ordinal": 3,
          "name": "NAMESPACE",
          "dataType": "STRUCT",
          "length": 0,
          "encrypted": false,
          "sorted": false,
          "partitioned": false,
          "bucketing": false,
          "bucketCount": 0,
          "description": "",
          "parentRefId": "190318cb-80be-4eb8-b311-2238441e1aa5",
          "structure_info": {
            "type": "STRUCT",
            "nextedColumn": true,
            "nestedColumnType": ""
          },
          "source": {
            "origin": "SOURCE_SYSTEM",
            "name": "NAMESPACE",
            "typeLength": 0,
            "type": "",
            "index": false
          },
          "fieldProperties": {
            "precision": 0,
            "scale": 0,
            "nullable": false,
            "autoIncrement": false,
            "primaryKey": true
          },
          "dataProperties": {
            "analysed": false,
            "additional": {
              "minValue": 0,
              "maxValue": 0,
              "whiteSpaceCount": 0,
              "highFrequencyCharData": [],
              "nullCount": 0,
              "distinctRecord": 0,
              "lengthUniform": false,
              "allNumeric": false
            }
          },
          "fields": [{
            "refId": "3c0466eb-10c4-4bf9-b7ac-a69262957098",
            "ordinal": 1,
            "name": "ID",
            "dataType": "STRING",
            "length": 0,
            "encrypted": false,
            "sorted": false,
            "partitioned": false,
            "bucketing": false,
            "bucketCount": 0,
            "description": "",
            "parentRefId": "58ed7e87-0670-4e6c-b39e-d843312dd88f",
            "source": {
              "origin": "SOURCE_SYSTEM",
              "name": "ID",
              "typeLength": 0,
              "type": "",
              "index": false
            },
            "fieldProperties": {
              "precision": 0,
              "scale": 0,
              "nullable": false,
              "autoIncrement": false,
              "primaryKey": true
            },
            "dataProperties": {
              "analysed": false,
              "additional": {
                "minValue": 0,
                "maxValue": 0,
                "whiteSpaceCount": 0,
                "highFrequencyCharData": [],
                "nullCount": 0,
                "distinctRecord": 0,
                "lengthUniform": false,
                "allNumeric": false
              }
            },
            "fields": [],
            "_links": {
              "self": {
                "href": "http://192.168.1.188:8000/core-system/application/table/column/3c0466eb-10c4-4bf9-b7ac-a69262957098"
              },
              "nested_level": {
                "href": "http://192.168.1.188:8000/core-system/application/table/column/3c0466eb-10c4-4bf9-b7ac-a69262957098/nested-level?level=true"
              }
            }
          },
            {
              "refId": "15f5964c-2040-4ee0-9a76-0857b7a78590",
              "ordinal": 2,
              "name": "TEXT",
              "dataType": "STRING",
              "length": 0,
              "encrypted": false,
              "sorted": false,
              "partitioned": false,
              "bucketing": false,
              "bucketCount": 0,
              "description": "",
              "parentRefId": "58ed7e87-0670-4e6c-b39e-d843312dd88f",
              "source": {
                "origin": "SOURCE_SYSTEM",
                "name": "TEXT",
                "typeLength": 0,
                "type": "",
                "index": false
              },
              "fieldProperties": {
                "precision": 0,
                "scale": 0,
                "nullable": false,
                "autoIncrement": false,
                "primaryKey": true
              },
              "dataProperties": {
                "analysed": false,
                "additional": {
                  "minValue": 0,
                  "maxValue": 0,
                  "whiteSpaceCount": 0,
                  "highFrequencyCharData": [],
                  "nullCount": 0,
                  "distinctRecord": 0,
                  "lengthUniform": false,
                  "allNumeric": false
                }
              },
              "fields": [],
              "_links": {
                "self": {
                  "href": "http://192.168.1.188:8000/core-system/application/table/column/15f5964c-2040-4ee0-9a76-0857b7a78590"
                },
                "nested_level": {
                  "href": "http://192.168.1.188:8000/core-system/application/table/column/15f5964c-2040-4ee0-9a76-0857b7a78590/nested-level?level=true"
                }
              }
            }
          ],
          "_links": {
            "self": {
              "href": "http://192.168.1.188:8000/core-system/application/table/column/58ed7e87-0670-4e6c-b39e-d843312dd88f"
            },
            "nested_level": {
              "href": "http://192.168.1.188:8000/core-system/application/table/column/58ed7e87-0670-4e6c-b39e-d843312dd88f/nested-level?level=true"
            }
          }
        },
        {
          "refId": "a7cf9907-37b0-4234-a8c3-1c9a68fe0b4b",
          "ordinal": 4,
          "name": "TITLE",
          "dataType": "STRING",
          "length": 0,
          "encrypted": false,
          "sorted": false,
          "partitioned": false,
          "bucketing": false,
          "bucketCount": 0,
          "description": "",
          "parentRefId": "190318cb-80be-4eb8-b311-2238441e1aa5",
          "source": {
            "origin": "SOURCE_SYSTEM",
            "name": "TITLE",
            "typeLength": 0,
            "type": "",
            "index": false
          },
          "fieldProperties": {
            "precision": 0,
            "scale": 0,
            "nullable": false,
            "autoIncrement": false,
            "primaryKey": true
          },
          "dataProperties": {
            "analysed": false,
            "additional": {
              "minValue": 0,
              "maxValue": 0,
              "whiteSpaceCount": 0,
              "highFrequencyCharData": [],
              "nullCount": 0,
              "distinctRecord": 0,
              "lengthUniform": false,
              "allNumeric": false
            }
          },
          "fields": [],
          "_links": {
            "self": {
              "href": "http://192.168.1.188:8000/core-system/application/table/column/a7cf9907-37b0-4234-a8c3-1c9a68fe0b4b"
            },
            "nested_level": {
              "href": "http://192.168.1.188:8000/core-system/application/table/column/a7cf9907-37b0-4234-a8c3-1c9a68fe0b4b/nested-level?level=true"
            }
          }
        }
      ],
      "_links": {
        "self": {
          "href": "http://192.168.1.188:8000/core-system/application/table/column/190318cb-80be-4eb8-b311-2238441e1aa5"
        },
        "nested_level": {
          "href": "http://192.168.1.188:8000/core-system/application/table/column/190318cb-80be-4eb8-b311-2238441e1aa5/nested-level?level=true"
        }
      }
    },
      {
        "refId": "58749734-6d17-41bf-ac64-798f8df590c6",
        "ordinal": 2,
        "name": "YEAR",
        "dataType": "STRING",
        "length": 0,
        "encrypted": false,
        "sorted": false,
        "partitioned": false,
        "bucketing": false,
        "bucketCount": 0,
        "description": "",
        "parentRefId": "9ca4618a-8663-4585-b4fb-6473b99ff5c9",
        "source": {
          "origin": "SOURCE_SYSTEM",
          "name": "YEAR",
          "typeLength": 0,
          "type": "",
          "index": false
        },
        "fieldProperties": {
          "precision": 0,
          "scale": 0,
          "nullable": false,
          "autoIncrement": false,
          "primaryKey": true
        },
        "dataProperties": {
          "analysed": false,
          "additional": {
            "minValue": 0,
            "maxValue": 0,
            "whiteSpaceCount": 0,
            "highFrequencyCharData": [],
            "nullCount": 0,
            "distinctRecord": 0,
            "lengthUniform": false,
            "allNumeric": false
          }
        },
        "fields": [],
        "_links": {
          "self": {
            "href": "http://192.168.1.188:8000/core-system/application/table/column/58749734-6d17-41bf-ac64-798f8df590c6"
          },
          "nested_level": {
            "href": "http://192.168.1.188:8000/core-system/application/table/column/58749734-6d17-41bf-ac64-798f8df590c6/nested-level?level=true"
          }
        }
      },
      {
        "refId": "f87b4999-e1c5-4a80-8478-a1d3f12fb3a7",
        "ordinal": 3,
        "name": "TEXT",
        "dataType": "STRING",
        "length": 0,
        "encrypted": false,
        "sorted": false,
        "partitioned": false,
        "bucketing": false,
        "bucketCount": 0,
        "description": "",
        "parentRefId": "9ca4618a-8663-4585-b4fb-6473b99ff5c9",
        "source": {
          "origin": "SOURCE_SYSTEM",
          "name": "TEXT",
          "typeLength": 0,
          "type": "",
          "index": false
        },
        "fieldProperties": {
          "precision": 0,
          "scale": 0,
          "nullable": false,
          "autoIncrement": false,
          "primaryKey": true
        },
        "dataProperties": {
          "analysed": false,
          "additional": {
            "minValue": 0,
            "maxValue": 0,
            "whiteSpaceCount": 0,
            "highFrequencyCharData": [],
            "nullCount": 0,
            "distinctRecord": 0,
            "lengthUniform": false,
            "allNumeric": false
          }
        },
        "fields": [],
        "_links": {
          "self": {
            "href": "http://192.168.1.188:8000/core-system/application/table/column/f87b4999-e1c5-4a80-8478-a1d3f12fb3a7"
          },
          "nested_level": {
            "href": "http://192.168.1.188:8000/core-system/application/table/column/f87b4999-e1c5-4a80-8478-a1d3f12fb3a7/nested-level?level=true"
          }
        }
      }
    ]
  };
  formattedTree: any =  {};
  dataChange = new BehaviorSubject<TodoItemNode[]>([]);

  get data(): TodoItemNode[] { return this.dataChange.value; }

  constructor() {
    this.treeFormat(this.TREE_DATA.fields);

  }

  treeFormat(fields): void{
    for (const field of fields) {

      if(field.fields.length){
        this.formattedTree[field.name] = this.childData(field.fields);
        //this.formattedTree[`${field.name}_info`] = field;
      } else {
        this.formattedTree[field.name] = null;
        //this.formattedTree[`${field.name}_info`] = field;
      }
      console.log(this.formattedTree);
    }
    this.initialize();
  }

  childData(fields): any{
    const obj = {};
    for (const field of fields) {
      if(field.fields.length){
        obj[field.name] = this.childData(field.fields);
        //obj[`${field.name}_info`] = field;
      } else {
        obj[field.name] = null;
        //obj[`${field.name}_info`] = field;
      }
    }
    return obj;
  }


  initialize(): void {
    // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
    //     file node as children.
    const data = this.buildFileTree(this.formattedTree, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `TodoItemNode`.
   */
  buildFileTree(obj: {[key: string]: any}, level: number): TodoItemNode[] {
    return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new TodoItemNode();
      node.item = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.item = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }

  /** Add an item to to-do list */
  insertItem(parent: TodoItemNode, name: string): void {
    if (parent.children) {
      parent.children.push({item: name} as TodoItemNode);
      this.dataChange.next(this.data);
    }
  }

  updateItem(node: TodoItemNode, name: string): void {
    node.item = name;
    this.dataChange.next(this.data);
  }
}

/**
 * @title Tree with checkboxes
 */

@Component({
  selector: 'app-json-accordion',
  templateUrl: './json-accordion.component.html',
  styleUrls: ['./json-accordion.component.scss'],
  providers: [ChecklistDatabase]
})
export class JsonAccordionComponent   {
  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap = new Map<TodoItemFlatNode, TodoItemNode>();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap = new Map<TodoItemNode, TodoItemFlatNode>();

  /** A selected parent node to be inserted */
  selectedParent: TodoItemFlatNode | null = null;

  /** The new item's name */
  newItemName = '';

  treeControl: FlatTreeControl<TodoItemFlatNode>;

  treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;

  dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;

  /** The selection for checklist */
  checklistSelection = new SelectionModel<TodoItemFlatNode>(true /* multiple */);

  constructor(private _database: ChecklistDatabase) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
        this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    _database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  getLevel = (node: TodoItemFlatNode) => node.level;

  isExpandable = (node: TodoItemFlatNode) => node.expandable;

  getChildren = (node: TodoItemNode): TodoItemNode[] => node.children;

  hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.item === '';

  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: TodoItemNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.item === node.item
        ? existingNode
        : new TodoItemFlatNode();
    flatNode.item = node.item;
    flatNode.level = level;
    flatNode.expandable = !!node.children?.length;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }

  /** Whether all the descendants of the node are selected. */
  descendantsAllSelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.length > 0 && descendants.every(child => {
      return this.checklistSelection.isSelected(child);
    });
    return descAllSelected;
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
        ? this.checklistSelection.select(...descendants)
        : this.checklistSelection.deselect(...descendants);

    // Force update for the parent
    descendants.forEach(child => this.checklistSelection.isSelected(child));
    this.checkAllParentsSelection(node);
  }

  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  todoLeafItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
  }

  /* Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: TodoItemFlatNode): void {
    let parent: TodoItemFlatNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  /** Check root node checked state and change it accordingly */
  checkRootNodeSelection(node: TodoItemFlatNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.length > 0 && descendants.every(child => {
      return this.checklistSelection.isSelected(child);
    });
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  /* Get the parent node of a node */
  getParentNode(node: TodoItemFlatNode): TodoItemFlatNode | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

  /** Select the category so we can insert the new item. */
  addNewItem(node: TodoItemFlatNode) {
    const parentNode = this.flatNodeMap.get(node);
    this._database.insertItem(parentNode!, '');
    this.treeControl.expand(node);
  }

  /** Save the node to database */
  saveNode(node: TodoItemFlatNode, itemValue: string) {
    const nestedNode = this.flatNodeMap.get(node);
    this._database.updateItem(nestedNode!, itemValue);
  }
}


