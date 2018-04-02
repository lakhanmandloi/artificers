## Artificier Reusable Frontend Lib

Common Reusable CSS Library for all products, Apps, Service Projects.

### Why Artificier Library ?-

* **To make Joomla Extensions Bootstrap 3 to 4 transition smoother and painless** - The main challenge Joomla Extension developers face is that they cannot upgrade any of the frontend library suddenly for the following reasons -
  1) The chances of breaking customers website UI after upgradation is very high & no customer would like to see their website broken.  
  2) Migration is a not a small task. It depends on views count and html complexity. It needs strategy.
  3) Most of the time the Developer maintains 2 or more branches and has to maintain those branches on different frameworks until the Date of End of Support for the older versions.
  **So How to eat this Elephant?** Answer is one bite at a time. One needs to migrate from BS3 to BS4 slowly - slowly. **But How?** Answer is by strategy - 
  1) One cannot replace BS3 css/js with BS4 until all of the html is ready for BS4. It will break where classes and html changes is required so we need to update our HTML. So the strategy is get ride of BS3 html and add BS4 html slowly in minor or medium version releases. Once the html is completely ready for BS4 one can switch the Library.
  2) To make HTML BS4 ready we need bs4 css available. We cannot load both bs3 and bs4 as in case of common classes it will conflict. So Artificier Lib does following things - **Backport Bootstrap 4 newly added CSS** - This library backports some of Bootstrap 4 classes which are new to BS4. One can start using those classes so as to make their code bs4 compatible.
  
* **Extending Commom reusable code beyond Boostrap** - We realized there are gaps in Boostrap and that can be filled by creating common reuable classes.

### This CSS Lib is used in -

* All Techjoomla Products
* All Appcarvers App
* and All Service Projects of Tekdi.

### Every product / project will have 3 files -

* bootstrap.min.css {Original BS}
* artificiers.min.css {Extending BS}
* custom.css {Project / Product Specific CSS}

### Command to generate file

* `sass --watch scss/artificier.scss:dist/css/artificier.min.css --style compressed`
* `sass --watch scss/artificier.scss:dist/css/artificier.css --style compact`
