
import React from 'react';
import { Modal } from 'antd';
import './index.less';

export default function PreviewImage(imgSrc) {
  return Modal.info({
    className: 'no-footer-modal',
    maskClosable: true,
    width: '70%',
    content: <div className="content"><img alt="" src={imgSrc} /></div>,
  });
}
