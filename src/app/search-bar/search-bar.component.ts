import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  onChangeInput(event: any) {
    console.log(event.target.value);
    this.searchEvent.emit(event.target.value);
  }
}
