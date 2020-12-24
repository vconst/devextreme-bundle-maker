import {
  Component,
  ComponentBindings,
  JSXComponent
} from 'devextreme-generator/component_declaration/common';

import { Toolbar } from './toolbar';
import { ComponentWithoutPlugins } from './plugins/component_without_plugins';
import { ComponentWithPlugins } from './plugins/component_with_plugins';
import { Postfix } from './plugins/postfix';

const postfixConfig = { enabled: true };

function viewFunction({
  click, type, items, types
}: PluginsPage) {
  return (
    <div>
      <Toolbar items={types} onClick={click} />
      <div>
        {type === 'without plugins' && <ComponentWithoutPlugins items={items} />} 
        {type === 'with plugins' && <ComponentWithPlugins items={items} />} 
        {type === 'without plugins with postfix' && (
          <ComponentWithoutPlugins items={items} postfix={postfixConfig} />
        )}
        {type === 'with plugins with postfix' && (
          <ComponentWithPlugins items={items}>
            <Postfix enabled={true} />
          </ComponentWithPlugins>
        )}
      </div>
    </div>
  );
}

@ComponentBindings()
class PluginsProps {
}

@Component({
  view: viewFunction,
  jQuery: {
    register: true,
  },
})
export class PluginsPage extends JSXComponent(PluginsProps) {
  types = ['clear', 'without plugins', 'with plugins', 'without plugins with postfix', 'with plugins with postfix'];
  type: string = '';
  items = Array.from({ length: 5000 }).map((_, i) => 'text' + i);
  click(type: string): void {
    performance.mark("start");
    console.time(type);

    this.type = type;

    window['setTimeout'](() => {
      console.timeEnd(type);
      performance.mark("end")
      performance.measure(type, 'start', 'end');
    });
  }
}