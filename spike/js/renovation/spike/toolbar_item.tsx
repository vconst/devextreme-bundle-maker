import {
  Component,
  ComponentBindings,
  JSXComponent,
  OneWay,
  Event,
  Effect,
  Ref,
  RefObject
} from '@devextreme-generator/declarations';

function viewFunction({
  inputRef, props: { text }
}: ToolbarItem) {
  return (
    <input ref={inputRef as any} type="button" value={text} />
  );
}

@ComponentBindings()
class ToolbarItemProps {
  @OneWay()
  text: string = '';
  @Event()
  onClick?: (text: string) => void;
}

@Component({
  view: viewFunction,
})
export class ToolbarItem extends JSXComponent(ToolbarItemProps) {
  @Ref()
  inputRef!: RefObject<HTMLDivElement>;
  
  click(e: any): void {
    this.props.onClick?.(e.target.value);
  }

  @Effect()
  emptyEffect() {}

  @Effect()
  clickEffect(): () => void {
    this.inputRef.current.addEventListener('click', this.click);
    return (): void => this.inputRef.current.removeEventListener('click', this.click);
  }
}