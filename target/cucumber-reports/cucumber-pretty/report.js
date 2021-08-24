$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("submarino.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Compra produto",
  "description": "",
  "id": "compra-produto",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Todos"
    }
  ]
});
formatter.before({
  "duration": 8784957700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Realizando a compra com cep valido e validando o seu valor",
  "description": "",
  "id": "compra-produto;realizando-a-compra-com-cep-valido-e-validando-o-seu-valor",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 5,
      "name": "@Valido"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que estou acessando home",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "realizo uma busca",
  "rows": [
    {
      "cells": [
        "produto"
      ],
      "line": 9
    },
    {
      "cells": [
        "Cooktop À Gás Electrolux Ke5gp 5 Bocas E Mesa Em Vidro Temperado - Bivolt"
      ],
      "line": 10
    }
  ],
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "valido o resultado da busca",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "seleciono o produto da lista",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "insiro produto no carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "insiro o numero cep",
  "rows": [
    {
      "cells": [
        "cep"
      ],
      "line": 15
    },
    {
      "cells": [
        "04709-110"
      ],
      "line": 16
    }
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "valido o valor do frete",
  "keyword": "Entao "
});
formatter.match({
  "location": "CepValidoSteps.que_estou_acessando_home()"
});
formatter.result({
  "duration": 762079100,
  "status": "passed"
});
formatter.match({
  "location": "CepValidoSteps.realizo_uma_busca(DataTable)"
});
formatter.result({
  "duration": 2836388400,
  "status": "passed"
});
formatter.match({
  "location": "CepValidoSteps.valido_o_resultado_da_busca()"
});
formatter.result({
  "duration": 469560800,
  "status": "passed"
});
formatter.match({
  "location": "CepValidoSteps.seleciono_o_produto_da_lista()"
});
formatter.result({
  "duration": 2565238100,
  "status": "passed"
});
formatter.match({
  "location": "CepValidoSteps.insiro_produto_no_carrinho()"
});
formatter.result({
  "duration": 62979647400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".eBiBIU\"}\n  (Session info: chrome\u003d92.0.4515.159)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-S7IMOH0\u0027, ip: \u002710.0.0.132\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.159, chrome: {chromedriverVersion: 92.0.4515.107 (87a818b10553..., userDataDir: C:\\Users\\Miecio\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:58812}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 49829af07cc176ffe2d830b416246eed\n*** Element info: {Using\u003dcss selector, value\u003d.eBiBIU}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat PageObjects.Page.inserirProdutoCarrinho(Page.java:118)\r\n\tat StepDefinitions.CepValidoSteps.insiro_produto_no_carrinho(CepValidoSteps.java:63)\r\n\tat ✽.E insiro produto no carrinho(submarino.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CepValidoSteps.insiro_o_numero_cep(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CepValidoSteps.valido_o_valor_do_frete()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 940397900,
  "status": "passed"
});
formatter.before({
  "duration": 5721209500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Realizando a compra com cep invalido e validando o seu valor",
  "description": "",
  "id": "compra-produto;realizando-a-compra-com-cep-invalido-e-validando-o-seu-valor",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 19,
      "name": "@Invalido"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "que estou na home",
  "keyword": "Dado "
});
formatter.step({
  "line": 22,
  "name": "realizo a busca",
  "rows": [
    {
      "cells": [
        "produto"
      ],
      "line": 23
    },
    {
      "cells": [
        "Cooktop À Gás Electrolux Ke5gp 5 Bocas E Mesa Em Vidro Temperado - Bivolt"
      ],
      "line": 24
    }
  ],
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "valido o resultado da consulta",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "seleciono produto da lista",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "insiro o produto no carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "insiro o cep",
  "rows": [
    {
      "cells": [
        "cep"
      ],
      "line": 29
    },
    {
      "cells": [
        "00000-000"
      ],
      "line": 30
    }
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 31,
  "name": "valido o valor do cep",
  "keyword": "Entao "
});
formatter.match({
  "location": "CepInvalidoSteps.que_estou_na_home()"
});
formatter.result({
  "duration": 1175303300,
  "status": "passed"
});
formatter.match({
  "location": "CepInvalidoSteps.realizo_a_busca(DataTable)"
});
formatter.result({
  "duration": 2896154900,
  "status": "passed"
});
formatter.match({
  "location": "CepInvalidoSteps.valido_o_resultado_da_consulta()"
});
formatter.result({
  "duration": 521701700,
  "status": "passed"
});
formatter.match({
  "location": "CepInvalidoSteps.seleciono_produto_da_lista()"
});
formatter.result({
  "duration": 2905253800,
  "status": "passed"
});
formatter.match({
  "location": "CepInvalidoSteps.insiro_o_produto_no_carrinho()"
});
formatter.result({
  "duration": 6770106000,
  "status": "passed"
});
formatter.match({
  "location": "CepInvalidoSteps.insiro_o_cep(DataTable)"
});
formatter.result({
  "duration": 3543020300,
  "status": "passed"
});
formatter.match({
  "location": "CepInvalidoSteps.valido_o_valor_do_cep()"
});
formatter.result({
  "duration": 44290325900,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using css selector\u003d.sc-jgHCyG \u003e p\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-S7IMOH0\u0027, ip: \u002710.0.0.132\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getAttribute(Unknown Source)\r\n\tat PageObjects.Page.validarMsgCepInvalido(Page.java:148)\r\n\tat StepDefinitions.CepInvalidoSteps.valido_o_valor_do_cep(CepInvalidoSteps.java:81)\r\n\tat ✽.Entao valido o valor do cep(submarino.feature:31)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 985339300,
  "status": "passed"
});
});