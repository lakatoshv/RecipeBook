import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input('default') defaultColor: string = 'transparent';
  @Input('color') highlightColor: string;
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(
    private _elRef: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // this._renderer.setStyle(this._elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this._renderer.setStyle(this._elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
