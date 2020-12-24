import {
  Component,
  ComponentBindings,
  JSXComponent,
  OneWay,
} from 'devextreme-generator/component_declaration/common';
import { Placeholder } from './placeholder';
import { createPlaceholder } from './context';

export const ItemPlaeholder = createPlaceholder();

function viewFunction({
  props: { text }
}: ItemWithPlugins) {
  return (
    <div>
      <Placeholder type={ItemPlaeholder}>
        { text }
      </Placeholder>
    </div>
  );
}

@ComponentBindings()
class ItemWithPluginsProps {
  @OneWay()
  text = '';
}

@Component({
  view: viewFunction,
})
export class ItemWithPlugins extends JSXComponent(ItemWithPluginsProps) {

}