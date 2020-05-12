import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  @Input("appHighlighted") newColor: string;

  constructor( private el:ElementRef ) {}

  @HostListener('mouseenter') hover() {
    //this.el.nativeElement.style.backgroundColor = "yellow";
    this.change( this.newColor || 'yellow' );
  }

  @HostListener('mouseleave') notHover() {
    //this.el.nativeElement.style.backgroundColor = "white";
    this.change( null );
  }

  private change( color:string ){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
