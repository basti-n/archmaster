import React from 'react';
import { render } from '@testing-library/react';
import Index from '../pages/index';
import { IArchie } from '@archmaster/shared/types';

const archie: IArchie = {
  weight: 14,
  weightUnit: 'kg',
  dateOfBirth: '05.02.1992',
  food: [],
};

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index {...archie} />);
    expect(baseElement).toBeTruthy();
  });
});
