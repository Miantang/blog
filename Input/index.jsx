/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Icon } from 'antd';
import './index.less';

class InputWithClearable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || '',
    };
  }
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      const { value } = nextProps;
      this.setState({ value });
    }
  }
  triggerChange = (changedValue, e) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(changedValue, e);
    }
  }
  handleChange = (e) => {
    if (!('value' in this.props)) {
      this.setState({ value: e.target.value });
    }
    this.triggerChange(e.target.value, e);
  }

  emitEmpty = () => {
    this.triggerChange(null);
  }
  render() {
    const { value } = this.state;
    let { className, autoComplete } = this.props;
    if (className) {
      className = `clearable-input ${className}`;
    }
    else {
      className = 'clearable-input';
    }
    return (
      <Input
      {...this.props}
      className={className}
      value={value}
        suffix={value ? <Icon
          type="close-circle"
          className="clearable-input-icon"
          onClick={this.emitEmpty}
        /> : null}
        onChange={this.handleChange}
        autoComplete={autoComplete ? 'on' : 'off'}
      />
    );
  }
}
InputWithClearable.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
  autoComplete: PropTypes.bool,
};

export default InputWithClearable;
