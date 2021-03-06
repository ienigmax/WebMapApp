import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { MapsRoutingModule } from './maps-routing.module';
import { MapsComponent } from './maps.component';

import {InfoWindowComponent} from '@app/maps/info-window/info-window.component';
import {MapsItemComponent} from '@app/maps/maps-item/maps-item.component';
import {AgmCoreModule} from '@agm/core';
import {SharedPipesModule} from '../pipe/pipe.module';
import { WikiframeComponent } from './wikiframe/wikiframe.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        CoreModule,
        SharedModule,
        MapsRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDrG4pglHSdU9h7DP1-Z7eK3uPKvTMQqas'       // Change to another, for testing purposes only
        }),
        SharedPipesModule,
    ],
    declarations: [
        MapsComponent,
        InfoWindowComponent,
        MapsItemComponent,
        WikiframeComponent
    ],
    providers: []
})
export class MapsModule { }
