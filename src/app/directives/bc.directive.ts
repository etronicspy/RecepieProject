import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appBc]'
})
export class BcDirective implements OnInit {
    constructor(private elementRef:ElementRef){

    }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor='red';
    }
    
}