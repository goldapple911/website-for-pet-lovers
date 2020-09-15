import dog from "./Assets/dog.jpg";
import cat from "./Assets/cat.jpg";
import mammal from "./Assets/mammal.jpg";
import bird from "./Assets/bird.jpg";
import reptile from "./Assets/reptile.jpg";
import aquatics from "./Assets/aquatics.jpg";

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