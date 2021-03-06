import React from 'react';
import styles from './table.module.css';
import parse from 'html-react-parser';

type IProps = {
  title: string | JSX.Element;
  leftWidthPct?: number;
  properties: ({ label: string | JSX.Element; value: string | JSX.Element } | undefined)[];
  className?: string;
};

const Table: React.FC<IProps> = ({ title, leftWidthPct, properties, className = '' }) => {
  return (
    <table className={`w-full glass-bg shadow-md ${styles.table} ${className}`}>
      <thead className='theme-border w-full rounded-md'>
        <tr>
          <th colSpan={2} className='theme-border'>
            <h4 className='p-8 pl-4'>{title}</h4>
          </th>
        </tr>
      </thead>
      <tbody>
        {properties &&
          properties.map((p, i) =>
            p ? (
              <tr key={i} className={styles.row}>
                <td style={{ width: `${leftWidthPct ?? 20}%` }} className='p-4 theme-border'>
                  {typeof p.label === 'string' ? parse(p.label) : p.label}
                </td>
                <td style={{ width: `${leftWidthPct ? 100 - leftWidthPct : 80}%` }} className='p-4 theme-border'>
                  {typeof p.value === 'string' ? parse(p.value) : p.value}
                </td>
              </tr>
            ) : undefined
          )}
      </tbody>
    </table>
  );
};
export default Table;
