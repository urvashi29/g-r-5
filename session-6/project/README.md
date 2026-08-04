# Student Starter: Inventory Explorer

The application works, but it performs unnecessary calculations, renders components more often than needed, processes every search keystroke immediately, and reacts to every raw scroll event.

## Your task

Improve performance without changing the visible features or user experience.

You are expected to decide where these techniques are appropriate:

- `useMemo`
- `useCallback`
- `React.memo`
- A custom debounce hook
- A custom throttle hook

Do not apply memoization blindly. First reproduce the issue and use the console messages to identify repeated work.

## Run the project

```bash
npm install
npm run dev
```

## Investigation steps

1. Open the browser console.
2. Type quickly in the search field.
3. Click **Add to cart**.
4. Save and unsave one product.
5. Toggle the tips banner.
6. Scroll the page continuously.
7. Observe which calculations, components, and event handlers run repeatedly.

## Completion criteria

- Search filtering waits briefly until the learner pauses typing.
- Expensive derived values do not recalculate for unrelated state changes.
- Unchanged product cards do not re-render unnecessarily.
- Callback props remain stable when their dependencies have not changed.
- Scroll progress remains responsive without handling every raw scroll event.
- All functionality remains correct.
