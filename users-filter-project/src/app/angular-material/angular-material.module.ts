import {NgModule} from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';




@NgModule({
    declarations: [],
    imports: [
        MatButtonModule,
        MatListModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        MatButtonModule,
        MatListModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule
    ]
})

export class AngularMaterialModule {}