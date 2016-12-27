# octoberBuilds
<p align="center">
    <img src="https://github.com/octobercms/october/blob/master/themes/demo/assets/images/october.png?raw=true" alt="October" width="25%" height="25%" />
    <span style='font-size: 30px;'> + </span>
    <img src="http://webnician.net/webnicianHub/themes/webnician/assets/images/NewWeb26.png" alt="Webnician Hub" width="25%" height="25%" />
</p>

[October](http://octobercms.com) is a Content Management System (CMS) and web platform whose sole purpose is to make your development workflow simple again. It was born out of frustration with existing systems. We feel building websites has become a convoluted and confusing process that leaves developers unsatisfied. We want to turn you around to the simpler side and get back to basics.

October's mission is to show the world that web development is not rocket science.

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


```shell
php -r "eval('?>'.file_get_contents('https://octobercms.com/api/installer'));"
```

If you plan on using a database, run this command:

```shell
php artisan october:install
```

### Development Team

October was created by [Alexey Bobkov](http://ca.linkedin.com/pub/aleksey-bobkov/2b/ba0/232) and [Samuel Georges](http://au.linkedin.com/pub/sam-georges/31/641/a9), who both continue to develop the platform.

### Foundation library

The CMS uses [Laravel](http://laravel.com) as a foundation PHP framework.

### Contact

You can communicate with us using the following mediums:

* [Follow us on Twitter](http://twitter.com/octobercms) for announcements and updates.
* [Follow us on Facebook](http://facebook.com/octobercms) for announcements and updates.
* [Join us on IRC](http://octobercms.com/chat) to chat with us.

### License

The OctoberCMS platform is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).

### Contributing

Before sending a Pull Request, be sure to review the [Contributing Guidelines](CONTRIBUTING.md) first.

### Coding standards

Please follow the following guides and code standards:

* [PSR 4 Coding Standards](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md)
* [PSR 2 Coding Style Guide](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md)
* [PSR 1 Coding Standards](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md)
