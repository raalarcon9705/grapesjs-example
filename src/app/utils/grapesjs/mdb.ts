import { buttonComponent } from './components/buttons';
import { containerComponent } from './components/layout';
export const mdb = editor => {
  buttonComponent(editor);
  containerComponent(editor);
};
