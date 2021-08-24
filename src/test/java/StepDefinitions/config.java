package StepDefinitions;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import Utilities.PropertiesReader;

import java.util.concurrent.TimeUnit;

public class config {

    public static WebDriver driver;

    @Before
    public void openBrowser() throws Exception {

        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments( "--window-size=1440,768", "--disable-gpu");
        driver = new ChromeDriver(options);
        PropertiesReader propertiesReader = new PropertiesReader();
        driver.manage().timeouts().implicitlyWait(propertiesReader.getTimeout(), TimeUnit.SECONDS);
        driver.manage().timeouts().setScriptTimeout(propertiesReader.getTimeout(), TimeUnit.SECONDS);
        driver.manage().deleteAllCookies();
        driver.manage().window().maximize();
        driver.get(PropertiesReader.getValue("url"));
    }

    @After
    public void embedScreenshot(Scenario cenario) {

        if(cenario.isFailed()) {
            try {
                byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
                cenario.embed(screenshot, "image/png");
            } catch (WebDriverException noSupportScreenshot) {
                System.err.println(noSupportScreenshot.getMessage());
            }
        }
        driver.quit();
    }
}
