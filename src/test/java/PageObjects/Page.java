package PageObjects;

import Utilities.BaseClass;
import Utilities.PropertiesReader;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Page extends BaseClass {

	public Page(WebDriver driver, WebDriverWait wait) {

		super(driver, wait);
		PageFactory.initElements(driver, this);
	}

	private final String coockies = "#lgpd-accept";
	private final String search = "#h_search-input";
	private final String btnConsulta = "#h_search-btn";
	private final String validarSpanProdutoLista = "#rsyswpsdk > div > div > div > div.col__StyledCol-sc-1snw5v3-0.bIoTYC > div.grid__StyledGrid-sc-1man2hx-0.iFeuoP > div:nth-child(1) > div > div > a > span";
	private final String enxergarProduto = "#rsyswpsdk > div > div > div > div.col__StyledCol-sc-1snw5v3-0.bIoTYC > div.grid__StyledGrid-sc-1man2hx-0.iFeuoP > div:nth-child(1) > div > div > a > span";
	private final String selecionarProduto = "[alt='Cooktop à Gás Electrolux KE5GP 5 Bocas e Mesa em Vidro Temperado - Bivolt']";
	private final String btnComprarProduto = ".src__ButtonUI-sc-1cpjf6b-3";
	private final String simBtnProdutoBivolt = ".eBiBIU";
	private final String simBtnSemGarantia = ".continue-button__Button-sc-1j23ixj-0";
	private final String campoCep = "[name='zipCode']";
	private final String btnCampoCep = "#root > div > div.basket-screencomponent__FreightWrapper-vhwqyk-2.grlVSF > form > button";
	private final String valorFrete = "#root > div > div.basket-screencomponent__FreightWrapper-vhwqyk-2.grlVSF > ul > li > div > div > span > span";
	private final String cepInvalidoMsg = ".sc-jgHCyG > p";
	
	

	@FindBy(css = coockies)
	private WebElement coockiesClick;
	
	@FindBy(css = search)
	private WebElement searchBar;

	@FindBy(css = btnConsulta)
	private WebElement consulta;

	@FindBy(css = enxergarProduto)
	private WebElement ProdutoLista;

	@FindBy(css = validarSpanProdutoLista)
	private WebElement validarSpanProduto;

	@FindBy(css = selecionarProduto)
	private WebElement produtoClick;
	
	@FindBy(css = btnComprarProduto)
	private WebElement btnComprarProdutoClick;
	
	@FindBy(css = simBtnProdutoBivolt)
	private WebElement simBtnProdutoBivoltClick;
	
	@FindBy(css = simBtnSemGarantia)
	private WebElement simBtnSemGarantiaClick;

	@FindBy(css = campoCep)
	private WebElement informarCampoCep;
	
	@FindBy(css = btnCampoCep)
	private WebElement clickBtnCampoCep;
	
	@FindBy(css = valorFrete)
	private WebElement validarValor;
	
	@FindBy(css = cepInvalidoMsg)
	private WebElement validarMsgCep;

	public boolean homePageIsDisplayed() {

		WaitUntilElementVisible(searchBar);
		searchBar.isDisplayed();
		coockiesClick.click();
		return true;
	}

	public void informaProduto(String produto) {

		WaitUntilElementVisible(searchBar);
		searchBar.isEnabled();
		searchBar.sendKeys(produto);
		consulta.isEnabled();
		WaitUntilElementVisible(consulta);
		consulta.click();
	}

	public boolean validarProduto() {
		String conteudo = ProdutoLista.getAttribute("innerHTML");
		String ValidarConteudo = validarSpanProduto.getAttribute("innerHTML");

		WaitUntilElementVisible(ProdutoLista);
		ProdutoLista.isDisplayed();
		ValidarConteudo.equals(conteudo);
		return true;
	}

	public void clickProduto() throws InterruptedException {

		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("window.scrollBy(600, 300)");
		WaitUntilElementVisible(produtoClick);
		produtoClick.click();
	}
	
	public void inserirProdutoCarrinho() throws InterruptedException {
		
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("window.scrollBy(500, 300)");
		btnComprarProdutoClick.click();
		simBtnProdutoBivoltClick.click();
		simBtnSemGarantiaClick.click();
	}
	
	public void inserirCep(String cep) {
		
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("window.scrollBy(500, 300)");
		WaitUntilElementVisible(informarCampoCep);
		informarCampoCep.sendKeys(cep);
	}
	
	public boolean validaFrete() {

		WaitUntilElementVisible(clickBtnCampoCep);
		clickBtnCampoCep.click();
		WaitUntilElementVisible(validarValor);
		validarValor.isDisplayed();
		return true;
	}
	
	public boolean validarMsgCepInvalido() throws Exception {
		
		WaitUntilElementVisible(clickBtnCampoCep);
		clickBtnCampoCep.click();

		String msg = PropertiesReader.getValue("mgsCepInvalido");
		System.out.println(msg);
		String conteudoMsg = validarMsgCep.getAttribute("innerHTML");
		System.out.println(conteudoMsg);
		WaitUntilElementVisible(validarMsgCep);
		System.out.println(conteudoMsg.equals(msg));
		conteudoMsg.equals(msg);
		
		return true;
	}

}