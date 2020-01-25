/**
 * Use this instead of gulp.src to create virtual files
 *
 * import virtual from 'gulp-virtual-src'
 *
 * const task = () => virtual(
 *  () => ['file.js', 'content']
 * ).pipe(gulp.dst('...'))
 */

const toThrough = require('to-through');
const File = require('vinyl');
const { Readable } = require('stream');

/**
 * @param {Function|Array<Function>} func 
 */
module.exports = function virtual(func) {
    const funcs = Array.isArray(func) ? func : [func];

    return toThrough(
        Readable.from(
            funcs
                .map(func => func())
                .map(([path, contents]) => 
                    new File({ 
                        path, 
                        contents: Buffer.from(contents)
                    })
                )
        )
    );
}
