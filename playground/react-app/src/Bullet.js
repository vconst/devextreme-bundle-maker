import React, { useState, useCallback, useRef, useEffect } from 'react';

import { Bullet as BulletNative }   from '../../../bundles/react/bullet-native';
import { Bullet as BulletWrapper }  from '../../../bundles/react/bullet-wrapper';
import { Bullet as BulletRenovatedWrapper } from '../../../bundles/react/bullet-renovated-wrapper';

const RUN_COUNT = 200;

const buttons = [];

const addPerformanceTest = (name, params) => {
  buttons.push({ name, ...params });
}

addPerformanceTest('clear', {
  initialOptions: null
});

addPerformanceTest('create', {
  initialOptions: {
    startScaleValue: 0,
    endScaleValue: 35,
    value: 23,
    target: 20,
    color: '#ebdd8f'
  }
});

addPerformanceTest('Minimum options', {
  initialOptions: {
    startScaleValue: 0,
    endScaleValue: 35,
    value: 23,
    target: 20,
    color: '#ebdd8f'
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
    return BulletNative;
  } else if(type === 'renovatedwrapper') {
    return BulletRenovatedWrapper;
  } else {
    return BulletWrapper;
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
    window['setTimeout'](() => {
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
