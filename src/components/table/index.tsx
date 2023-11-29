import React from 'react';
import { ICoin } from '../../types/ICoin';

import { LineWave } from 'react-loader-spinner';

import TableHeader from './TableHeader';
import { TableRow } from './TableRow';

export default function Table({
  data,
  cols,
  currentItems,
  loading,
}: {
  data: ICoin;
  currentItems?: string[];
  loading: boolean;
  cols: string[];
}) {
  return (
    <div className='w-full'>
      <table className='relative w-full'>
        <TableHeader cols={cols} />
        {loading ? (
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1 transform'>
            <LineWave
              height='100'
              width='100'
              color='white'
              ariaLabel='line-wave'
              wrapperStyle={{}}
              wrapperClass=''
              visible={true}
              firstLineColor=''
              middleLineColor=''
              lastLineColor=''
            />
          </div>
        ) : (
          <tbody>
            {data &&
              currentItems?.map((coinSymbol) => {
                const coin = data.data[coinSymbol];
                return <TableRow coinSymbol={coinSymbol} coin={coin} />;
              })}
          </tbody>
        )}
      </table>
    </div>
  );
}
