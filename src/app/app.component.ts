import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  collapsedCallCount: number = 0;
  expandedCallCount: number = 0;

  onCollapse() {
    this.collapsedCallCount++;
  }

  onExpand() {
    this.expandedCallCount++;
  }
}
