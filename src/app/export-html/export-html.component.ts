import { Component, OnInit } from '@angular/core';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-export-html',
  templateUrl: './export-html.component.html',
  styleUrls: ['./export-html.component.scss']
})
export class ExportHtmlComponent implements OnInit {
  public json = [
    {

      'context': 'System',

      'category': 'Processing',

      'eventType': 'Jobs',

      'action': 'Status',

      'auditMessage': 'Execution of Job \'AUDIT - 1628489149613\' scheduled by UNKNOWN (UNKNOWN) started',

      'auditTime': '2021-08-09 11:36:04',

    },

    {

      'context': 'System',

      'category': 'Management',

      'eventType': 'Audit',

      'action': 'Export',

      'auditMessage': 'User superadmin (superadmin@p360.com) exported the audit events for date range 2021-07-10 - 2021-08-09 as csv',

      'auditTime': '2021-08-09 11:35:54'
    }];
  constructor() { }

  ngOnInit(): void {
  }

  // Function to download data to a file
  download(): void {
    var table = document.createElement('tbody');
    for (var i = 0; i < this.json.length; i++) {
      var row = document.createElement('tr');
      Object.keys(this.json[i]).forEach((value, index, array) => {
        row.appendChild(document.createElement('td'));
        row.cells[index].appendChild(document.createTextNode(this.json[i][value]));
      });
      table.appendChild(row);
    }
    const convertString = table.toString();
    const htlm = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Audit Report</title>
    <!-- Favicon -->
    <link rel="shortcut icon" href="assets/images/logo/favicon.png">
    <!-- page css -->
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
   <link rel="stylesheet" href="https://cdn.datatables.net/1.10.25/css/dataTables.bootstrap4.min.css">
</head>

<body>
    <div class="app">
        <div class="layout">
            <!-- Header START -->
            <div class="header">
                <div class="logo logo-dark">
                    <a href="index.html">
                        <img src="https://platform3solutions.com/wp-content/uploads/2018/12/platform-3-logo-retina.png" alt="Logo" class="p-3" width="100px">
                    </a>
                </div>
            </div>
            <!-- Header END -->
            <!-- Page Container START -->
            <div class="page-container">
                <!-- Content Wrapper START -->
                <div class="main-content">
                    <div class="card">
                        <div class="card-body">
                            <h4>Audit Report</h4>
                            <div class="m-t-25">
                             <table id="data-table" class="table table-striped table-bordered" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th>Context</th>
                                            <th>Category</th>
                                            <th>EventType</th>
                                            <th>Action</th>
                                            <th>Audit_Message</th>
                                            <th>Audit_Time</th>
                                        </tr>
                                    </thead>
                                    ${table.outerHTML}
                            </div>
                 </div>
                <!-- Content Wrapper END -->

                <!-- Footer START -->
                <footer class="footer">
                    <div class="footer-content">
                        <p class="m-b-0">This report is system generated.</p>
                    </div>
                </footer>
                <!-- Footer END -->
            </div>
        </div>
    </div>
    

    <!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.10.25/js/dataTables.bootstrap4.min.js"></script>
   <script>
   $(document).ready(function() {
    $('#data-table').DataTable();
} );
</script>

</body>

</html>`;
    const file = new Blob([htlm], {type: 'text/html'});
    saveAs(file, 'audit_report.html');
  }

}
