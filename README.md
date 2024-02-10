# Suburi

素振り用モノリポワークスペース

### Requirements

- [volta](https://volta.sh/)
  - pnpm は volta でインストールします

### Setup

```bash
# ライブラリ等のインストール
pnpm install
```

### Usage

```bash
# `/apps` 配下にプロジェクトを作成する
pnpm generate-app ${プロジェクト名}
```

### Apps and Packages

- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next`
  and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).
