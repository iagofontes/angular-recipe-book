import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent {

    collapsed=true;
    @Output() changeFrame = new EventEmitter<string>();

    onChangeFrame(path: string) {
        this.changeFrame.emit(path);
    }

}