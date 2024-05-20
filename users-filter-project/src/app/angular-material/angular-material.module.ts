import {NgModule} from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from '@angular/material/select';


@NgModule({
    declarations: [],
    imports: [
        MatButtonModule,
        MatListModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        
    ],
    exports: [
        MatButtonModule,
        MatListModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        
    ]
})

export class AngularMaterialModule {}