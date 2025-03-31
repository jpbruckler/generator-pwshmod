# generator-pwshmod

A Yeoman generator to scaffold a clean PowerShell module structure.

## Usage

```bash
npm install -g git+https://github.com/<your-username>/generator-pwshmod.git
yo pwshmod
```

## Output Structure

```
<ModuleName>/
├── README.md
├── docs/
└── src/
    ├── Classes/
    ├── Private/
    ├── Public/
    └── testing/
        ├── integration/
        └── unit/
            ├── private/
            └── public/
```
