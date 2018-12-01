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


@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        CoreModule,
        SharedModule,
        MapsRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCz3KPWoJ8ZSVzOqEVWMh5vZun_ZU3MqSU'
        }),
    ],
    declarations: [
        MapsComponent,
        InfoWindowComponent,
        MapsItemComponent
    ],
    providers: []
})
export class MapsModule { }
