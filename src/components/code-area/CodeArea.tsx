import React from 'react';
import styles from './code-area.module.css';
import parse from 'html-react-parser';

export enum ECodeType {
  JAVASCRIPT = 'javascript',
  CONSOLE = 'console',
}

type IProps = {
  type: ECodeType;
  code: string;
};

const CodeArea: React.FC<IProps> = ({ type, code }) => {
  return <pre className={`${type === ECodeType.JAVASCRIPT ? styles.javascript : styles.terminal} rounded p-15 text-left`}>{parse(code)}</pre>;
};
export default CodeArea;
