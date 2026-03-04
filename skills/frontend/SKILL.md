---
name: frontend
description: Implements client-side user interfaces using Next.js 14+ App Router, TypeScript strict mode, Tailwind CSS v3, Shadcn/ui, and Radix UI. Enforces Server vs Client component boundaries, typed props, accessible markup, and integrated form handling. Use for all React/Next.js components, page layouts, data fetching, and styling tasks. Always ask about the existing stack before applying defaults.
---

# Frontend Engineering

## Default Stack (Ask First)
Before applying anything, ask:
> "Can I use the Supernova frontend stack? Next.js 14 (App Router) + TypeScript strict + Tailwind CSS v3 + Shadcn/ui + Radix UI. Or do you have an existing frontend stack I should match?"

If a `package.json` exists with `next`, `react`, or a different framework already installed, detect and match it.

## Progressive Disclosure
- Load `references/nextjs-app-router.md` for advanced App Router patterns (parallel routes, intercepting routes, streaming).
- Load `references/shadcn-components.md` for Shadcn/ui component list and usage patterns.

## SOP: Next.js 14 App Router Implementation

### Step 1 - Project Setup (New Projects Only)
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
npx shadcn@latest init
```

When `shadcn init` prompts:
- Style: Default
- Base color: Slate
- CSS variables: Yes

This creates the `components.json` config. Components are added per-use with `npx shadcn@latest add <component>`.

### Step 2 - App Router File Conventions
Understand and use these special files. Do not create arbitrary layouts:

| File | Purpose |
|---|---|
| `app/layout.tsx` | Root layout - HTML shell, global fonts, providers |
| `app/page.tsx` | Route page component (Server Component by default) |
| `app/loading.tsx` | Streaming skeleton shown during data fetch |
| `app/error.tsx` | Error boundary for the route segment (must be `"use client"`) |
| `app/not-found.tsx` | Custom 404 for the route segment |
| `app/(group)/` | Route group - organizes routes without affecting URL |
| `app/[param]/` | Dynamic route segment |

### Step 3 - Server Component vs Client Component Decision

This is the most important architectural decision in Next.js 14. Default to Server Components:

**Use Server Component when (no `"use client"` directive needed):**
- Fetching data directly (database, ORM, external API)
- Rendering static or session-based content
- Accessing server-only resources (env vars, file system)

**Use Client Component (`"use client"` at top of file) when:**
- Using React hooks (`useState`, `useEffect`, `useRef`, `useContext`)
- Adding event listeners (`onClick`, `onChange`)
- Using browser APIs (`window`, `localStorage`)
- Using Shadcn/ui interactive components (they are all Client Components)

**The boundary rule:** Push `"use client"` as deep into the tree as possible. A parent Server Component can import and render a Client Component, but cannot import a Server Component into a Client Component.

```tsx
// app/dashboard/page.tsx - Server Component (default)
import { DashboardStats } from "@/components/DashboardStats"; // Server Component - data fetch
import { InteractiveChart } from "@/components/InteractiveChart"; // Client Component

export default async function DashboardPage() {
  const stats = await getStats(); // direct DB call - works in Server Component
  return (
    <main>
      <DashboardStats stats={stats} />
      <InteractiveChart /> {/* boundary: "use client" is inside this component */}
    </main>
  );
}
```

### Step 4 - TypeScript Strict Mode Patterns

Enable in `tsconfig.json`:
```json
{ "compilerOptions": { "strict": true } }
```

**Component with typed props:**
```tsx
// components/UserCard.tsx
interface UserCardProps {
  userId: string;
  displayName: string;
  avatarUrl: string | null;
  onRemove?: (userId: string) => void;
}

export function UserCard({ userId, displayName, avatarUrl, onRemove }: UserCardProps) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-lg border border-border">
      <img src={avatarUrl ?? "/default-avatar.png"} alt={`${displayName}'s avatar`} className="h-10 w-10 rounded-full" />
      <span className="text-sm font-medium">{displayName}</span>
      {onRemove && (
        <button onClick={() => onRemove(userId)} aria-label={`Remove ${displayName}`} className="ml-auto">
          Remove
        </button>
      )}
    </div>
  );
}
```

Never use `any`. Use `unknown` + type guard for dynamic shapes. Use `interface` for props, `type` for unions.

### Step 5 - Shadcn/ui Component Usage
Install components as needed, not all at once:
```bash
npx shadcn@latest add button dialog form input table toast
```

Use Shadcn/ui for: forms, modals, dropdowns, tables, toasts, navigation menus. Build custom components on top of Radix UI primitives for headless needs.

```tsx
// Correct Shadcn/ui form pattern with react-hook-form + zod
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = z.object({ email: z.string().email(), password: z.string().min(8) });
type FormData = z.infer<typeof schema>;

export function LoginForm() {
  const form = useForm<FormData>({ resolver: zodResolver(schema) });
  async function onSubmit(data: FormData) { /* call API */ }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField control={form.control} name="email" render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl><Input type="email" {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <Button type="submit" disabled={form.formState.isSubmitting}>Sign In</Button>
      </form>
    </Form>
  );
}
```

### Step 6 - Data Fetching Patterns

**In Server Components (preferred):**
```tsx
async function ProductsPage() {
  const products = await fetch("https://api.example.com/products", { next: { revalidate: 60 } }).then(r => r.json());
  return <ProductList products={products} />;
}
```

**In Client Components (for user-triggered or dynamic data):**
```tsx
"use client";
import { useQuery } from "@tanstack/react-query";

function ProductList() {
  const { data, isLoading } = useQuery({ queryKey: ["products"], queryFn: () => fetch("/api/products").then(r => r.json()) });
  if (isLoading) return <Skeleton />;
  return data.map(p => <ProductCard key={p.id} {...p} />);
}
```

### Step 7 - Tailwind CSS Conventions
```typescript
// tailwind.config.ts - always define semantic colors
import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "hsl(var(--brand))", foreground: "hsl(var(--brand-foreground))" },
      },
    },
  },
} satisfies Config;
```

Use Tailwind utility classes in JSX directly. Do not create custom CSS classes unless animating or working with pseudo-elements that Tailwind cannot express. Avoid `style={{}}` inline styles except for truly dynamic values (e.g., progress bar width).
