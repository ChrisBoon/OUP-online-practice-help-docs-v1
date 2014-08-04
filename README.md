# OUP ELT Online Practice Help Docs

## Overview

This project is a web-app containing Help Docs for new Online Ptacice courses.

It will be used by all courses going forward. Features include:
* uses angularjs to pull the help data from json files so separation of content from UI for easy updating.
* Contains full navigation between all help docs.
* Multiple languages will be stored in the same json file for easy updating.
* Each course can have unique content where needed but can otherwise pull from the same files as other courses to remove duplication of work.

The seed contains a sample AngularJS application and is preconfigured to install the Angular
framework and a bunch of development and testing tools for instant web development gratification.

The seed app doesn't do much, just shows how to wire two controllers and views together.


## Dependencies

To reduce repetition of html the project uses .kit files. This filetype was initially invented by the author of CodeKit, but is open source so grunt comipler is vailable for non-mac users:
https://www.npmjs.org/package/grunt-codekit