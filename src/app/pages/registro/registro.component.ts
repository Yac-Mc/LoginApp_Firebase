import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor(private auth: AuthService) { }

  ngOnInit() {

    }

  onSubmit(form: NgForm) {

    if (form.invalid) { return; }

    this.auth.nuevoUsuario(this.usuario).subscribe( response => {
      console.log(response);
    }, (err) => {
      console.log(err.error.error.message);
    }
    );
  }


}
