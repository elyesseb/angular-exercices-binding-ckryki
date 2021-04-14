import { Component, OnInit, VERSION } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  yourName;

  userDataRaw = [];
  userData = [];
  paramFilter = "first";
  searchHistory = "";

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.userData = this.userDataRaw = this.dataService.getUsersData();
  }

  filterData(searchString: string | null, byParam: string | null) {
    searchString = searchString == null ? this.searchHistory : searchString;
    this.searchHistory = searchString;

    byParam = byParam || this.paramFilter;
    this.paramFilter = byParam;

    if (searchString == "") {
      this.userData = [...this.userDataRaw];
    } else {
      this.userData = this.userDataRaw.filter(x =>
        x.name[byParam].toLowerCase().includes(searchString.toLowerCase())
      );

      // user { name : 'jey', age : '29'}
      // user['age'] ==> 29
      // user['name'] ==> 'jey'
      // user.name ==> 'jey'
    }
  }
}
