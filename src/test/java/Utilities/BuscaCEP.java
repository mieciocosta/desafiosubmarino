package Utilities;

import org.junit.BeforeClass;
import org.junit.Test;
import static io.restassured.RestAssured.given;
import static io.restassured.RestAssured.*;
import org.json.JSONArray;
import org.json.JSONObject;

public class BuscaCEP {
	private static String resp = null;

	@BeforeClass
	public static void setup() {
		baseURI = "https://viacep.com.br/";
		basePath = "ws";

	}

    @Test	
    public void consultaCepPorEndereco(){

    	resp =
    			given()
                    .pathParam("uf", "SP")
                    .pathParam("cidade", "São Paulo")
                    .pathParam("logradouro", "Henri Dunant")
                .when()
                    .get("/{uf}/{cidade}/{logradouro}/json")
                .then()
                    .statusCode(200)
                    .extract()
    				.asString();
    		String respFinal = resp.toString();
    		respFinal = resp.replace("><", ">\n<");
    		
    		String retornaCep = resp;
    		
    		JSONArray jsonArray = new JSONArray(retornaCep);
            for(int i =0; i< jsonArray.length(); i++){
                if(jsonArray.get(i) instanceof JSONObject){
                    JSONObject jsnObj = (JSONObject)jsonArray.get(i);
                    String finalValue = (String)jsnObj.get("cep");
                    System.out.println(finalValue);
                }
            }
    		    	
    }
    
}