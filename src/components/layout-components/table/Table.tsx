import React from 'react';
import styles from './table.module.css';
import parse from 'html-react-parser';

type IProps = {
  title: string | JSX.Element;
  properties: ({ label: string | JSX.Element; value: string | JSX.Element } | undefined)[];
  className?: string;
};

const Table: React.FC<IProps> = ({ title, properties, className = '' }) => {
  return (
    <table className={`w-full glass-bg shadow-md ${styles.table} ${className}`}>
      <thead className='theme-border w-full rounded-md'>
        <tr>
          <th colSpan={2} className='theme-border'>
            <h4 className='p-2 pl-1'>{title}</h4>
          </th>
        </tr>
      </thead>
      <tbody>
        {properties &&
          properties.map((p, i) =>
            p ? (
              <tr key={i} className={styles.row}>
                <td className={`${styles.left} p-1 theme-border`}>{typeof p.label === 'string' ? parse(p.label) : p.label}</td>
                <td className={`${styles.right} p-1 theme-border`}>{typeof p.value === 'string' ? parse(p.value) : p.value}</td>
              </tr>
            ) : undefined
          )}
      </tbody>
    </table>
  );
};
export default Table;
