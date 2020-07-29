export const types = editor => {
  editor.TraitManager.addType('class-selector', {
    createInput({ trait }) {
      const traitOpts: { value: string, label: string }[] = trait.get('options') || [];
      const el = document.createElement('div');
      el.innerHTML = `<select>${traitOpts.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('')}</select>`;
      return el;
    },
    onEvent({ elInput, component, event }) {
      const elSelect: HTMLSelectElement = (elInput as HTMLElement).querySelector('select');
      const attr = component.getAttributes();
      let className: string = attr.class;
      const current = event.target.value;
      className = className.split(' ').filter(c => {
        for (let i = 0; i < elSelect.options.length; i++) {
          if (c === elSelect.options[i].value) {
            return false;
          }
        }
        return true;
      }).concat(current).join(' ');
      component.setAttributes({
        ...attr,
        class: className
      });
    }
  });
}

const marginTraits = [
  {
    type: 'class-selector',
    label: 'Margin',
    options: [
      { value: '', label: 'None' },
      { value: 'm-0', label: '0' },
      { value: 'm-1', label: '1' },
      { value: 'm-2', label: '2' },
      { value: 'm-3', label: '3' },
      { value: 'm-4', label: '4' },
      { value: 'm-5', label: '5' },
    ]
  },
  {
    type: 'class-selector',
    label: 'Margin top',
    options: [
      { value: '', label: 'None' },
      { value: 'mt-0', label: '0' },
      { value: 'mt-1', label: '1' },
      { value: 'mt-2', label: '2' },
      { value: 'mt-3', label: '3' },
      { value: 'mt-4', label: '4' },
      { value: 'mt-5', label: '5' },
    ]
  },
  {
    type: 'class-selector',
    label: 'Margin right',
    options: [
      { value: '', label: 'None' },
      { value: 'mr-0', label: '0' },
      { value: 'mr-1', label: '1' },
      { value: 'mr-2', label: '2' },
      { value: 'mr-3', label: '3' },
      { value: 'mr-4', label: '4' },
      { value: 'mr-5', label: '5' },
    ]
  },
  {
    type: 'class-selector',
    label: 'Margin bottom',
    options: [
      { value: '', label: 'None' },
      { value: 'mb-0', label: '0' },
      { value: 'mb-1', label: '1' },
      { value: 'mb-2', label: '2' },
      { value: 'mb-3', label: '3' },
      { value: 'mb-4', label: '4' },
      { value: 'mb-5', label: '5' },
    ]
  },
  {
    type: 'class-selector',
    label: 'Margin left',
    options: [
      { value: '', label: 'None' },
      { value: 'ml-0', label: '0' },
      { value: 'ml-1', label: '1' },
      { value: 'ml-2', label: '2' },
      { value: 'ml-3', label: '3' },
      { value: 'ml-4', label: '4' },
      { value: 'ml-5', label: '5' },
    ]
  }
];

const paddingTraits = [
  {
    type: 'class-selector',
    label: 'Padding',
    options: [
      { value: '', label: 'None' },
      { value: 'p-0', label: '0' },
      { value: 'p-1', label: '1' },
      { value: 'p-2', label: '2' },
      { value: 'p-3', label: '3' },
      { value: 'p-4', label: '4' },
      { value: 'p-5', label: '5' },
    ]
  },
  {
    type: 'class-selector',
    label: 'Padding top',
    options: [
      { value: '', label: 'None' },
      { value: 'pt-0', label: '0' },
      { value: 'pt-1', label: '1' },
      { value: 'pt-2', label: '2' },
      { value: 'pt-3', label: '3' },
      { value: 'pt-4', label: '4' },
      { value: 'pt-5', label: '5' },
    ]
  },
  {
    type: 'class-selector',
    label: 'Padding right',
    options: [
      { value: '', label: 'None' },
      { value: 'pr-0', label: '0' },
      { value: 'pr-1', label: '1' },
      { value: 'pr-2', label: '2' },
      { value: 'pr-3', label: '3' },
      { value: 'pr-4', label: '4' },
      { value: 'pr-5', label: '5' },
    ]
  },
  {
    type: 'class-selector',
    label: 'Padding bottom',
    options: [
      { value: '', label: 'None' },
      { value: 'pb-0', label: '0' },
      { value: 'pb-1', label: '1' },
      { value: 'pb-2', label: '2' },
      { value: 'pb-3', label: '3' },
      { value: 'pb-4', label: '4' },
      { value: 'pb-5', label: '5' },
    ]
  },
  {
    type: 'class-selector',
    label: 'Padding left',
    options: [
      { value: '', label: 'None' },
      { value: 'pl-0', label: '0' },
      { value: 'pl-1', label: '1' },
      { value: 'pl-2', label: '2' },
      { value: 'pl-3', label: '3' },
      { value: 'pl-4', label: '4' },
      { value: 'pl-5', label: '5' },
    ]
  }
];

export const traits = [
  ...marginTraits,
  ...paddingTraits
];
