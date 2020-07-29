export const options = [{
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
}];
