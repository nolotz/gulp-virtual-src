# Gulp Virtual Source

Create virtual gulp files through a constructor function instead of the usually used `gulp.src()`.


## How to use it?

`npm install gulp-virtual-src`

```js
// gulpfile.js
import gulp from 'gulp'
import virtualSrc from 'gulp-virtual-src'

function dynamicTask() {
    return virtualSrc(
        [
            () => ['readme.md', `# Welcome`]
        ]
    )
        .pipe(anotherGulpPlugin())
        .pipe(gulp.dest('myDestination/'))
}
```