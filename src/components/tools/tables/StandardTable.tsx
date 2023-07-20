// Dependencies
import React from 'react';

// Export component
export const StandardTable = () => {
  return (
    <table className={'w-full h-full border-[1px] border-solid'}>
      <thead>
        <th className={'border-[1px] border-solid'}>column1</th>
        <th className={'border-[1px] border-solid'}>column2</th>
        <th className={'border-[1px] border-solid'}>column3</th>
      </thead>
      <tbody>
        <tr>
          <td className={'border-[1px] border-solid'}></td>
          <td className={'border-[1px] border-solid'}></td>
          <td className={'border-[1px] border-solid'}></td>
        </tr>
        <tr>
          <td className={'border-[1px] border-solid'}></td>
          <td className={'border-[1px] border-solid'}></td>
          <td className={'border-[1px] border-solid'}></td>
        </tr>
        <tr>
          <td className={'border-[1px] border-solid'}></td>
          <td className={'border-[1px] border-solid'}></td>
          <td className={'border-[1px] border-solid'}></td>
        </tr>
      </tbody>
    </table>
  );
};
