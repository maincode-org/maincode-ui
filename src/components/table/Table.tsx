import React from 'react';
import styles from './table.module.css';

type IProps = {
  title: string;
  properties: { label: string; value: string }[];
};

const Table: React.FC<IProps> = ({ title, properties }) => {
  return (
    <div>
      <table className='w-full glass-bg shadow-md'>
        <tr className={`${styles.border} w-full`}>
          <h2 className='p-1'>{title}</h2>
        </tr>
        {properties &&
          properties.map((p, i) => (
            <tr key={i} className={styles.row}>
              <td className={`${styles.border} ${styles.left} p-1`}>{p.label}</td>
              <td className={`${styles.border} ${styles.right} p-1`}>{p.value}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};
export default Table;
