# DjinTech

**English** | [Русский](./README.ru.md)

A modern, production-ready Next.js application built with TypeScript, following Feature-Sliced Design (FSD) architecture principles.

## 🤝 Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct and commit message conventions.

## 🛠️ Tech Stack

### Core

- **[Next.js 16.1.4](https://nextjs.org)** - React framework for production
- **[React 19.2.3](https://react.dev)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org)** - Type safety

### State Management & Data Fetching

- **[Zustand 5.0](https://zustand-demo.pmnd.rs)** - Lightweight state management
- **[TanStack Query 5.90](https://tanstack.com/query)** - Server state management
- **[Axios 1.13](https://axios-http.com)** - HTTP client

### Forms & Validation

- **[React Hook Form 7.71](https://react-hook-form.com)** - Performant forms
- **[Zod 4.3](https://zod.dev)** - TypeScript-first schema validation
- **[@hookform/resolvers 5.2](https://github.com/react-hook-form/resolvers)** - Form validation resolvers

### Internationalization

- **[i18next 25.8](https://www.i18next.com)** - i18n framework
- **[react-i18next 16.5](https://react.i18next.com)** - React integration
- **[i18next-browser-languagedetector 8.2](https://github.com/i18next/i18next-browser-languageDetector)** - Language detection

### Styling

- **[Sass 1.97](https://sass-lang.com)** - CSS preprocessor
- **[clsx 2.1](https://github.com/lukeed/clsx)** - Utility for constructing className strings

### Code Quality

- **[ESLint 9](https://eslint.org)** - JavaScript/TypeScript linting
- **[Prettier 3.8](https://prettier.io)** - Code formatting
- **[Stylelint 17](https://stylelint.io)** - CSS/SCSS linting
- **[TypeScript ESLint 8.53](https://typescript-eslint.io)** - TypeScript linting rules

### Development Tools

- **[Storybook 10](https://storybook.js.org/)** - UI documentation and component playground
- **[Husky 9](https://github.com/typicode/husky)** - Git hooks for enforcing code quality
- **[lint-staged 16](https://github.com/lint-staged/lint-staged)** - Run linters on staged files
- **[React Query Devtools](https://tanstack.com/query/v5/docs/framework/react/devtools)** - Development tools for TanStack Query

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

```bash
# Development
pnpm dev                    # Start development server
pnpm storybook              # Start Storybook on port 6006

# Build
pnpm build                  # Build for development
pnpm build:production       # Alias for production build
pnpm build-storybook        # Build Storybook static site
pnpm start                  # Start production server

# Code Quality
pnpm lint                  # Run ESLint
pnpm lint:fix              # Fix ESLint issues
pnpm format                # Check code formatting
pnpm format:fix            # Fix code formatting
pnpm stylelint             # Lint styles
pnpm stylelint:fix         # Fix style issues
pnpm prepare               # Install Git hooks (runs automatically)
```

## 🏗️ Project Structure

This project follows the **[Feature-Sliced Design (FSD)](https://feature-sliced.design)** methodology, an architectural methodology for frontend projects.

### Layer Hierarchy

Lower layers can only be used by layers above them in the hierarchy:

### `shared 🡒 entities 🡒 features 🡒 widgets 🡒 views 🡒 app`

**Rule:** Each layer can import only from layers below it. Cross-imports within the same layer are forbidden.

```text
├── public/                       # static files (icons, images, etc.)
│   ├── favicon-dark.svg
│   ├── favicon-light.svg
│   └── ...
├── src/
│   ├── app/                      # Next.js App Router (routing & layouts)
│   │   ├── (auth)/
│   │   ├── dashboard/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── views/                    # view compositions (connects widgets, features, entities)
│   │   ├── home/
│   │   ├── login/
│   │   ├── userProfile/
│   │   └── ...
│   ├── widgets/                  # composite UI blocks (header, footer, sidebar, etc.)
│   │   ├── header/
│   │   ├── footer/
│   │   └── ...
│   ├── features/                 # user interactions (login, logout, toggleTheme, etc.)
│   │   ├── auth/
│   │   ├── theme/
│   │   └── ...
│   ├── entities/                 # business entities (user, product, session, etc.)
│   │   ├── user/
│   │   ├── product/
│   │   └── ...
│   └── shared/                   # reusable infrastructure (no business logic)
│       ├── api/
│       ├── assets/
│       ├── components/
│       ├── configs/
│       ├── fonts/
│       ├── hooks/
│       ├── icons/
│       ├── styles/
│       ├── translations/
│       ├── types/
│       └── utils/
├── .editorconfig
├── eslint.config.mjs
├── next.config.ts
├── package.json
└── ...
```

### FSD Layer Guidelines

#### **App Layer** (`src/app/`)

Next.js App Router - routing and layouts only:

- Route segments (folders with `page.tsx`)
- Layouts (`layout.tsx`)
- Route groups with `(groupName)` for organization
- Loading and error states
- **No business logic** - only imports from other layers

Example:

```tsx
// app/dashboard/page.tsx
import {DashboardView} from '@/views/dashboard';

export default function Dashboard() {
  return <DashboardView />;
}
```

#### **Views Layer** (`src/views/`)

Page compositions - connects widgets, features, and entities:

- One folder per page (e.g., `home/`, `login/`)
- Contains only UI composition
- Manages page-level state if needed
- No routing logic (handled by `app/`)

**Segments**: `ui/`, `model/` (optional)

Example structure:

```text
views/
└── home/
    ├── ui/
    │   ├── Home.tsx
    │   └── Home.module.scss
    ├── model/                    # Optional: page-level state
    │   └── useHomeData.ts
    └── index.ts                  # Public API: export { default } from './ui/Home'
```

#### **Widgets Layer** (`src/widgets/`)

Large composite blocks - self-contained UI sections:

- Header, Footer, Sidebar, Navigation
- Complex forms and modals
- Dashboard widgets and cards
- Composed from features, entities, and shared components

**Segments**: `ui/`, `model/`, `api/`, `lib/`, `config/`

Example structure:

```text
widgets/
└── header/
    ├── ui/
    │   ├── Header.tsx
    │   └── Header.module.scss
    ├── model/                    # Optional: widget state
    │   └── useHeaderState.ts
    └── index.ts                  # Public API: export { Header } from './ui/Header'
```

#### **Features Layer** (`src/features/`)

User interactions - complete user scenarios:

- Authentication (login, register, logout)
- Product actions (add to cart, add to favorites)
- Content management (create post, edit comment)
- Each feature is isolated and reusable

**Segments**: `ui/`, `model/`, `api/`, `lib/`, `config/`

Example structure:

```text
features/
└── auth/
    └── login/
        ├── ui/
        │   ├── LoginForm.tsx
        │   └── LoginForm.module.scss
        ├── model/
        │   └── loginStore.ts
        ├── api/
        │   └── loginApi.ts
        └── index.ts              # Public API: export { LoginForm } from './ui/LoginForm'
```

#### **Entities Layer** (`src/entities/`)

Business entities - domain models:

- User, Product, Order, Cart, etc.
- Data models, API methods, stores
- Reusable UI for displaying entities
- No feature-specific logic

**Segments**: `ui/`, `model/`, `api/`, `lib/`, `config/`

Example structure:

```text
entities/
└── user/
    ├── ui/
    │   ├── UserCard.tsx
    │   └── UserAvatar.tsx
    ├── model/
    │   ├── userStore.ts
    │   └── user.types.ts
    ├── api/
    │   └── userApi.ts
    └── index.ts                  # Public API: export * from './ui'; export * from './model'
```

#### **Shared Layer** (`src/shared/`)

Reusable infrastructure - no business logic:

- **components/**: UI kit (Button, Input, Modal)
- **hooks/**: Custom React hooks (useDebounce, useMediaQuery)
- **utils/**: Helper functions (formatDate, cn, validators)
- **styles/**: Global styles, variables, mixins
- **configs/**: App-wide configurations
- **types/**: Common TypeScript types
- **translations/**: i18n language files
- **icons/**: Icon components
- **assets/**: Static files (images, fonts)

**Note**: In `shared/`, each subfolder (components, hooks, utils, etc.) can have `index.ts` for convenient exports.

Example structure:

```text
shared/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.module.scss
│   │   └── index.ts            # export { Button } from './Button'
│   └── index.ts                # export { Button } from './Button'
└── utils/
    ├── cn.ts
    ├── formatDate.ts
    └── index.ts                # export * from './cn'; export * from './formatDate'
```

### 📦 Public API Pattern (index.ts)

**Every slice should have `index.ts`** that exports only what other layers need:

```typescript
// features/auth/login/index.ts
export {LoginForm} from './ui/LoginForm';
export {useLogin} from './model/useLogin';
// Don't export internal implementation details
```

**Benefits:**

- ✅ Clear public API for each slice
- ✅ Easy refactoring of internal structure
- ✅ Prevents importing internal implementation
- ✅ Clean imports: `import { LoginForm } from '@/features/auth/login'`

**Where to use index.ts:**

- ✅ Root of each slice (e.g., `features/auth/login/index.ts`)
- ✅ `shared/components/index.ts`, `shared/utils/index.ts`, etc.
- ❌ Not needed inside segments (ui/, model/, api/)

### Import Rules

Follow these import rules to maintain layer independence:

```text
app → views → widgets → features → entities → shared
  ↓      ↓        ↓         ↓          ↓         ↓
Can import from layers below only
```

**Examples:**

- ✅ `views/home` can import from `widgets`, `features`, `entities`, `shared`
- ✅ `features/login` can import from `entities/user`, `shared/components`
- ❌ `entities/user` **cannot** import from `features/login`
- ❌ `shared/components` **cannot** import from `entities/user`

## 🎨 Component Development

### Storybook

Document and test components in isolation:

```bash
pnpm storybook              # Start Storybook dev server
pnpm build-storybook        # Build static Storybook
```

Create stories alongside components:

```text
shared/
└── components/
    └── Button/
        ├── Button.tsx
        ├── Button.module.scss
        ├── Button.stories.tsx      # ← Storybook stories
        └── index.ts
```

## 🚢 Deployment

This project includes Docker and CI/CD configurations:

- `Dockerfile` - Container configuration
- `Jenkinsfile` - CI/CD pipeline
- `deployment.yaml` - Kubernetes deployment
- `nginx.conf` - Nginx configuration

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Feature-Sliced Design](https://feature-sliced.design)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
