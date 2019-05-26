import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { EntryComponent } from './components/entry/entry.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        BodyComponent,
        EntryComponent
    ],
    providers: [
        //services
    ],
    exports: [
        EntryComponent
    ]
})
export class TextViewerModule { }
