
import { Component, OnInit, ViewChildren } from '@angular/core';
import { TestService } from './test.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _testService: TestService) { }
  dataForTable;
  tableData;
  title;
  ngOnInit() {
    this.getDataFromService();
  }

  getDataFromService() {
    let token;
    let dataFromService;
    this._testService.getToken().subscribe(
      (data: any) => {
        token = data.access_token;
        this._testService.getData(token).subscribe((res: any) => {
          dataFromService = res;
          this.paseDatatoTable(dataFromService.quotes);
        });
      }
    );
  }

  paseDatatoTable(data) {
    const objectData = this._testService.paseDatatoTable(data);
    this.title = objectData.title;
    this.tableData = objectData.tableData;

  }

}
