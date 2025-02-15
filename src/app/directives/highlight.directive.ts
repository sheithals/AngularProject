import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[besantHighlight]'
})
export class HighlightDirective {

  constructor() { }

  // @HostBinding('class.btn') backgroundColor: boolean = false
  // @HostBinding('style.color') backgroundColor: string = "blue"
  @HostBinding('style.backgroundColor') backgroundColor: string = ""
  @HostBinding('class.highlightELe') highlightELe: boolean = false

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = "lightblue"
    this.highlightELe = true
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlightELe = false
    this.backgroundColor = "orange"
  }

}
