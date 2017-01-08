# octoberBuilds
<div align="center">
    <img src="https://github.com/octobercms/october/blob/master/themes/demo/assets/images/october.png?raw=true" alt="October" width="25%" height="25%" />
    <img src="http://webnician.net/webnicianHub/themes/webnician/assets/images/NewWeb26.png" alt="Webnician Hub" width="45%" height="25%" />
</div>


[October](http://octobercms.com) is a modern Content Management System (CMS) and web platform.  
[Webnician Hub](http://webnicianhub.com) is a web development studio. 
Included in this package, are some tools we use to streamline development using October CMS.

[![Build Status](https://travis-ci.org/octobercms/october.svg?branch=develop)](https://travis-ci.org/octobercms/october)
[![License](https://poser.pugx.org/october/october/license.svg)](https://packagist.org/packages/october/october)


##About this Package
This package includes October CMS with a bare bones, Webnician theme and build tools to ease the construction of a more built out custome theme

###Requirements : 
1.  For local development, this package requires a local web server running a minimum of php 5.6
2.  <a href='https://nodejs.org/en/'>Node.js</a>.  This will be used for the npm package manager
3.  <a href='https://getcomposer.org/'>Composer</a> dependency manager.  This will be used for the October commands
4. <a href='https://git-scm.com/'> git cli</a> are the GIT command line tools.  These will be used for cloning the project.  Also this project can be downloaded from the GitHub page

###Getting started
1. Install the previously mentioned requirements
2.  <a href='https://github.com/Webnician/octoberBuilds.git'>Clone</a> the package here : https://github.com/Webnician/octoberBuilds
3.  Create a local database. Navigate to config/database and configure the database connection.  Normally this will be MySql.  Enter local DB name and Password
4.  Navigate to the project directory created in step 2.  Run 'composer install' to install the needed dependencies  
5. Run 'php artisan october:up' in the main project directory. This will create the needed database files 
6. navigate to the themes/webnician directory and run npm install.  This will install the node dependencies needed to run the build tools
7. Naviagte to the gulpfile.js in the theme dirctory.  Here, browsersync will have to be configured to work with your local webserver.  
there will entries for host and proxy, set these to match the localhost configured in step 1

###Using the build tools
-    The build tools use gulp to run browsersync, transpile scss into css, minify javascript, and backup your project.
 
- To use these tools, run the command 'gulp' which will start a local webserver, and the browser will refresh when making code changes.
This will also watch the javascript and scss files, compile/transpile them and make them available for use in the project.
 
- Any additionally needed javascript files needed can be placed in the assets/js folder and they will be concatented and minified and added
to functions.min.js.  Scss files in the styles folder will be transpiled and added as css files in the styles/css directory.

- The 'gulp gzip-tar' command will back up the entire project.

- The included theme uses Foundation 6 for UI elements and the layout


for any questions regarding the build tools or the package contact us at <a href='mailto:olaf@webnicianhub.com'>Webnician</a>

### Coding standards

Please follow the following guides and code standards:

* [PSR 4 Coding Standards](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md)
* [PSR 2 Coding Style Guide](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md)
* [PSR 1 Coding Standards](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md)
