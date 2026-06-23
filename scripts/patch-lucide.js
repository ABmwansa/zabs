#!/usr/bin/env node
// Patches lucide-react@1.x package.json to add the missing "types" field.
// Needed because the package ships types under "typings" which moduleResolution:"bundler" ignores.
const fs = require('fs');
const path = require('path');

const pkgPath = path.join(__dirname, '..', 'node_modules', 'lucide-react', 'package.json');
if (!fs.existsSync(pkgPath)) { console.log('lucide-react not found, skipping patch'); process.exit(0); }

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
if (pkg.types) { console.log('lucide-react already has types field, nothing to do'); process.exit(0); }

pkg.types = 'dist/lucide-react.d.ts';
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
console.log('Patched lucide-react: added types =>', pkg.types);
