import {
  Component,
  ComponentBindings,
  JSXComponent,
  OneWay,
  Event,
  Effect,
  Ref,
} from 'devextreme-generator/component_declaration/common';

function viewFunction({
  inputRef, props: { text }
}: ToolbarItem) {
  return (
    <input ref={inputRef as any} type="button" value={text} />
  );
}

@ComponentBindings()
class ToolbarOtemProps {
  @OneWay()
  text: string = '';
  @Event()
  onClick?: (text: string) => void;
}

@Component({
  view: viewFunction,
})
export class ToolbarItem extends JSXComponent(ToolbarOtemProps) {
  @Ref()
  inputRef!: HTMLDivElement;
  
  click(e: any): void {
    this.props.onClick?.(e.target.value);
  }

  @Effect()
  clickEffect(): () => void {
    this.inputRef.addEventListener('click', this.click);
    return (): void => this.inputRef.removeEventListener('click', this.click);
  }
}