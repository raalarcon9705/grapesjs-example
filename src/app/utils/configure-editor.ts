import grapesjs from 'grapesjs';

export function configureEditor(gjs = '#gjs'): any {
  const editor = grapesjs.init({
    container: gjs,
    fromElement: true,
    plugins: ['grapesjs-blocks-bootstrap4'],
    canvas: {
      styles: [
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
      ],
      scripts: [
        'https://code.jquery.com/jquery-3.3.1.slim.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'
      ],
    },
    storageManager: {
      type: 'local',
      autosave: false,
      autoload: true,
      // urlStore: 'http://localhost:3000/grapesjs/',
      // urlLoad: 'http://localhost:3000/grapesjs/1'
    }
  });

  editor.Commands.add('store-data', (e: any) => {
      e.store()
    }
  );

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
