/***
 * @name        Installer
 * @module      @cloud-technology
 * @summary     .....
 *
 * @author      Jacob B. Sanders
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 *
 * @package     {@link https://github.com/cloud-hybrid/delta @cloud-technology}
 *
 */
declare const Package: () => void;
declare const Install: (directory: string) => void;
declare const System: (directory: string) => void;
declare const Repository: () => Promise<void>;
export { Install, Package, System, Repository };
export default Install;
//# sourceMappingURL=Installer.d.ts.map