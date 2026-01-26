# Commit messages

Commit messages should follow the [Conventional Commits](https://conventionalcommits.org) specification:

```markdown
<type>[optional scope]: <description>
```

## Allowed `<type>`

- `chore`: any repository maintainance changes
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

## `<description>` rules

- should be written in English
- should be in imperative mood (like `change` instead `changed` or `changes`)
- should not be capitalized
- should not have period (`.`) at the end

## Commit message examples

```bash
docs: fix typo in npm-react
fix(core): add check for atoms with equal ids
```
