import React, { useEffect, useState, useCallback } from 'react';
import ButtonNative from '../../../bundles/react/button-native';
import ButtonWrapper from '../../../bundles/react/button-wrapper';
import ButtonRenovatedWrapper from '../../../bundles/react/button-renovated-wrapper';

const Widget = ButtonRenovatedWrapper;
const RUN_COUNT = 5000;

const ARRAY = new Array();
let observer = new MutationObserver(mutationRecords => {
  console.log(mutationRecords);
  console.timeLog('Time');
});

const startTime = () => {
  console.clear();
  observer.observe(document.getElementById('root'), {
    childList: true,
    subtree: true,
    characterDataOldValue: true,
    attributes: true,
  });
  console.time('Time');
};

const FirstRenderMin = () => {
  startTime();
  return ARRAY.map((index) => (
    <Widget
      key={index}
      text="button text"
    />
  ));
}
const FirstRenderMax = () => {
  startTime();
  return ARRAY.map((index) => (
    <Widget
      key={index}
      text="button text"
      icon="download"
      accessKey="c"
      activeStateEnabled={true}
      disabled={false}
      elementAttr={{ 'data-fake': 123 }}
      hint="text hint"
      onClick={() => undefined}
      rtlEnabled={true}
      tabIndex={1}
      width={100}
      height="40"
    />
  ));
};
const FirstRenderTemplate = () => {
  startTime();
  return ARRAY.map((index) => (
    <Widget
      key={index}
      template={() => <div>button</div>}
      component={() => <div>button</div>}
    />
  ));
}
const OptionChangeIcon = () => {
  const [icon, setIcon] = useState();
  useEffect(() => {
    setTimeout(() => {

      startTime();
      setIcon('download');
    }, 300);
  }, []);

  return ARRAY.map((index) => <Widget icon={icon} key={index} />);
};
const OptionChangeText = () => {
  const [text, setText] = useState('button');
  useEffect(() => {
    setTimeout(() => {

      startTime();
      setText('new button text');
    }, 300);
  }, []);

  return ARRAY.map((index) => <Widget text={text} key={index} />);
};
const OptionChangeMax = () => {
  const [options, setOptions] = useState({ text: 'button' });
  useEffect(() => {
    setTimeout(() => {

      startTime();
      setOptions({
        text: 'button 123321',
        icon: 'download',
        accessKey: 'c',
        activeStateEnabled: true,
        disabled: false,
        elementAttr: { 'data-fake': 123 },
        hint: 'text hint',
        onClick: () => undefined,
        rtlEnabled: true,
        tabIndex: 1,
        width: 100,
        height: '40',
      });
    }, 300);
  }, []);

  return ARRAY.map((index) => <Widget key={index} {...options} />);
};

const MethodFocus = () => {
  const widgets = [];
  const saveRefs = useCallback((component) => {
    widgets.push(component);
  }, []);
  useEffect(() => {
    startTime();
    widgets.forEach(widget => {
      if (widget.instance !== undefined) {
        widget.instance.focus();
      } else {
        widget.focus();
      }
    });
  }, []);

  return ARRAY.map((index) => <Widget text="button text" key={index} ref={saveRefs} />);
};

const MemoryHeap = () => {
  return ARRAY.map((index) => (
    <Widget
      key={index}
      text="button text"
    />
  ));
}

const MemoryLeaks = () => {
  const [widgets, setWidgets] = useState(ARRAY.slice());
  const create = useCallback(() => {
    setWidgets(ARRAY.slice());
  }, []);
  const remove = useCallback(() => {
    setWidgets([]);
  }, []);

  return(
    <>
      <button onClick={create} />
      <button onClick={remove} />
      {widgets.map((index) => (
        <Widget
          key={index}
          text="button text"
        />
      ))}
  </>
  );
}

function App() {
  for (let i = 0; i < RUN_COUNT; i++) {
    ARRAY.push(i.toString());
  }

  return (
    <>
      {/* <FirstRenderMin /> */}
      {/* <FirstRenderMax /> */}
      {/* <FirstRenderTemplate /> */}
      {/* <OptionChangeIcon /> */}
      {/* <OptionChangeText /> */}
      {/* <OptionChangeMax /> */}
      {/* <MethodFocus /> */}
      {/* <MemoryHeap /> */}
      <MemoryLeaks />
    </>
  );
};

export default App;
