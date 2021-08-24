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

public class CepValidoSteps {

	private WebDriver driver = config.driver;
	private WebDriverWait wait;

	public CepValidoSteps() throws Exception {

		PropertiesReader propertiesReader = new PropertiesReader();
		this.wait = new WebDriverWait(driver, propertiesReader.getTimeout());
	}

	@Dado("^que estou acessando home$")
	public void que_estou_acessando_home() {

		Page home = new Page(driver, wait);
		home.homePageIsDisplayed();
	}

	@E("^realizo uma busca$")
	public void realizo_uma_busca(DataTable dataTable) throws Throwable {
		Page home = new Page(driver, wait);
		for (Map<String, String> map : dataTable.asMaps(String.class, String.class)) {
			String produto = map.get("produto");
			home.informaProduto(produto);
		}
	}

	@E("^valido o resultado da busca$")
	public void valido_o_resultado_da_busca() throws InterruptedException {

		Page posConsulta = new Page(driver, wait);
		Assert.assertTrue(posConsulta.validarProduto());
	}

	@E("^seleciono o produto da lista$")
	public void seleciono_o_produto_da_lista() throws InterruptedException {
		
		Page posSelecionarProduto = new Page(driver, wait);
		posSelecionarProduto.clickProduto();

	}

	@E("^insiro produto no carrinho$")
	public void insiro_produto_no_carrinho() throws InterruptedException {
		
		Page posInserirCarrinho= new Page(driver, wait);
		posInserirCarrinho.inserirProdutoCarrinho();

	}
	
	@Quando("^insiro o numero cep$")
	public void insiro_o_numero_cep(DataTable dataTable) throws InterruptedException {
		
		Page posInserirCep = new Page(driver, wait);
		for (Map<String, String> map : dataTable.asMaps(String.class, String.class)) {
			String cep = map.get("cep");
			posInserirCep.inserirCep(cep);
		}

	}
    @Entao("^valido o valor do frete$")
    public void valido_o_valor_do_frete() throws Exception {

        Page posValorCep = new Page(driver, wait);
        Assert.assertTrue(posValorCep.validaFrete());
    }

}