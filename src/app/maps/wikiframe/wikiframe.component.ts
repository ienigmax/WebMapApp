import { Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-wikiframe',
  templateUrl: './wikiframe.component.html',
  styleUrls: ['./wikiframe.component.scss'],
    providers: []
})
export class WikiframeComponent implements OnInit {

    @Input()
    label: string;

    public url: any;

    constructor() {}

    ngOnInit() {
       const url = `https://en.m.wikipedia.org/wiki/${this.label}`;
       this.url = (url);
    }

    ngOnChanges(changes: SimpleChanges) {
        const url = `https://en.m.wikipedia.org/wiki/${this.label}`;
        this.url = (url);
    }
}
