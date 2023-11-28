import React, { ReactNode } from 'react';

interface ItemProps {
  children: ReactNode;
  isActive: boolean;
}

function Item({ children, isActive }: ItemProps) {
  const activeLinkStyle =
    'rounded-2xl bg-white px-4 capitalize text-black cursor-pointer border border-black';
  const nonActiveLinkStyle =
    'rounded-2xl bg-black px-4 capitalize cursor-pointer border';
  return (
    <div className={isActive ? activeLinkStyle : nonActiveLinkStyle}>
      {children}
    </div>
  );
}

export default function Filters() {
  return (
    <div className='flex gap-3'>
      <Item isActive={true}>All</Item>
      <Item isActive={false}>Infrastructure</Item>
      <Item isActive={false}>payments</Item>
      <Item isActive={false}>defi</Item>
      <Item isActive={false}>mems</Item>
      <Item isActive={false}>web3</Item>
      <Item isActive={false}>gaming</Item>
    </div>
  );
}
