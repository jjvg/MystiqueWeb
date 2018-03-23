import { Component, OnInit } from '@angular/core';
import { Ng4TwitterTimelineService } from 'ng4-twitter-timeline/lib/index';

@Component({
  selector: 'app-twittertimeline',
  templateUrl: './twittertimeline.component.html',
  styleUrls: ['./twittertimeline.component.css']
})
export class TwittertimelineComponent implements OnInit {

  constructor(private ng4TwitterTimelineService: Ng4TwitterTimelineService) { }

  ngOnInit() {
  }

}
