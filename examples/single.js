/* eslint no-console: 0 */

import React from 'react';
import Select, { Option } from 'rc-select';
import 'rc-select/assets/index.less';
import ReactDOM from 'react-dom';
import './vendors.css';
import './main.css';

class Test extends React.Component {
  state = {
    destroy: false,
    value: 9,
  };

  onChange = (e) => {
    let value;
    if (e && e.target) {
      value = e.target.value;
    } else {
      value = e;
    }
    console.log('onChange', value);
    this.setState({
      value,
    });
  };

  onDestroy = () => {
    this.setState({
      destroy: 1,
    });
  };

  onBlur = (v) => {
    console.log('onBlur', v);
  };

  onFocus = () => {
    console.log('onFocus');
  };

  render() {
    if (this.state.destroy) {
      return null;
    }
    return (
      <div style={{ margin: 20 }}>
        <div style={{ height: 150 }}/>

        <h2>Single Select</h2>

        <div style={{ width: 300 }}>

          <Select
            id="my-select"
            value={this.state.value}
            placeholder="placeholder"
            dropdownMenuStyle={{ maxHeight: 200 }}
            style={{ width: 500 }}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            allowClear
            optionLabelProp="children"
            optionFilterProp="text"
            onChange={this.onChange}
            firstActiveValue="2"
            backfill
          >
            <Option value="01" text="jack" title="jack">
              <b
                style={{
                  color: 'red',
                }}
              >
                jack
              </b>
            </Option>
            <Option value="11" text="lucy">lucy</Option>
            <Option value="21" disabled text="disabled">disabled</Option>
            <Option value="31" text="yiminghe">yiminghe</Option>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
              return <Option key={i} value={i} text={String(i)}>{i}-text</Option>;
            })}
          </Select>
        </div>


            <div className="slds-docked_container.slds-is-fixed">
        <div className="slds-is-relative">
          <div className="slds-backdrop slds-backdrop--open" />
          <div className="slds-modal--large slds-modal slds-fade-in-open slds-docked-composer-modal">
            <div className="slds-modal__container ">
              <div className="slds-docked-composer slds-grid slds-grid--vertical">
                <div className="slds-docked-composer__header slds-grid slds-shrink-none">
                  <div className="slds-media slds-media_center slds-no-space">
                    <div className="slds-media__figure slds-m-right_x-small">
                      <span className="slds-icon_container">x</span>
                    </div>
                    <div className="slds-media__body">
                      <div
                        className="slds-truncate slds-text-heading_small"
                        title="新增职位"
                      >
                        新增职位
                      </div>
                    </div>
                  </div>
                  <div className="slds-col--bump-left slds-shrink-none">
                    <button
                      className="slds-button slds-button--icon"
                      title="Minimize window"
                    >
                      <svg className="slds-button__icon">
                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#minimize_window" />
                      </svg>
                    </button>
                    <button
                      className="slds-button slds-button--icon"
                      title="Expand Composer"
                    >
                      <svg className="slds-button__icon">
                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#expand_alt" />
                      </svg>
                    </button>{" "}
                    <button
                      className="slds-button slds-button--icon"
                      title="关闭"
                    >
                      <svg className="slds-button__icon">
                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#close" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="slds-docked-composer__body slds-p-around--medium  slds-scrollable--y popover-scroll-container slds-theme--default has-thin-scrollbar">
                  <div className="slds-grid">
                    <div className="form-wrapper slds-size--1-of-1">
                      <div className="slds-grid slds-wrap edit-save">
                        <div className="slds-section slds-is-open slds-size--1-of-1 slds-m-vertical--none">
                          <h3 className="slds-section__title">基本信息</h3>
                          <div className="slds-section__content">
                            <fieldset>
                              <div className="slds-grid slds-wrap slds-grid--pull-padded">
                                <div className="field-container slds-is-relative1 slds-m-bottom--small slds-size--1-of-1 slds-p-horizontal--small slds-medium-size--1-of-2">
                                  <div className="slds-form-element horizontal-form type-char">
                                    <div className="slds-form-element__control field-content">
                                      <div className="slds-form-element__group">
                                        <Select
                                          style={{ width: 100 }}
                                          getPopupContainer={node => {
                                            const target = node.closest(
                                              ".field-container"
                                            );
                                            console.log(target);
                                            return target;
                                          }}
                                        >
                                          <Option value="jack">Jack</Option>
                                          <Option value="lucy">Lucy</Option>
                                          <Option value="yiminghe">
                                            yiminghe
                                          </Option>
                                        </Select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>

    );
  }
}

ReactDOM.render(<Test />, document.getElementById('__react-content'));
