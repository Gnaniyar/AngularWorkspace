import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homerx-report',
  templateUrl: './homerx-report.component.html',
  styleUrls: ['./homerx-report.component.css']
})
export class HomerxReportComponent implements OnInit {

    activeReport = '../../assets/dashboardimage1.jpg';
    homerxreports: any[] = [
    {
      index: 1,
      reportHeader: 'Report One',
      reportText: 'This is the dashboard of our customers service and our successful projects of previous financial year 2018-19.',
      reportImage: '../../assets/dashboardimage1.jpg',
      state: 'active'
    },
    {
      index: 2,
      reportHeader: 'Report Two',
      reportText: 'This is the dashboard of our customers service and our successful projects of previous financial year 2018-19.',
      reportImage: '../../assets/dashboardimage2.png',
      state: 'deactive'
    },
    {
      index: 3,
      reportHeader: 'Report Three',
      reportText: 'This is the dashboard of our customers service and our successful projects of previous financial year 2018-19.',
      reportImage: '../../assets/dashboardimage1.jpg',
      state: 'deactive'
    },
    {
      index: 4,
      reportHeader: 'Report Four',
      reportText: 'This is the dashboard of our customers service and our successful projects of previous financial year 2018-19.',
      reportImage: '../../assets/dashboardimage2.png',
      state: 'deactive'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

  selectReport(event: any, report: any) {
    this.activeReport = report.reportImage;
    this.homerxreports.forEach((homeReport) => {
      if (homeReport.index === report.index) {
        homeReport.state = 'active';
      } else {
        homeReport.state = 'deactive';
      }
    });
  }

}
