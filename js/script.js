// business logic
function Getpizza(flavour, size, crust, topping, number1) {
    this.flavour = flavour;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.number1 = number1;
}

function Pizzaprice(sizeprice, crustprice, toppingprice, number1) {
    this.sizeprice = sizeprice;
    this.crustprice = crustprice;
    this.toppingprice = toppingprice;
    this.number1 = number1
}

Pizzaprice.prototype.totalprice = function () {
    return (this.sizeprice + this.crustprice + this.toppingprice) * this.number1
}
var sizePrice = [1000, 800, 600]
var sizeName = ["Large", "Medium", "Small"]
var crustPrice = [300, 150, 50]
var crustName = ["Cripsy", "Stuffed", "Gluten-free"]
var toppingPrice = [100, 150, 50]
var toppingName = ["Mushroom", "Sausage", "Bacon"]

$(document).ready(function () {
    $("#kert").click(function () {
        $("#ret").toggle();
    })
    $("#kert").click(function () {
        $("#dev").toggle();
    })
    $("#home").click(function () {
        $(".dev").toggle();
    });
});

$(document).ready(function () {

    $("#lily").submit(function (event) {
        event.preventDefault();
        var flavour = $("#flavour").val();
        // alert(flavour);

        productAddList()
        the_total()
        formClear()
    });
});

function productAddList() {

    var flavour = ($("#flavour").val());
    var size = parseInt($("#size").val());
    var sizeNem = sizeName[size - 1]
    var crust = parseInt($("#crust").val());
    var crustNem = crustName[crust - 1]
    var topping = parseInt($("#topping").val());
    var toppingNem = toppingName[topping - 1]
    var number1 = parseInt($("#number1").val());

    var size = parseInt($("#size").val());
    var sizeprice = sizePrice[size - 1]
    var crust = parseInt($("#crust").val());
    var crustprice = crustPrice[crust - 1]
    var topping = parseInt($("#topping").val());
    var toppingprice = toppingPrice[topping - 1]
    var number1 = parseInt($("#number1").val());
    var newPizzaPrice = new Pizzaprice(sizeprice, crustprice, toppingprice, number1)

    var total = newPizzaPrice.totalprice()

