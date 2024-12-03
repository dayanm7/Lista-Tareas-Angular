import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  private localStoreKay = 'ListaTareas';

  getTareas(): string[] {
    return JSON.parse(localStorage.getItem(this.localStoreKay) as string) || [];
  }

  agregarTareas(tarea: string) {
    const tareas = this.getTareas();
    tareas.push(tarea);
    localStorage.setItem(this.localStoreKay, JSON.stringify(tareas));
  }

  eliminarTarea(index: number) {
    const tareas = this.getTareas();
    tareas.splice(index, 1);
    localStorage.setItem(this.localStoreKay, JSON.stringify(tareas));
  }

  constructor() {}
}
