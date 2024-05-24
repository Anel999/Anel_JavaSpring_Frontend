import { Routes } from '@angular/router';
import { TareaListComponent } from './components/tarea-list/tarea-list.component';
import { TareaFormComponent } from './components/tarea-form/tarea-form.component';

export const routes: Routes = [
// El pathMatch es PARA QUE DEBA COINCIDIR EXACTAMENTE TODA LA RUTA 
{path:'',redirectTo:'/tareas', pathMatch:'full' },
{path:'tareas/new',component:TareaListComponent},
{path:'tareas',component:TareaFormComponent},
{path:'tareas/:id/edit',component:TareaFormComponent}

];
