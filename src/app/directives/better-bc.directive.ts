import { Directive, ElementRef, HostListener, OnInit, Renderer2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterBc]'
})
// export class BetterBcDirective implements OnInit{

//   constructor(private elRef:ElementRef, private renderer:Renderer2) { }

//   ngOnInit(): void {
//   }

//   @HostListener('mouseenter') mouseOver(){
//     this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'yellow');
//     this.renderer.setStyle(this.elRef.nativeElement, 'cursor', 'pointer');
//   }

//   @HostListener('mouseleave') mouseOut(){
//     this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
//   }

// }

export class BetterBcDirective implements OnInit{

  @Input() defaultColor='transparent';
  @Input() highlightColor='azure';

  @HostBinding('style.backgroundColor') bColor?:string;
  @HostBinding('style.cursor') cursor?:string;

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
    this.bColor=this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver(){
    this.bColor=this.highlightColor;
    this.cursor='pointer';
  }

  @HostListener('mouseleave') mouseOut(){
    this.bColor=this.defaultColor;
  }

}
