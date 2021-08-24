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
      "name": "@todos"
    }
  ]
});
formatter.before({
  "duration": 7678543700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Realizando a compra com cep e validando o seu valor",
  "description": "",
  "id": "compra-produto;realizando-a-compra-com-cep-e-validando-o-seu-valor",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 6,
  "name": "que estou na home",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "realizo a busca",
  "rows": [
    {
      "cells": [
        "produto"
      ],
      "line": 8
    },
    {
      "cells": [
        "Cooktop À Gás Electrolux Ke5gp 5 Bocas E Mesa Em Vidro Temperado - Bivolt"
      ],
      "line": 9
    }
  ],
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "valido o resultado da consulta",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "seleciono produto da lista",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "insiro o produto no carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "insiro o cep",
  "rows": [
    {
      "cells": [
        "cep"
      ],
      "line": 14
    },
    {
      "cells": [
        "04709110"
      ],
      "line": 15
    }
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "valido o valor do cep",
  "keyword": "Entao "
});
formatter.match({
  "location": "CompraCooktopSteps.que_estou_na_home()"
});
formatter.result({
  "duration": 691030900,
  "status": "passed"
});
formatter.match({
  "location": "CompraCooktopSteps.realizo_a_busca(DataTable)"
});
formatter.result({
  "duration": 3094834500,
  "status": "passed"
});
formatter.match({
  "location": "CompraCooktopSteps.valido_o_resultado_da_consulta()"
});
formatter.result({
  "duration": 462342900,
  "status": "passed"
});
formatter.match({
  "location": "CompraCooktopSteps.seleciono_produto_da_lista()"
});
formatter.result({
  "duration": 2501552000,
  "status": "passed"
});
formatter.match({
  "location": "CompraCooktopSteps.insiro_o_produto_no_carrinho()"
});
formatter.result({
  "duration": 5390002200,
  "status": "passed"
});
formatter.match({
  "location": "CompraCooktopSteps.insiro_o_cep(DataTable)"
});
formatter.result({
  "duration": 3233335400,
  "status": "passed"
});
formatter.match({
  "location": "CompraCooktopSteps.valido_o_valor_do_cep()"
});
formatter.result({
  "duration": 60052407400,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d92.0.4515.159)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-S7IMOH0\u0027, ip: \u002710.0.0.132\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.159, chrome: {chromedriverVersion: 92.0.4515.107 (87a818b10553..., userDataDir: C:\\Users\\Miecio\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:57882}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 8cf7e1e7a24114b5fae36d8cc7319216\n*** Element info: {Using\u003dcss selector, value\u003d#root \u003e div \u003e div.basket-screencomponent__FreightWrapper-vhwqyk-2.grlVSF \u003e ul \u003e li \u003e div \u003e div \u003e span \u003e span}\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.toString(Unknown Source)\r\n\tat java.lang.String.valueOf(Unknown Source)\r\n\tat java.lang.StringBuilder.append(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.toString(ExpectedConditions.java:305)\r\n\tat java.lang.String.valueOf(Unknown Source)\r\n\tat java.lang.StringBuilder.append(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:268)\r\n\tat Utilities.BaseClass.WaitUntilElementVisible(BaseClass.java:22)\r\n\tat PageObjects.Page.validaFrete(Page.java:131)\r\n\tat StepDefinitions.CompraCooktopSteps.valido_o_valor_do_cep(CompraCooktopSteps.java:81)\r\n\tat ✽.Entao valido o valor do cep(submarino.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 695508800,
  "status": "passed"
});
});findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat Utilities.BaseClass.WaitUntilElementVisible(BaseClass.java:22)\r\n\tat PageObjects.Page.validaFrete(Page.java:127)\r\n\tat StepDefinitions.CompraCooktopSteps.valido_o_valor_do_cep(CompraCooktopSteps.java:81)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 12753742100,
  "status": "passed"
});
});