
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
  title
  ngOnInit() {
    this.getDataFromService();
  }

  getDataFromService() {
    debugger
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

    this.title = data[0].fields.M_NAME.v;
    const dataForTable = data.map(e => ({
      title : e.fields.M_NAME.v,
      dataR : e.fields.LVAL_NORM
      }
      ));
this.tableData = dataForTable[0].dataR;

  }

}
