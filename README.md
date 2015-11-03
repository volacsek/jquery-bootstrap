# jquery-bootstrap
A jquery plugin collection, and you can applicable bootstrap as same as jquery-ui.

> This is only alpha version, actually.


Prolog for jquery-bootsrap
------------------
Do you hate the long bootstrap htmls? Can you prefer the simply JSON based configuration? Do you like binding the UI behaviors into the application router or deeper controls by simply events? **You are program coder!** Maybe will helpful these jquery plugin collection, and you can applicable bootstrap as same as jquery-ui.

* Pros
	* not bulky html
	* easy to configure by JSON
	* very simple catch JSON specified events by program code
* Cons
	* maybe have some special case when this solution can not satisfy your imagines -- in there cases you must additional programming that


The plugins of collection
-------------------
> Used prefix of the collection plugins: **jqbs**

The implemented plugins: 

* [jqbsNavbar()](#jqbsnavbar)
* [jqbsTab()](#jqbstab) -- *tabs* and *pills*, based on bootstrap `nav`
* [jqbsPanel()](#jqbspanel)
* [jqbsButtonGroup()](#jqbsbuttongroup) -- *group* and *toolbar*
* [jqbsButton()](#jqbsbutton)


Install and use
-------------------
 1. Download or clone this repo.
 2. Check the example code or view documentation, how can programming its.


Documentation
-------------------
See the [live demo](http://jqbs.pcnet.hu/demo).
See the live demo [script](/demo).

### The collection plugins

#### jqbsNavbar()

Create and bind a bootstrap navbar for jQuery selector specified html `<nav>` element.
**Usage:**
<pre>
&lt;nav id="navbarID"&gt;&lt;/nav&gt;
</pre>
*javascript:*
<pre>
$('#navbarID').jqbsNavbar({ ... navbar specification ... });
</pre>

The navbar specification is a dataset, what is type of [jqbs-navbar](#jqbs-navbar) model.

#### jqbsTab()
Create and bind a bootstrap nav -- style of *tabs* or *pills* -- for jQuery selector specified html `<div>` element.
**Usage:**
<pre>
&lt;div id="divID"&gt;&lt;/div&gt;
</pre>
*javascript:*
<pre>
$('#divID').jqbsTab({ ... navbar specification ... });
</pre>

The tab or pill specification is a dataset, what is type of [jqbs-tab](#jqbs-tab) model.

#### jqbsPanel()
Property | Type | Default | Description
---|---|---|---
type | string | `'default'` | Set panel style used by any value of `'default'`, `'primary'`, `'success'`, `'info'`, `'warning'`, `'danger'`.
header | html | - | The html content of component header.
footer | html | - | The html content of component footer.
body | html | - | The html content of component body.


Method | Params | Return | Description
---|---|---|---
setType(*type*) | *type*:&nbsp;string | - | Update the **jqbsPanel** `type` value from any of type property set and refresh visibility of component.
setHeader(*html*) | *html*:&nbsp;string | - | Set html content of component header.
setFooter(*html*) | *html*:&nbsp;string | - | Set html content of component footer.
setBody(*html*) | *html*:&nbsp;string | - | Set html content of component body.

#### jqbsButtonGroup()
....
#### jqbsButton()
Create and bind a bootstrap button for jQuery selector specified html `<button>` element.
**Usage:**
<pre>
&lt;button id="btnID"&gt;&lt;/button&gt;
</pre>
*javascript:*
<pre>
$('#btnID').jqbsButton({ ... button specification ... });
</pre>

The button specification is a dataset, what is type of [jqbs-button ](#jqbs-button) model.

#### jqbsListGroup()
Create and bind a bootstrap **list-group** for jQuery selector specified html `<div>` element.
**Usage:**
<pre>
&lt;div id="listID"&gt;&lt;/div&gt;
</pre>
*javascript:*
<pre>
$('#listID').jqbsListGroup({ ... list-group specification ... });
</pre>

The button specification is a dataset, what is type of [jqbs-listgroup ](#jqbs-listgroup) model.

### Models of the plugin collection
#### jqbs-navbar
Option | Type | Default | Description
---|---|---|---
$eventTarget | jquery element | `$(document)` | Event listener. This can catch the plugin events.
brand | jqbs-brand | `{ label: '' }` | Set the brand part of navbar.
left | [jqbs-menu](#jqbs-menu)[] | `[]` | List of left side menu buttons.
right | [jqbs-menu](#jqbs-menu)[] | `[]` | List of right side menu buttons.

Method | Params | Return | Description
---|---|---|---
menuSuspend(*sp*) | *sp*: [jqbs-suspend](#jqbs-suspend) | - | Set enabled/disabled menu element by event name.

#### jqbs-menu
Option| Type | Default | Description
---|---|---|---
separator | boolean | `false` | Put the separator before the menu element.
icon | string | - | Put the specified bootstrap glyphicon -- for example: `'start'` -- before the menu label. The property must contain icon name without any prefix.
event | string | - | The event name will be triggering on click menu event. Target depend on plugin settings, but default is `$(document)`.
disabled | string | - | Set diasbled menu item.
active | boolean | - | When is `true` the element class property added `active`.
panel | string | - | Name of the target panel. Used by **jqbsTab** only.
dropdown | [jqbs&#8209;menu](#jqbs-menu)[] | - | Elements of dropdown menu.

#####Not documented **runtime** properties of jqbs-menu
>There are used by contribution between plugins of this collection.
Option | Type | Default | Description
---|---|---|---
role | string | - | Can be: `'presentation'` or empty.
toggle | string | - | 

#### jqbs-suspend
Option | Type | Default | Description
---|---|---|---
suspend | boolean | - | Suspend on/off.
event | string | - | Event name to find target menu element.

#### jqbs-button
Option | Type | Default | Description
---|---|---|---
$eventTarget | jquery element | `$(document)` | Event listener. This wrapper can catch the plugin events.
type | string | `'default'` | Set button style used by any value of `'default'`, `'primary'`, `'success'`, `'info'`, `'warning'`, `'danger'`.
event | string | - | The event name will be triggering on click menu event. Target depend 
dropdown | [jqbs&#8209;menu](#jqbs-menu)[] | - | Elements of dropdown menu.
label | string | `''` | Text of button.
id  | string | `randomID()` | Value of the html element id property. If it not used than will be an uniq random value of this collection.

#### jqbs-tab
Option | Type | Default | Description
---|---|---|---
type | string | `'tabs'` | Set bootstrap nav style `'tabs'` or `'pills'`.

#### jqbs-listgroup
Option | Type | Default | Description
---|---|---|---
$eventTarget | jquery element | `$(document)` | Event listener. This wrapper can catch the plugin events.
type | string | `''` | Set bootstrap contextual style: `'success'` or `'info'` or `'warning'` or `'danger'` when different from default.
autoActivate | boolean | true | Set the `active` status on the last clicked list item.
elements | string[]&nbsp;*or*<br>[jqbs&#8209;listitem](#jqbs-listitem)[] | - | Elements of list. *(The both element types can be mixing in the items of list.)*
event | string | - | Custom event which triggering when clicked the item of list.

#### jqbs-listitem
Option | Type | Default | Description
---|---|---|---
label | string&nbsp;*or*<br>[jqbs&#8209;listitem&#8209;label](#jqbs-listitem-label)[] | - | Simple text or custom content of the item.
type | string | `''` | Set bootstrap contextual style: `'success'` or `'info'` or `'warning'` or `'danger'` when different from default.
data | *all* | - | This data will be passed to the `$eventTarget` with event when triggering the custom event.

#### jqbs-listitem-label
Custom content of list item.
Option | Type | Default | Description
---|---|---|---
header | string | - | Header of list item.
text | string | - | Text of list item. *(It can be valid html snippet too.)*
<br><br><br>

<pre>
Working notes:
* ------------------
   TODO:
   1) rename model from jqbs-menu to jqbs-dropdown ...
   2) button use data option too ...
   3) drop jqbs-menu (jqbs-dropdown) runtime properties documentation ...
   4) not fully missing more content !!!
* ------------------  
</pre>

