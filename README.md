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


The plugins
-------------------
> Namspace prefix of the plugin collection: **jqbs**

The implemented plugins:

* jqbsNavbar
* jqbsTab -- *tabs* and *pills*, based on bootstrap `nav`
* jqbsPanel
* jqbsButtonGroup -- *group* and *toolbar*
* jqbsButton

The *dropdown* type visibility -- such as a dropdown menu -- are implemented in all relevant plugins.

Install and use
-------------------
 1. Download or clone this repo.
 2. Check the example code or view documentation, how can programming its.

Documentation
-------------------
See the [live demo](http://jqbs.pcnet.hu/demo).
See the live demo [script](/demo).

### The jQuery plugins
#### jqbsNavbar

Property | Type | Default | Description
---|---|---|---
$eventTarget | jquery element | `$(document)` | Event listener. This can catch the plugin events.
brand | jqbs-brand | `{ label: '' }` | Set the brand part of navbar.
left | [jqbs-menu](#jqbs-menu)[] | `[]` | List of left side menu buttons.
right | [jqbs-menu](#jqbs-menu)[] | `[]` | List of right side menu buttons.

Method | Params | Return | Description
---|---|---|---
menuSuspend( *sp* ) | *sp*: [jqbs-suspend](#jqbs-suspend) | - | Set enabled/disabled menu element by event name.

#### jqbsTab
...
#### jqbsPanel
Property | Type | Default | Description
---|---|---|---
type | string | `'default'` | Set panel style used by any value of `'default'`, `'primary'`, `'success'`, `'info'`, `'warning'`, `'danger'`.
header | html | - | The html content of component header.
footer | html | - | The html content of component footer.
body | html | - | The html content of component body.


Method | Params | Return | Description
---|---|---|---
setType( *type* ) | *type*: string | - | Update the **jqbsPanel** `type` value from any of type property set and refresh visibility of component.
setHeader( *html* ) | *html*: string | - | Set html content of component header.
setFooter( *html* ) | *html*: string | - | Set html content of component footer.
setBody( *html* ) | *html*: string | - | Set html content of component body.

#### jqbsButtonGroup
....
#### jqbsButton
...

### Used models in plugin collection
#### jqbs-menu
Property | Type | Default | Description
---|---|---|---
separator | boolean | `false` | Put the separator before the menu element.
icon | string | - | Put the specified bootstrap glyphicon -- for example: `'start'` -- before the menu label. The property must contain icon name without any prefix.
event | string | - | The event name will be triggering on click menu event. Target depend on plugin settings, but default is `$(document)`.
disabled | string | - | Set diasbled menu item.
active | boolean | - | When is `true` the element class property added `active`.
panel | string | - | Name of the target panel. Used by **jqbsTab** only.
dropdown | [jqbs-menu](#jqbs-menu)[] | - | Elements of dropdown menu.

##### Not documented **runtime** properties
Property | Type | Default | Description
---|---|---|---
role | string | - | Can be: `'presentation'` or empty.
toggle | string | - | 

#### jqbs-suspend
Property | Type | Default | Description
---|---|---|---
suspend | boolean | - | Suspend on/off.
event | string | - | Event name to find target menu element.

