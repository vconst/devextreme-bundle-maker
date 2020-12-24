import React, { useState, useCallback, useRef, useEffect } from 'react';

import CheckBoxNative from '../../../bundles/react/check_box-native';
import CheckBoxWrapper from '../../../bundles/react/check_box-wrapper';
import CheckBoxRenovatedWrapper from '../../../bundles/react/check_box-renovated-wrapper';
// import CheckBoxPrev from 'devextreme-react/check_box';

const RUN_COUNT = 200;

const check_boxs = [];

const addPerformanceTest = (name, params) => {
  check_boxs.push({ name, ...params });
}

addPerformanceTest('clear', {
  initialOptions: null
});

addPerformanceTest('create', {
  initialOptions: { value: true }
});

addPerformanceTest('Minimum options', {
  initialOptions: { value: true }
});

addPerformanceTest('Option value change', {
  updateOptions: { value: false }
});

addPerformanceTest('Method onFocus', {
  methodName: 'focus'
});

const TestButtons = (props) => {
  return <div id="test-buttons">
    {check_boxs.map((params, index) => 
      <input key={index} type='button' value={params.name} onClick={() => props.onClick(params) } />
    )}
  </div>;
}

const getWidget = (type) => {
  console.log(type);
  if(type === 'renovated') {
    return CheckBoxNative;
  } else if(type === 'renovatedwrapper') {
    return CheckBoxRenovatedWrapper;
  } else {
    return CheckBoxWrapper;
  }
}

function CheckBoxPage(props) {
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
      <h2>check_box {type}</h2>
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

export default CheckBoxPage;
