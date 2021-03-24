import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  id: number;
  imgUrl: string = 'https://i.imgur.com/M5RLD3M.jpg';
  user: any = {};
  loading: boolean = true;

  constructor(
    private aRoute: ActivatedRoute,
    private _usuarioService: UsuarioService
  ) {
    this.id = +this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.verUsuario();
  }

  verUsuario(): void {
    this._usuarioService.getUsuario(this.id).subscribe((data) => {
      this.user = data.data;
      this.loading = false;
    });
  }
}
