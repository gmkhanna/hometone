import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FrontPageComponent } from './front-page/front-page.component';
import { DetailComponent } from './detail/detail.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { EditContractorComponent } from './edit-contractor/edit-contractor.component';


const appRoutes: Routes = [
  {
    path: "",
    component: FrontPageComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contractors/:id",
    component: DetailComponent
  },
  {
    path: "admin",
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
