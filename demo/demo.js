var userData = [
    { imgHash: "6d8ebb117e8d83d74ea95fbdd0f87e13" },
    { imgHash: "e3a181e9cdd4757a8b416d93878770c5" },
    { imgHash: "89927e2f4bde24991649b353a37678b9" },
    { imgHash: "7aa22372b695ed2b26052c340f9097eb" },
    { imgHash: "7deca8ec973c3c0875e9a36e1e3e2c44" },
    { imgHash: "747ffa5da3538e66840ebc0548b8fd58" },
    { imgHash: "24780fb6df85a943c7aea0402c843737" },
    { imgHash: "1d2d3229ed1961d2bd81853242493247" },
    { imgHash: "ca3e484c121268e4c8302616b2395eb9" },
    { imgHash: "e514b017977ebf742a418cac697d8996" },
    { imgHash: "e8d5fe90f1fe2148bf130cccd4dc311c" },
    { imgHash: "932fb89b9d4049cec5cba357bf0ae388" },
    { imgHash: "b4779212f57ff2e9549ea90a4499c2d7" },
    { imgHash: "529ba429a58902bef56c2fcb672d5ccb" },
    { imgHash: "ad240ed5cc406759f0fd72591dc8ca47" },
    { imgHash: "2343ae368d3241278581ce6c87f62a25" },
    { imgHash: "1db0cdfd3fe268e270ec481a73046c2f" },
    { imgHash: "3c0aac2191718ef0309dbc034d9b9961" },
    { imgHash: "6fbdff3ffb6f111d172759b4f05bea0e" },
    { imgHash: "2f364c2e36b52bc80296cbf23da8b231" },
    { imgHash: "dc1a5b5fdba36ae9cdcf6e267f1a86ca" },
    { imgHash: "cd501083459cbc21fccae78e2d03bee2" },
    { imgHash: "a2d818d801ce38a33807f68fdd92043a" },
    { imgHash: "a8db27c91db97757a829c7971fd62b84" },
    { imgHash: "3f6f1bea81a68b2f1cfe3efbb9be94bc" },
    { imgHash: "c90de868a7e95d75bdfd6a906dfedac7" },
    { imgHash: "d8962238339d771f0348967be6f97b1b" },
    { imgHash: "80ae8ec34e9e3e66c5be50733afaa44e" },
    { imgHash: "0a6d284d4e2ce68e1c60871858da800b" },
    { imgHash: "01d6005ebf89c14de87a62add488aaad" }
];

(function(){

    var mosaic = document.getElementById("mygravatile");

    gravatarMosaic.init({
        element: mosaic,
        userData: userData,
        columns: 10,
        rows: 5
    });

})();
