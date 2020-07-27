import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { configureEditor } from '../../utils/grapesjs/configure-editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnDestroy {

  private editor: any;

  constructor() { }

  ngOnInit(): void {
    this.editor = configureEditor();

    (window as any).editor = this.editor;
  }

  ngOnDestroy(): void {
    // this.editor.destroy();
  }

}
