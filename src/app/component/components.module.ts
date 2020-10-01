import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        TopbarComponent,

    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
    ],
    exports: [
        TopbarComponent,

    ]
})
export class ComponentsModule { }