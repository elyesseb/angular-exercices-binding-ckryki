import { Component, OnInit, Input } from "@angular/core";
import { users } from "../../users-data"

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.css"]
})
export class DataTableComponent implements OnInit {
  data = [];
  users = users;
  constructor() {}

  ngOnInit() {
    return this.users;
  }
}
