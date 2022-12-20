import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../servicios/firebase.service';

@Component({
  selector: 'app-form-pelicula',
  templateUrl: './form-pelicula.component.html',
  styleUrls: ['./form-pelicula.component.css'],
})
export class FormPeliculaComponent implements OnInit {
  formPelicula = this.fb.group({
    titulo: ['', Validators.required],
    director: [''],
    genero: [''],
    duracion: [0],
    year: [0],
    publico: [''],
  });
  documentId: string = '';
  pelicula: any;

  constructor(
    private fb: FormBuilder,
    private ruta: ActivatedRoute,
    private fire: FirebaseService
  ) {}

  ngOnInit(): void {
    this.documentId = this.ruta.snapshot.paramMap.get('idPelicula')!;
    this.fire.getOne('peliculas', this.documentId).subscribe((resp: any) => { 
      this.formPelicula.setValue(resp.payload.data() );
    });
  }
}
