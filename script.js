// =====================================
// MYANMAR WEATHER WEBSITE
// Myanmar + English City Search
// =====================================

// Myanmar City Names
// [Myanmar Name, English Name]

const cities = [
    // Yangon Region
    ["ရန်ကုန်", "Yangon"], ["သန်လျင်", "Thanlyin"], ["တွံတေး", "Twante"],
    ["ကျောက်တန်း", "Kyauktan"], ["ခရမ်း", "Khayan"], ["သုံးခွ", "Thongwa"],
    ["ကော့မှူး", "Kawhmu"], ["ကွမ်းခြံကုန်း", "Kungyangon"], ["ဒလ", "Dala"],
    ["လှည်းကူး", "Hlegu"], ["မှော်ဘီ", "Hmawbi"], ["တိုက်ကြီး", "Taikkyi"],
    ["ထန်းတပင်", "Htantabin"], ["အင်းစိန်", "Insein"], ["လှိုင်သာယာ", "Hlaingthaya"],
    ["ရွှေပြည်သာ", "Shwepyitha"], ["မင်္ဂလာဒုံ", "Mingaladon"],

    // Mandalay Region
    ["မန္တလေး", "Mandalay"], ["ပြင်ဦးလွင်", "Pyin Oo Lwin"],
    ["မိတ္ထီလာ", "Meiktila"], ["မြင်းခြံ", "Myingyan"], ["ကျောက်ဆည်", "Kyaukse"],
    ["ညောင်ဦး", "Nyaung U"], ["ပုဂံ", "Bagan"], ["တောင်သာ", "Taungtha"],
    ["ငါန်းဇွန်", "Nganzun"], ["ရမည်းသင်း", "Yamethin"], ["ဝမ်းတွင်း", "Wundwin"],
    ["သပိတ်ကျင်း", "Thabeikkyin"], ["မိုးကုတ်", "Mogok"], ["မတ္တရာ", "Madaya"],
    ["စဉ့်ကိုင်", "Sintgaing"], ["မြစ်သား", "Myittha"],
    ["အမရပူရ", "Amarapura"], ["ပျော်ဘွယ်", "Pyawbwe"],

    // Naypyitaw
    ["နေပြည်တော်", "Naypyitaw"], ["ပျဉ်းမနား", "Pyinmana"],
    ["လယ်ဝေး", "Lewe"], ["တပ်ကုန်း", "Tatkon"],
    ["ဥတ္တရသီရိ", "Ottarathiri"], ["ဇမ္ဗူသီရိ", "Zabuthiri"],
    ["ပုဗ္ဗသီရိ", "Pobbathiri"], ["ဒက္ခိဏသီရိ", "Dekkhinathiri"],["အေလာ", "Ayelar"],

    // Bago Region
    ["ပဲခူး", "Bago"], ["တောင်ငူ", "Taungoo"], ["ပြည်", "Pyay"],
    ["ညောင်လေးပင်", "Nyaunglebin"], ["ဖြူး", "Phyu"],
    ["ရွှေကျင်", "Shwegyin"], ["ကျောက်ကြီး", "Kyaukkyi"],
    ["အုတ်တွင်း", "Oktwin"], ["ရေတာရှည်", "Yedashe"],
    ["နတ်တလင်း", "Nattalin"], ["ဇီးကုန်း", "Zigon"],
    ["မင်းလှ", "Minhla"], ["သဲကုန်း", "Thegon"], ["ပေါင်းတည်", "Paungde"],
    ["ရွှေတောင်", "Shwedaung"], ["ပန်းတောင်း", "Pandaung"],
    ["ကျောက်တံခါး", "Kyauktaga"], ["ဝေါ", "Waw"],
    ["ပေါက်ခေါင်း", "Paukkaung"], ["အုတ်ဖို", "Okpho"],
    ["မိုးညို", "Monyo"], ["ကြို့ပင်ကောက်", "Gyobingauk"],
    ["ကဝ", "Kawa"], ["ဒိုက်ဦး", "Daik-U"],["မြို့လှ", "Myohla"],


    // Magway Region
    ["မကွေး", "Magway"], ["ပခုက္ကူ", "Pakokku"], ["ချောက်", "Chauk"],
    ["ရေနံချောင်း", "Yenangyaung"], ["မင်းဘူး", "Minbu"],
    ["သရက်", "Thayet"], ["အောင်လံ", "Aunglan"], ["စလင်း", "Salin"],
    ["ပွင့်ဖြူ", "Pwintbyu"], ["တောင်တွင်းကြီး", "Taungdwingyi"],
    ["နတ်မောက်", "Natmauk"], ["မြို့သစ်", "Myothit"],
    ["ဂန့်ဂေါ", "Gangaw"], ["ဆော", "Saw"], ["ထီးလင်း", "Htilin"],
    ["ပေါက်", "Pauk"], ["မြိုင်", "Myaing"], ["စေတုတ္တရာ", "Sidoktaya"],
    ["ကျောက်ပန်းတောင်း", "Kyaukpadaung"],

    // Sagaing Region
    ["စစ်ကိုင်း", "Sagaing"], ["မုံရွာ", "Monywa"], ["ရွှေဘို", "Shwebo"],
    ["ကလေး", "Kalay"], ["တမူး", "Tamu"], ["ကသာ", "Katha"],
    ["ကန့်ဘလူ", "Kanbalu"], ["ကျွန်းလှ", "Kyunhla"],
    ["ဝက်လက်", "Wetlet"], ["ဒီပဲယင်း", "Depayin"],
    ["ယင်းမာပင်", "Yinmabin"], ["ပုလဲ", "Pale"],
    ["ဆားလင်းကြီး", "Salingyi"], ["အရာတော်", "Ayadaw"],
    ["ဘုတလင်", "Budalin"], ["တန့်ဆည်", "Taze"],
    ["ရေဦး", "Ye-U"], ["ခင်ဦး", "Khin-U"], ["မော်လိုက်", "Mawlaik"],
    ["ဖောင်းပြင်", "Phaungbyin"], ["ဟုမ္မလင်း", "Homalin"],
    ["လဟယ်", "Lahe"], ["လေရှီး", "Leshi"], ["အင်းတော်", "Indaw"],
    ["ထီးချိုင့်", "Htigyaing"], ["ဗန်းမောက်", "Banmauk"],
    ["ပင်လည်ဘူး", "Pinlebu"], ["ကလေးဝ", "Kale Wa"],

    // Ayeyarwady Region
    ["ပုသိမ်", "Pathein"], ["ဟင်္သာတ", "Hinthada"],
    ["မြောင်းမြ", "Myaungmya"], ["မအူပင်", "Maubin"],
    ["ဘိုကလေး", "Bogale"], ["ဖျာပုံ", "Pyapon"],
    ["လပွတ္တာ", "Labutta"], ["ကျုံပျော်", "Kyonpyaw"],
    ["အင်္ဂပူ", "Ingapu"], ["ကြံခင်း", "Kyangin"],
    ["မြန်အောင်", "Myanaung"], ["ဇလွန်", "Zalun"],
    ["လေးမျက်နှာ", "Laymyethna"], ["ငပုတော", "Ngapudaw"],
    ["သာပေါင်း", "Thabaung"], ["ရေကြည်", "Yegyi"],
    ["ကန်ကြီးထောင့်", "Kangyidaunt"], ["ကျောင်းကုန်း", "Kyaunggon"],
    ["ဒေးဒရဲ", "Dedaye"], ["ဝါးခယ်မ", "Wakema"],
    ["အိမ်မဲ", "Einme"], ["ပန်းတနော်", "Pantanaw"],
    ["ညောင်တုန်း", "Nyaungdon"], ["ဓနုဖြူ", "Danubyu"],
    // Mon State
    ["မော်လမြိုင်", "Mawlamyine"], ["သထုံ", "Thaton"],
    ["ကျိုက်ထို", "Kyaikto"], ["မုဒုံ", "Mudon"],
    ["ချောင်းဆုံ", "Chaungzon"], ["ရေး", "Ye"],
    ["သံဖြူဇရပ်", "Thanbyuzayat"], ["ပေါင်", "Paung"],
    ["ကျိုက်မရော", "Kyaikmaraw"], ["ဘီးလင်း", "Bilin"],

    // Kayin State
    ["ဘားအံ", "Hpa-An"], ["မြဝတီ", "Myawaddy"],
    ["ကော့ကရိတ်", "Kawkareik"], ["ကြာအင်းဆိပ်ကြီး", "Kyainseikgyi"],
    ["ဖာပွန်", "Hpapun"], ["သံတောင်ကြီး", "Thandaunggyi"],

    // Tanintharyi Region
    ["ထားဝယ်", "Dawei"], ["မြိတ်", "Myeik"], ["ကော့သောင်း", "Kawthaung"],
    ["ဘုတ်ပြင်း", "Bokpyin"], ["ရေဖြူ", "Yebyu"],
    ["လောင်းလုံး", "Launglon"], ["သရက်ချောင်း", "Thayetchaung"],
    ["ပုလော", "Palaw"], ["ကျွန်းစု", "Kyunsu"],
    ["တနင်္သာရီ", "Tanintharyi"],

    // Rakhine State
    ["စစ်တွေ", "Sittwe"], ["ကျောက်ဖြူ", "Kyaukpyu"],
    ["သံတွဲ", "Thandwe"], ["တောင်ကုတ်", "Taungup"],
    ["မာန်အောင်", "Manaung"], ["ဂွ", "Gwa"], ["ရမ်းဗြဲ", "Ramree"],
    ["မင်းပြား", "Minbya"], ["မြောက်ဦး", "Mrauk-U"],
    ["ကျောက်တော်", "Kyauktaw"], ["ပေါက်တော", "Pauktaw"],
    ["မြေပုံ", "Myebon"], ["ပုဏ္ဏားကျွန်း", "Ponnagyun"],
    ["ဘူးသီးတောင်", "Buthidaung"], ["မောင်တော", "Maungdaw"],
    ["အမ်း", "Ann"],

    // Shan State
    ["တောင်ကြီး", "Taunggyi"], ["လားရှိုး", "Lashio"],
    ["ကျိုင်းတုံ", "Kengtung"], ["တာချီလိတ်", "Tachileik"],
    ["မူဆယ်", "Muse"], ["ကလော", "Kalaw"], ["အောင်ပန်း", "Aungban"],
    ["ညောင်ရွှေ", "Nyaungshwe"], ["အင်းလေး", "Inle"],
    ["ဟိုပုံး", "Hopong"], ["ပင်းတယ", "Pindaya"],
    ["ရပ်စောက်", "Yatsauk"], ["လွိုင်လင်", "Loilen"],
    ["လဲချား", "Lai-Hka"], ["မိုင်းရှူး", "Monghsu"],
    ["မိုင်းကိုင်", "Mongkaing"], ["မိုင်းဖြတ်", "Monghpyak"],
    ["မိုင်းယောင်း", "Mongyaung"], ["မိုင်းဆတ်", "Monghsat"],
    ["မိုင်းတုံ", "Mongton"], ["မိုင်းပန်", "Mongpan"],
    ["မိုင်းနောင်", "Mongnai"], ["နမ့်စန်", "Namhsan"],
    ["ကွတ်ခိုင်", "Kutkai"], ["နမ့်ခမ်း", "Namhkam"],
    ["သိန္နီ", "Hseni"], ["မိုင်းလား", "Mongla"],
    ["မက်မန်း", "Metman"], ["ကျောက်မဲ", "Kyaukme"],
    ["သီပေါ", "Hsipaw"], ["နောင်ချို", "Nawnghkio"],
    ["မိုးနဲ", "Mawkmai"], ["မိုးမိတ်", "Mongmit"],
    ["မဘိမ်း", "Mabein"], ["ပင်လုံ", "Pinlon"],

    // Kachin State
    ["မြစ်ကြီးနား", "Myitkyina"], ["ဗန်းမော်", "Bhamo"],
    ["ပူတာအို", "Putao"], ["မိုးညှင်း", "Mohnyin"],
    ["မိုးကောင်း", "Mogaung"], ["ဖားကန့်", "Hpakant"],
    ["ရွှေကူ", "Shwegu"], ["ဝိုင်းမော်", "Waingmaw"],
    ["တနိုင်း", "Tanai"], ["အင်ဂျန်းယန်", "Injangyang"],
    ["ဆွမ်ပရာဘွမ်", "Sumprabum"], ["ချီဖွေ", "Chipwi"],
    ["ဆော့လော်", "Sawlaw"],

    // Chin State
    ["ဟားခါး", "Hakha"], ["ဖလမ်း", "Falam"],
    ["တီးတိန်", "Tedim"], ["တွန်းဇံ", "Ton Zang"],
    ["မင်းတပ်", "Mindat"], ["မတူပီ", "Matupi"],
    ["ကန်ပက်လက်", "Kanpetlet"], ["ပလက်ဝ", "Paletwa"],
    ["ထန်တလန်", "Thantlang"],

    // Kayah State
    ["လွိုင်ကော်", "Loikaw"], ["ဒီမောဆို", "Demoso"],
    ["ဖရူဆို", "Hpruso"], ["ဘောလခဲ", "Bawlakhe"],
    ["ဖားဆောင်း", "Hpasawng"], ["ရှားတော", "Shadaw"]
];

// =====================================
// HTML ELEMENTS
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    const cityInput = document.getElementById("cityInput");
    const searchBtn = document.getElementById("searchBtn");
    const statusText = document.getElementById("status");
    const cityResults = document.getElementById("cityResults");

    const cityName = document.getElementById("cityName");
    const dateText = document.getElementById("date");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const weatherIcon = document.getElementById("weatherIcon");
    const feelsLike = document.getElementById("feelsLike");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");
    const rain = document.getElementById("rain");
    const sunrise = document.getElementById("sunrise");
    const sunset = document.getElementById("sunset");
    const forecast = document.getElementById("forecast");

   if (!cityInput) {
    console.error("cityInput မတွေ့ပါ");
    return;
}

if (!searchBtn) {
    console.error("searchBtn မတွေ့ပါ");
    return;
}

if (!statusText) {
    console.error("status မတွေ့ပါ");
    return;
}

if (!cityResults) {
    console.error("cityResults မတွေ့ပါ");
    return;
}
    // =====================================
    // HELPER FUNCTIONS
    // =====================================

    // =====================================
// SMART CITY SEARCH
// =====================================

function normalizeCityName(name) {
    return name.toLowerCase()
        .trim()
        .replace(/[\s\-_.]+/g, "");
}

// =====================================
// SMART SEARCH FOR ALL CITIES
// =====================================

function normalizeCityName(name) {
    return name.toLowerCase()
        .trim()
        .replace(/[\s\-_.]+/g, "");
}

// Alternative spellings
const cityAliases = {
    "naypyitaw": "naypyidaw",
    "naypyidaw": "naypyidaw",
    "naypyi taw": "naypyidaw",
    "moulmein": "mawlamyine",
    "moulmain": "mawlamyine",
    "bassein": "pathein",
    "akyab": "sittwe",
    "prome": "pyay",
    "pagan": "bagan",
    "maymyo": "pyinoowlwin",
    "tavoy": "dawei",
    "mergui": "myeik",
    "tenasserim": "tanintharyi",
    "kyaukse": "kyaukse",
    "thayetmyo": "thayet",
    "rangoon": "yangon",
    "pegu": "bago",
    "mandalay": "mandalay",
    "hsipaw": "hsipaw",
    "kalaw": "kalaw"
};

// Calculate spelling difference
function editDistance(a, b) {
    const matrix = [];

    for (let i = 0; i <= a.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= b.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;

            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + cost
            );
        }
    }

    return matrix[a.length][b.length];
}

// Search all cities
function findLocalCity(query) {

    const search = normalizeCityName(query);

    if (!search) return [];

    const searchName = normalizeCityName(
        cityAliases[search] || search
    );

    const matchedCities = [];

    cities.forEach(function(city) {

        const myName = normalizeCityName(city[0]);
        const enName = normalizeCityName(city[1]);

        let score = 0;

        // Exact match
        if (myName === search || enName === searchName) {
            score = 100;
        }

        // Partial match
        else if (
            myName.includes(search) ||
            enName.includes(searchName)
        ) {
            score = 80;
        }

        // Similar spelling
        else if (searchName.length >= 4) {

            const distance = editDistance(searchName, enName);

            const allowedErrors =
                searchName.length >= 8 ? 2 : 1;

            if (distance <= allowedErrors) {
                score = 60 - distance;
            }
        }

        if (score > 0) {
            matchedCities.push({
                city: city,
                score: score
            });
        }
    });

    matchedCities.sort(function(a, b) {
        return b.score - a.score;
    });

    return matchedCities.map(function(item) {
        return item.city;
    });
}

    function getWeatherDescription(code) {
        const weather = {
            0: "ကြည်လင်နေသည်။",
            1: "အများအားဖြင့် ကြည်လင်သည်။",
            2: "တိမ်အသင့်အတင့်ရှိသည်။",
            3: "တိမ်ထူထပ်သည်။",
            45: "မြူဆိုင်းနေသည်။",
            48: "မြူခဲနေသည်။",
            51: "မိုးဖွဲဖွဲရွာသည်။",
            53: "မိုးဖွဲရွာသည်။",
            55: "မိုးဖွဲများသည်။",
            61: "မိုးရွာသည်။",
            63: "မိုးအသင့်အတင့်ရွာသည်။",
            65: "မိုးသည်းထန်စွာရွာသည်။",
            71: "နှင်းကျသည်။",
            73: "နှင်းအသင့်အတင့်ကျသည်။",
            75: "နှင်းများစွာကျသည်။",
            80: "မိုးအနည်းငယ်ရွာနိုင်သည်။",
            81: "မိုးရွာနိုင်သည်။",
            82: "မိုးသည်းထန်နိုင်သည်။",
            95: "မိုးကြိုးမုန်တိုင်းဖြစ်နိုင်သည်။",
            96: "မိုးသီးနှင့် မိုးကြိုးမုန်တိုင်း။",
            99: "ပြင်းထန်သော မိုးကြိုးမုန်တိုင်း။"
        };

        return weather[code] || "ရာသီဥတုအခြေအနေ";
    }

    function getWeatherIcon(code) {
        if (code === 0) return "☀️";
        if (code === 1 || code === 2) return "🌤️";
        if (code === 3) return "☁️";
        if (code === 45 || code === 48) return "🌫️";
        if (code >= 51 && code <= 67) return "🌧️";
        if (code >= 71 && code <= 77) return "❄️";
        if (code >= 80 && code <= 82) return "🌦️";
        if (code >= 95) return "⛈️";

        return "🌤️";
    }

   function formatTime(time) {
    if (!time) return "--";

    const date = new Date(time);

    return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
}

    // =====================================
    // SHOW CITY RESULTS
    // =====================================

    function showCityResults(results) {
        cityResults.innerHTML = "";

        results.slice(0, 15).forEach(function (city) {
            const button = document.createElement("button");

            button.type = "button";
            button.textContent = city[0] + " (" + city[1] + ")";button.style.display = "block";
            button.style.width = "100%";
            button.style.padding = "12px";
            button.style.marginBottom = "8px";
            button.style.border = "1px solid rgba(255,255,255,0.3)";
            button.style.borderRadius = "12px";
            button.style.background = "rgba(255,255,255,0.15)";
            button.style.color = "white";
            button.style.cursor = "pointer";
            button.style.textAlign = "left";

            button.addEventListener("click", function () {
                cityResults.innerHTML = "";

                searchWeatherByName(city[1], city[0]);
            });

            cityResults.appendChild(button);
        });
    }

    // =====================================
    // SEARCH CITY
    // =====================================

    async function searchCity(query) {
        if (!query || !query.trim()) {
            statusText.textContent = "မြို့အမည် ရိုက်ထည့်ပါ။";
            return;
        }

        const search = query.trim();

        cityResults.innerHTML = "";
        statusText.textContent = "မြို့ကို ရှာဖွေနေသည်...";

        // Search local city list
        const localResults = findLocalCity(search);

        if (localResults.length > 0) {
            showCityResults(localResults);

            statusText.textContent =
                localResults.length + " မြို့ ရှာတွေ့ပါသည်။ မြို့ကိုရွေးပါ။";

            return;
        }

        // Search Open-Meteo Geocoding API
        try {
            const url =
                "https://geocoding-api.open-meteo.com/v1/search?name=" +
                encodeURIComponent(search) +
                "&count=10&language=en&countryCode=MM&format=json";

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("City search failed: " + response.status);
            }

            const data = await response.json();

            if (!data.results || data.results.length === 0) {
                statusText.textContent = "မြို့အမည် ရှာမတွေ့ပါ။";
                return;
            }

            const results = data.results.filter(function (place) {
                return place.country_code === "MM";
            });

            if (results.length === 0) {
                statusText.textContent = "မြန်မာနိုင်ငံရှိ မြို့ကို မတွေ့ပါ။";
                return;
            }

            results.forEach(function (place) {
                const button = document.createElement("button");

                const myName = getMyanmarCity(place.name);

                button.type = "button";
                button.textContent = myName + " (" + place.name + ")";

                button.style.display = "block";
                button.style.width = "100%";
                button.style.padding = "12px";
                button.style.marginBottom = "8px";
                button.style.borderRadius = "12px";
                button.style.background = "rgba(255,255,255,0.15)";
                button.style.color = "white";
                button.style.cursor = "pointer";

                button.addEventListener("click", function () {
                    cityResults.innerHTML = "";

                    getWeatherData(
                        place.latitude,
                        place.longitude,
                        myName,
                        "Myanmar"
                    );
                });

                cityResults.appendChild(button);
            });

            statusText.textContent = "မြို့ကို ရွေးချယ်ပါ။";

        } catch (error) {
            console.error("Search Error:", error);

            statusText.textContent =
                "မြို့ရှာမရပါ။ အင်တာနက်ချိတ်ဆက်မှုကို စစ်ဆေးပါ။";
        }
    }

    // =====================================
    // SEARCH WEATHER BY CITY NAME
    // =====================================

    async function searchWeatherByName(englishName, myName) {
        statusText.textContent = "ရာသီဥတုအချက်အလက် ရှာဖွေနေသည်...";try {
            const url =
                "https://geocoding-api.open-meteo.com/v1/search?name=" +
                encodeURIComponent(englishName) +
                "&count=10&language=en&countryCode=MM&format=json";

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Geocoding Error: " + response.status);
            }

            const data = await response.json();

            if (!data.results || data.results.length === 0) {
                statusText.textContent = "မြို့အချက်အလက် မရရှိပါ။";
                return;
            }

            const place = data.results.find(function (item) {
                return item.country_code === "MM";
            });

            if (!place) {
                statusText.textContent = "မြို့အချက်အလက် မတွေ့ပါ။";
                return;
            }

            await getWeatherData(
                place.latitude,
                place.longitude,
                myName,
                "Myanmar"
            );

        } catch (error) {
            console.error("City Weather Error:", error);

            statusText.textContent =
                "အင်တာနက်ပြဿနာရှိနေသည်။";
        }
    }

    // =====================================
    // GET WEATHER DATA
    // =====================================

    async function getWeatherData(lat, lon, city, country) {
        statusText.textContent = "ရာသီဥတုအချက်အလက် ရယူနေသည်...";

        try {
            const url =
                "https://api.open-meteo.com/v1/forecast" +
                "?latitude=" + lat +
                "&longitude=" + lon +
                "&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m" +
                "&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset" +
                "&timezone=auto&forecast_days=7";

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Weather API Error: " + response.status);
            }

            const data = await response.json();

            if (!data.current || !data.daily) {
                throw new Error("Weather data is missing");
            }

            const current = data.current;
            const daily = data.daily;

            cityName.textContent = city + ", " + country;

            dateText.textContent = new Date().toLocaleDateString("my-MM", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            });

            temperature.textContent =
                Math.round(current.temperature_2m) + "°C";

            description.textContent =
                getWeatherDescription(current.weather_code);

            weatherIcon.textContent =
                getWeatherIcon(current.weather_code);

            feelsLike.textContent =
                Math.round(current.apparent_temperature) + "°C";

            humidity.textContent =
                current.relative_humidity_2m + "%";

            wind.textContent =
                current.wind_speed_10m + " km/h";

            rain.textContent =
                daily.precipitation_probability_max &&
                daily.precipitation_probability_max[0] != null
                    ? daily.precipitation_probability_max[0] + "%"
                    : "--";

            sunrise.textContent = formatTime(daily.sunrise[0]);
            sunset.textContent = formatTime(daily.sunset[0]);

            showForecast(daily);

            statusText.textContent =
                "ရာသီဥတုအချက်အလက် ရရှိပါပြီ။";

        } catch (error) {
            console.error("Weather Error:", error);

            statusText.textContent =
                "ရာသီဥတုအချက်အလက် မရရှိပါ။ အင်တာနက်စစ်ဆေးပါ။";
        }
    }

    // =====================================
    // SHOW 7 DAYS FORECAST
    // =====================================

    function showForecast(daily) {
        if (!forecast) return;forecast.innerHTML = "";

        for (let i = 0; i < daily.time.length; i++) {
            const day = document.createElement("div");

            const date = new Date(daily.time[i] + "T12:00:00");

            const dayName = date.toLocaleDateString("my-MM", {
                weekday: "short"
            });

            const rainChance =
                daily.precipitation_probability_max &&
                daily.precipitation_probability_max[i] != null
                    ? daily.precipitation_probability_max[i]
                    : "--";

            day.innerHTML =
                "<h3>" + dayName + "</h3>" +
                "<p style='font-size:30px;margin:10px 0;'>" +
                getWeatherIcon(daily.weather_code[i]) +
                "</p>" +
                "<p>" +
                getWeatherDescription(daily.weather_code[i]) +
                "</p>" +
                "<h3 style='margin-top:10px;'>" +
                Math.round(daily.temperature_2m_max[i]) +
                "° / " +
                Math.round(daily.temperature_2m_min[i]) +
                "°</h3>" +
                "<p style='margin-top:8px;'>မိုးရွာနိုင်ခြေ " +
                rainChance +
                "%</p>";

            forecast.appendChild(day);
        }
    }

    // =====================================
    // SEARCH BUTTON
    // =====================================

    searchBtn.addEventListener("click", function () {
        searchCity(cityInput.value);
    });

    // =====================================
    // ENTER KEY
    // =====================================

    cityInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchCity(cityInput.value);
        }
    });

    // =====================================
    // DEFAULT CITY
    // =====================================

    searchWeatherByName("Naypyitaw", "နေပြည်တော်");

    // =====================================
    // CHECK JAVASCRIPT
    // =====================================

   

});