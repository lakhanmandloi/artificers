## Artificiers Reusable Frontend Lib
Common Reusable CSS Library for all products, Apps, Service Projects.

### This CSS Lib will be used  in -

* TjBase Template
* JGive, JTicketing, Shika etc etc Backend templates
* All Techjoomla Products
* All Appcarvers App
* and All Service Projects.

### So basically every product / project will have 3 files -

* bootstrap.min.css {Original BS}
* artificiers.min.css {Extending BS}
* custom.css {Project / Product Specific CSS }

### Features of Lib -

* It will extend the Bootstrap 3.3.7. i.e. The things which are not present in BS3 will be added in this as common reusable classes.
* It will use bootstrap 4 classes along with same properities. So that the day stable BS4 is available it will have to do less rework.
* Proper use of SCSS will be done with the use of mixins, imports etc.



### Command to generate file

* `sass --watch scss/artificier.scss:dist/css/artificier.min.css --style compressed`
* `sass --watch scss/artificier.scss:dist/css/artificier.css`
