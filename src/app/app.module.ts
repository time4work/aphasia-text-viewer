import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { TextViewerModule } from './text-viewer/text-viewer.module';

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        NavBarComponent
    ],
    imports: [
        BrowserModule,
        TextViewerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
