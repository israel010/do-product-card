###Israel zamora moreno
##Ejemplo

```
import {ProductCard,ProductImage,ProductTitle} from 'do-product-card'
```

```
     <ProductCard
        product={product}
        initialValues={{
          count: 4,
          // maxCount: 10,
        }}
      >
        {({ reset, isMaxCountReached, count, increaseBy }) => (
          <>
            <ProductCard.Image img={product.img} />
            <ProductCard.Title />
            <ProductCard.Buttons className="custom-btn" />
          </>
        )}
      </ProductCard>
```
