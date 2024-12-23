This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Here's an improved version of your README with clearer instructions and corrected formatting:

---

# Firebase Function Setup

## Prerequisites

1. **Login to Firebase:**

   Before using Firebase functions locally, make sure you're logged in to Firebase:

   ```bash
   firebase login
   ```

2. **Running Firebase Functions Locally:**

   To serve Firebase functions locally, use the following command:

   ```bash
   npm run serve
   ```

---

## Environtment (ENV)

```
NEXT_PUBLIC_FIREBASE_API=""
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""
NEXT_PUBLIC_FIREBASE_PROJECTID=""
NEXT_PUBLIC_FIREBASE_URL_APIS=""
```

## Note

- **Configuration Compatibility:**  
  The configuration may not be fully compatible with Firebase Functions due to potential version differences between the TypeScript versions required by Firebase and Next.js. 

