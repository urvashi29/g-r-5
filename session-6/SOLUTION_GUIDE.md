# Solution Guide

## Scenario

The application is a product inventory explorer containing 1,500 generated products. It is intentionally functional but inefficient. Learners should first diagnose the problems through console output, then make focused changes without changing visible behavior.

## Exact file changes

| Objective | Starter file(s) | Intended change |
|---|---|---|
| Debounce search input | `src/App.jsx`; create `src/hooks/useDebouncedValue.js` | Debounce `searchTerm` by about 350 ms and use the debounced value for filtering. Keep the input itself responsive. |
| Memoize expensive filtering and sorting | `src/App.jsx` | Wrap `getVisibleProducts(...)` in `useMemo`. Dependencies: debounced search term, category, maximum price, and sort order. `products` is module-level static data and does not need to be a dependency. |
| Memoize derived summary | `src/App.jsx` | Wrap `calculateSummary(visibleProducts)` in `useMemo` with `visibleProducts` as the dependency. |
| Stabilize callback props | `src/App.jsx` | Wrap favorite, cart, and tips handlers in `useCallback`. Use functional state updates so the dependency arrays can remain empty. |
| Prevent unchanged card renders | `src/components/ProductCard.jsx` | Import `memo`, define the component normally, and export `memo(ProductCard)`. This becomes effective only after callback props are stable. |
| Prevent unnecessary list renders | `src/components/ProductList.jsx` | Export `memo(ProductList)`. Its props can now remain stable during unrelated state updates. |
| Prevent unnecessary summary renders | `src/components/SummaryPanel.jsx` | Export `memo(SummaryPanel)`. Its `summary` prop stays stable because the summary object is memoized. |
| Throttle high-frequency scroll work | `src/components/ScrollProgress.jsx`; create `src/hooks/useThrottledCallback.js` | Replace the raw scroll handler with a stable throttled callback, for example one update per 100 ms. Register the listener as passive and clean it up. |

## Reference solution snippets

### 1. Debounced value hook

```jsx
import { useEffect, useState } from 'react';

export default function useDebouncedValue(value, delay = 350) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setDebouncedValue(value), delay);
    return () => window.clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
}
```

### 2. App-level memoization

```jsx
const debouncedSearchTerm = useDebouncedValue(searchTerm, 350);

const visibleProducts = useMemo(
  () => getVisibleProducts(products, debouncedSearchTerm, category, maxPrice, sortBy),
  [debouncedSearchTerm, category, maxPrice, sortBy],
);

const summary = useMemo(
  () => calculateSummary(visibleProducts),
  [visibleProducts],
);
```

### 3. Stable callbacks

```jsx
const handleToggleFavorite = useCallback((productId) => {
  setFavoriteIds((currentIds) => {
    const nextIds = new Set(currentIds);
    if (nextIds.has(productId)) nextIds.delete(productId);
    else nextIds.add(productId);
    return nextIds;
  });
}, []);

const handleAddToCart = useCallback(() => {
  setCartCount((currentCount) => currentCount + 1);
}, []);
```

### 4. Memoized child component

```jsx
import { memo } from 'react';

function ProductCard(props) {
  // Existing component body
}

export default memo(ProductCard);
```

### 5. Throttled callback hook

The supplied reference solution stores the latest callback in a ref, returns a stable function through `useCallback`, supports both leading and trailing execution, and clears pending timers during unmount.

## What learners should observe

### Before optimization

- Every search keystroke immediately runs the expensive filter and summary calculations.
- Clicking **Add to cart** or toggling the tips banner reruns both expensive calculations.
- Product list and visible product cards rerender after unrelated parent state changes.
- The raw scroll handler runs many times during one continuous scroll.

### After optimization

- The input changes immediately, but filtering starts only after the debounce delay.
- Toggling tips or adding to cart does not rerun catalogue calculations.
- Adding to cart does not rerender unchanged product cards.
- Toggling one favorite should rerender only the affected visible card, while the list itself rerenders because the `favoriteIds` set changes.
- Scroll updates occur at a controlled rate while the progress bar remains responsive.

## Important teaching discussion

### `useMemo` is for a cached value

Use it here because filtering 1,500 records includes intentionally expensive work and the result is reused by multiple parts of the UI. It should not be presented as something to add to every calculation.

### `useCallback` is for a stable function reference

It matters here because the callbacks are passed to memoized child components. Using `useCallback` without a consumer that benefits from stable identity may add complexity without benefit.

### `React.memo` compares props shallowly

`React.memo(ProductCard)` alone is not enough if the parent creates new callback functions on each render. Learners should understand the relationship between memoized children and stable props.

### Debounce and throttle solve different problems

- Debounce waits until calls stop for a chosen delay. It suits search input because the final value matters most.
- Throttle limits execution frequency during a continuous stream. It suits scrolling because periodic updates are still required.

### React Strict Mode

Development Strict Mode may intentionally invoke renders and calculations more than once to help expose accidental impurities. Ask learners to compare patterns rather than expecting every console counter to increase exactly once.

### Current React note

Modern React documentation notes that React Compiler can reduce some manual memoization needs. This lab intentionally uses a traditional Vite setup without React Compiler so learners can understand the mechanics and trade-offs of `useMemo`, `useCallback`, and `memo` directly.

## Suggested assessment rubric

| Criterion | Marks |
|---|---:|
| Correct diagnosis of repeated expensive work | 2 |
| Correct `useMemo` dependencies | 2 |
| Correct `useCallback` usage with functional updates | 2 |
| Appropriate `React.memo` usage | 2 |
| Working debounce hook with cleanup | 3 |
| Working throttle hook with cleanup and stable identity | 3 |
| No visible functionality regression | 2 |
| Explanation of why each optimization is appropriate | 4 |
| **Total** | **20** |

## Optional extension challenges

1. Use React DevTools Profiler to compare commits before and after optimization.
2. Add a render-count badge to each visible product card.
3. Explain why memoizing `SearchBar` provides limited value while its controlled `value` changes on every keystroke.
4. Move search state into `SearchBar` and debounce the outward callback instead of debouncing a value in `App`.
5. Replace the artificial expensive loop with a realistic large-data transformation and compare results.
