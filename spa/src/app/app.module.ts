import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './component/index/index.component';
import { PageoneComponent } from './component/pageone/pageone.component';
import { PagetwoComponent } from './component/pagetwo/pagetwo.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './rotes/routes.component';
import { ChildoneComponent } from './component/childone/childone.component';
import { ChildtwoComponent } from './component/childtwo/childtwo.component';
import { ChildthreeComponent } from './component/childthree/childthree.component';
import { PagethreeComponent } from './component/pagethree/pagethree.component';
import { authgaurds } from './gaurds/auth.gaurds';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PageoneComponent,
    PagetwoComponent,
    ChildoneComponent,
    ChildtwoComponent,
    ChildthreeComponent,
    PagethreeComponent,
    
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [authgaurds],
  bootstrap: [IndexComponent]
})
export class AppModule { }
