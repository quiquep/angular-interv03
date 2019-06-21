import { Component, Input } from "@angular/core";

@Component({
  selector: "app-fruits",
  templateUrl: "./fruits.component.html",
  styleUrls: ["./fruits.component.css"]
})
export class Fruits {
  @Input() fruits: Array<String>;

  public moveUp(e) {
    let index = this.fruits.indexOf(e);
    if (index - 1 < 0) {
      return;
    }
    this.fruits.splice(index - 1, 0, this.fruits.splice(index, 1)[0]);
  }

  public moveDown(e) {
    let index = this.fruits.indexOf(e);
    if (index + 1 > this.fruits.length) {
      return;
    }
    this.fruits.splice(index + 1, 0, this.fruits.splice(index, 1)[0]);
  }
}
