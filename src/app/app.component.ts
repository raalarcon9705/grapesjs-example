import { Component, ComponentFactoryResolver, ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'learning-apollo-client';

  @ViewChild('container', { read: ViewContainerRef, static: false }) entry: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {}

  ngAfterViewInit(): void {

    // CREAR LA CLASE DEL COMPONENTE
    @Component({
      selector: 'custom-component',
      template: '<h1>Hello Christ!!!</h1>'
    }) class CustomComponent {}

    const factory = this.cfr.resolveComponentFactory(CustomComponent);
    this.entry.createComponent(factory);
  }
}
