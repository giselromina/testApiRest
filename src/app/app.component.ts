
import { Component, OnInit, ViewChildren } from '@angular/core';
import {TestService} from './test.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
constructor(private _testService : TestService) {}
dataFromService;
ngOnInit() {

   this.getDataFromService();

}
getDataFromService() {
this._testService.getCharacter().subscribe(
  data => this.dataFromService = data
);
}


}
