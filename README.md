![Nigtwatch Logo](http://nightwatchjs.org/img/logo-nightwatch.png)
# Nightwatch
### Browser Automation
Nightwatch.js is an easy to use Node.js based End-to-End (E2E) testing solution for browser based apps and websites. It uses the powerful W3C WebDriver API to perform commands and assertions on DOM elements.

It is a complete browser (End-to-End) testing solution which aims to simplify the process of setting up Continuous Integration and writing automated tests. Nightwatch can also be used for writing Node.js unit tests.
> Nightwatch got its name from the famous painting The Night Watch by Dutch artist Rembrandt van Rijn. The masterpiece is prominently displayed in the Rijksmuseum, in Amsterdam - The Netherlands.

### Nightwatch: tests multi-navigateurs

#### Définition 
> Le end-to-end testing consiste à tester notre application comme un utilisateur standard sur un vrai navigateur. Pour mettre en place ce type de tests il est nécessaire d'automatiser les navigateurs afin de les faire dérouler un scénario précis. Cette automatisation peut se faire gràce à l'outil Selenium qui est très efficace mais pas forcément simple d'utilisation.

Nightwatch.js va vous permettre d'écrire vos tests en utilisant une syntaxe familière et de piloter les navigateurs via Selenium depuis NodeJS.








### Configuration

> La configuration de nightwatch.js se fait au moyen d'un simple nightwatch.json
> 
			{
			  "src_folders" : ["tests"],
			  "output_folder" : "reports",
			  "custom_commands_path" : "",
			  "custom_assertions_path" : "",
			  "page_objects_path" : "./pages",
			  "globals_path" : "",
			  "selenium" : {
			    "start_process" : true,
			    "server_path" : "bin/selenium-server-standalone-3.4.0.jar",
			    "log_path" : "",
			    "port" : 4444,
			    "cli_args" : {
			      "webdriver.chrome.driver" : "bin/chromedriver",
			      "webdriver.gecko.driver" : "bin/geckodriver"
			    }
			  },"test_settings" : {
			    "default" : {
			      "launch_url" : "http://localhost",
			      "selenium_port"  : 4444,
			      "selenium_host"  : "localhost",
			      "silent": true,
			      "screenshots" : {
			        "enabled" : true,
			        "on_failure" : true,
			        "on_error" : false,
			        "path" : "screens"
			      },
			      "desiredCapabilities": {
			        "browserName": "firefox",
			        "marionette": true
			      }
			    },
			    "chrome" : {
			      "desiredCapabilities": {
			        "browserName": "chrome"
			      }
			    },
			    "edge" : {
			      "desiredCapabilities": {
			        "browserName": "MicrosoftEdge"
			      }
			    }
			  }
			} 


L'ensemble des options disponibles sont documentées sur la page Getting Started. J'ai choisi ici de mettre selenium et les différents drivers dans un dossier bin à la racine de mon projet.

  * Le dernier Selenium-server-standalone.jar
  * GeckoDriver pour piloter Firefox
  *  ChromeDriver pour piloter Chrome
  * Microsoft WebDriver pour piloter Edge



* [Link VF Tuto](https://www.youtube.com/watch?v=LEljiDEquX4)

