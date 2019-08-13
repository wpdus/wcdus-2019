<a href="https://2019.dusseldorf.wordcamp.org/"><img src="https://2019.dusseldorf.wordcamp.org/files/2019/08/wcdus-logo-nodate.png" title="WCDUS" alt="WCDUS"></a>

# WCDUS WordCamp Düsseldorf 2019 Stylesheet

> Ein Zuhause für Remote CSS der WordCamp Website

---

## Inhalte

- [Einführung](#einführung)
- [Installation](#installation)
- [Bereitstellung](#bereitstellung)
- [Lizenz](#lizenz)

---

## Einführung

Nach dieser Anleitung kann man die CSS Styles für WCDUS 2019 auf einem lokalen Rechner für Entwicklungszwecke einsetzen. Hinweise zur Bereitstellung der Styles auf einem Live-System finden Sie unter Bereitstellung.

### Installation

Lädt und richtet die notwendigen Packages / Dependecies ein.

```shell
$ npm install
```

Build Prozess erstellt aus SCSS/SASS Dateien die eigentliche CSS (style.css).

```shell
$ npm run build
```

Dieser führt im Hintergrund folgenden Befehl aus:

```shell
// Transpiling Sass with node-sass

$ node-sass style.scss style.css
```

Es steht auch eine Watch Task zur Verfügung:

```shell
npm run watch
```

## Bereitstellung

Die URL `https://api.github.com/repos/wpdus/wcdus-2019/contents/style.css` kopieren und in die Website unter Remote-CSS einfügen. Anschließend "Add-on: The theme's stylesheet will remain, and your custom CSS will be added after it. " Radio Button auswählen und den Update Button klicken.

## Built With

* [npm](https://www.npmjs.com/) Node Package Manager

## Authors

* **WPDUS** -  [wpdus](https://github.com/wpdus)

Siehe auch die Liste der[Mitwirkenden] (https://github.com/wpdus/wcdus-2019/contributors), die an diesem Projekt teilgenommen haben.

## Lizenz

Wie jedes WordPress-Projekt steht auch dieses Projekt unter der GNU General Public License, Version 2 - siehe Datei [LICENSE.md](LICENSE.md) für Details.

### GNU Global Public Licence

[![GNU GPL v2.0](http://www.gnu.org/graphics/gplv3-127x51.png)](http://www.gnu.org/licenses/gpl.html)

View official GNU site <http://www.gnu.org/licenses/gpl.html>.

[![OSI](http://opensource.org/trademarks/opensource/OSI-Approved-License-100x137.png)](http://opensource.org/licenses/mit-license.php)

[View the Open Source Initiative site.](http://opensource.org/licenses/mit-license.php)

#### Related : 
 - [Wikipedia - GNU General Public License](http://en.wikipedia.org/wiki/GNU_General_Public_License) - 
   [(fr)](http://fr.wikipedia.org/wiki/Licence_publique_générale_GNU)
   [(de)](http://de.wikipedia.org/wiki/GNU_General_Public_License)
   [(es)](http://es.wikipedia.org/wiki/GNU_General_Public_License)
   [(it)](http://it.wikipedia.org/wiki/GNU_General_Public_License) - 
   _from Wikipedia_
 - [Frequently Asked Questions about the GNU Licenses](http://www.gnu.org/licenses/gpl-faq.en.html) - 
   [(fr)](http://www.gnu.org/licenses/gpl-faq.fr.html)
   [(es)](http://www.gnu.org/licenses/gpl-faq.es.html)
   [(it)](http://www.gnu.org/licenses/gpl-faq.it.html) - 
   _from GNU official web site_
 - [A Practical Guide to GPL Compliance](http://www.softwarefreedom.org/resources/2008/compliance-guide.html) - 
   _from Software Freedom Law Center_