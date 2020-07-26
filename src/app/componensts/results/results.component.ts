import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { configureEditor } from 'src/app/utils/configure-editor';
import { parseMustache } from 'src/app/utils/mustache-parser';

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
    private host: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    const editor = configureEditor('none');
    this.innerHtml = parseMustache(editor.getHtml(), this);

    this.host.nativeElement.innerHTML = this.innerHtml;

    const clickables = this.host.nativeElement.querySelectorAll('[data-onclick]');
    clickables.forEach(clickable => {
      this.renderer.listen(clickable, 'click', this.clickFunctions[clickable.getAttribute('data-onclick')]);
    });
  }

}
