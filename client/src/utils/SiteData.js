import dog from "../components/HomeJumbotron/assets/dog.jpg";
import cat from "../components/HomeJumbotron/assets/cat.jpg";
import mammal from "../components/HomeJumbotron/assets/mammal.jpg";
import bird from "../components/HomeJumbotron/assets/bird.jpg";
import reptile from "../components/HomeJumbotron/assets/reptile.jpg";
import aquatics from "../components/HomeJumbotron/assets/aquatics.jpg";

export default {
    petCategories: [
        {   
            id: 1,
            category: "Dog",
            link: dog,
            description: "this is a test dog description",
            brandExamples: ["these", "are", "brand", "examples"],
            onlineShopURL: "https://shop.atlaspet.net/products/list/?categories=0003"
        },
        {   
            id: 2,
            category: "Cat",
            link: cat,
            description: "",
            brandExamples: "",
            onlineShopURL: ""
        },
        {   
            id: 3,
            category: "Small Mammal",
            link: mammal,
            description: "",
            brandExamples: "",
            onlineShopURL: ""
        },
        {   
            id: 4,
            category: "Bird",
            link: bird,
            description: "",
            brandExamples: "",
            onlineShopURL: ""
        },
        {   
            id: 5,
            category: "Reptile",
            link: reptile,
            description: "",
            brandExamples: "",
            onlineShopURL: ""
        },
        {   
            id: 6,
            category: "Aquatic",
            link: aquatics,
            description: "",
            brandExamples: "",
            onlineShopURL: ""
        }
    ]
}