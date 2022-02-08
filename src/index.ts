// The line below should show a "Relative import paths need explicit file
// extensions..." error in VS Code, but it doesn't. The error is only picked up
// by `tsc` which seems to properly infer the module type.
import { helloWorld } from './example'

helloWorld()
