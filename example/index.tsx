import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../.';

export const product = {
  id: '1',
  title: 'Coffee mug -card',
  // img: "./coffee-mug.png",
};
const App = () => {
  return (
    <ProductCard
      product={product}
      initialValues={{
        count: 4,
        // maxCount: 10,
      }}
    >
      {({ reset, isMaxCountReached, count, increaseBy }) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </>
      )}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
