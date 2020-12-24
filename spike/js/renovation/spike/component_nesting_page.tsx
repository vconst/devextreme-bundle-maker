import {
  Component,
  ComponentBindings,
  JSXComponent
} from 'devextreme-generator/component_declaration/common';

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
  types = ['clear', 'inline', 'one level', 'two level', 'three level'];
  type: string = '';
  items = Array.from({ length: 5000 }).map((_, i) => i);
  click(type: string): void {
    performance.mark("start");
    console.time(type);

    this.type = type;

    window['setTimeout'](() => {
      console.timeEnd(type);
      performance.mark("end")
      performance.measure(type, 'start', 'end');
    });
  }
}