import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    starWidth : number;
    
    @Input() 
    rating: number = 4;

    @Output()
    notification : EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges() : void {
        this.starWidth = this.rating *  75 / 5;
    }

    onStarClick() : void{
        console.log(`Rating is ${this.rating}`);
        this.notification.emit(`Rating is ${this.rating}`);
    }
}