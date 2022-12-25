import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input()
  title = 'title init';

  @Output()
  courseSelected = new EventEmitter<string>();

  onCourseViewed() {
    console.log('onCourseViewed...');
    this.courseSelected.emit(this.title);
  }
}
