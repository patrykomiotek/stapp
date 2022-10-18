import { renderHook, act } from '@testing-library/react';
import { useTheme } from './ThemeProvider';

describe('useTheme hook', () => {
  it('should toggle values', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('light');
    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.theme).toBe('dark');
  })
});