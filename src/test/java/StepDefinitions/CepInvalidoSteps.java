package StepDefinitions;

import PageObjects.Page;
import Utilities.PropertiesReader;
import cucumber.api.DataTable;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CepInvalidoSteps {

	private WebDriver driver = config.driver;
	private WebDriverWait wait;

	public CepInvalidoSteps() throws Exception {

		PropertiesReader propertiesReader = new PropertiesReader();
		this.wait = new WebDriverWait(driver, propertiesReader.getTimeout());
	}

	@Dado("^que estou na home$")
	public void que_estou_na_home() {

		Page home = new Page(driver, wait);
		home.homePageIsDisplayed();
	}

	@E("^realizo a busca$")
	public void realizo_a_busca(DataTable dataTable) throws Throwable {
		Page home = new Page(driver, wait);
		for (Map<String, String> map : dataTable.asMaps(String.class, String.class)) {
			String produto = map.get("produto");
			home.informaProduto(produto);
		}
	}

	@E("^valido o resultado da consulta$")
	public void valido_o_resultado_da_consulta() throws InterruptedException {

		Page posConsulta = new Page(driver, wait);
		Assert.assertTrue(posConsulta.validarProduto());
	}

	@E("^seleciono produto da lista$")
	public void seleciono_produto_da_lista() throws InterruptedException {
		
		Page posSelecionarProduto = new Page(driver, wait);
		posSelecionarProduto.clickProduto();

	}

	@E("^insiro o produto no carrinho$")
	public void insiro_o_produto_no_carrinho() throws InterruptedException {
		
		Page posInserirCarrinho= new Page(driver, wait);
		posInserirCarrinho.inserirProdutoCarrinho();

	}
	
	@Quando("^insiro o cep$")
	public void insiro_o_cep(DataTable dataTable) throws InterruptedException {
		
		Page posInserirCep = new Page(driver, wait);
		for (Map<String, String> map : dataTable.asMaps(String.class, String.class)) {
			String cep = map.get("cep");
			posInserirCep.inserirCep(cep);
		}

	}
    @Entao("^valido o valor do cep$")
    public void valido_o_valor_do_cep() throws Exception {

        Page posValorCep = new Page(driver, wait);
        Assert.assertTrue(posValorCep.validarMsgCepInvalido());
    }

}