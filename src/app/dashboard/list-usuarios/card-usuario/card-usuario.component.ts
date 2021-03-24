import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css'],
})
export class CardUsuarioComponent implements OnInit {
  @Input() user: any;
  imgUrl: string = 'https://i.imgur.com/M5RLD3M.jpg';
  name: string;
  email: string;
  id: number;

  constructor() {}

  ngOnInit(): void {
    this.name = this.user.name;
    this.email = this.user.email;
    this.id = this.user.id;
  }
}
