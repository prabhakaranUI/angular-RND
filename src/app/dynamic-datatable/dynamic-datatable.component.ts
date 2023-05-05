import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export class Columns {
    columnDef: string;
    header: string;
    cell: any;
}

const tableData = [{
    'col1': 'Rock: Nerf paper, scissors is fine.',
    'col2': 'miguno'
}, {
    'col1': 'Works as intended.  Terran is IMBA.',
    'col2': 'BlizzardCS'
}, {
    'col1': 'Rock: Nerf paper, scissors is fine.',
    'col2': 'miguno'
}, {
    'col6': 'Rock: Nerf paper, scissors is fine.',
}, {
    'col5': 'Works as intended.  Terran is IMBA.',
    'col2': 'BlizzardCS'
}, {
    'col1': 'Rock: Nerf paper, scissors is fine.',
    'col2': 'miguno'
}, {
    'col1': 'Works as intended.  Terran is IMBA.',
    'col3': 'BlizzardCS',
    'col2': 'Works as intended.  Terran is IMBA.',
    'col4': 'BlizzardCS'
}];

@Component({
    selector: 'app-dynamic-datatable',
    templateUrl: './dynamic-datatable.component.html',
    styleUrls: ['./dynamic-datatable.component.scss']
})
export class DynamicDatatableComponent implements OnInit, AfterViewInit {

    columns: Columns[] = [];
    displayedColumns: any[] = [];
    dataSource: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor() {
        this.findUniqueKeys();
        this.dataSource = new MatTableDataSource<any>(tableData);
    }

    ngOnInit(): void {

    }

    findUniqueKeys(): void {
        let columnDetails: any = {};
        const uniqueColumns = new Set();

        tableData.map(item => Object.keys(item).map(key => {
            uniqueColumns.add(key);
        }));
        this.displayedColumns = Array.from(uniqueColumns);

        for (const fromElement of Array.from(uniqueColumns)) {
            columnDetails = {};
            columnDetails.columnDef = fromElement;
            columnDetails.header = fromElement;
            // @ts-ignore
            columnDetails.cell = (element: any) => `${element[fromElement]}`;
            this.columns.push(columnDetails);
        }
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event): void {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

}
