# Contribution

**English** | [Русский](./CONTRIBUTING.ru.md)

This document describes guidelines for contributing to the project, including commit messages, code style, and file naming conventions.

## Project Git Flow

### Branches

- "development" — main working branch (default)
- "main" — production-ready branch

### Developer Workflow

1. Clone the repository and switch to "development".
2. Create a feature branch from "development" (e.g., "feature/DT-123").
3. Develop, test locally, build the project, and push changes.
4. Open a Pull Request (PR) from your feature branch to "development".
5. Move the related task in Jira to the **Review** column.
6. After review and approval, merge the PR into "development".
   > Keep your branch synced with "development" to avoid conflicts.

### Release / Team Lead

1. Create a PR from "development" → "main".
2. CI/CD performs:
   - testing
   - project build
   - image creation
   - push to DockerHub
   - deployment to Kubernetes
3. Tasks in Jira that were merged into "development" move to **Testing** and testers are notified.
4. Tester:
   - if no bugs — move task to **Ready for Release**
   - if bugs — move task to **Stabilization**
5. For bugs, the developer creates a new branch from "development" with a suffix (e.g., "DT-123-2") and repeats the workflow.
6. When testing is successful, merge code into "main" and move the Jira task to **Done**.

### Best Practices

- Merge into "development" only after coordination
- Keep "development" always stable and up-to-date
- Prefer small, frequent releases
- Developers should sync "development" into their branch daily
- Ensure all tests pass before merging

## 📋 Commit Messages

Commit messages should follow the [Conventional Commits](https://conventionalcommits.org) specification:

```markdown
<type>[optional scope]: <description>
```

### Allowed `<type>`

- `chore`: any repository maintenance changes
- `feat`: code change that adds a new feature
- `fix`: bug fix
- `perf`: code change that improves performance
- `refactor`: code change that is neither a feature addition nor a bug fix nor a performance improvement
- `docs`: documentation only changes
- `ci`: a change made to CI configurations and scripts
- `style`: cosmetic code change
- `test`: change that only adds or corrects tests
- `revert`: change that reverts previous commits

## Allowed `<scope>`

Package directory name. Eg: `/packages/effects` is scoped as `effects`.

### `<description>` Rules

- should be written in English
- should be in imperative mood (like `change` instead of `changed` or `changes`)
- should not be capitalized
- should not have period (`.`) at the end

### Commit Message Examples

### Examples

```bash
docs: fix typo in README
fix(auth): add validation for login form
feat(user): add user avatar component
refactor(shared): simplify cn utility function
chore(deps): update next to 16.1.4
```

## 📁 File Naming Conventions

| Category               | Format                                   | Examples                                           |
| ---------------------- | ---------------------------------------- | -------------------------------------------------- |
| **Components**         | PascalCase                               | `UserCard.tsx`, `Button.tsx`, `LoginForm.tsx`      |
| **Hooks**              | camelCase with `use` prefix              | `useAuth.ts`, `useDebounce.ts`, `useMediaQuery.ts` |
| **Utilities**          | camelCase                                | `formatDate.ts`, `validateEmail.ts`, `cn.ts`       |
| **Stores** (Zustand)   | camelCase with `Store` suffix            | `authStore.ts`, `userStore.ts`                     |
| **API files**          | camelCase with `Api` suffix              | `authApi.ts`, `userApi.ts`                         |
| **Types / Interfaces** | PascalCase for types, dot.case for files | `User.ts`, `ButtonProps.ts`, file: `auth.types.ts` |
| **Constants**          | UPPER_SNAKE_CASE                         | `MAX_LENGTH = 100`, `API_URL`                      |
| **Styles (SCSS)**      | Match component name                     | `Button.module.scss`, `Header.module.scss`         |
| **Config files**       | camelCase with `.config` suffix          | `app.config.ts`, `api.config.ts`                   |
| **Views**              | Folder: camelCase,                       | Folder: `home/`, `userProfile/`,                   |
|                        | Component: PascalCase + View suffix      | Component: `HomeView`, `UserProfileView`           |

---

Thank you for contributing! 🎉
