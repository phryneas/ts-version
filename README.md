# `@phryneas/ts-version`

A little utility type package that allows you to access the current TypeScript version from your types.

```ts
import { TSVersion } from "@phryneas/ts-version";

type Version = `${TSVersion.Major}.${TSVersion.Minor}`;

type VersionDependentType = TSVersion.AtLeast<4, 7> extends true
  ? "we're in the future!"
  : "it's the stone age!";
```
