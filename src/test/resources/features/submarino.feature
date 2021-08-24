#language: pt
@Todos
Funcionalidade: Compra produto

	@Valido
  Cenario: Realizando a compra com cep valido e validando o seu valor
    Dado que estou acessando home
    E realizo uma busca
    | produto |
    | Cooktop À Gás Electrolux Ke5gp 5 Bocas E Mesa Em Vidro Temperado - Bivolt|
    E valido o resultado da busca
    E seleciono o produto da lista
    E insiro produto no carrinho
    Quando insiro o numero cep
    | cep |
    | 04709-110|
    Entao valido o valor do frete
    
   @Invalido
   Cenario: Realizando a compra com cep invalido e validando o seu valor
    Dado que estou na home
    E realizo a busca
    | produto |
    | Cooktop À Gás Electrolux Ke5gp 5 Bocas E Mesa Em Vidro Temperado - Bivolt|
    E valido o resultado da consulta
    E seleciono produto da lista
    E insiro o produto no carrinho
    Quando insiro o cep
    | cep |
    | 00000-000|
    Entao valido o valor do cep
