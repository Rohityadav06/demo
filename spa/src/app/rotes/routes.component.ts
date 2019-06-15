import { Routes } from '@angular/router';
import { PageoneComponent } from '../component/pageone/pageone.component';
import { PagetwoComponent } from '../component/pagetwo/pagetwo.component';
import { PagethreeComponent } from '../component/pagethree/pagethree.component';
import { ChildoneComponent } from '../component/childone/childone.component';
import { authgaurds } from '../gaurds/auth.gaurds';
export const appRoutes:Routes=[
{path:"page_one/:p_id/:p_name/:p_cost",
component:PageoneComponent,children:[{path:"child_one",component:ChildoneComponent,canActivate:[authgaurds]}],},
{path:"page_two/:p_id/:p_name/:p_cost",
component:PagetwoComponent},
{path:"page_three/:p_id/:p_name/:p_cost",component:PagethreeComponent}
]