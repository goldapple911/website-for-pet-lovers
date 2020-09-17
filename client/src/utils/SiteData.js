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
            description: ["At Atlas Pet, we've got all your cat’s needs covered. We have an endless selection of food to satisfy any dietary needs or preferences from picky eating to allergies. Our friendly and knowledgeable staff are ready to help solve any issues with current foods. Are you looking for something specific? We can special order almost anything just for you.", "Our supplies and services don't end there. We also carry treats, leashes, collars, harnesses, toys, pet clothing, health aids, flea & tick medication, dental treats/products, and grooming supplies!", "We are confident that when you leave Atlas Pet, you'll leave with a smile and everything to fulfill your cat's needs!"],
            brandExamples: ["these", "are", "brand", "examples"],
            categoryTitle: "Everything for your Cat.",
            onlineShopURL: ""
        },
        {   
            id: 3,
            category: "Small Mammal",
            link: mammal,
            description: ["At Atlas Pet, we've got all your pocket pets covered. With brands like Oxbow®, Sunseed®, Marshall's® and Kaytee®, we have an endless selection of food fit for mice, rats, gerbils, hamsters, guinea pigs, chinchillas, rabbits, ferrets, hedgehogs, and even sugar gliders. Are you looking for something specific? We can special order almost anything just for you.", "Our supplies and services don't end there. Our friendly and knowledgeable staff are ready to help answer questions about any small mammal. We also carry treats, harnesses, leashes, toys, health aids, and grooming supplies!", "We are confident that when you leave Atlas Pet, you'll leave with everything you need to enrich the life of your small mammal."],
            brandExamples: ["these", "are", "brand", "examples"],
            categoryTitle: "Everything for your Pocket Pet.",
            onlineShopURL: ""
        },
        {   
            id: 4,
            category: "Bird",
            link: bird,
            description: ["At Atlas Pet, we've got all your bird needs covered. With brands like Sunseed®, ZuPreem®, and Pretty Bird®, we have an endless selection of food fit for Parakeets, Finches, Canaries, Conures, Cockatiels, Lovebirds, Macaws, African Greys, Cockatus, Doves and more! Are you looking for something specific? We can special order almost anything just for you.","Our supplies and services don't end there. Our friendly and knowledgeable staff are ready to help answer questions about any pet bird. We also carry cages, treats, harnesses, leashes, toys, health aids, and grooming supplies!", "We are confident that when you leave Atlas Pet, you'll leave with everything you need to enrich the life of your feathered friend."],
            brandExamples: ["these", "are", "brand", "examples"],
            categoryTitle: "Everything for your Bird.",
            onlineShopURL: ""
        },
        {   
            id: 5,
            category: "Reptile",
            link: reptile,
            description: ["At Atlas Pet, we've got all your reptile needs covered. Not only do we carry a wide variety of live feeder insects, but we also stock some great pellet, soft, and canned food options for both insectivores and omnivores. With brands like ZooMed®, Exo Terra®, Fluker's®, and Zilla®, we are sure to have everything you need to meet the specific requirements of your unique reptile. Are you looking for something we don't carry? We can special order almost anything just for you.", "Our supplies and services don't end there. Our friendly and knowledgeable staff are ready to help answer questions about any reptile or amphibian. We also carry terrarium accessories, harnesses, heat lamps & bulbs, health aids, and cleaning supplies!", "We are confident that when you leave Atlas Pet, you'll leave with everything you need to keep you cold-blooded creature happy."],
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