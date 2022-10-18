import { renderHook } from '@testing-library/react'

import { useViewPort } from './useViewPort';

describe('useViewPort', () => {
  it('should return default values', () => {
    const { result } = renderHook(() => useViewPort())

    expect(result.current).toStrictEqual({ x: 1024, y: 768 });
  });
});