import { Component, OnInit, ElementRef, ComponentFactoryResolver, ApplicationRef, Injector, NgModule, EmbeddedViewRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  innerHtml: string;

  clickFunctions = {
    'say-hello': () => alert('Hello World!!!!'),
    'say-goodbye': () => alert('Goodbye World!!!!'),
    'say-some': () => alert('lorem ipsum sit amet.....')
  };

  constructor(
    private cfr: ComponentFactoryResolver,
    private host: ElementRef<HTMLElement>,
    private appRef: ApplicationRef,
    private injector: Injector
    // private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    // const editor = configureEditor('none');
    // this.innerHtml = parseMustache(editor.getHtml(), this);

    // this.host.nativeElement.innerHTML = this.innerHtml;

    // const clickables = this.host.nativeElement.querySelectorAll('[data-onclick]');
    // clickables.forEach(clickable => {
    //   this.renderer.listen(clickable, 'click', this.clickFunctions[clickable.getAttribute('data-onclick')]);
    // });
    const template: string = localStorage.getItem('gjs-html').replace(/ng-event-(\w+)/g, `($1)`);
    @Component({
      selector: 'grapesjs-component',
      template,
    }) class GrapesJsComponent {
      sayHello(): void {
        alert('Hello!!!');
      }

      sayGoodbye(): void {
        alert('Say Goodbye!!!');
      }
    }

    @NgModule({
      declarations: [ GrapesJsComponent ],
      imports: [ CommonModule, MDBBootstrapModule ]
    }) class GrapesJsModule {}
    const factory = this.cfr.resolveComponentFactory(GrapesJsComponent);
    const component = factory.create(this.injector);
    this.appRef.attachView(component.hostView);
    const dom = (component.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    this.host.nativeElement.appendChild(dom);
  }

}
