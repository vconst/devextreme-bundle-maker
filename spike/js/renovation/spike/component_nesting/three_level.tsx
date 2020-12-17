import {
  Component,
  ComponentBindings,
  JSXComponent,
  OneWay,
} from 'devextreme-generator/component_declaration/common';

import { TwoLevel } from './two_level';

function viewFunction({
  props: { text },
}: ThreeLevel) {
  return (
    <TwoLevel text={text} />
  );
}

@ComponentBindings()
class ThreeLevelProps {
  @OneWay()
  text = '';
}

@Component({
  view: viewFunction,
})
export class ThreeLevel extends JSXComponent(ThreeLevelProps) {
}