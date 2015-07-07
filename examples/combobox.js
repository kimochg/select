'use strict';

var React = require('react');
var Select = require('rc-select');
var Option = Select.Option;
require('rc-select/assets/index.css');

var c3 = (
  <div>
    <h2>combobox</h2>
    <div style={{width: 300}}>
      <Select
        style={{width:500}}
        combobox>
        <Option value="jack">
          <b style={{
            color: 'red'
          }}>jack</b>
        </Option>
        <Option value="lucy" >lucy</Option>
        <Option value="disabled" disabled>disabled</Option>
        <Option value="yiminghe">yiminghe</Option>
      </Select>
    </div>
  </div>
);

React.render(c3, document.getElementById('__react-content'));
