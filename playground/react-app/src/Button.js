import React, { useState, useCallback, useRef, useEffect } from 'react';

import ButtonNative from '../../../bundles/react/button-native';
import ButtonWrapper from '../../../bundles/react/button-wrapper';
import ButtonRenovatedWrapper from '../../../bundles/react/button-renovated-wrapper';
// import ButtonPrev from 'devextreme-react/button';

const RUN_COUNT = 200;

const buttons = [];

const addPerformanceTest = (name, params) => {
  buttons.push({ name, ...params });
}

addPerformanceTest('clear', {
  initialOptions: null
});

addPerformanceTest('create', {
  initialOptions: { text: 'button' }
});

addPerformanceTest('Minimum options', {
  initialOptions: { text: 'button' }
});

addPerformanceTest('Maximum options', {
  initialOptions: {
      text: 'button',
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
      height: '40'
  }
});

const ButtonTemplate = () => <div>Button Template</div>

addPerformanceTest('With template', {
  initialOptions: {
      text: 'button',
      component: ButtonTemplate
  }
});

addPerformanceTest('Option icon change', {
  updateOptions: { icon: 'download' }
});

addPerformanceTest('Option text change', {
  updateOptions: { text: 'New Button Text' }
});

addPerformanceTest('Option useInkRipple change', {
  updateOptions: { useInkRipple: true }
});

addPerformanceTest('Method onFocus', {
  methodName: 'focus'
});

addPerformanceTest('Options full set change', {
  updateOptions: {
      text: 'button2',
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
      height: '40px'
  }
});

const TestButtons = (props) => {
  return <div id="test-buttons">
    {buttons.map((params, index) => 
      <input key={index} type='button' value={params.name} onClick={() => props.onClick(params) } />
    )}
  </div>;
}

const getWidget = (type) => {
  console.log(type);
  if(type === 'renovated') {
    return ButtonNative;
  } else if(type === 'renovatedwrapper') {
    return ButtonRenovatedWrapper;
  } else {
    return ButtonWrapper;
  }
}

function ButtonPage(props) {
  const type = props.match.params.type;
  const Widget = getWidget(type);
  const [options, setOptions] = useState(null);
  const widgetsRef = useRef([]);

  useEffect(() => {
    if(!options) {
      widgetsRef.current = [];
    }
  }, [!options]);

  const onClick = useCallback(({ name, initialOptions, updateOptions, methodName }) => {
    performance.mark("start");
    console.time(name);
    if(initialOptions !== undefined) {
      setOptions(initialOptions);
    }
    if(updateOptions !== undefined) {
      setOptions({...options, ...updateOptions});
    }
    if(methodName) {
      widgetsRef.current.forEach((widget) => {
        const instance = widget.instance || widget;
        instance[methodName]();
      });
    }
    window['requestIdleCallback'](() => {
      console.timeEnd(name);
      performance.mark("end")
      performance.measure(name, 'start', 'end');
    });
  }, [options]);

  return (
    <>
      <h2>button {type}</h2>
      <TestButtons onClick={onClick} />
      <div id="workspace">
        {options && Array.from({ length: RUN_COUNT }).map((_, index) => 
          <Widget 
            key={index} 
            ref={el => widgetsRef.current[index] = el} 
            {...options}
          />
        )}
      </div>
    </>
  );
};

export default ButtonPage;
