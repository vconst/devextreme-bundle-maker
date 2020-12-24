import {
  Component,
  ComponentBindings,
  JSXComponent,
  OneWay,
} from 'devextreme-generator/component_declaration/common';
import { Item } from './item';

function viewFunction({
  props: { items }, postfixEnabled
}: ComponentWithoutPlugins) {
  return (
    <div>
      {items.map((i) => 
        <Item key={i} text={i.toString()} postfixEnabled={postfixEnabled} />
      )}
    </div>
  );
}

@ComponentBindings()
class Postfix {
  @OneWay()
  enabled = false;
}

@ComponentBindings()
class ComponentWithoutPluginsProps {
  @OneWay()
  items: string[] = [];

  @OneWay()
  postfix?: Postfix;
}

@Component({
  view: viewFunction,
})
export class ComponentWithoutPlugins extends JSXComponent(ComponentWithoutPluginsProps) {
  get postfixEnabled() {
    return this.props.postfix ? this.props.postfix.enabled : false;
  }

}