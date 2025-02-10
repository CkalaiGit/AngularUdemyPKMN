import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[pkmnBorderCard]',
  standalone: true
})
export class BorderCardDirective {

  constructor(private el : ElementRef) {
    this.setHeight(210);
    this.setBorder('#f5f5f5')
  }

  @Input('pkmnBorderCard') borderColor!: string

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder( this.borderColor ||'#009688');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5')
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = ` solid 3px ${color}`;
  }

}
