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
            description: ["At Atlas Pet, we've got all your dog’s needs covered. We have an endless selection of food to satisfy any dietary restrictions or preferences from picky eating to allergies. Our friendly and knowledgeable staff are ready to help solve any issues with current foods. Are you looking for something specific? We can special order almost anything just for you.", "Our supplies and services don't end there. We carry treats, leashes, collars, harnesses, pet clothing, hunting supplies, health aids, training aids, flea & tick medication, dental treats/products, and grooming supplies. We also offer a convenient self-serve pet wash station at participating locations so you can help your dog stay squeaky clean and leave the mess with us!", "We are confident that when you leave Atlas Pet, you'll leave with a smile and a wag of your dog's tail!"],
            brandExamples: ["these", "are", "brand", "examples"],
            categoryTitle: "Everything for your Dog.",
            onlineShopURL: "https://shop.atlaspet.net/products/list/?categories=0003"
        },
        {   
            id: 2,
            category: "Cat",
            link: cat,
            description: "this is a test description",
            brandExamples: ["these", "are", "brand", "examples"],
            categoryTitle: "Everything for your Cat.",
            onlineShopURL: ""
        },
        {   
            id: 3,
            category: "Small Mammal",
            link: mammal,
            description: "this is a test description",
            brandExamples: ["these", "are", "brand", "examples"],
            categoryTitle: "Everything for your Pocket Pet.",
            onlineShopURL: ""
        },
        {   
            id: 4,
            category: "Bird",
            link: bird,
            description: "this is a test description",
            brandExamples: ["these", "are", "brand", "examples"],
            categoryTitle: "Everything for your Bird.",
            onlineShopURL: ""
        },
        {   
            id: 5,
            category: "Reptile",
            link: reptile,
            description: "this is a test description",
            brandExamples: ["these", "are", "brand", "examples"],
            categoryTitle: "Everything for your Reptile.",
            onlineShopURL: ""
        },
        {   
            id: 6,
            category: "Aquatic",
            link: aquatics,
            description: "this is a test description",
            brandExamples: ["these", "are", "brand", "examples"],
            categoryTitle: "Everything for your Aquarium.",
            onlineShopURL: ""
        }
    ]
}