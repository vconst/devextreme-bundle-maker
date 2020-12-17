import {
  Component,
  ComponentBindings,
  JSXComponent
} from 'devextreme-generator/component_declaration/common';

function render(i: number) {
  return <div key={i}>{i.toString()}</div>;
}

import { OneLevel } from './component_nesting/one_level';
import { TwoLevel } from './component_nesting/two_level';
import { ThreeLevel } from './component_nesting/three_level';
import { Toolbar } from './toolbar';


function viewFunction({
  click, type, items, types
}: ComponentNestingPage) {
  return (
    <div>
      <Toolbar items={types} onClick={click} />
      <div>
         {type === 'inline' && items.map((i) => 
          <div key={i}>{i.toString()}</div>
         )} 
         {type === 'render function' && items.map((i) => 
          render(i)
         )}
         {type === 'one level' && items.map((i) => 
          <OneLevel key={i} text={i.toString()} />
         )}
         {type === 'two level' && items.map((i) => 
          <TwoLevel key={i} text={i.toString()} />
         )}
         {type === 'three level' && items.map((i) => 
          <ThreeLevel key={i} text={i.toString()} />
         )}
      </div>
    </div>
  );
}

@ComponentBindings()
class ComponentNestingPageProps {
}

@Component({
  view: viewFunction,
  jQuery: {
    register: true,
  },
})
export class ComponentNestingPage extends JSXComponent(ComponentNestingPageProps) {
  types = ['clear', 'inline', 'render function', 'one level', 'two level', 'three level'];
  type: string = '';
  items = Array.from({ length: 10000 }).map((_, i) => i);
  click(type: string): void {
    this.type = type;
  }
}