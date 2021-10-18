import React from 'react';
import styles from './table.module.css';
import parse from 'html-react-parser';

type IProps = {
  title: string | JSX.Element;
  properties: { label: string; value: string }[];
  className?: string;
};

const Table: React.FC<IProps> = ({ title, properties, className = '' }) => {
  return (
    <table className={`w-full glass-bg shadow-md ${styles.table} ${className}`}>
      <thead className='theme-border w-full rounded-md'>
        <tr>
          <td className='theme-border'>
            <h4 className='p-1'>{title}</h4>
          </td>
          <td className='theme-border' />
        </tr>
      </thead>
      <tbody>
        {properties &&
          properties.map((p, i) => (
            <tr key={i} className={styles.row}>
              <td className={`${styles.left} p-1 theme-border`}>{parse(p.label)}</td>
              <td className={`${styles.right} p-1 theme-border`}>{parse(p.value)}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default Table;
