import {
  Component,
  ComponentBindings,
  JSXComponent,
  OneWay,
  Provider,
  Slot,
} from 'devextreme-generator/component_declaration/common';
import { PluginsContext, Plugins } from './context';
import { ItemWithPlugins } from './item_with_plugins';

function viewFunction({
  props: { items, children }
}: ComponentWithPlugins) {
  return (
    <div>
      {children}
      {items.map((i) => 
        <ItemWithPlugins key={i} text={i.toString()} />
      )}
    </div>
  );
}

@ComponentBindings()
class ComponentWithPluginsProps {
  @OneWay()
  items: string[] = [];

  @Slot()
  children?: JSX.Element | (JSX.Element | undefined | false | null)[];
}

@Component({
  view: viewFunction,
})
export class ComponentWithPlugins extends JSXComponent(ComponentWithPluginsProps) {
  @Provider(PluginsContext)
  plugins = new Plugins();
}