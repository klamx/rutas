import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css'],
})
export class ListUsuariosComponent implements OnInit {
  listUsuarios: any[] = [];
  loading: boolean = false;

  constructor(private _usuarioSerice: UsuarioService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.loading = true;
    this._usuarioSerice.getUsuarios().subscribe((data) => {
      // console.log(data);
      this.listUsuarios = data.data;
      this.loading = false;
    });
  }
}
