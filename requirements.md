## Requirements & Configuration

# TypeScript ≥ 5.0

This library uses advanced TypeScript features such as generic types, optional chaining, and recursive types. Ensure your tsconfig.json is targeting at least TypeScript 4.0:

```JSON
{
  "compilerOptions": {
    "target": "es5",
    "module": "amd",
    "strict": true,
    "removeComments": true,
    "noLib": false,
    "sourceMap": true,
    "pretty": true,
    "allowUnreachableCode": false,
    "allowUnusedLabels": false,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noImplicitUseStrict": false,
    "noFallthroughCasesInSwitch": true,
    "allowJs": false,
    "noEmitOnError": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "declaration": true,
    "skipLibCheck": true,
    "outDir": "./dist",
    "declarationDir": "./dist/types",
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "importHelpers": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "newLine": "lf",
    "types": ["node", "vue"],
    "lib": ["es5", "es6", "dom", "es2020.promise"],
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@app/*": ["src/app/*"],
    
    }
  },
  "files": ["./vue-shims.d.ts"],
  "include": ["src", "src/**/*", "src/**/*.ts", "globals.d.ts", "src/**/*.vue", "src/**/*.d.ts"],
  "exclude": ["node_modules", "**/__tests__/*","src/pages"],
  "compileOnSave": false
}
```
##

# Node.js ≥ 19.0

Node.js version 14 or higher is required due to support for modern JavaScript syntax used in development environments.

Linking the Library

To use this library during local development, navigate to tree class and build a version we **uuse *vite* build tool**, then link it locally:
```Terminal
cd your-tree-manager-lib
npm link
```

Now navigate to your project thar consume tree object and set the tree as dependency:
```Terminal
npm link tree
```

## Development Dependencies

These are packages/tools your project uses during development:
| Requirements | Version |
| :----------: | ------: |
| TypeScript   | ≥ 5.0   |
| Node.js      | ≥ 19.0  |

