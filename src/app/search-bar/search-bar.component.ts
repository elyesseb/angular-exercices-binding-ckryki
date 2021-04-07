import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { DataService } from '../data.service';

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent implements OnInit {
  data = [];
  // @Output()
  // new EventEmitter
  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.data = this.dataService.getUsersData();
  }

}
