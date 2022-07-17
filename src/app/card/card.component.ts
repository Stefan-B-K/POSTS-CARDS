import { Component, Input } from '@angular/core';
import { Post } from "../Post";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() post!: Post

  get date () {
    const date = new Date(this.post.date)
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString().slice(0, -3)
  }
}
