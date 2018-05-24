import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls: []
})
export class HeaderComponent{
    @Output() linkClicked = new EventEmitter<string>()

    onClick(link: string){
        console.log(link);
        this.linkClicked.emit(link);
    }
}