import {
  Component,
  ComponentBindings,
  JSXComponent,
  OneWay,
} from 'devextreme-generator/component_declaration/common';

function viewFunction({
  props: { text }, postfixText
}: Item) {
  return (
    <div>{text}{postfixText}</div>
  );
}

@ComponentBindings()
class ItemProps {
  @OneWay()
  text = '';

  @OneWay()
  postfixEnabled = false;
}

@Component({
  view: viewFunction,
})
export class Item extends JSXComponent(ItemProps) {
  get postfixText() {
    return this.props.postfixEnabled ? ' postfix' : '';
  }
}