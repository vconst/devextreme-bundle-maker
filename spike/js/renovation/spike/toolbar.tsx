import {
  Component,
  ComponentBindings,
  JSXComponent,
  OneWay,
  Event
} from '@devextreme-generator/declarations';
import { ToolbarItem } from './toolbar_item';

function viewFunction({
  props: { items, onClick }
}: Toolbar) {
  return (
    <div>
      {items.map((text) => 
        <ToolbarItem key={text} text={text} onClick={onClick} />
      )} 
    </div>
  );
}

@ComponentBindings()
class ToolbarProps {
  @OneWay()
  items: string[] = [];
  @Event()
  onClick?: (e: any) => void;
}

@Component({
  view: viewFunction,
  jQuery: {
    register: true,
  },
})
export class Toolbar extends JSXComponent(ToolbarProps) {
}