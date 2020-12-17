import {
  Component,
  ComponentBindings,
  JSXComponent,
  OneWay,
} from 'devextreme-generator/component_declaration/common';

import { OneLevel } from './one_level';

function viewFunction({
  props: { text },
}: TwoLevel) {
  return (
    <OneLevel text={text} />
  );
}

@ComponentBindings()
class TwoLevelProps {
  @OneWay()
  text = '';
}

@Component({
  view: viewFunction,
})
export class TwoLevel extends JSXComponent(TwoLevelProps) {
}