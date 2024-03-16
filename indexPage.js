const handlerBarsContext = {
    "/index.html": {
        "header": [
            {
                imgUrl: 'imgsource/logo.png',
            }
        ],
        "hero":[
            {
                imgUrl: 'imgsource/hero.jpg',
                content: "Nada mejor que una taza de cafe"
            }
        ],
        "products": [
            {
                imgUrl: 'imgsource/espresso.jpg',
                name: "Cafe espresso"
            },
            {
                imgUrl: 'imgsource/doble.jpg',
                name: "Cafe doble"
            },
            {
                imgUrl: 'imgsource/americano.jpg',
                name: "Cafe americano"
            },
            {
                imgUrl: 'imgsource/cafeconleche.jpg',
                name: "Cafe con leche"
            },
            {
                imgUrl: 'imgsource/cortado.jpg',
                name: "Cortado"
            },
            {
                imgUrl: 'imgsource/macchiato.jpg',
                name: "Latte Macchiato"
            },
            {
                imgUrl: 'imgsource/flatwhite.jpg',
                name: "Flat White"
            },
            {
                imgUrl: 'imgsource/bombón.jpg',
                name: "Cafe bombón"
            },
            {
                imgUrl: 'imgsource/cappuccino.jpg',
                name: "Cappuccino"
            },
            {
                imgUrl: 'imgsource/cappuccinoitaliano.jpg',
                name: "Cappuccino Italiano"
            },
            {
                imgUrl: 'imgsource/mocaccino.jpg',
                name: "Mocaccino"
            },
            {
                imgUrl: 'imgsource/cappuccinotricolor.jpg',
                name: "Cappuccino Tricolor"
            },
            {
                imgUrl: 'imgsource/cappuccinosweet.jpg',
                name: "Cappuccino Sweet"
            },
            {
                imgUrl: 'imgsource/vienés.jpg',
                name: "Vienés"
            },
            {
                imgUrl: 'imgsource/caramel.jpg',
                name: "Caramel"
            },
        ]
    },
}

const pageContext = (page) => {
    const context = { ...handlerBarsContext[page] }
    return context;
}
export default pageContext;