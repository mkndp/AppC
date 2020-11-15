import { Component } from '@angular/core';

@Component({
    selector: 'f-header',
    template: '<ng-content></ng-content>'
})
export class FHeader {}

@Component({
    selector: 'f-footer',
    template: '<ng-content></ng-content>'
})
export class FFooter {}
