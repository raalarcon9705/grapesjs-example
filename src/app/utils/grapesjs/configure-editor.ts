import grapesjs from 'grapesjs';
import { mdb } from './mdb';
import { types } from './common-traits';
export function configureEditor(gjs = '#gjs'): any {
  const editor = grapesjs.init({
    container: gjs,
    fromElement: true,
    canvas: {
      styles: [
        'https://use.fontawesome.com/releases/v5.8.2/css/all.css',
        'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css',
        'assets/styles/components.css'
      ],
      scripts: [
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/js/mdb.min.js'
      ],
    },
    storageManager: {
      type: 'local',
      autosave: false,
      autoload: true,
      // urlStore: 'http://localhost:3000/grapesjs/',
      // urlLoad: 'http://localhost:3000/grapesjs/1'
    },
    plugins: [ mdb ]
  });

  editor.Commands.add('store-data', (e: any) => {
      e.store();
    }
  );

  types(editor);

  editor.on('component:toggled', model => {
    if (model?.changed.status === 'selected') {
      if (!model.get('traits').find(trait => trait.attributes.name === 'data-onclick')) {
        model.addTrait({
          type: 'select',
          label: 'On click',
          name: 'data-onclick',
          options: [
            { id: 'say-hello', name: 'Say hello'},
            { id: 'say-goodbye', name: 'Say goodbye'},
            { id: 'say-some', name: 'Say something else'}
          ]
        });
      }
    }
  });

  editor.Panels.getPanel('options').buttons.add([{
    id: 'undo',
    className: 'fa fa-undo',
    command: e => e.runCommand('core:undo'),
    attributes: {
      title: 'Undo'
    }
  }, {
    id: 'redo',
    className: 'fa fa-repeat',
    command: e => e.runCommand('core:redo'),
    attributes: {
      title: 'Redo'
    }
  }, {
    id: 'canvas-clear',
    className: 'fa fa-trash',
    command: e => e.runCommand('core:canvas-clear'),
    attributes: {
      title: 'Clear canvas'
    }
  }, {
    id: 'store-data',
    className: 'fa fa-save',
    command: e => e.runCommand('store-data'),
    attributes: {
      title: 'Save template'
    }
  }]);


  return editor;
}
