import { Component, OnInit, AfterViewInit } from '@angular/core';
import {CdkDragStart} from '@angular/cdk/drag-drop';
declare var LeaderLine: any;

export class LeaderLinePath {
  source: string;
  target: string;
}
@Component({
  selector: 'app-topology',
  templateUrl: './topology.component.html',
  styleUrls: ['./topology.component.scss']
})
export class TopologyComponent implements OnInit, AfterViewInit {
    res = {
      "data": {
        "topology": {
          "nodes": [
            {
              "id": "VXNlcg==.0",
              "name": "User",
              "type": "USER",
              "isReal": false,
              "fxWidth": 0
            },
            {
              "id": "YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1",
              "name": "agent::recommendation",
              "type": "Flask",
              "isReal": true,
              "fxWidth": 0
            },
            {
              "id": "YWdlbnQ6OnNvbmdz.1",
              "name": "agent::songs",
              "type": "Tomcat",
              "isReal": true,
              "fxWidth": 0
            },
            {
              "id": "YWdlbnQ6OmdhdGV3YXk=.1",
              "name": "agent::gateway",
              "type": "spring-webflux",
              "isReal": true,
              "fxWidth": 0
            },
            {
              "id": "bG9jYWxob3N0Oi0x.0",
              "name": "localhost:-1",
              "type": "H2",
              "isReal": false,
              "fxWidth": 0
            },
            {
              "id": "YWdlbnQ6OmFwcA==.1",
              "name": "agent::app",
              "type": "Express",
              "isReal": true,
              "fxWidth": 0
            },
            {
              "id": "YWdlbnQ6OnVp.1",
              "name": "agent::ui",
              "type": null,
              "isReal": true,
              "fxWidth": 0
            }
          ],
          "calls": [
            {
              "id": "YWdlbnQ6OmFwcA==.1-YWdlbnQ6OmdhdGV3YXk=.1",
              "source": "YWdlbnQ6OmFwcA==.1",
              "detectPoints": [
                "CLIENT",
                "SERVER"
              ],
              "target": "YWdlbnQ6OmdhdGV3YXk=.1"
            },
            {
              "id": "YWdlbnQ6OmdhdGV3YXk=.1-YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1",
              "source": "YWdlbnQ6OmdhdGV3YXk=.1",
              "detectPoints": [
                "CLIENT",
                "SERVER"
              ],
              "target": "YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1"
            },
            {
              "id": "YWdlbnQ6OmdhdGV3YXk=.1-YWdlbnQ6OnNvbmdz.1",
              "source": "YWdlbnQ6OmdhdGV3YXk=.1",
              "detectPoints": [
                "CLIENT",
                "SERVER"
              ],
              "target": "YWdlbnQ6OnNvbmdz.1"
            },
            {
              "id": "YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1-YWdlbnQ6OnNvbmdz.1",
              "source": "YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1",
              "detectPoints": [
                "CLIENT",
                "SERVER"
              ],
              "target": "YWdlbnQ6OnNvbmdz.1"
            },
            {
              "id": "YWdlbnQ6OnNvbmdz.1-bG9jYWxob3N0Oi0x.0",
              "source": "YWdlbnQ6OnNvbmdz.1",
              "detectPoints": [
                "CLIENT"
              ],
              "target": "bG9jYWxob3N0Oi0x.0"
            },
            {
              "id": "YWdlbnQ6OnVp.1-YWdlbnQ6OmFwcA==.1",
              "source": "YWdlbnQ6OnVp.1",
              "detectPoints": [
                "CLIENT",
                "SERVER"
              ],
              "target": "YWdlbnQ6OmFwcA==.1"
            },
            {
              "id": "VXNlcg==.0-YWdlbnQ6OmFwcA==.1",
              "source": "VXNlcg==.0",
              "detectPoints": [
                "SERVER"
              ],
              "target": "YWdlbnQ6OmFwcA==.1"
            }
          ]
        }
      }
    };
    leaderLinePath: LeaderLinePath[] = [];
  constructor() {
    this.setFxWith();
    for (const call of this.res.data.topology.calls) {
       this.leaderLinePath.push({source: call.source, target: call.target});
    }
  }

  ngOnInit(): void {

  }
  setFxWith(): void{
    let count = 1;
    for (const node of this.res.data.topology.nodes) {
      count === 1 ?  node.fxWidth = 100 :  node.fxWidth = 50;
      count < 3 ?  count++ : count = 1;
    }
  }

  ngAfterViewInit(): void {
    for (const pathElement of this.leaderLinePath) {
      const source = document.querySelector(`[id="${pathElement.source}"]`);
      const target = document.querySelector( `[id="${pathElement.target}"]`);
      const leaderLine = new LeaderLine(source, target, {
        dash: {animation: true},
        size: 3,
        color: '#2792ce',
        endPlug: 'behind'
      });
    }
  }

}
