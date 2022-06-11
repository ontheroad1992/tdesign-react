import React, { useState } from 'react';

import { Select } from 'tdesign-react';

const { Option } = Select;

const SingleSelect = () => {
  const [value, setValue] = useState('apple');
  const onChange = (value) => {
    setValue(value);
  };

  const options = new Array(100).fill(1).map((item, index) => ({ label: index, value: index }));

  return (
    <div style={{ display: 'flex' }}>
      <Select options={options} onChange={onChange} style={{ width: '40%' }} clearable>
        {/* <Option key="apple" label="Apple" value="apple" />
        <Option key="orange" value="orange">
          Orange
        </Option>
        <Option key="banana" label="Banana" value="banana" /> */}
      </Select>
    </div>
  );
};

export default SingleSelect;
