export type ContentType = 'caption' | 'story' | 'post' | 'vlog' | 'reel' | 'video-idea';
export type Platform = 'instagram' | 'youtube' | 'linkedin' | 'x' | 'facebook';
export type Topic = 
  | 'car' | 'food' | 'travel' | 'fashion' | 'fitness' 
  | 'tech' | 'nature' | 'music' | 'pets' | 'business' 
  | 'celebration' | 'lifestyle' | 'general';

const topicKeywords: Record<Topic, string[]> = {
  car: ['car', 'bike', 'road', 'drive', 'speed', 'vehicle', 'motorcycle', 'highway', 'racing', 'wheels', 'engine'],
  food: ['food', 'pizza', 'burger', 'cake', 'coffee', 'meal', 'dish', 'dessert', 'chocolate', 'restaurant', 'cooking', 'recipe', 'fries', 'street food'],
  travel: ['travel', 'beach', 'mountain', 'trip', 'vacation', 'sunset', 'adventure', 'explore', 'wanderlust', 'destination', 'tourism', 'goa', 'trekking'],
  fashion: ['fashion', 'outfit', 'dress', 'style', 'clothes', 'wear', 'trendy', 'wardrobe', 'traditional', 'street style', 'photoshoot'],
  fitness: ['gym', 'workout', 'fitness', 'exercise', 'health', 'yoga', 'training', 'muscle', 'cardio', 'wellness', 'selfie'],
  tech: ['technology', 'laptop', 'phone', 'gadget', 'coding', 'ai', 'software', 'digital', 'smartphone', 'app', 'conference', 'demo', 'project'],
  nature: ['nature', 'forest', 'flowers', 'sky', 'river', 'rain', 'sunrise', 'garden', 'wildlife', 'green', 'rainy', 'flower'],
  music: ['music', 'guitar', 'song', 'piano', 'concert', 'dance', 'singing', 'melody', 'band', 'live', 'practice', 'reel'],
  pets: ['pets', 'dog', 'cat', 'puppy', 'kitten', 'animal', 'cute', 'adoption', 'park', 'sleepy'],
  business: ['business', 'startup', 'office', 'meeting', 'work', 'entrepreneur', 'corporate', 'professional', 'launch', 'product', 'home setup'],
  celebration: ['birthday', 'anniversary', 'wedding', 'festival', 'party', 'celebration', 'moments'],
  lifestyle: ['friends', 'hangout', 'college', 'campus', 'study', 'reading', 'book', 'morning', 'routine', 'vlog', 'daily', 'motivational', 'weekend', 'vibes'],
  general: []
};

const topicCaptions: Record<Topic, string[]> = {
  car: [
    "Life is too short for boring cars 🚗💨 #CarLife #SpeedLover",
    "Four wheels move the body, but horsepower moves the soul ⚡ #CarEnthusiast",
    "Every road trip has a story, and this one's just getting started 🛣️ #RoadTrip",
    "Chasing horizons, one mile at a time 🏎️ #DriveLife #CarCulture",
    "The only therapy I need is a long drive and good music 🎵🚘",
    "Born to ride, forced to work 🏍️ #BikeLife #TwoWheels"
  ],
  food: [
    "Good food, good mood 🍕✨ #Foodie #FoodLover",
    "First, we eat. Then, we do everything else 🍔 #FoodIsLife",
    "Life is uncertain. Eat dessert first 🍰 #SweetTooth",
    "Stressed spelled backwards is desserts. Coincidence? I think not 🍫 #DessertTime",
    "Coffee: because adulting is hard ☕ #CoffeeLover #ButFirstCoffee",
    "In pizza we trust 🍕🙌 #PizzaLover #FoodGram"
  ],
  travel: [
    "Adventure awaits, go find it 🌍✈️ #TravelLife #Wanderlust",
    "Collect moments, not things 📸 #TravelGram #Explorer",
    "The world is a book and I'm here to read every page 🌅 #Traveler",
    "Sunsets and ocean breeze - this is my therapy 🏖️ #BeachVibes",
    "Mountains are calling and I must go 🏔️ #MountainLife #Adventure",
    "Take only memories, leave only footprints 🌴 #VacationMode"
  ],
  fashion: [
    "Dress like you're already famous 👗✨ #Fashion #OOTD",
    "Style is a way to say who you are without speaking 💃 #FashionBlogger",
    "Life isn't perfect but your outfit can be 🌟 #StyleInspo",
    "Elegance is the only beauty that never fades ✨ #ClassicStyle",
    "Fashion is art and you are the canvas 🎨 #FashionForward",
    "Traditional vibes with a modern twist 🪷 #EthnicWear #Culture"
  ],
  fitness: [
    "Your only limit is you 💪🔥 #FitnessMotivation #GymLife",
    "Sweat now, shine later ✨ #WorkoutMode #FitFam",
    "Strong is the new beautiful 💪 #FitnessGoals #HealthyLifestyle",
    "Train like a beast, look like a beauty 🦁 #GymTime",
    "The body achieves what the mind believes 🧘 #YogaLife #Mindfulness",
    "Progress, not perfection 📈 #FitnessJourney #NoExcuses"
  ],
  tech: [
    "Code is poetry written in logic 💻✨ #TechLife #Developer",
    "The future is now, and I'm building it 🚀 #Innovation #AI",
    "Debugging life, one line at a time 🔧 #CodingLife #Programmer",
    "Technology is best when it brings people together 🌐 #TechCommunity",
    "Creating the future, one project at a time 💡 #TechInnovation",
    "In a world of algorithms, be the exception 🤖 #AIRevolution"
  ],
  nature: [
    "Nature is not a place to visit, it's home 🌿💚 #NatureLover",
    "In every walk with nature, one receives far more than they seek 🌸 #NaturePhotography",
    "The earth has music for those who listen 🌧️ #RainyDay #Peaceful",
    "Sunrise state of mind 🌅 #MorningVibes #GoldenHour",
    "Bloom where you are planted 🌺 #FlowerPower #GardenLife",
    "Let the rivers guide you and the mountains inspire you 🏞️ #NatureEscape"
  ],
  music: [
    "Where words fail, music speaks 🎵🎸 #MusicIsLife #Musician",
    "Life is better with a soundtrack 🎧 #MusicLover #Vibes",
    "Dancing through life, one beat at a time 💃 #DanceLife",
    "Music is the universal language of mankind 🎹 #PianoLife",
    "Live music, live life 🎤 #ConcertVibes #LiveMusic",
    "When in doubt, just dance it out 🕺 #DanceReels #Groove"
  ],
  pets: [
    "My therapist has fur and four legs 🐕💕 #DogLover #PetLife",
    "Home is where my cat is 🐱✨ #CatLover #Meow",
    "Who rescued who? 🐾 #AdoptDontShop #RescuePet",
    "Living that puppy love life 🐶💖 #PuppyLove #DogsOfInstagram",
    "Cats: because people are overrated 😸 #CatLife #Feline",
    "Every day is better with paws around 🐾 #PetParent #FurBaby"
  ],
  business: [
    "Dream big. Work hard. Stay focused. 💼🚀 #Entrepreneur #StartupLife",
    "Success is not final, failure is not fatal 📈 #BusinessMindset",
    "Building empires, one meeting at a time 🏢 #CEO #BossLife",
    "Work hard in silence, let success make the noise 🔇💪 #Hustle",
    "The grind never stops 💻 #WorkFromHome #RemoteWork",
    "Launching dreams into reality 🚀 #ProductLaunch #Startup"
  ],
  celebration: [
    "Another year older, another year bolder 🎂✨ #Birthday #Blessed",
    "Love grows stronger with every year ❤️ #Anniversary #LoveStory",
    "Here's to love, laughter, and happily ever after 💍 #Wedding #LoveWins",
    "Festivals, family, and a whole lot of joy 🪔 #FestivalVibes",
    "Cheers to the moments that take our breath away 🥂 #Celebration",
    "Making memories one celebration at a time 🎉 #PartyTime"
  ],
  lifestyle: [
    "Living my best life, one day at a time ☀️ #LifeIsGood",
    "Good friends, good times, great memories 👫 #FriendsForever",
    "College days: the best days 📚✨ #CampusLife #StudentLife",
    "Books are a uniquely portable magic 📖 #Bookworm #Reading",
    "Morning routines set the tone for the day 🌅 #MorningMotivation",
    "Weekend vibes loading... 🌴 #WeekendMood #ChillVibes"
  ],
  general: [
    "Just living in the moment ✨ #LifeIsBeautiful",
    "Creating my own sunshine ☀️ #PositiveVibes",
    "Every day is a new beginning 🌟 #NewDay #Motivation",
    "Be yourself; everyone else is already taken 💫 #BeYou",
    "Making today ridiculously amazing 🚀 #GoodVibesOnly",
    "Life is what happens when you're busy making other plans 📸 #LiveInTheMoment"
  ]
};

const topicStories: Record<Topic, string[]> = {
  car: [
    "🚗 POV: You finally took that dream road trip...\n\nThe engine hums, the road stretches endlessly ahead, and for once, the destination doesn't matter. It's all about the journey.\n\nWhere would YOUR dream drive take you? 🛣️",
    "Story time: Remember when getting your first car felt like getting superpowers? 🦸‍♂️\n\nThat freedom, that independence, that first solo drive with the windows down and music up...\n\nSome feelings just hit different. 💨"
  ],
  food: [
    "🍕 Confession time: I believe food is the answer to 99% of life's problems.\n\nBad day? Comfort food.\nGood day? Celebration food.\nBored? Snack time.\n\nTell me I'm not alone in this 😅",
    "That moment when the food arrives and everyone goes silent for the first bite... 🤤\n\nPure. Blissful. Silence.\n\nThis is the way. 🙏"
  ],
  travel: [
    "✈️ Travel isn't just about the places you visit...\n\nIt's about who you become along the way. Every stamp in your passport is a chapter in your story.\n\nWhere's your next chapter taking you? 🌍",
    "Unpopular opinion: The best travel memories are the unplanned ones.\n\nThat random café, that stranger who became a friend, that sunset you almost missed... ✨\n\nChaos makes the best stories. 📸"
  ],
  fashion: [
    "👗 Fashion tip of the day: Wear whatever makes you feel like the main character.\n\nBecause honey, this is YOUR story. Dress accordingly. ✨",
    "Behind every good outfit is a person who changed 5 times before leaving the house 😅\n\nRelatable? Just me? Okay. 💃"
  ],
  fitness: [
    "💪 Day 1 vs Day 100 hits different.\n\nNot because the workout gets easier, but because YOU get stronger. Mentally. Physically. Emotionally.\n\nKeep showing up. Future you is cheering. 🔥",
    "Hot take: The gym isn't about looking good for others.\n\nIt's about proving to YOURSELF that you can do hard things. And that's the real flex. 🏋️"
  ],
  tech: [
    "💻 Every bug fixed is a mini victory celebration.\n\nEvery feature shipped is a 'we did it' moment.\n\nTech life isn't just about code—it's about solving problems that matter. 🚀",
    "2024 thought: We're literally living in the future our younger selves dreamed about.\n\nAI, smartphones, instant global connection... And yet we complain about WiFi speed 😂 #TechLife"
  ],
  nature: [
    "🌿 Sometimes the best therapy has no walls, no roof, just sky above and earth below.\n\nNature doesn't ask for anything in return. It just gives.\n\nWhen did you last just... breathe? 🌅",
    "Rain has this magical way of washing away not just the dust, but the noise in your mind too 🌧️\n\nPetrichor and peace. That's the combo. ☔"
  ],
  music: [
    "🎵 There's always that ONE song that transports you back in time.\n\nSuddenly you're 16 again, feeling everything all at once.\n\nWhat's YOUR time machine song? 🎧",
    "Dancing alone in your room at 2 AM hits different than any club ever could 💃\n\nNo judgment. Just pure, chaotic joy. 🎶"
  ],
  pets: [
    "🐕 Dogs don't care about your job title, your followers, or your bank account.\n\nThey just care that you came home.\n\nWe don't deserve dogs, but we get them anyway. 💕",
    "Cat logic: I will ignore you all day, but HOW DARE you close the bathroom door 😾\n\nAnd yet, we love them unconditionally. 🐱"
  ],
  business: [
    "💼 Entrepreneurship is a rollercoaster.\n\nMonday: I'm going to change the world!\nTuesday: Is this even worth it?\nWednesday: WE GOT A SALE!\n\nAnd repeat. Forever. 🚀",
    "Hot take: 'Work-life balance' is less about equal time and more about intentional presence.\n\nBe fully there, wherever 'there' is. 🎯"
  ],
  celebration: [
    "🎂 Birthday reminder: You've survived 100% of your worst days so far.\n\nThat's pretty impressive. Celebrate yourself today! 🎉",
    "The best celebrations aren't about the party size—they're about the people in the room 💕\n\nQuality over quantity. Always. ✨"
  ],
  lifestyle: [
    "☀️ Morning routines aren't about being perfect.\n\nThey're about giving yourself a fighting chance to start the day with intention instead of chaos.\n\nWhat's YOUR non-negotiable morning ritual? 🌅",
    "Weekend plans: Aggressively doing nothing and feeling zero guilt about it 😌\n\nRest is productive. Pass it on. 🛋️"
  ],
  general: [
    "✨ Quick reminder: You're allowed to be a work in progress AND a masterpiece at the same time.\n\nGrowth doesn't mean you're broken. It means you're alive.",
    "Some days you're the windshield, some days you're the bug 🐛\n\nEither way, you're part of the journey. Keep going! 💪"
  ]
};

const topicPosts: Record<Topic, string[]> = {
  car: [
    "🚗 THE CAR ENTHUSIAST'S MANIFESTO\n\nWe don't just see vehicles—we see art, engineering, and freedom combined.\n\nEvery curve tells a story. Every engine note is music. Every drive is an adventure waiting to happen.\n\nWhether it's a classic beauty or a modern beast, cars aren't just transportation—they're an extension of who we are.\n\n📍 Tag a fellow car lover who gets it!\n\n#CarLife #Automotive #CarCulture #DrivingEnthusiast #CarCommunity",
    "🏎️ 5 REASONS WHY ROAD TRIPS > FLIGHTS\n\n1️⃣ The journey IS the destination\n2️⃣ Spontaneous detours and discoveries\n3️⃣ Your playlist, your rules\n4️⃣ No baggage fees (except emotional baggage 😅)\n5️⃣ Stories that start with 'Remember when we...'\n\nWhat's your favorite road trip memory? 👇\n\n#RoadTrip #Travel #Adventure #DriveLife"
  ],
  food: [
    "🍕 UNPOPULAR FOOD OPINIONS THREAD\n\nI'll go first:\n• Pineapple DOES belong on pizza 🍍\n• Breakfast for dinner is superior\n• Cold pizza > reheated pizza\n• Water is the best beverage\n\nYour turn—drop your controversial food takes below! 👇\n\nNo judgment zone (okay, maybe a little) 😂\n\n#FoodDebate #Foodie #FoodLover #FoodCommunity",
    "☕ A LOVE LETTER TO COFFEE\n\nDear Coffee,\n\nYou've been there through early mornings, late nights, deadlines, and daydreams.\n\nYou don't judge. You just caffeinate.\n\nYou're not just a beverage—you're a lifestyle, a ritual, a warm hug in a mug.\n\nForever yours,\nEvery morning person (and those pretending to be)\n\n#CoffeeLover #ButFirstCoffee #CoffeeCulture"
  ],
  travel: [
    "🌍 TRAVEL TRANSFORMS YOU. HERE'S HOW:\n\n✨ Before travel: Comfort zone = safety\n✨ After travel: Comfort zone = growth opportunity\n\n✨ Before: Different = scary\n✨ After: Different = beautiful\n\n✨ Before: Home is one place\n✨ After: Home is a feeling\n\nEvery passport stamp changes you a little. Every culture teaches you something. Every adventure reminds you how vast this world is.\n\nWhere has travel taken you—and who have you become? 📸\n\n#TravelLife #Wanderlust #TravelTransformation",
    "📍 BUCKET LIST CHECK ✅\n\nSome moments just hit different:\n• First international trip\n• Watching sunrise from a mountain top\n• Getting lost (and finding something better)\n• Making friends from different continents\n• That meal that changed your standards forever\n\nWhat's still on YOUR travel bucket list? Let's share! 👇\n\n#TravelBucketList #Adventure #Explorer"
  ],
  fashion: [
    "👗 STYLE RULES I'VE LEARNED (AND UNLEARNED)\n\n❌ Old rule: Follow every trend\n✅ New rule: Curate what feels like YOU\n\n❌ Old rule: Expensive = stylish\n✅ New rule: Confidence = stylish\n\n❌ Old rule: Play it safe\n✅ New rule: Take fashion risks—it's just clothes!\n\nFashion is self-expression. There are no wrong answers, only YOUR answers.\n\nWhat fashion 'rule' did you unlearn? 👇\n\n#StyleTips #FashionAdvice #PersonalStyle",
    "✨ OUTFIT FORMULA THAT WORKS EVERY TIME\n\n1️⃣ Start with a neutral base\n2️⃣ Add ONE statement piece\n3️⃣ Accessorize with intention\n4️⃣ Comfort is non-negotiable\n5️⃣ Wear it with confidence\n\nBoom. You're dressed. You're styled. You're ready.\n\nSave this for your next 'I have nothing to wear' moment! 📌\n\n#OOTD #StyleHacks #FashionTips"
  ],
  fitness: [
    "💪 FITNESS TRUTHS NO ONE TELLS YOU\n\n1️⃣ Progress isn't always visible (but it's happening)\n2️⃣ Rest days are growth days\n3️⃣ Comparison steals joy\n4️⃣ Motivation fades—discipline lasts\n5️⃣ Your body is doing incredible things right now\n\nThe fitness journey isn't about perfection. It's about showing up, especially on hard days.\n\nYou're stronger than you think. Keep going. 🔥\n\n#FitnessMotivation #GymLife #HealthJourney",
    "🏋️ WORKOUT MYTHS WE NEED TO RETIRE\n\n❌ No pain, no gain (pain = injury signal)\n❌ Cardio only for weight loss\n❌ Lifting makes you 'bulky'\n❌ More sweat = better workout\n❌ You need hours at the gym\n\n✅ TRUTH: Consistency > intensity\n✅ TRUTH: Any movement is good movement\n✅ TRUTH: Listen to YOUR body\n\nWhat myth held you back? 👇\n\n#FitnessFacts #WorkoutTips #FitFam"
  ],
  tech: [
    "💻 TECH LESSONS FROM A DEVELOPER'S JOURNEY\n\n🔹 Every expert was once a beginner\n🔹 Google is everyone's co-pilot\n🔹 The bug is usually a missing semicolon\n🔹 Documentation is a love language\n🔹 Imposter syndrome lies to everyone\n\nTo everyone learning to code: You belong here. Your questions are valid. Your progress is real.\n\nKeep building. 🚀\n\n#TechLife #Developer #CodingJourney #LearnToCode",
    "🤖 AI ISN'T REPLACING YOU—IT'S AMPLIFYING YOU\n\nHere's the truth about AI:\n\n• It's a tool, not a threat\n• It handles repetition so you can handle creativity\n• It assists decisions, not makes them\n• It learns from us, not instead of us\n\nThe future isn't AI vs humans. It's AI + humans.\n\nHow are YOU using AI in your workflow? 👇\n\n#AI #TechTrends #FutureOfWork"
  ],
  nature: [
    "🌿 LESSONS NATURE TEACHES (IF WE LISTEN)\n\n🌱 Growth takes time—seasons exist for a reason\n🌊 Adaptability is survival\n🌅 Every ending is a new beginning\n🌳 Strong roots weather any storm\n🦋 Transformation requires letting go\n\nNature doesn't rush. Neither should we.\n\nWhen did nature last remind you to slow down? 🍃\n\n#NatureWisdom #MindfulLiving #NatureLover",
    "📸 THERE'S NO FILTER FOR THIS\n\nSome views just hit different:\n• Sunrise after a sleepless night\n• Rain on a quiet afternoon\n• Stars in a place with no city lights\n• Flowers blooming after winter\n\nNature's beauty needs no editing. It just is.\n\nWhat's the most breathtaking nature moment you've witnessed? 👇\n\n#NaturePhotography #NaturalBeauty #EarthMagic"
  ],
  music: [
    "🎵 MUSIC ISN'T JUST SOUND—IT'S A TIME MACHINE\n\nOne song can take you back:\n• To your first heartbreak\n• To that summer with friends\n• To drives with your parents\n• To moments you thought you forgot\n\nMusic stores memories better than any photo album.\n\nWhat song transports YOU? 🎧\n\n#MusicMemories #SongsOfMyLife #MusicLovers",
    "🎸 WHY MUSIC MATTERS MORE THAN EVER\n\nIn a world of noise, music creates:\n✨ Connection across cultures\n✨ Expression beyond words\n✨ Healing without explanation\n✨ Unity in diversity\n\nWhether you create it, share it, or just feel it—music is universal.\n\nWhat genre is your current mood? 👇\n\n#MusicIsLife #MusicCommunity #UniversalLanguage"
  ],
  pets: [
    "🐾 THINGS MY PET TAUGHT ME ABOUT LIFE\n\n1️⃣ Naps are essential, not lazy\n2️⃣ Show excitement when people come home\n3️⃣ Loyalty is everything\n4️⃣ Live in the moment\n5️⃣ Unconditional love exists\n\nPets don't just live with us—they teach us how to live better.\n\nWhat has YOUR pet taught you? 🐕🐱\n\n#PetWisdom #DogLife #CatLife #PetParent",
    "🏠 THE HOUSE ISN'T A HOME WITHOUT...\n\n• Paw prints everywhere\n• Fur on every surface\n• Toys in random places\n• Someone excited to see you\n• Unconditional cuddles\n\nPets aren't just animals. They're family.\n\nDouble tap if you agree! ❤️\n\n#PetFamily #FurBaby #AdoptDontShop"
  ],
  business: [
    "💼 ENTREPRENEURSHIP: THE UNFILTERED TRUTH\n\n📈 What they show: The wins, launches, success\n📉 What they hide: The doubts, pivots, 3 AM anxiety\n\nBuilding something is messy. It's hard. It's lonely sometimes.\n\nBut it's also:\n✨ Incredibly rewarding\n✨ Personally transformative\n✨ Worth every sleepless night\n\nTo every entrepreneur in the trenches: You're not alone. Keep building. 🚀\n\n#Entrepreneur #StartupLife #BusinessOwner",
    "🎯 CAREER ADVICE I WISH I HAD EARLIER\n\n1️⃣ Skills > titles\n2️⃣ Network = net worth\n3️⃣ Failure is data, not defeat\n4️⃣ Say yes, then figure it out\n5️⃣ Your career isn't a ladder—it's a jungle gym\n\nThe path isn't linear. That's not a bug—it's a feature.\n\nWhat's the best career advice you've received? 👇\n\n#CareerAdvice #ProfessionalGrowth #WorkWisdom"
  ],
  celebration: [
    "🎂 IT'S NOT JUST ANOTHER YEAR OLDER...\n\nIt's another year of:\n• Lessons learned\n• Strength discovered\n• Love received\n• Growth achieved\n• Memories made\n\nBirthdays aren't about counting years—they're about making years count.\n\nHere's to new chapters, new adventures, new beginnings! 🎉\n\n#Birthday #Celebration #NewChapter",
    "💕 LOVE MILESTONES WORTH CELEBRATING\n\nNot just anniversaries, but:\n• First 'I love you'\n• First fight (and making up)\n• First trip together\n• Inside jokes no one else gets\n• Choosing each other daily\n\nLove isn't just big moments—it's small, everyday choices.\n\nWhat moment are YOU celebrating today? ❤️\n\n#Love #Relationship #Milestones"
  ],
  lifestyle: [
    "☀️ THE MORNING ROUTINE THAT CHANGED EVERYTHING\n\n5:30 - Wake (no snooze!)\n5:45 - Hydrate + move\n6:15 - Journal 3 gratitudes\n6:30 - Focused work block\n8:00 - World catches up\n\nMornings set the tone. Own them, own your day.\n\n(Still working on the 'no snooze' part 😅)\n\nWhat's YOUR morning non-negotiable? 👇\n\n#MorningRoutine #ProductivityTips #LifestyleDesign",
    "🌴 WEEKEND MOOD: ACTIVATED\n\nWeekends are for:\n✨ Sleeping in without guilt\n✨ Brunch that turns into lunch\n✨ Friends, family, or solo peace\n✨ Hobbies that aren't hustling\n✨ Recharging for Monday\n\nRest isn't laziness—it's essential.\n\nWhat are YOUR weekend plans? 🛋️\n\n#WeekendVibes #SelfCare #WorkLifeBalance"
  ],
  general: [
    "✨ THINGS I'M LEARNING LATELY\n\n• Done is better than perfect\n• 'No' is a complete sentence\n• Comparison is a thief\n• Small steps = big journeys\n• You're allowed to change your mind\n\nLife is a continuous lesson. What are YOU learning right now? 📚\n\n#LifeLessons #PersonalGrowth #Reflections",
    "🌟 PERMISSION SLIP FOR TODAY\n\nYou're allowed to:\n• Rest without earning it\n• Change your mind\n• Not have it all figured out\n• Celebrate small wins\n• Ask for help\n• Start over\n\nSigned: The Universe ✨\n\nTag someone who needs this today! 💙\n\n#Reminder #SelfLove #YouGotThis"
  ]
};

const topicVlogScripts: Record<Topic, string[]> = {
  car: [
    "🎬 VLOG SCRIPT: A DAY IN THE LIFE OF A CAR ENTHUSIAST\n\n[INTRO - 0:00]\n\"What's up everyone! Today I'm taking you along for an epic day with my ride...\"\n\n[MORNING ROUTINE - 0:30]\n• Wake up, coffee, check on the car\n• Quick walk-around inspection\n• Talk about today's plans\n\n[MAIN CONTENT - 2:00]\n• The drive (scenic route!)\n• Share fun car facts\n• Stop at a cool location\n\n[OUTRO - 8:00]\n\"Thanks for riding along! Drop your dream car in the comments...\"",
    "🎬 VLOG SCRIPT: ROAD TRIP EDITION\n\n[HOOK - 0:00]\n\"We're about to drive 500 miles and I have no idea what's going to happen...\"\n\n[CHAPTER 1: The Start]\n• Pack the car (timelapse)\n• Playlist reveal\n• First hour reflections\n\n[CHAPTER 2: The Journey]\n• Scenic stops\n• Food breaks\n• Random adventures\n\n[CHAPTER 3: The Arrival]\n• Reactions\n• Sunset moment\n• What's next teaser"
  ],
  food: [
    "🎬 VLOG SCRIPT: WHAT I EAT IN A DAY\n\n[INTRO]\n\"Today I'm showing you EVERYTHING I eat—no filters, no judgment!\"\n\n[BREAKFAST - 1:00]\n• Show the making process\n• Talk about why this meal\n• Taste reaction\n\n[LUNCH - 4:00]\n• Recipe or restaurant\n• Food close-ups\n• Rating out of 10\n\n[DINNER - 7:00]\n• The main event\n• Cooking timelapse\n• Final thoughts + tomorrow's cravings",
    "🎬 VLOG SCRIPT: FOOD TOUR EDITION\n\n[HOOK]\n\"I'm about to eat my way through [LOCATION] and you're coming with me!\"\n\n[STOP 1]\n• First impressions\n• What I ordered\n• Honest review\n\n[STOP 2-4]\n• Hidden gems\n• Local favorites\n• Must-tries\n\n[FINALE]\n• Best bite of the day\n• Would I come back?\n• Your recommendations?"
  ],
  travel: [
    "🎬 VLOG SCRIPT: TRAVEL DIARY - [DESTINATION]\n\n[CINEMATIC INTRO - 0:00]\nB-roll of arrival, first glimpses, background music\n\n[DAY 1: ARRIVAL - 1:00]\n• Flight/journey experience\n• First impressions\n• Hotel/Airbnb tour\n\n[DAY 2-3: EXPLORATION - 3:00]\n• Key attractions\n• Hidden spots\n• Local food\n• Interactions with locals\n\n[FINAL DAY: REFLECTION - 8:00]\n• Favorite moments\n• What I'd do differently\n• Should YOU visit?",
    "🎬 VLOG SCRIPT: 48 HOURS IN [CITY]\n\n[HOOK]\n\"I have 48 hours to experience everything. Let's go!\"\n\n[HOUR 0-12: Day 1]\n• Morning exploration\n• Lunch spot\n• Afternoon adventures\n• Night scene\n\n[HOUR 12-48: Day 2]\n• Sunrise moment\n• Bucket list item\n• Final meal\n• Departure thoughts"
  ],
  fashion: [
    "🎬 VLOG SCRIPT: OUTFIT OF THE WEEK\n\n[INTRO]\n\"7 days, 7 outfits. Let's see if I can stay stylish all week!\"\n\n[MONDAY-SUNDAY]\n• Quick outfit reveal\n• Why this look\n• Where I'm wearing it\n• Confidence rating\n\n[WRAP UP]\n• Best outfit of the week\n• Style tip learned\n• Next week's challenge?",
    "🎬 VLOG SCRIPT: SHOPPING VLOG + HAUL\n\n[PRE-SHOP]\n• Budget reveal\n• What I'm looking for\n• Store picks\n\n[THE HUNT]\n• Store walkthroughs\n• Try-on reactions\n• Tough decisions\n\n[HAUL REVEAL]\n• Everything I bought\n• Styling ideas\n• Total spent + worth it?"
  ],
  fitness: [
    "🎬 VLOG SCRIPT: DAY IN MY FITNESS LIFE\n\n[5:00 AM - WAKE UP]\n• Morning routine\n• Pre-workout fuel\n• Mindset for the day\n\n[6:00 AM - WORKOUT]\n• Gym arrival\n• Today's routine\n• Form tips\n• Motivation talk\n\n[POST-WORKOUT]\n• Recovery routine\n• Meal prep content\n• Rest of day balance\n\n[OUTRO]\n• Energy check\n• Tomorrow's goals\n• Community question",
    "🎬 VLOG SCRIPT: FITNESS CHALLENGE (Day 1 of 30)\n\n[INTRO]\n\"I'm starting a 30-day challenge and documenting EVERYTHING...\"\n\n[THE SETUP]\n• What the challenge is\n• Current stats/photos\n• Goals and expectations\n\n[DAY 1 ACTION]\n• First workout\n• First meal\n• How I'm feeling\n\n[OUTRO]\n• Day 1 complete!\n• What's coming\n• Join me?"
  ],
  tech: [
    "🎬 VLOG SCRIPT: A DAY IN MY TECH LIFE\n\n[MORNING - 0:00]\n• Wake up routine\n• Desk setup reveal\n• Today's coding/project plan\n\n[WORK SESSION - 2:00]\n• Deep work timelapse\n• Showing the process\n• Overcoming a challenge\n\n[BREAK + GEAR - 5:00]\n• Favorite tools\n• Tech I use daily\n• Quick review\n\n[EVENING - 8:00]\n• Side project time\n• Learning something new\n• Wind-down routine",
    "🎬 VLOG SCRIPT: BUILDING [PROJECT] FROM SCRATCH\n\n[HOOK]\n\"I'm going to build [X] in one video. Let's see if I can do it...\"\n\n[PLANNING PHASE]\n• What we're building\n• Tech stack\n• Potential challenges\n\n[BUILD PHASE]\n• Timelapse coding\n• Debugging moments\n• Breakthroughs!\n\n[FINAL RESULT]\n• Demo time\n• What I learned\n• What's next?"
  ],
  nature: [
    "🎬 VLOG SCRIPT: NATURE ESCAPE\n\n[INTRO - Calm, cinematic]\n\"Sometimes you just need to disconnect...\"\n\n[THE JOURNEY]\n• How I got here\n• First views\n• Sounds of nature (let it breathe)\n\n[EXPLORATION]\n• Walking through\n• Wildlife spots\n• Favorite discoveries\n\n[REFLECTION]\n• Quiet moment\n• What nature teaches\n• Gratitude",
    "🎬 VLOG SCRIPT: SUNRISE/SUNSET CHASE\n\n[PRE-DAWN/DUSK]\n• Waking up early / waiting patiently\n• The anticipation\n• Getting to the spot\n\n[THE MOMENT]\n• Colors changing\n• Minimal talking, maximum visuals\n• Time-lapse if possible\n\n[AFTER]\n• How it felt\n• Photos/videos review\n• Why these moments matter"
  ],
  music: [
    "🎬 VLOG SCRIPT: A DAY IN MY MUSIC LIFE\n\n[MORNING]\n• Wake up with music\n• Practice session\n• Current song I'm learning\n\n[AFTERNOON]\n• Writing/creating session\n• Show the process\n• Struggles and breakthroughs\n\n[EVENING]\n• Performance or jam session\n• Music that inspired me today\n• What I'm working toward",
    "🎬 VLOG SCRIPT: CONCERT/SHOW VLOG\n\n[BEFORE]\n• Getting ready excitement\n• The journey there\n• Venue arrival\n\n[DURING]\n• Crowd energy\n• Best moments (clips)\n• Reactions\n\n[AFTER]\n• Post-show feelings\n• Favorite song\n• Meet anyone?"
  ],
  pets: [
    "🎬 VLOG SCRIPT: A DAY WITH MY PET\n\n[MORNING]\n• Wake up greeting (the best part)\n• Breakfast time\n• Morning walk/play\n\n[AFTERNOON]\n• Adventures together\n• Tricks or training\n• Cute moments\n\n[EVENING]\n• Dinner routine\n• Cuddle time\n• Why pets make life better",
    "🎬 VLOG SCRIPT: PET ADOPTION JOURNEY\n\n[BEFORE]\n• Why I wanted a pet\n• Research and preparation\n• Visiting shelters\n\n[THE MEETING]\n• First time seeing them\n• The connection\n• Decision moment\n\n[COMING HOME]\n• First day home\n• Adjustments\n• Beginning of forever"
  ],
  business: [
    "🎬 VLOG SCRIPT: CEO/ENTREPRENEUR DAY\n\n[MORNING - 6:00 AM]\n• Morning routine\n• Mindset practices\n• First task of the day\n\n[WORK DAY - 9:00 AM]\n• Meetings (appropriate clips)\n• Decision making\n• Team interactions\n\n[EVENING - 6:00 PM]\n• Reflection time\n• Work-life balance efforts\n• Tomorrow's priorities",
    "🎬 VLOG SCRIPT: LAUNCH DAY\n\n[COUNTDOWN]\n• Final preparations\n• Team energy\n• Last-minute fixes\n\n[LAUNCH MOMENT]\n• It's live!\n• First reactions\n• Monitoring metrics\n\n[AFTERMATH]\n• Celebrations\n• What we learned\n• What's next"
  ],
  celebration: [
    "🎬 VLOG SCRIPT: BIRTHDAY/CELEBRATION VLOG\n\n[THE BUILD-UP]\n• Day before preparations\n• Decorations/planning\n• Excitement\n\n[THE DAY]\n• Morning surprise\n• Celebration highlights\n• Messages from loved ones\n\n[REFLECTION]\n• Favorite moments\n• Gratitude\n• Wishes for the future",
    "🎬 VLOG SCRIPT: SPECIAL EVENT\n\n[GETTING READY]\n• Outfit choice\n• Pre-event excitement\n• Travel to venue\n\n[THE EVENT]\n• Arrival\n• Best moments\n• People and connections\n\n[WRAP UP]\n• Post-event thoughts\n• Highlights reel\n• Thank yous"
  ],
  lifestyle: [
    "🎬 VLOG SCRIPT: WEEKLY RESET ROUTINE\n\n[SUNDAY MORNING]\n• Slow start\n• Cleaning timelapse\n• Planning the week\n\n[SELF-CARE]\n• Meal prep\n• Relaxation time\n• Reflection journaling\n\n[EVENING]\n• Week preview\n• Goals setting\n• Peaceful end",
    "🎬 VLOG SCRIPT: PRODUCTIVE DAY IN MY LIFE\n\n[MORNING ROUTINE]\n• Wake-up time\n• Healthy start\n• Task list for the day\n\n[WORK/STUDY]\n• Deep focus blocks\n• Breaks and recharge\n• Progress checkpoints\n\n[EVENING]\n• Winding down\n• Entertainment time\n• Tomorrow prep"
  ],
  general: [
    "🎬 VLOG SCRIPT: RANDOM DAY IN MY LIFE\n\n[INTRO]\n\"No plans, no script, just vibes. Let's see what today brings...\"\n\n[MORNING]\n• Natural wake-up\n• Breakfast choice\n• Initial mood\n\n[ADVENTURES]\n• Whatever happens\n• Spontaneous moments\n• Real reactions\n\n[NIGHT]\n• Day recap\n• Favorite moment\n• See you tomorrow!",
    "🎬 VLOG SCRIPT: Q&A WHILE I DO [ACTIVITY]\n\n[INTRO]\n\"You asked, I'm answering while I [activity]...\"\n\n[QUESTIONS]\n• Answer 5-10 questions\n• Mix of personal/fun/deep\n• Keep it authentic\n\n[OUTRO]\n• Thanks for the questions\n• More Q&A?\n• What to ask next"
  ]
};

const topicReelScripts: Record<Topic, string[]> = {
  car: [
    "🎬 REEL: POV Car Moment\n\n[0-3s] Black screen → engine sound → reveal shot\n[3-8s] Driving B-roll with trending audio\n[8-12s] You in the driver's seat, quick smile/vibe\n[12-15s] Final beauty shot of the car\n\n💡 Audio: Trending car audio or bass-heavy beat\n📝 Caption: \"Some feelings just can't be explained 🔑💨 #CarLife\"",
    "🎬 REEL: Before/After Car Transformation\n\n[0-2s] \"Watch this\" text + dirty/old car shot\n[2-4s] Transition (hand swipe or jump cut)\n[4-8s] Clean/upgraded car reveal\n[8-10s] Walk-around beauty shots\n\n💡 Audio: Beat drop transition audio\n📝 Caption: \"Glow-ups aren't just for people 🚗✨\""
  ],
  food: [
    "🎬 REEL: Satisfying Food ASMR\n\n[0-3s] Ingredient pour/sizzle sound\n[3-7s] Cooking process close-ups\n[7-10s] Plating moment\n[10-13s] First bite reaction + chef's kiss\n\n💡 Audio: Original ASMR sounds or cooking beat\n📝 Caption: \"Tell me you're a foodie without telling me 🍳\"",
    "🎬 REEL: What I Eat In A Day\n\n[0-2s] \"What I ate today 👇\" text\n[2-5s] Breakfast reveal + quick bite\n[5-8s] Lunch moment\n[8-11s] Dinner + dessert\n[11-13s] \"Rate my food day?\" text\n\n💡 Audio: Chill aesthetic audio\n📝 Caption: \"Food diary 📔✨ #FoodieLife\""
  ],
  travel: [
    "🎬 REEL: Travel Transition Edit\n\n[0-2s] Packing suitcase shot\n[2-4s] Airport/station transition\n[4-8s] Multiple destination clips (fast cuts)\n[8-10s] Hero shot of location\n[10-12s] You enjoying the view\n\n💡 Audio: \"Places\" by trending travel audio\n📝 Caption: \"POV: You finally booked that trip ✈️\"",
    "🎬 REEL: Hidden Gem Reveal\n\n[0-3s] \"They don't want you to know about this place...\"\n[3-7s] Build-up walking/approaching\n[7-10s] Dramatic reveal of stunning location\n[10-12s] Your reaction\n\n💡 Audio: Dramatic reveal audio\n📝 Caption: \"Found paradise 📍 Save for later!\""
  ],
  fashion: [
    "🎬 REEL: Outfit Transition\n\n[0-2s] Casual/pajama look\n[2-3s] Magic transition (spin/jump/fabric throw)\n[3-6s] Full outfit reveal\n[6-8s] Detail shots (accessories, shoes)\n[8-10s] Confidence pose\n\n💡 Audio: Get ready with me trending audio\n📝 Caption: \"The transformation is real ✨ #OOTD\"",
    "🎬 REEL: Style Rating\n\n[0-2s] \"Rate this fit 1-10 👇\"\n[2-5s] Full body outfit reveal\n[5-7s] Slow spin or details\n[7-9s] Pose with attitude\n\n💡 Audio: Confident, stylish beat\n📝 Caption: \"Style is the answer to everything 💅\""
  ],
  fitness: [
    "🎬 REEL: Workout Motivation\n\n[0-2s] \"Get up. Show up.\" text\n[2-5s] Intense workout clips\n[5-8s] Struggle moment → push through\n[8-10s] Victory/completion moment\n\n💡 Audio: Motivational beat drop\n📝 Caption: \"Your only competition is who you were yesterday 💪\"",
    "🎬 REEL: Progress Check\n\n[0-3s] \"X months of consistency\"\n[3-5s] Before photo/clip\n[5-7s] Transition effect\n[7-10s] Current/after reveal\n[10-12s] Proud moment\n\n💡 Audio: Glow-up transformation audio\n📝 Caption: \"Trust the process 📈 #FitnessJourney\""
  ],
  tech: [
    "🎬 REEL: Desk Setup Tour\n\n[0-2s] Wide shot of setup\n[2-4s] Close-ups: monitor, keyboard\n[4-6s] Cable management flex\n[6-8s] Lighting/ambiance shot\n[8-10s] You working at it\n\n💡 Audio: Lo-fi or tech aesthetic beat\n📝 Caption: \"Where the magic happens 💻✨\"",
    "🎬 REEL: Coding Moment\n\n[0-2s] Typing close-up\n[2-5s] Code scrolling on screen\n[5-7s] Bug moment → frustration face\n[7-9s] Fix it → celebration\n\n💡 Audio: \"Developer life\" trending audio\n📝 Caption: \"It worked and I don't know why 😅 #DevLife\""
  ],
  nature: [
    "🎬 REEL: Nature Aesthetic\n\n[0-3s] Slow pan of landscape\n[3-6s] Close-ups: flowers, water, leaves\n[6-9s] You in the scene, peaceful\n[9-12s] Wide final shot\n\n💡 Audio: Peaceful, ambient nature sounds or soft music\n📝 Caption: \"Nature is the best therapy 🌿\"",
    "🎬 REEL: Golden Hour Magic\n\n[0-3s] Sun approaching horizon\n[3-6s] Silhouette shots\n[6-9s] Face lit by golden light\n[9-11s] Sun dip moment\n\n💡 Audio: Dreamy, aesthetic audio\n📝 Caption: \"Chasing light 🌅 #GoldenHour\""
  ],
  music: [
    "🎬 REEL: Singing/Playing Cover\n\n[0-10s] Perform snippet of song\n[10-12s] End with smile/reaction\n\n💡 Audio: Your own audio (original sound)\n📝 Caption: \"Late night covers 🎤 Should I do a full version?\"",
    "🎬 REEL: Dance Trend\n\n[0-2s] Starting pose\n[2-10s] Dance to trending choreo\n[10-12s] End pose + smile\n\n💡 Audio: Current trending dance audio\n📝 Caption: \"Finally learned it 💃 How'd I do?\""
  ],
  pets: [
    "🎬 REEL: Day in Pet's Life\n\n[0-2s] Morning wake-up stretch\n[2-4s] Breakfast time (excited reaction)\n[4-6s] Play time clips\n[6-8s] Nap time (cute sleeping shot)\n[8-10s] Cuddle moment with you\n\n💡 Audio: Cute, playful audio\n📝 Caption: \"A day in [pet name]'s life 🐾\"",
    "🎬 REEL: Pet Reacting To...\n\n[0-2s] \"Watch their reaction to [thing]\"\n[2-5s] Showing the thing\n[5-8s] Pet's hilarious reaction\n[8-10s] Your laughing reaction\n\n💡 Audio: Funny reaction audio\n📝 Caption: \"I can't with this one 😂 #PetLife\""
  ],
  business: [
    "🎬 REEL: Day in Entrepreneur Life\n\n[0-2s] Morning motivation shot\n[2-4s] Work grind clips\n[4-6s] Meeting/call moment\n[6-8s] Small win celebration\n[8-10s] Evening hustle or wind-down\n\n💡 Audio: Motivational business audio\n📝 Caption: \"The grind doesn't stop 💼🚀\"",
    "🎬 REEL: Before vs After Business\n\n[0-2s] \"Started from...\" - humble beginning shot\n[2-4s] Transition\n[4-7s] \"Now we're here\" - success moment\n[7-9s] Team or achievement shot\n\n💡 Audio: Success transformation audio\n📝 Caption: \"Every expert was once a beginner 📈\""
  ],
  celebration: [
    "🎬 REEL: Birthday/Event Montage\n\n[0-2s] \"[Age] hits different ✨\"\n[2-5s] Getting ready clips\n[5-8s] Party highlights\n[8-10s] Cake/celebration moment\n[10-12s] Happy ending shot\n\n💡 Audio: Birthday/celebration trending audio\n📝 Caption: \"Another year, another chapter 🎂\"",
    "🎬 REEL: Special Moment Capture\n\n[0-5s] Build-up to moment\n[5-8s] The moment (proposal, reveal, surprise)\n[8-10s] Reactions\n\n💡 Audio: Emotional trending audio\n📝 Caption: \"Some moments change everything 💕\""
  ],
  lifestyle: [
    "🎬 REEL: Morning Routine Aesthetic\n\n[0-2s] Alarm off, stretch\n[2-4s] Skincare/self-care\n[4-6s] Healthy breakfast making\n[6-8s] Getting dressed\n[8-10s] Ready for the day pose\n\n💡 Audio: \"That girl\" aesthetic audio\n📝 Caption: \"Romanticizing my mornings ☀️\"",
    "🎬 REEL: Weekend Reset\n\n[0-2s] Slow morning start\n[2-4s] Cleaning timelapse\n[4-6s] Self-care moments\n[6-8s] Cozy evening setup\n[8-10s] Ready for new week\n\n💡 Audio: Cozy, calming audio\n📝 Caption: \"The reset I needed 🌴 #WeekendVibes\""
  ],
  general: [
    "🎬 REEL: Relatable Moment\n\n[0-3s] Setup the scenario text\n[3-7s] Act out the relatable thing\n[7-10s] Punchline or funny ending\n\n💡 Audio: Trending relatable audio\n📝 Caption: \"It's just me? Okay. 😅\"",
    "🎬 REEL: Photo Dump Style\n\n[0-10s] Quick cuts of random moments (photos/clips) synced to beat\n[10-12s] End with you smiling\n\n💡 Audio: Trendy beat with good sync points\n📝 Caption: \"Recent core memories 📸\""
  ]
};

const topicVideoIdeas: Record<Topic, string[]> = {
  car: [
    "💡 VIDEO IDEAS FOR CAR CONTENT\n\n1. \"I Drove [X Car] For A Week - Honest Review\"\n2. \"Car Detailing Transformation (Satisfying)\"\n3. \"$500 Car vs $50,000 Car - Worth The Difference?\"\n4. \"Things Every Car Owner Should Know\"\n5. \"My Dream Garage Tour\"\n6. \"Road Trip Essentials You Need\"\n7. \"First Time Driving [Car Type]\"\n8. \"Car Modifications I Regret/Love\"",
    "💡 MORE CAR VIDEO IDEAS\n\n1. \"24 Hours Living In My Car\"\n2. \"I Let A Stranger Design My Car Wrap\"\n3. \"Cheap Car Upgrades That Look Expensive\"\n4. \"Reacting To My Old Car Photos\"\n5. \"Car Shopping On A Budget\"\n6. \"Things I Wish I Knew Before Buying A Car\""
  ],
  food: [
    "💡 VIDEO IDEAS FOR FOOD CONTENT\n\n1. \"I Tried Cooking [Famous Chef]'s Recipe\"\n2. \"Eating Only [Color] Foods For 24 Hours\"\n3. \"Rating Popular Food Trends - Worth The Hype?\"\n4. \"$5 vs $50 [Dish] - Can You Taste The Difference?\"\n5. \"Making My Childhood Favorite Recipe\"\n6. \"I Ate Like [Celebrity] For A Day\"\n7. \"Recreating Restaurant Dishes At Home\"\n8. \"Food From Every Country A-Z\"",
    "💡 MORE FOOD VIDEO IDEAS\n\n1. \"Letting The Person In Front Decide My Order\"\n2. \"Eating At The Worst Reviewed Restaurant\"\n3. \"Making Gourmet Food With Cheap Ingredients\"\n4. \"Food Hacks - Do They Actually Work?\"\n5. \"My Honest Kitchen Tour\"\n6. \"Meal Prep Like A Boss - Full Week\""
  ],
  travel: [
    "💡 VIDEO IDEAS FOR TRAVEL CONTENT\n\n1. \"How To Travel [Destination] On A Budget\"\n2. \"48 Hours In [City] - Complete Guide\"\n3. \"Things NOT To Do In [Country]\"\n4. \"I Traveled With Only $100 For A Week\"\n5. \"Most Underrated Destinations You Need To Visit\"\n6. \"Travel Packing Hacks That Changed My Life\"\n7. \"Expectations vs Reality: [Destination]\"\n8. \"Solo Travel Tips For Beginners\"",
    "💡 MORE TRAVEL VIDEO IDEAS\n\n1. \"I Let The Airport Decide My Destination\"\n2. \"Traveling First Class vs Economy - Worth It?\"\n3. \"Hidden Gems vs Tourist Traps\"\n4. \"What's In My Travel Bag (Essentials)\"\n5. \"Learning A New Language In [X Days]\"\n6. \"Cultural Differences That Shocked Me\""
  ],
  fashion: [
    "💡 VIDEO IDEAS FOR FASHION CONTENT\n\n1. \"Building A Capsule Wardrobe From Scratch\"\n2. \"Thrift Flip Challenge - Can I Make It Trendy?\"\n3. \"I Let [Person] Pick My Outfits For A Week\"\n4. \"Fashion Trends I Love/Hate This Season\"\n5. \"How To Style One Piece Multiple Ways\"\n6. \"Dressing For Your Body Type (Honest Guide)\"\n7. \"Designer vs Dupe - Can You Tell?\"\n8. \"My Biggest Fashion Regrets\"",
    "💡 MORE FASHION VIDEO IDEAS\n\n1. \"Recreating Celebrity Outfits On A Budget\"\n2. \"What I'd Wear To [Different Occasions]\"\n3. \"Closet Tour + Organization Tips\"\n4. \"Fashion Rules I Break And Love\"\n5. \"Building An Outfit From Scratch At The Mall\"\n6. \"Rating My Old Outfits - Cringe Alert\""
  ],
  fitness: [
    "💡 VIDEO IDEAS FOR FITNESS CONTENT\n\n1. \"I Tried [Celebrity]'s Workout For 30 Days\"\n2. \"Beginner's Guide To The Gym (No Shame)\"\n3. \"Home Workout vs Gym - Real Comparison\"\n4. \"What I Eat In A Day (Realistic Edition)\"\n5. \"Fitness Myths That Need To Die\"\n6. \"My Honest Fitness Journey Timeline\"\n7. \"I Worked Out Every Day For [X Days]\"\n8. \"Gym Essentials You Actually Need\"",
    "💡 MORE FITNESS VIDEO IDEAS\n\n1. \"Training Like [Athlete] For A Week\"\n2. \"Rating Popular Fitness Apps\"\n3. \"My Supplement Routine (What Works)\"\n4. \"Workout Mistakes I Made As A Beginner\"\n5. \"Creating A Workout Plan From Scratch\"\n6. \"Recovery Routines That Actually Help\""
  ],
  tech: [
    "💡 VIDEO IDEAS FOR TECH CONTENT\n\n1. \"My Complete Desk Setup Tour 2024\"\n2. \"I Tried [New Tech] For A Week - Worth It?\"\n3. \"Budget Tech That's Actually Good\"\n4. \"Learning To Code In [X Days] - Journey\"\n5. \"Tech I Regret Buying (And Why)\"\n6. \"Productivity Apps That Changed My Life\"\n7. \"Building My Own [Tech Project]\"\n8. \"AI Tools You Need To Know About\"",
    "💡 MORE TECH VIDEO IDEAS\n\n1. \"Day In The Life Of A Developer\"\n2. \"Setting Up The Perfect Work From Home Space\"\n3. \"Tech Tips I Wish I Knew Sooner\"\n4. \"Honest Review: [New Gadget]\"\n5. \"How I Organize My Digital Life\"\n6. \"Side Project From Idea To Launch\""
  ],
  nature: [
    "💡 VIDEO IDEAS FOR NATURE CONTENT\n\n1. \"24 Hours In The Wilderness (No Tech)\"\n2. \"Sunrise To Sunset In [Beautiful Location]\"\n3. \"The Most Peaceful Places I've Been\"\n4. \"Wildlife Encounters Caught On Camera\"\n5. \"Camping For Beginners - Everything You Need\"\n6. \"Hiking [Famous Trail] - Complete Guide\"\n7. \"Time-Lapse: Nature Through The Seasons\"\n8. \"Finding Peace In Nature (Mindfulness)\"",
    "💡 MORE NATURE VIDEO IDEAS\n\n1. \"Photographing Nature - Tips & Techniques\"\n2. \"My Favorite Hidden Nature Spots\"\n3. \"Surviving [Weather Condition] Outdoors\"\n4. \"Backpacking Essentials For Long Trips\"\n5. \"The Healing Power Of Nature (Documentary)\"\n6. \"Stargazing Guide - Best Practices\""
  ],
  music: [
    "💡 VIDEO IDEAS FOR MUSIC CONTENT\n\n1. \"Learning [Song] In One Hour Challenge\"\n2. \"Reacting To My Old Music/Covers\"\n3. \"Writing A Song In [X Hours]\"\n4. \"My Complete Music Setup Tour\"\n5. \"Beginner vs Pro - Same Song Comparison\"\n6. \"Musicians I've Been Obsessed With\"\n7. \"How I Find New Music\"\n8. \"Practicing [Instrument] Every Day For A Month\"",
    "💡 MORE MUSIC VIDEO IDEAS\n\n1. \"Concert Vlog: [Artist Name]\"\n2. \"Rating Music I've Never Heard\"\n3. \"Collaborating With A Stranger\"\n4. \"The Story Behind [My Song]\"\n5. \"Music Theory Basics Explained Simply\"\n6. \"Evolving My Style Over Time\""
  ],
  pets: [
    "💡 VIDEO IDEAS FOR PET CONTENT\n\n1. \"Day In The Life Of [Pet Name]\"\n2. \"Teaching My Pet New Tricks\"\n3. \"Pet Reacts To [Different Things]\"\n4. \"Pet Food Review - Which One Do They Prefer?\"\n5. \"Setting Up The Perfect Pet Space\"\n6. \"Things I Wish I Knew Before Getting A Pet\"\n7. \"Pet vs [Object/Food] - Who Wins?\"\n8. \"Morning Routine With My Pet\"",
    "💡 MORE PET VIDEO IDEAS\n\n1. \"Pet Adoption Story Time\"\n2. \"Taking My Pet To [New Places]\"\n3. \"Vet Visit Vlog\"\n4. \"DIY Pet Toys/Treats\"\n5. \"Pet Fashion Show (They're Not Happy)\"\n6. \"Why [Pet Type] Make The Best Companions\""
  ],
  business: [
    "💡 VIDEO IDEAS FOR BUSINESS CONTENT\n\n1. \"How I Started My Business With $[X]\"\n2. \"Day In The Life Of An Entrepreneur\"\n3. \"Business Lessons I Learned The Hard Way\"\n4. \"My Biggest Business Failures (And What I Learned)\"\n5. \"Side Hustles That Actually Work In 2024\"\n6. \"How I Stay Productive Working From Home\"\n7. \"Behind The Scenes Of Running A Business\"\n8. \"Books That Changed My Business Mindset\"",
    "💡 MORE BUSINESS VIDEO IDEAS\n\n1. \"From Idea To Launch - The Full Story\"\n2. \"How I Manage My Time (Real Talk)\"\n3. \"The Truth About [Business Myth]\"\n4. \"Tools I Use To Run My Business\"\n5. \"Networking Tips That Actually Work\"\n6. \"How I Handle Difficult Clients\""
  ],
  celebration: [
    "💡 VIDEO IDEAS FOR CELEBRATION CONTENT\n\n1. \"Planning The Perfect [Event] Surprise\"\n2. \"Behind The Scenes Of [Celebration]\"\n3. \"[Age] Birthday Vlog - Let's Party!\"\n4. \"Anniversary Celebration Ideas On A Budget\"\n5. \"How We Celebrated [Milestone]\"\n6. \"Party Planning Tips From A Perfectionist\"\n7. \"The Best Gift I've Ever Given/Received\"\n8. \"Cultural Celebrations Explained\"",
    "💡 MORE CELEBRATION VIDEO IDEAS\n\n1. \"Wedding Prep Series - [X] Days To Go\"\n2. \"How To Throw An Epic Party\"\n3. \"Reacting To Old Celebration Videos\"\n4. \"DIY Decoration Ideas That Look Expensive\"\n5. \"Celebrating Small Wins (It Matters!)\"\n6. \"Memory Lane: Our Best Celebrations\""
  ],
  lifestyle: [
    "💡 VIDEO IDEAS FOR LIFESTYLE CONTENT\n\n1. \"My Morning/Night Routine (Realistic Version)\"\n2. \"Week In My Life Vlog\"\n3. \"Productivity Habits That Changed Everything\"\n4. \"Apartment/Room Tour 2024\"\n5. \"Self-Care Routine That Actually Works\"\n6. \"How I Organize My Life (Systems & Tools)\"\n7. \"Things I Stopped Buying (Minimalism Journey)\"\n8. \"Monthly Reset Routine\"",
    "💡 MORE LIFESTYLE VIDEO IDEAS\n\n1. \"Living Alone: Honest Pros And Cons\"\n2. \"How I Save Money (Real Tips)\"\n3. \"Healthy Habits I'm Building This Year\"\n4. \"Weekend Vlog: How I Actually Spend It\"\n5. \"Things That Improved My Quality Of Life\"\n6. \"Answering Your Questions (Q&A)\""
  ],
  general: [
    "💡 GENERAL VIDEO IDEAS\n\n1. \"Things I've Changed My Mind About\"\n2. \"Get To Know Me (Deep Questions)\"\n3. \"Day In My Life - Unfiltered Edition\"\n4. \"Reacting To My Old Content\"\n5. \"Trying Things I've Never Done Before\"\n6. \"Life Update: What's Been Happening\"\n7. \"My Goals For This Year (Accountability)\"\n8. \"Answering Your Assumptions About Me\"",
    "💡 MORE GENERAL VIDEO IDEAS\n\n1. \"Things I Wish I Knew At [Age]\"\n2. \"My Honest Opinion On [Topic]\"\n3. \"Let's Chat: Life Lessons So Far\"\n4. \"Trying Your Recommendations\"\n5. \"What I Learned From [Experience]\"\n6. \"Year In Review: Highs And Lows\""
  ]
};

const platformAdjustments: Record<Platform, (content: string) => string> = {
  instagram: (content) => content,
  youtube: (content) => {
    // YouTube tends to be more descriptive
    return content.replace(/#\w+/g, '').trim() + '\n\n👆 SUBSCRIBE for more content like this!\n🔔 Turn on notifications!\n💬 Comment your thoughts below!';
  },
  linkedin: (content) => {
    // LinkedIn is more professional
    return content
      .replace(/😅|😂|🤣|😜|🙌|💃|🕺|👯/g, '')
      .replace(/#(\w+)/g, '#$1')
      + '\n\n---\n♻️ Repost if this resonates\n💬 Share your perspective in the comments';
  },
  x: (content) => {
    // X (Twitter) needs to be concise
    const shortened = content.split('\n').slice(0, 3).join('\n');
    return shortened.length > 280 ? shortened.slice(0, 277) + '...' : shortened;
  },
  facebook: (content) => {
    return content + '\n\n👍 Like if you agree!\n💬 Share your thoughts!\n📤 Share with someone who needs this!';
  }
};

function detectTopic(prompt: string): Topic {
  const lowerPrompt = prompt.toLowerCase();
  
  for (const [topic, keywords] of Object.entries(topicKeywords)) {
    if (topic === 'general') continue;
    
    for (const keyword of keywords) {
      if (lowerPrompt.includes(keyword)) {
        return topic as Topic;
      }
    }
  }
  
  return 'general';
}

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateContent(
  prompt: string,
  contentType: ContentType,
  platform: Platform
): string {
  const topic = detectTopic(prompt);
  
  let content: string;
  
  switch (contentType) {
    case 'caption':
      content = getRandomItem(topicCaptions[topic]);
      break;
    case 'story':
      content = getRandomItem(topicStories[topic]);
      break;
    case 'post':
      content = getRandomItem(topicPosts[topic]);
      break;
    case 'vlog':
      content = getRandomItem(topicVlogScripts[topic]);
      break;
    case 'reel':
      content = getRandomItem(topicReelScripts[topic]);
      break;
    case 'video-idea':
      content = getRandomItem(topicVideoIdeas[topic]);
      break;
    default:
      content = getRandomItem(topicCaptions[topic]);
  }
  
  // Apply platform-specific adjustments
  content = platformAdjustments[platform](content);
  
  // Add context from the original prompt
  if (contentType === 'caption' && prompt.length > 10) {
    const promptContext = prompt.charAt(0).toUpperCase() + prompt.slice(1);
    content = `📸 "${promptContext}"\n\n${content}`;
  }
  
  return content;
}

export function getTopicFromPrompt(prompt: string): Topic {
  return detectTopic(prompt);
}
