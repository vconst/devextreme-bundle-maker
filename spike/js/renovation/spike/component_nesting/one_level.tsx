import {
  Component,
  ComponentBindings,
  JSXComponent,
  OneWay,
} from 'devextreme-generator/component_declaration/common';

function viewFunction({
  props: { text },
}: OneLevel) {
  return (
    <div>{text}</div>
  );
}

@ComponentBindings()
class OneLevelProps {
  @OneWay()
  text = '';
}

@Component({
  view: viewFunction,
})
export class OneLevel extends JSXComponent(OneLevelProps) {
}