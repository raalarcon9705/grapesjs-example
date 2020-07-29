import { breakpoints } from '../breakpoints';
import { traits } from '../common-traits';

export const containerBlock = {
  label: `<div class="text-center"><i class="fa fa-3x fa-chalkboard"></i></div><p class="mt-3">Container</p>`,
  attributes: { class: 'gjs-block-section' },
  category: 'Layout',
  content: {
    type: 'container',
    classes: ['container'],
  },
};

export const rowBlock = {
  label: `<div class="text-center"><i class="fa fa-3x fa-th-large"></i></div><p class="mt-3">Row</p>`,
  category: 'Layout',
  content: {
    type: 'row',
    classes: ['row'],
  },
};

export const columnBlock = {
  label: `<div class="text-center"><i class="fa fa-3x fa-pause"></i></div><p class="mt-3">Column</p>`,
  category: 'Layout',
  content: {
    type: 'column',
    classes: ['col'],
  },
};

export const containerComponent = (editor) => {
  editor.BlockManager.add('container', containerBlock);

  const defaultType = editor.DomComponents.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  editor.DomComponents.addType('container', {
    model: defaultModel.extend(
      {
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          'custom-name': 'Container',
          tagName: 'div',
          droppable: true,
          traits: [
            {
              type: 'class-selector',
              options: [
                { value: 'container', label: 'Fixed' },
                { value: 'container-fluid', label: 'Fluid' },
              ],
              label: 'Width',
            },
          ]
            .concat(defaultModel.prototype.defaults.traits)
            .concat(traits),
        }),
      },
      {
        isComponent: (el) =>
          el && el.className && el.className.match('container'),
      }
    ),
    view: defaultView,
  });

  editor.BlockManager.add('row', rowBlock);

  editor.DomComponents.addType('row', {
    model: defaultModel.extend(
      {
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          'custom-name': 'Row',
          tagName: 'div',
          draggable: '.container, .container-fluid',
          droppable: true,
          traits: [
            {
              type: 'class-selector',
              options: [
                { value: '', label: 'Yes' },
                { value: 'no-gutters', label: 'No' },
              ],
              label: 'Gutters?',
            },
          ]
            .concat(defaultModel.prototype.defaults.traits)
            .concat(traits),
        }),
      },
      {
        isComponent(el) {
          if (el && el.classList && el.classList.contains('row')) {
            return { type: 'row' };
          }
        },
      }
    ),
    view: defaultView,
  });

  editor.BlockManager.add('column', columnBlock);
  const spans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  editor.DomComponents.addType('column', {
    model: defaultModel.extend(
      {
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          'custom-name': 'Column',
          draggable: '.row',
          droppable: true,
          resizable: {
            updateTarget: (el, rect, opt) => {
              const selected = editor.getSelected();
              if (!selected) {
                return;
              }

              //compute the current screen size (bootstrap semantic)
              const docWidth = el.getRootNode().body.offsetWidth;
              let currentSize = '';
              if (docWidth >= 1200) {
                currentSize = 'xl';
              } else if (docWidth >= 992) {
                currentSize = 'lg';
              } else if (docWidth >= 768) {
                currentSize = 'md';
              } else if (docWidth >= 576) {
                currentSize = 'sm';
              }

              //compute the threshold when add on remove 1 col span to the element
              const row = el.parentElement;
              const oneColWidth = row.offsetWidth / 12;
              //the threshold is half one column width
              const threshold = oneColWidth * 0.5;

              //check if we are growing or shrinking the column
              const grow = rect.w > el.offsetWidth + threshold;
              const shrink = rect.w < el.offsetWidth - threshold;
              if (grow || shrink) {
                let testRegexp = new RegExp(
                  '^col-' + currentSize + '-\\d{1,2}$'
                );
                if (!currentSize) {
                  testRegexp = new RegExp('^col-\\d{1,2}$');
                }
                let found = false;
                let sizesSpans = {};
                let oldSpan = 0;
                let oldClass = null;
                for (let cl of el.classList) {
                  if (cl.indexOf('col-') === 0) {
                    let [c, size, span] = cl.split('-');
                    if (!span) {
                      span = size;
                      size = '';
                    }
                    sizesSpans[size] = span;
                    if (size === currentSize) {
                      //found the col-XX-99 class
                      oldClass = cl;
                      oldSpan = span;
                      found = true;
                    }
                  }
                }

                if (!found) {
                  const sizeOrder = ['', 'xs', 'sm', 'md', 'lg', 'xl'];
                  for (let s of sizeOrder) {
                    if (sizesSpans[s]) {
                      oldSpan = sizesSpans[s];
                      found = true;
                    }
                    if (s === currentSize) {
                      break;
                    }
                  }
                }

                let newSpan = Number(oldSpan);
                if (grow) {
                  newSpan++;
                } else {
                  newSpan--;
                }
                if (newSpan > 12) {
                  newSpan = 12;
                }
                if (newSpan < 1) {
                  newSpan = 1;
                }

                let newClass = 'col-' + currentSize + '-' + newSpan;
                if (!currentSize) {
                  newClass = 'col-' + newSpan;
                }
                //update the class
                selected.addClass(newClass);
                if (oldClass && oldClass !== newClass) {
                  selected.removeClass(oldClass);
                }
                //notify the corresponding trait to update its value accordingly
                selected
                  .getTrait((currentSize || 'xs') + '_width')
                  .view.postUpdate();
              }
            },
            tl: 0,
            tc: 0,
            tr: 0,
            cl: 0,
            cr: 1,
            bl: 0,
            bc: 0,
            br: 0,
          },
          traits: [
            {
              id: 'xs_width',
              type: 'class-selector',
              options: [
                { value: 'col', name: 'Equal' },
                { value: 'col-auto', name: 'Variable' },
                ...spans.map(function (i) {
                  return { value: 'col-' + i, name: i + '/12' };
                }),
              ],
              label: 'XS Width',
            },
            {
              id: 'sm_width',
              type: 'class-selector',
              options: [
                { value: '', name: 'None' },
                { value: 'col-sm', name: 'Equal' },
                { value: 'col-sm-auto', name: 'Variable' },
                ...spans.map(function (i) {
                  return { value: 'col-sm-' + i, name: i + '/12' };
                }),
              ],
              label: 'SM Width',
            },
            {
              id: 'md_width',
              type: 'class-selector',
              options: [
                { value: '', name: 'None' },
                { value: 'col-md', name: 'Equal' },
                { value: 'col-md-auto', name: 'Variable' },
                ...spans.map(function (i) {
                  return { value: 'col-md-' + i, name: i + '/12' };
                }),
              ],
              label: 'MD Width',
            },
            {
              id: 'lg_width',
              type: 'class-selector',
              options: [
                { value: '', name: 'None' },
                { value: 'col-lg', name: 'Equal' },
                { value: 'col-lg-auto', name: 'Variable' },
                ...spans.map(function (i) {
                  return { value: 'col-lg-' + i, name: i + '/12' };
                }),
              ],
              label: 'LG Width',
            },
            {
              id: 'xl_width',
              type: 'class-selector',
              options: [
                { value: '', name: 'None' },
                { value: 'col-xl', name: 'Equal' },
                { value: 'col-xl-auto', name: 'Variable' },
                ...spans.map(function (i) {
                  return { value: 'col-xl-' + i, name: i + '/12' };
                }),
              ],
              label: 'XL Width',
            },
            {
              type: 'class-selector',
              options: [
                { value: '', name: 'None' },
                ...spans.map(function (i) {
                  return { value: 'offset-' + i, name: i + '/12' };
                }),
              ],
              label: 'XS Offset',
            },
            {
              type: 'class-selector',
              options: [
                { value: '', name: 'None' },
                ...spans.map(function (i) {
                  return { value: 'offset-sm-' + i, name: i + '/12' };
                }),
              ],
              label: 'SM Offset',
            },
            {
              type: 'class-selector',
              options: [
                { value: '', name: 'None' },
                ...spans.map(function (i) {
                  return { value: 'offset-md-' + i, name: i + '/12' };
                }),
              ],
              label: 'MD Offset',
            },
            {
              type: 'class-selector',
              options: [
                { value: '', name: 'None' },
                ...spans.map(function (i) {
                  return { value: 'offset-lg-' + i, name: i + '/12' };
                }),
              ],
              label: 'LG Offset',
            },
            {
              type: 'class-selector',
              options: [
                { value: '', name: 'None' },
                ...spans.map(function (i) {
                  return { value: 'offset-xl-' + i, name: i + '/12' };
                }),
              ],
              label: 'XL Offset',
            },
          ].concat(defaultModel.prototype.defaults.traits),
        }),
      },
      {
        isComponent(el) {
          let match = false;
          if (el && el.classList) {
            el.classList.forEach(function (klass) {
              if (klass == 'col' || klass.match(/col-/)) {
                match = true;
              }
            });
          }
          if (match) return { type: 'column' };
        },
      }
    ),
    view: defaultView,
  });
};
