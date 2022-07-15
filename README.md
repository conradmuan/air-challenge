Repo for Air coding challenge. Will be marked private in a couple of days.

Note about the `react-virtualized-auto-sizer` dependency:

It seems that `react-virtualized-auto-sizer` doesn't support React 18 which Next.js ships with. See issue at https://github.com/bvaughn/react-virtualized-auto-sizer/pull/40#issuecomment-1182478486

To get around this, I've listed a fork as the dependency instead

```json
  "dependencies": {
    "@ashlar-packages/react-virtualized-auto-sizer": "https://github.com/Ashlar/react-virtualized-auto-sizer",
  }
```

## Scripts

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

```
npm test
```

This will run a headless e2e test with cypress. See specs in `cypress/e2e`
