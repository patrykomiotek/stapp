import { useViewPort } from '@hooks/useViewPort';

const Viewport = () => {
  const size = useViewPort();

  return (
    <div>
      <p>X: {size.x} Y: {size.y}</p>
    </div>
  );
}

export { Viewport };
