import { NgModule } from '@angular/core';
import { SafePipe } from './pipe.component';
@NgModule({
    declarations: [
        SafePipe
    ],
    exports: [
        SafePipe
    ]
})
export class SharedPipesModule {
}