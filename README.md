# OUP ELT Online Practice Help Docs

## Overview

This project is a web-app containing Help Docs for new Online Pracice courses.

The Help Docs are used on all 3.0+ sites.
* uses AngularJS front-end to display docs written in JSON format for separation of content from UI for easy updating.
* Contains full navigation between all help docs.
* Each help doc has a distinct URL which allows for direct linking to a particular doc.
* Multiple languages are be stored in the same json file for easy updating - tradeoff is JSON file size increases for users.
* Each course can have unique content where needed but can otherwise pull from standardized Adult or Primary content banks to remove duplication of work.
* The site is fully responsive and works on all modern devices and web browsers (current oldest supported browser of Help Docs is IE9 - actual OP platform currently supports nothing older than IE11).
* Specific print styles are included for better layout when printing.
* RTL support is included. This flips most content within the pages (eg arrows on accordions move to the left side) but the TOC position remains on the left edge.

## Workflow
* Authoring, Translating, inputting content, coding, and bug-fixing are currently handled via OUP.
* Authoring is currently done by Editorial
* Translations are commissioned ffrom 3rd-party suppliers, either via Editorial or Content Production.
* Inputting content (as images and JSON) is handled either by Content Production or Digital Design.
* Bug-fixing and upgrades are handled by Digital Design.
* Releases are handled by Digital Design.
* Initial testing and approving is done on OUP hosted server. Once approved a 'release' is created (along with release notes) and sent to Ingram for hosting and integrating with the Online Practice platform.

## Document abilities

### Welcome page
Each course has a 'welcome page' that appears at the root URL. Unlike the main help docs this page is created as a .kit file and compiled to HTML. The content is usually generic, with only the Product Name changing (handled as a variable in the .kit template) eg. Welcome to {PRODUCT NAME} Help. Other ocntent on the page includes how to navigate the docs, how to contact customer, support, and what browsers the platform supports.

### FAQ page
Each course has an FAQ page. Unlike the main help docs this page is created as a .kit file and compiled to HTML. The content follows a basic Q and A list format and is entirely text based on all courses so far. This is not a technical imitation however - just an Editorial choice.

### Table of Contents (TOC)/Navigation panel.
To Navigate to different Help docs the user opens a slide oout panel on the left side of the screen.
This includes a number of links - the Welcome page at the top, the FAQ at the bottom, and the main help docs in between.
* Each course can choose what docs appear in here.
* The list can be include 'accordion behavior' that allows the Editor to group documents into titled sections. This can go up to two tiewrs deep. Some courses with few items have chosen to use no accordions, some go one level deep, and others go two deep. It is possible to have a hybrid approach - which is something iQ does. The documents are broken into 3 sections - Student, Teacher, Admin. The Student and Teacher sections are further divided into more sections whereas the Admin section is not. Similarly Smart Choice On the Move has one documet at a 'top level', not in any accordion section, and then 3 accordion sections.
* As with almost all text the titles in this menu include internationalization.

### Main Help Docs
* Each doc must have a Main Heading. Tis usually matches the title in the TOC, but not always. For example a help doc Heading may be 'Teacher Registration', but becuase the link to it sits inside the 'Teacher' accordion, the link text may simply be 'Registration'.
* A document contains one or more pages.
* A page includes one image - usually this is a screenshot.
* A page includes an area for text.
* A page has an optional Page heading.
* The text on each page is added as a numbered list. If there are multiple pages, the Author can decide whether the numbers should start again on a new page or whether they can continue. There are two reasons an Author may wish to start them over - if  the pages represent different tasks that you wouldn't necessarily do as a single 'flow', or if there are many pages and sentences, which could otherwise cause the number to reach 20 or 30.
* The Author can decide to include a correspoding number on the screenshot for each text item. To do this the autor sets a position for the number to appear in the JSON file (eg 33, 75 would place a number 1/3rd of the way across the image and 3/4 down). If these are included clicking the text highlights the associated number on the screenshot and vice versa.
* The text can include HTML content. For example in Smart Choice On The Move this was used to include OTM icons inline in the text itself, and for adding 'strong' tags around words. It could also be used to include a direct link from one help doc to another but as yet no Author has done this. 

## Languages
* All documents must include English.
* A document can also contain other languages.
* Each course can choose which languages it includes for users. This does not affect the dat transmitted to the user. So if a document is available in English, Greek, and Swedish, but a course using it chooses only to expose English and Swedish, the Greek text will still exist in the data they recieve. However they will not be able to choose to view it in Greek - the UI element for switching langauge will not have Greek as an option.
* A course cannot include a Help doc if the course has enabled languages that are not included in the doc.
* When a user chooses a language we save their preference in LocalStorage, so as long as they use the same browser to come back to the site it will start in that language for them.
* The Help doc language does not currently pick up on the language chosen by the user during registration, but this could be added fairly easily.

## Accessibility
The site does not currently meet WCAG AA accessibility recommendations. It would be possible to address this with a fairly limited rewrite of the front-end.

## Dependencies

To create the site the developer (OUP) must run a Grunt task that does the following:

### CSS: 
* Converts SCSS to CSS
* Adds browser-specific vendor-prefixes where required
* Minifies the CSS and performs other optimizations

### HTML:
* Compiles .kit templates into HTML
* Minifies HTML and removes comments

### JS:
* Checks for errors
* Minifies JS

### Images:
* Losslessly compresses images

### JSON:
* Checks for errors
* Minifies JSON