import { Component, ComponentFactoryResolver, ViewContainerRef, ViewChild, AfterViewInit, ApplicationRef, Injector, EmbeddedViewRef, ElementRef, NgModule, NgModuleFactory } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'learning-apollo-client';

  @ViewChild('container', { read: ViewContainerRef, static: false }) entry: ViewContainerRef;
  @ViewChild('block') block: ElementRef<HTMLDivElement>;

  constructor(
    private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  ngAfterViewInit(): void {

    // CREAR LA CLASE DEL COMPONENTE
    // @Component({
    //   selector: 'custom-component',
    //   template: `
    //   <button mdbBtn color="danger">Using MDB directive ({{ text }})</button>
    //   <button class="btn btn-primary">Hello Christ!!!</button>
    //   <div *ngFor="let i of [1, 2, 3]">{{ i }}</div>
    //   `
    // }) class CustomComponent {
    //   text = 'probando';
    // }

    // @NgModule({
    //   declarations: [ CustomComponent ],
    //   imports: [ CommonModule, MDBBootstrapModule ]
    // }) class CustomModule {}

    // const factory = this.cfr.resolveComponentFactory(CustomComponent);
    // // const component = this.entry.createComponent(factory);
    // const component = factory.create(this.injector);
    // this.appRef.attachView(component.hostView);
    // const dom = (component.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    // this.block.nativeElement.appendChild(dom);
  }
}
