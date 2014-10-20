/*
 * grunt-contrib-watch
 *
 * https://github.com/gruntjs/grunt-contrib-clean
 *
 * Clean files and folders.
 */
module.exports.tasks = {
    clean: {
        build: {
            src: [
                '<%= build_dir %>'
            ]
        }
    }
};
