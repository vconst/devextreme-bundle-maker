import {
  Component,
  ComponentBindings,
  JSXComponent,
  OneWay,
  Fragment,
} from 'devextreme-generator/component_declaration/common';
import { PlaceholderExtender } from './placeholder_extender';
import { ItemPlaeholder } from './item_with_plugins';

function viewFunction({
  postfixText
}: Postfix) {
  return (
      <PlaceholderExtender
        type={ItemPlaeholder}
        order={1}
        template={(options, children): JSX.Element => (
          <Fragment>
            {children}{postfixText}
          </Fragment>
        )}
      />
  );
}

@ComponentBindings()
class PostfixProps {
  @OneWay()
  enabled = false;
}

@Component({
  view: viewFunction,
})
export class Postfix extends JSXComponent(PostfixProps) {
  get postfixText() {
    return this.props.enabled ? ' postfix' : '';
  }
}