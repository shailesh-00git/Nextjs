# first insatll tanstack

```bash
npm i @tanstack/react-query
```

# then make a root level folder named component

# then make a file inside it named Query-provider.js

"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function QueryProvider({ childern }) {
const client = useState(() => new QueryClient());
return <QueryClientProvider client={client}>{childern}</QueryClientProvider>;
}

# then wrap the whole with Query provider the layout

...<QueryProvider> {children}</QueryProvider>
