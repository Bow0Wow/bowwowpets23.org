function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input.toLowerCase() == "hello" || input.toLowerCase() == "hi" || input.toLowerCase() == "hello!" || input.toLowerCase() == "hi!" ) {
        return "Hello there!";
    } else if (input.toLowerCase() == "bye") {
        return "Talk to you later!";
    } else if (input.toLowerCase() == "i love the bowwow interface!" || input.toLowerCase() == "thank you" || input.toLowerCase() == "thank you!" ) {
        return "Thanks for your feedback! Appreciate it!";
    } else if (input.toLowerCase() == "i hate the interface") {
        return "Sorry for the inconvenience you had to face by using this interface, we'll try to maintain it better!";
    } else if (input.toLowerCase() == "what do i do if my pet is bored?") {
        return "You can take it out for a stroll(if it is a dog or a cat) or play with it in your leisure time.";
    } else if (input.toLowerCase() == "what do i do if my pet is bleeding?") {
        return "To help control external bleeding, place a compress of clean cloth or gauze directly over your dog or cat's wound";  
    }  else if (input.toLowerCase() == "what if i get to know my pet has rabies?") {
        return "Call your veterinarian immediately for an examination of the wound and treatment. Your vet can provide a booster to your dog's rabies vaccination and clean the wound to prevent infection.";  
    }  else if (input.toLowerCase() == "what are a few symptoms of rabies?") {
        return "Your dog may quickly become restless and irritable, even showing aggression. Rabid animals may also be uncharacteristically affectionate. Similarly, if your dog is usually excited and happy, they may suddenly seem relaxed and disinterested. Physical signs of rabies in dogs to watch for include fever, difficulty swallowing, excessive drooling, staggering, seizures, and even paralysis."
    }  else if (input.toLowerCase() == "my pet ate something that could be poisonous. who do i contact?") {
        return "Call your veterinarian immediately. If you have packaging for the substance, have it handy, so you can better answer your veterinarian's questions."
    }  else if (input.toLowerCase() == "how do i know if the temperature is correct?") {
        return "You can buy an inexpensive thermometer at your pet store. A popular style is flat and sticks to the side of the tank."
    }  else if (input.toLowerCase() == "why does my aquarium water look green?") {
        return "Algae exists in all aquariums and is a natural occurrence. If it gets out of hand though, the water will begin to turn green. This generally happens when there are too many nutrients in the water, or the aquarium is being exposed to too much sunlight. An overcrowded tank or over-fertilizing will cause too many nutrients. Cleaning the tank with a gravel vacuum and wiping the glass with an algae scrubber purchased from your pet store may take care of the job. Two common preventative measures are adding plants to your aquarium and adding one of several types of fish that feed on algae. Your pet store retailer can guide you on types of fish that eat algae."
    }   else if (input.toLowerCase() == "how can i keep my hamster healthy?") {
        return "Take your hamster to a vet experienced with small pets a few days after you bring her home, then annually. Take your hamster for a check-up if it displays any of these symptoms: Wheezing, Runny nose, Irregular eating or drinking, Overgrown front teeth, Bald patches, Sores on the feet, Loose stools, Blood in the urine. "
    } else if (input.toLowerCase() == "why does my rabbit keep shaking its head?") {
        return "This is usually indicative of a problem with the rabbit's ears, although sometimes rabbits shake their head and flick their ears when they are excited or to invite you to play."
    }   else if (input.toLowerCase() == "how much should my hamster eat daily?") {
        return "Pelleted food: refresh daily 3/4 full or 75%, Vegetables: dark leafy greens every other day or 15%, Fruits: apples, bananas, melons once a week or 5%, Treats: raisins and alfalfa hay twice a week or 5, Water: provide clean water daily!"
    }   else if (input.toLowerCase() == "why do i need a heater for my aquarium?") {
        return "Most aquarium fish are tropical fish — they come from warm climates and warm waters. To keep them healthy we need to provide a warm water environment. A heater made for aquariums is how we ensure the correct water temperature. Tropical fish prefer temperatures of 75 to 78 degrees F. The aquarium heater will cycle on and off automatically. Your pet store can assist you with the size and style to meet your needs."
    }   else if (input.toLowerCase() == "can i keep my rabbit indoors?") {
        return "Rabbits can be kept indoors, either in a cage or free range (house rabbit). They are very easy to litter train and no more destructive than a cat or dog."
    }   else{
    return "We currently don't have an answer for this, we will get back to you on the same! E-mail us your query on petsbowwow22@gmail.com!"
    }
}
