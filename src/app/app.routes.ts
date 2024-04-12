import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
    {path: "", pathMatch: "full", component: HomeComponent},
    {path: "contact-me", component: ContactComponent},
    {path: "projects", component: ProjectsComponent}
];
