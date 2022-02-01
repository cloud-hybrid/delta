/***
 * File Type
 * ---------
 * ...
 *
 * @Task Implement Workable Class
 *
 */
class File {
    /*** */
    name;
    /*** */
    volume;
    /*** */
    pipe;
    /*** */
    ephemeral;
    /*** */
    file;
    /*** */
    socket;
    /*** */
    link;
    /*** */
    directory;
    constructor() {
        this.name = null;
        this.volume = null;
        this.pipe = null;
        this.ephemeral = null;
        this.file = null;
        this.socket = null;
        this.link = null;
        this.directory = null;
    }
}
export { File };
export default File;
