import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent {
  titleFromFirst = 'My Title from the First';

  onCourseSelected(title: string) {
    console.log('onCourseSelected', title);
  }
}
