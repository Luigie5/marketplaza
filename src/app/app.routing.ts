import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmpleadoComponent} from './empleado/empleado.component';
import {AddEmpleadoComponent} from './empleado/addempleado.component';
import {VacioComponent} from './vacio/vacio.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {CarroComponent} from './carro/carro.component';
import {ProductoComponent} from './producto/producto.component';

const appRoutes: Routes=[
    {path: "", component:HomeComponent},
    {path: "producto/:id", component:ProductoComponent},
    {path: "empleados", component:EmpleadoComponent},
    {path: "addempleados", component:AddEmpleadoComponent},
    //{path: "vacio", component:VacioComponent},
    {path: "login", component:LoginComponent},
    {path: "carro", component:CarroComponent},
    {path: "home", component:HomeComponent},
    {path: "**", component:VacioComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);