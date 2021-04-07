import { Component, OnInit, Input } from "@angular/core";
import { DataService } from '../data.service';

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.css"]
})
export class DataTableComponent implements OnInit {
  data = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.data = this.dataService.getUsersData();
  }
}
