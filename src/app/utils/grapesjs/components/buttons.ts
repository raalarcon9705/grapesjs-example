import { colors } from '../colors';
import { traits } from '../common-traits';

export const buttonBlock = {
  id: 'button',
  category: 'Buttons',
  label: `<div class="text-center"><i class="fa fa-3x fa-square"></i></div><p class="mt-3">Button</p>`,
  attributes: { class: 'gjs-block-section' },
  content: `<button class="btn btn-primary">Primary</button>`,
};

export const buttonComponent = editor => {

  editor.BlockManager.add('button', buttonBlock);

  editor.DomComponents.addType('button', {
    isComponent: el => el && el.classList && el.classList.contains('btn'),

    model: {
      defaults: {
        droppable: 'false',
        attributes: {
          color: 'primary',
          mdbBtn: ''
        },
        traits: [
          {
            name: 'color',
            type: 'select',
            options: [
              ...colors.map(color => ({ id: color, label: color.split('-').join(' ')}))
            ]
          },
          {
            name: 'size',
            type: 'select',
            options: [
              {
                id: 'normal',
                label: 'normal'
              },
              {
                id: 'small',
                label: 'small'
              },
              {
                id: 'large',
                label: 'large'
              }
            ]
          },
          {
            name: 'outline',
            type: 'checkbox'
          },
          {
            name: 'block',
            type: 'checkbox'
          },
          {
            name: 'ng-event-click',
            label: 'Click event',
            type: 'select',
            options: [
              { id: 'sayHello()', label: 'Say Hello function'},
              { id: 'sayGoodbye()', label: 'Say Goodbye function'}
            ]
          },
          ...traits
        ]
      },
      init() {
        this.on('change:attributes:color', this.handleColorChange);
        this.on('change:attributes:outline', this.handleOutineChange);
        this.on('change:attributes:block', this.handleBlockChange);
        this.on('change:attributes:size', this.handleSizeChange);
      },

      handleColorChange() {
        let className = this.getAttributes().class;
        const color = this.getAttributes().color;
        const currentColor = className.split(' ').find(cur => colors.some(c => `btn-${c}` === cur));
        const currentOutlineColor = className.split(' ').find(cur => colors.some(c => `btn-outline-${c}` === cur));
        if (color != (currentColor ? currentColor.substr(4) : currentOutlineColor.substr(12))) {
          className = className.replace(currentColor, `btn-${color}`);
          className = className.replace(currentOutlineColor, `btn-outline-${color}`);
          const attr = {
            ...this.getAttributes(),
            class: className
          }
          this.setAttributes(attr)
        }
      },
      handleOutineChange() {
        const outline = this.getAttributes().outline;
        let className = this.getAttributes().class;
        const color = this.getAttributes().color;
        if ((outline && !className.match('-outline')) || (!outline && className.match('-outline'))) {
          if (outline) {
            className = className.replace(`btn-${color}`, `btn-outline-${color}`)
          } else {
            className = className.replace(`btn-outline-${color}`, `btn-${color}`)
          }
          const attr = {
            ...this.getAttributes(),
            class: className
          }
          this.setAttributes(attr)
        }
      },
      handleBlockChange() {
        const block = this.getAttributes().block;
        let className = this.getAttributes().class;

        if ((block && !className.match('btn-block')) || (!block && className.match('btn-block'))) {
          if (block) {
            className = className.split(' ').concat('btn-block').join(' ');
          } else {
            className = className.split(' ').filter(c => c !== 'btn-block').join(' ');
          }
          const attr = {
            ...this.getAttributes(),
            class: className
          }
          this.setAttributes(attr)
        }
      },
      handleSizeChange() {
        const size = this.getAttributes().size;
        let className = this.getAttributes().class;
        let flag = false;
        if (size === 'normal' && (className.match('btn-sm') || className.match('btn-lg'))) {
          className = className.split(' ').filter(c => c !== 'btn-sm' && c !== 'btn-lg').join(' ');
          flag = true;
        } else if (size === 'small' && !className.match('btn-sm')) {
          className = className.split(' ').filter(c => c !== 'btn-lg').concat('btn-sm').join(' ');
          flag = true;
        } else if (size === 'large' && !className.match('btn-lg')) {
          className = className.split(' ').filter(c => c !== 'btn-sm').concat('btn-lg').join(' ');
          flag = true;
        }

        if (flag) {
          const attr = {
            ...this.getAttributes(),
            class: className
          }
          this.setAttributes(attr)
        }
      }
    }
  });
}
