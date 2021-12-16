/***
 * @author      Jacob B. Sanders
 * @package     @cloud-technology
 * @summary     Module Exportable
 *
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */
import FS from "fs";
import Path from "path";
import Module from "module";
import { Repository } from "./Installer.js";
/***
 * Compatability (ESM) Replacement for `__dirname` (Common-JS)
 *
 * @type {function(): string}
 * @constructor
 *
 * @example
 *
 * const URI = () => Path.normalize(import.meta.url).replace("file" + ":", "");
 *
 * >>> "index.js"
 *
 */
const URI = () => Path.normalize(import.meta.url).replace("file" + ":", "");
const Directory = () => Path.dirname(URI());
/*** Current Working Directory */
const CWD = Directory();
/*** CI Directory */
const CID = Path.resolve(Path.dirname(CWD));
/*** Package Directory */
const PKD = Path.resolve(Path.dirname(CID));
const Directories = FS.statSync(PKD);
/***
 * Compatability (ESM) Replacement for `require` (Common-JS)
 *
 * @type {NodeRequire}
 * @constructor
 *
 * @example
 *
 * const Import = Module.createImport(URI());
 * const Package = Import("package.json");
 *
 * >>> { "name": "@organization/example", "version": "0.0.1", "...": "..." }
 *
 */
const Import = Module.createRequire(URI());
await Repository();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcGlsZS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiY2kvdXRpbGl0aWVzL0NvbXBpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7R0FPRztBQUVILE9BQU8sRUFBRSxNQUFNLElBQUksQ0FBQztBQUNwQixPQUFPLElBQUksTUFBTSxNQUFNLENBQUM7QUFDeEIsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRzVCLE9BQU8sRUFBVyxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRDs7Ozs7Ozs7Ozs7O0dBWUc7QUFFSCxNQUFNLEdBQUcsR0FBRyxHQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDcEYsTUFBTSxTQUFTLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBRTVDLGlDQUFpQztBQUNqQyxNQUFNLEdBQUcsR0FBVyxTQUFTLEVBQUUsQ0FBQztBQUVoQyxvQkFBb0I7QUFDcEIsTUFBTSxHQUFHLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFcEQseUJBQXlCO0FBQ3pCLE1BQU0sR0FBRyxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBRXBELE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFckM7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUVILE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUUzQyxNQUFNLFVBQVUsRUFBRSxDQUFDIn0=