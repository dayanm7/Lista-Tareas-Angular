import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from './serices/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ListaTareasApp';
  
  listaTareas:string[]=[];
  nuevaTarea:string = '';
  
  private _tareaService = inject(TareasService);
  
  ngOnInit(): void {
    this.listaTareas = this._tareaService.getTareas();
  }
  
  eliminarTarea(id:number){
    this._tareaService.eliminarTarea(id);
    this.listaTareas = this._tareaService.getTareas();
  }
  
  agregarTarea() {
    this._tareaService.agregarTareas(this.nuevaTarea);
    this.nuevaTarea = '';
    this.listaTareas = this._tareaService.getTareas();
  }
}
