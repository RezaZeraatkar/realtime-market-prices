import React from 'react';

const TableHeader = React.memo(({ cols }: { cols: string[] }) => {
  return (
    <thead>
      <tr className='border border-[#08397E] bg-gradient-to-r from-custom-green from-20% via-black to-black'>
        {cols.map((col) => (
          <td key={col} className='px-2 py-1'>
            {col}
          </td>
        ))}
      </tr>
    </thead>
  );
});

export default TableHeader;
