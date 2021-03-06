/* Gruntfile.js
 *
 * A Gruntfile defines automated tasks for the command-line tool grunt. You use a Gruntfile to specify everything that needs
 * to happen for your project to be built. Here, we're configuring grunt to compile our SASS files into CSS as part of the default task.
 * 
 * You can find instructions for installing grunt on your computer here: http://gruntjs.com/installing-grunt
 *
 */

module.exports = function(Grunt) {
	/*
	 * Configuration options for grunt.
	 */
	Grunt.initConfig({
		/*
		 * Tell Grunt where to find the package.json file.
		 * This line is optional, because grunt knows to look for package.json in the project root, but it's good to be explicit.
		 */

		pkg: Grunt.file.readJSON('package.json'),
		/*
		 * Configuration options for grunt-contrib-sass.
		 */
		sass:
			options: {
				/*
				 * Output our CSS in exapanded form so that it's easy to read.
				 * In a production environment, you would want to change this option to compressed, to save space.
				 */
				style: 'expanded'
			}
		}
	});

	Grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['sass']);
}