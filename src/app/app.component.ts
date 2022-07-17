import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/images/tree.jpg',
      userName: 'nature',
      content: 'Found this awesome pine tree during mountain hiking.',
      date: '01 Jan 2022 11:09'
    },
    {
      title: 'Flat Mount',
      imageUrl: 'assets/images/mountain.jpg',
      userName: 'mountaineer',
      content: 'Gazed upon that flat mountain during para-gliding.',
      date: '12 Jun 2022 20:43'
    },
    {
      title: 'Bike-dozer',
      imageUrl: 'assets/images/biking.jpg',
      userName: 'biker',
      content: 'Some monster for the rough terrain.',
      date: '27 Jun 2022 17:12'
    }
  ]
}
