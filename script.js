/* =====================================================
   GINGERMITRA - SMART GINGER FARMING
   JAVASCRIPT
   ===================================================== */


/* =====================================================
   LANGUAGE SYSTEM
   ===================================================== */

let currentLanguage =
    localStorage.getItem("gingerLanguage") || "kn";


const translations = {

    kn: {

        dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        weather: "ಹವಾಮಾನ",
        cropDoctor: "ಬೆಳೆ ವೈದ್ಯ",
        farmingGuide: "ಕೃಷಿ ಮಾರ್ಗದರ್ಶಿ",
        assistant: "ಶುಂಠಿ ಸಹಾಯಕ",
        market: "ನೇರ ಮಾರುಕಟ್ಟೆ",

        farmer: "ರೈತ",
        smartFarmer: "ಸ್ಮಾರ್ಟ್ ಕೃಷಿ",

        iotConnected: "IoT Simulation",
        sensorActive: "Sensor Active",

        welcomeTitle: "ನಿಮ್ಮ ಶುಂಠಿ ಕೃಷಿಗೆ ಸ್ವಾಗತ",
        welcomeSubtitle:
            "ನಿಮ್ಮ ಬೆಳೆ, ಮಣ್ಣು ಮತ್ತು ಹವಾಮಾನವನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ನಿರ್ವಹಿಸಿ.",

        smartAgriculture: "🌾 Smart Agriculture",

        heroTitle:
            "ಉತ್ತಮ ಮಣ್ಣು → ಉತ್ತಮ ಶುಂಠಿ → ಉತ್ತಮ ಆದಾಯ",

        heroText:
            "IoT sensor data, weather information ಮತ್ತು ಕೃಷಿ ಮಾರ್ಗದರ್ಶನವನ್ನು ಬಳಸಿ ನಿಮ್ಮ ಶುಂಠಿ ಬೆಳೆಯನ್ನು ನಿರ್ವಹಿಸಿ.",

        viewGuide: "ಮಾರ್ಗದರ್ಶಿ ನೋಡಿ",

        quickAccess: "ತ್ವರಿತ ಪ್ರವೇಶ",

        tomorrowWeather: "ನಾಳೆಯ ಹವಾಮಾನ",
        checkCrop: "ಬೆಳೆ ಪರಿಶೀಲಿಸಿ",
        uploadLeaf: "ಚಿತ್ರ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",

        aiAssistant: "AI ಸಹಾಯಕ",
        askQuestion: "ಪ್ರಶ್ನೆ ಕೇಳಿ",
        gingerAdvice: "ಶುಂಠಿ ಕೃಷಿ ಸಲಹೆ",

        directMarket: "ನೇರ ಮಾರುಕಟ್ಟೆ",
        sellDirect: "ನೇರವಾಗಿ ಮಾರಾಟ ಮಾಡಿ",
        noMiddleman: "ಮಧ್ಯವರ್ತಿ ಇಲ್ಲ",

        iotDashboard: "IoT ಕೃಷಿ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        iotDescription:
            "ನಿಮ್ಮ sensor data ಅನ್ನು ಇಲ್ಲಿ ನೋಡಬಹುದು.",

        liveSensor: "Live Sensor",

        soilNutrition: "ಮಣ್ಣಿನ ಪೋಷಕಾಂಶ",

        average: "ಸರಾಸರಿ",
        soilHealth: "ಮಣ್ಣಿನ ಆರೋಗ್ಯ",
        sensorReading: "IoT sensor reading",

        soilMoisture: "ಮಣ್ಣಿನ ತೇವಾಂಶ",

        updated: "Updated",
        refreshSensor: "Refresh Sensor",

        motorControl: "ಮೋಟಾರ್ ನಿಯಂತ್ರಣ",

        motorDescription:
            "ಮಣ್ಣಿನ ತೇವಾಂಶದ ಆಧಾರದ ಮೇಲೆ ಸ್ವಯಂ ನಿಯಂತ್ರಣ.",

        autoMode: "ಸ್ವಯಂ ಮೋಡ್",

        currentMotorStatus:
            "ಪ್ರಸ್ತುತ ಮೋಟಾರ್ ಸ್ಥಿತಿ",

        motorOnRule: "ಮೋಟಾರ್ ON",
        motorHoldRule: "ಹಿಂದಿನ ಸ್ಥಿತಿ",
        motorOffRule: "ಮೋಟಾರ್ OFF",

        lastMotorUpdate: "ಕೊನೆಯ update",

        motorNote:
            "30–50% ನಡುವೆ ಹಿಂದಿನ ಸ್ಥಿತಿ ಉಳಿಯುತ್ತದೆ.",

        sensorTesting: "IoT Sensor Testing",

        sensorTestingText:
            "Hardware ಇಲ್ಲದಿದ್ದರೆ ಈ buttons ಬಳಸಿ sensor ಮತ್ತು motor logic ಪರೀಕ್ಷಿಸಿ.",

        weatherTitle: "ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ",

        weatherSubtitle:
            "ನಿಮ್ಮ ಹೊಲದ ಹವಾಮಾನವನ್ನು ಪರಿಶೀಲಿಸಿ.",

        getForecast: "ಮುನ್ಸೂಚನೆ ಪಡೆಯಿರಿ",
        myLocation: "ನನ್ನ ಸ್ಥಳ",

        loadingWeather:
            "ಹವಾಮಾನ ಮಾಹಿತಿ ಪಡೆಯಲಾಗುತ್ತಿದೆ...",

        maximum: "ಗರಿಷ್ಠ",
        rainChance: "ಮಳೆಯ ಸಾಧ್ಯತೆ",
        rainfall: "ಮಳೆ ಪ್ರಮಾಣ",
        wind: "ಗಾಳಿ",

        sprayingAdvice: "ಸಿಂಪಡಣೆ ಸಲಹೆ",

        listen: "ಕೇಳಿ",

        manualWeather: "ತಾಪಮಾನ ಪರೀಕ್ಷೆ",

        manualWeatherText:
            "ನಿಮ್ಮ ಪ್ರದೇಶದ ತಾಪಮಾನವನ್ನು ನಮೂದಿಸಿ.",

        check: "ಪರಿಶೀಲಿಸಿ",

        cropDoctorTitle: "ಶುಂಠಿ ಬೆಳೆ ವೈದ್ಯ",

        cropDoctorSubtitle:
            "ನಿಮ್ಮ ಶುಂಠಿ ಎಲೆಯ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",

        uploadCrop: "ಬೆಳೆ ಚಿತ್ರ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",

        uploadCropText:
            "JPG ಅಥವಾ PNG ಚಿತ್ರವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ.",

        chooseImage: "ಚಿತ್ರ ಆಯ್ಕೆ ಮಾಡಿ",

        preview: "Preview ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ",

        analyzeCrop: "ಬೆಳೆ ಪರಿಶೀಲಿಸಿ",

        analysisResult: "ವಿಶ್ಲೇಷಣೆ",

        cropDemoWarning:
            "ಇದು frontend demo. ನಿಜವಾದ AI disease detection ಗೆ ML model ಅಥವಾ API ಅಗತ್ಯವಿದೆ.",

        guideTitle: "ಶುಂಠಿ ಕೃಷಿ ಮಾರ್ಗದರ್ಶಿ",

        guideSubtitle:
            "ಉತ್ತಮ ಇಳುವರಿಗಾಗಿ ಹಂತ ಹಂತದ ಮಾರ್ಗದರ್ಶನ.",

        soilPreparation: "ಮಣ್ಣಿನ ತಯಾರಿ",

        soilPreparationText:
            "ನೀರು ನಿಲ್ಲದ, ಉತ್ತಮ drainage ಇರುವ ಮಣ್ಣನ್ನು ಆಯ್ಕೆ ಮಾಡಿ. ಸಾವಯವ ಗೊಬ್ಬರ ಸೇರಿಸಿ ಮಣ್ಣನ್ನು ಸಡಿಲಗೊಳಿಸಿ.",

        planting: "ನೆಡುವಿಕೆ",

        plantingText:
            "ಆರೋಗ್ಯಕರ seed rhizomes ಆಯ್ಕೆ ಮಾಡಿ. ಸೂಕ್ತ ಅಂತರದಲ್ಲಿ ನೆಡಿ ಮತ್ತು ಉತ್ತಮ drainage ಕಾಪಾಡಿ.",

        irrigation: "ನೀರಾವರಿ",

        irrigationText:
            "ಮಣ್ಣಿನ ತೇವಾಂಶವನ್ನು ಗಮನಿಸಿ ನೀರು ನೀಡಿ. ನೀರು ಹೆಚ್ಚು ನಿಲ್ಲುವುದನ್ನು ತಪ್ಪಿಸಿ.",

        fertilizer: "ಗೊಬ್ಬರ ಮತ್ತು NPK",

        fertilizerText:
            "ಮಣ್ಣಿನ ಪರೀಕ್ಷೆಯ ಆಧಾರದ ಮೇಲೆ ಪೋಷಕಾಂಶಗಳನ್ನು ನಿರ್ವಹಿಸಿ. ಅಗತ್ಯವಿದ್ದಾಗ NPK ಬಳಸಿ.",

        disease: "ರೋಗ ಮತ್ತು ಕೀಟ",

        diseaseText:
            "ಎಲೆಗಳ ಬಣ್ಣ, ಕಲೆಗಳು ಮತ್ತು rhizome condition ಅನ್ನು ನಿಯಮಿತವಾಗಿ ಪರಿಶೀಲಿಸಿ.",

        harvesting: "ಕೊಯ್ಲು",

        harvestingText:
            "ಬೆಳೆ maturity ತಲುಪಿದಾಗ ಕೊಯ್ಲು ಮಾಡಿ. ಮಣ್ಣಿನಿಂದ rhizomes ಅನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ತೆಗೆದುಕೊಳ್ಳಿ.",

        storage: "ಸಂಗ್ರಹಣೆ",

        storageText:
            "ಹಾನಿಗೊಳಗಾದ rhizomes ಬೇರ್ಪಡಿಸಿ. ಸ್ವಚ್ಛ, ಗಾಳಿ ಹರಿಯುವ ಮತ್ತು ಸೂಕ್ತ ಸ್ಥಳದಲ್ಲಿ ಸಂಗ್ರಹಿಸಿ.",

        marketGuide: "ಮಾರುಕಟ್ಟೆ",

        marketGuideText:
            "ಗುಣಮಟ್ಟ, ಪ್ರಮಾಣ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಬೆಲೆಯನ್ನು ಪರಿಶೀಲಿಸಿ. ಸಾಧ್ಯವಾದಲ್ಲಿ ನೇರ ಖರೀದಿದಾರರನ್ನು ಸಂಪರ್ಕಿಸಿ.",

        assistantTitle: "ಶುಂಠಿ ಸಹಾಯಕ",

        assistantSubtitle:
            "ಶುಂಠಿ ಕೃಷಿ ಕುರಿತು ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ.",

        online: "Online",

        assistantWelcome:
            "ನಮಸ್ಕಾರ! ನಾನು GingerMitra. ಶುಂಠಿ ಕೃಷಿ, ನೀರಾವರಿ, NPK, ರೋಗ ಮತ್ತು ಹವಾಮಾನ ಕುರಿತು ಕೇಳಿ.",

        quickWeather: "ನಾಳೆ ಹವಾಮಾನ ಹೇಗಿದೆ?",
        quickWater: "ಯಾವಾಗ ನೀರು ಕೊಡಬೇಕು?",
        quickNpk: "NPK ಬಗ್ಗೆ ಹೇಳಿ",
        quickDisease: "ರೋಗದ ಲಕ್ಷಣಗಳು?",

        marketTitle: "ನೇರ ಮಾರುಕಟ್ಟೆ",

        marketSubtitle:
            "ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲದೆ ಖರೀದಿದಾರರನ್ನು ಸಂಪರ್ಕಿಸಿ.",

        directSelling: "ನೇರ ಮಾರಾಟ",

        directSellingText:
            "ಕೆಳಗಿನವುಗಳು demonstration companies. ನಿಜವಾದ buyer verification ಅಗತ್ಯವಿದೆ.",

        buyerDemo: "Ginger buyer — Demo profile",

        contact: "ಸಂಪರ್ಕಿಸಿ"
    },


    en: {

        dashboard: "Dashboard",
        weather: "Weather",
        cropDoctor: "Crop Doctor",
        farmingGuide: "Farming Guide",
        assistant: "Ginger Assistant",
        market: "Direct Market",

        farmer: "Farmer",
        smartFarmer: "Smart Farming",

        iotConnected: "IoT Simulation",
        sensorActive: "Sensor Active",

        welcomeTitle: "Welcome to your Ginger Farm",
        welcomeSubtitle:
            "Manage your crop, soil and weather from one place.",

        smartAgriculture: "🌾 Smart Agriculture",

        heroTitle:
            "Better Soil → Better Ginger → Better Income",

        heroText:
            "Manage your ginger crop using IoT sensor data, weather information and farming guidance.",

        viewGuide: "View Farming Guide",

        quickAccess: "Quick Access",

        tomorrowWeather: "Tomorrow's Weather",
        checkCrop: "Check Crop",
        uploadLeaf: "Upload Image",

        aiAssistant: "AI Assistant",
        askQuestion: "Ask a Question",
        gingerAdvice: "Ginger farming advice",

        directMarket: "Direct Market",
        sellDirect: "Sell Directly",
        noMiddleman: "No middleman",

        iotDashboard: "IoT Farming Dashboard",
        iotDescription:
            "Monitor your sensor data here.",

        liveSensor: "Live Sensor",

        soilNutrition: "Soil Nutrition",

        average: "Average",
        soilHealth: "Soil Health",
        sensorReading: "IoT sensor reading",

        soilMoisture: "Soil Moisture",

        updated: "Updated",
        refreshSensor: "Refresh Sensor",

        motorControl: "Motor Control",

        motorDescription:
            "Automatic control based on soil moisture.",

        autoMode: "Auto Mode",

        currentMotorStatus:
            "Current Motor Status",

        motorOnRule: "Motor ON",
        motorHoldRule: "Keep Previous State",
        motorOffRule: "Motor OFF",

        lastMotorUpdate: "Last update",

        motorNote:
            "Between 30–50%, the previous state is maintained.",

        sensorTesting: "IoT Sensor Testing",

        sensorTestingText:
            "Use these buttons to test the sensor and motor logic without hardware.",

        weatherTitle: "Weather Forecast",

        weatherSubtitle:
            "Check the weather conditions for your farm.",

        getForecast: "Get Forecast",
        myLocation: "My Location",

        loadingWeather:
            "Getting weather information...",

        maximum: "Maximum",
        rainChance: "Rain Chance",
        rainfall: "Rainfall",
        wind: "Wind",

        sprayingAdvice: "Spraying Advice",

        listen: "Listen",

        manualWeather: "Temperature Test",

        manualWeatherText:
            "Enter your local temperature.",

        check: "Check",

        cropDoctorTitle: "Ginger Crop Doctor",

        cropDoctorSubtitle:
            "Upload an image of your ginger crop.",

        uploadCrop: "Upload Crop Image",

        uploadCropText:
            "Choose a JPG or PNG image.",

        chooseImage: "Choose Image",

        preview: "Preview will appear here",

        analyzeCrop: "Analyze Crop",

        analysisResult: "Analysis",

        cropDemoWarning:
            "This is a frontend demo. Real AI disease detection requires an ML model or API.",

        guideTitle: "Ginger Farming Guide",

        guideSubtitle:
            "Step-by-step guidance for better crop production.",

        soilPreparation: "Soil Preparation",

        soilPreparationText:
            "Choose well-drained soil. Add organic manure and loosen the soil before planting.",

        planting: "Planting",

        plantingText:
            "Select healthy seed rhizomes. Plant at suitable spacing and maintain good drainage.",

        irrigation: "Irrigation",

        irrigationText:
            "Monitor soil moisture before watering. Avoid prolonged waterlogging.",

        fertilizer: "Fertilizer & NPK",

        fertilizerText:
            "Manage nutrients based on soil testing. Apply NPK when required.",

        disease: "Diseases & Pests",

        diseaseText:
            "Regularly check leaf color, spots and rhizome condition.",

        harvesting: "Harvesting",

        harvestingText:
            "Harvest when the crop reaches maturity. Carefully remove rhizomes from the soil.",

        storage: "Storage",

        storageText:
            "Separate damaged rhizomes. Store in a clean, ventilated and suitable place.",

        marketGuide: "Market",

        marketGuideText:
            "Check quality, quantity and market price. Contact direct buyers where possible.",

        assistantTitle: "Ginger Assistant",

        assistantSubtitle:
            "Ask questions about ginger farming.",

        online: "Online",

        assistantWelcome:
            "Hello! I am GingerMitra. Ask me about ginger farming, irrigation, NPK, diseases or weather.",

        quickWeather: "How is tomorrow's weather?",
        quickWater: "When should I irrigate?",
        quickNpk: "Tell me about NPK",
        quickDisease: "What are disease symptoms?",

        marketTitle: "Direct Market",

        marketSubtitle:
            "Connect with buyers without middlemen.",

        directSelling: "Direct Selling",

        directSellingText:
            "The companies below are demonstration profiles. Verify buyers before any transaction.",

        buyerDemo: "Ginger buyer — Demo profile",

        contact: "Contact"
    }

};


/* =====================================================
   TRANSLATION FUNCTION
   ===================================================== */

function applyLanguage() {

    const language = translations[currentLanguage];

    document.documentElement.lang =
        currentLanguage === "kn" ? "kn" : "en";


    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (language[key]) {

            element.textContent = language[key];

        }

    });


    document.getElementById("lang-kn")
        .classList.toggle(
            "active",
            currentLanguage === "kn"
        );


    document.getElementById("lang-en")
        .classList.toggle(
            "active",
            currentLanguage === "en"
        );


    updateDynamicUI();

    updateAssistantPlaceholder();

    localStorage.setItem(
        "gingerLanguage",
        currentLanguage
    );
}


/* =====================================================
   LANGUAGE BUTTONS
   ===================================================== */

document.getElementById("lang-kn")
    .addEventListener("click", () => {

        currentLanguage = "kn";

        applyLanguage();

    });


document.getElementById("lang-en")
    .addEventListener("click", () => {

        currentLanguage = "en";

        applyLanguage();

    });


/* =====================================================
   PAGE NAVIGATION
   ===================================================== */

const navItems =
    document.querySelectorAll(".nav-item");

const pages =
    document.querySelectorAll(".page");


function openPage(pageId) {

    pages.forEach(page => {

        page.classList.remove("active-page");

    });


    const selected =
        document.getElementById(pageId);

    if (selected) {

        selected.classList.add("active-page");

    }


    navItems.forEach(item => {

        item.classList.toggle(
            "active",
            item.dataset.page === pageId
        );

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    document.getElementById("sidebar")
        .classList.remove("open");
}


navItems.forEach(item => {

    item.addEventListener("click", () => {

        openPage(item.dataset.page);

    });

});


document.querySelectorAll("[data-page-target]")
    .forEach(element => {

        element.addEventListener("click", () => {

            openPage(
                element.dataset.pageTarget
            );

        });

    });


/* =====================================================
   MOBILE MENU
   ===================================================== */

document.getElementById("mobileMenu")
    .addEventListener("click", () => {

        document.getElementById("sidebar")
            .classList.toggle("open");

    });


/* =====================================================
   DATE
   ===================================================== */

function updateDate() {

    const date =
        new Date();

    document.getElementById("currentDate")
        .textContent =
        date.toLocaleDateString(
            currentLanguage === "kn"
                ? "kn-IN"
                : "en-IN",
            {
                day: "numeric",
                month: "short",
                year: "numeric"
            }
        );
}


/* =====================================================
   IOT DATA
   ===================================================== */

/*
    IMPORTANT:

    This is FRONTEND IoT SIMULATION.

    Later, replace generateIoTReading()
    with a real API/Firebase/MQTT bridge
    connected to ESP32.
*/


let iotData = {

    moisture: 42,

    n: 68,

    p: 56,

    k: 72,

    updatedAt: new Date()

};


let motorState = "OFF";


/* =====================================================
   GENERATE SENSOR READING
   ===================================================== */

function generateIoTReading() {

    iotData.moisture =
        Math.floor(
            Math.random() * 81
        ) + 10;


    iotData.n =
        Math.floor(
            Math.random() * 61
        ) + 30;


    iotData.p =
        Math.floor(
            Math.random() * 61
        ) + 30;


    iotData.k =
        Math.floor(
            Math.random() * 61
        ) + 30;


    iotData.updatedAt =
        new Date();


    updateIoTDashboard();

}


/* =====================================================
   APPLY IOT DATA
   ===================================================== */

/*
    This function is prepared for REAL IoT.

    Example real data:

    {
        moisture: 28,
        nitrogen: 65,
        phosphorus: 52,
        potassium: 74
    }

*/

function applyIoTData(data) {

    iotData.moisture =
        Number(data.moisture);

    iotData.n =
        Number(data.nitrogen);

    iotData.p =
        Number(data.phosphorus);

    iotData.k =
        Number(data.potassium);

    iotData.updatedAt =
        new Date();


    updateIoTDashboard();
}


/* =====================================================
   UPDATE IOT DASHBOARD
   ===================================================== */

function updateIoTDashboard() {

    /* NPK */

    document.getElementById("nValue")
        .textContent = iotData.n;


    document.getElementById("pValue")
        .textContent = iotData.p;


    document.getElementById("kValue")
        .textContent = iotData.k;


    document.getElementById("nBar")
        .style.width =
        `${Math.min(iotData.n, 100)}%`;


    document.getElementById("pBar")
        .style.width =
        `${Math.min(iotData.p, 100)}%`;


    document.getElementById("kBar")
        .style.width =
        `${Math.min(iotData.k, 100)}%`;


    document.getElementById("nStatus")
        .textContent =
        nutrientStatus(iotData.n);


    document.getElementById("pStatus")
        .textContent =
        nutrientStatus(iotData.p);


    document.getElementById("kStatus")
        .textContent =
        nutrientStatus(iotData.k);


    const average =
        Math.round(
            (
                iotData.n +
                iotData.p +
                iotData.k
            ) / 3
        );


    document.getElementById("npkAverage")
        .textContent =
        average;


    document.getElementById("npkHealth")
        .textContent =
        soilHealthStatus(average);


    /* MOISTURE */

    const moisture =
        iotData.moisture;


    document.getElementById("moistureValue")
        .textContent =
        moisture;


    document.getElementById("moistureBar")
        .style.width =
        `${moisture}%`;


    updateMoistureStatus(moisture);


    /* MOTOR */

    updateMotorFromMoisture(moisture);


    /* SENSOR TIME */

    document.getElementById("sensorUpdated")
        .textContent =
        formatTime(iotData.updatedAt);

}


/* =====================================================
   NPK STATUS
   ===================================================== */

function nutrientStatus(value) {

    if (currentLanguage === "kn") {

        if (value < 40)
            return "ಕಡಿಮೆ";

        if (value < 70)
            return "ಮಧ್ಯಮ";

        return "ಉತ್ತಮ";
    }


    if (value < 40)
        return "Low";

    if (value < 70)
        return "Medium";

    return "Good";
}


/* =====================================================
   SOIL HEALTH
   ===================================================== */

function soilHealthStatus(value) {

    if (currentLanguage === "kn") {

        if (value < 40)
            return "ಕಡಿಮೆ";

        if (value < 70)
            return "ಮಧ್ಯಮ";

        return "ಉತ್ತಮ";
    }


    if (value < 40)
        return "Low";

    if (value < 70)
        return "Medium";

    return "Good";
}


/* =====================================================
   MOISTURE STATUS
   ===================================================== */

function updateMoistureStatus(moisture) {

    const status =
        document.getElementById(
            "moistureStatus"
        );

    const advice =
        document.getElementById(
            "moistureAdvice"
        );


    if (moisture < 30) {

        status.textContent =
            currentLanguage === "kn"
                ? "ಒಣ ಮಣ್ಣು"
                : "Dry Soil";


        advice.textContent =
            currentLanguage === "kn"
                ? "ಮಣ್ಣಿನ ತೇವಾಂಶ ಕಡಿಮೆಯಾಗಿದೆ. ನೀರಾವರಿ ಅಗತ್ಯವಿರಬಹುದು."
                : "Soil moisture is low. Irrigation may be required.";

    }

    else if (moisture > 50) {

        status.textContent =
            currentLanguage === "kn"
                ? "ತೇವಾಂಶ ಹೆಚ್ಚು"
                : "Moist";


        advice.textContent =
            currentLanguage === "kn"
                ? "ಮಣ್ಣಿನಲ್ಲಿ ಸಾಕಷ್ಟು ತೇವಾಂಶವಿದೆ. ಹೆಚ್ಚುವರಿ ನೀರು ಅಗತ್ಯವಿಲ್ಲ."
                : "Soil has sufficient moisture. Extra irrigation is not required.";

    }

    else {

        status.textContent =
            currentLanguage === "kn"
                ? "ಸಾಮಾನ್ಯ"
                : "Normal";


        advice.textContent =
            currentLanguage === "kn"
                ? "ತೇವಾಂಶ ಸ್ಥಿರವಾಗಿದೆ. ಪ್ರಸ್ತುತ ಸ್ಥಿತಿಯನ್ನು ಗಮನಿಸಿ."
                : "Moisture is stable. Continue monitoring.";

    }

}


/* =====================================================
   MOTOR LOGIC
   ===================================================== */

/*

    < 30%  → ON

    30–50% → KEEP PREVIOUS STATE

    > 50%  → OFF

*/

function updateMotorFromMoisture(moisture) {

    if (moisture < 30) {

        motorState = "ON";

    }

    else if (moisture > 50) {

        motorState = "OFF";

    }

    /*
        Between 30 and 50:
        Do nothing.

        This creates HYSTERESIS
        and prevents rapid switching.
    */


    updateMotorUI();

}


/* =====================================================
   MOTOR UI
   ===================================================== */

function updateMotorUI() {

    const status =
        document.getElementById(
            "motorStatus"
        );


    const icon =
        document.getElementById(
            "motorStatusIcon"
        );


    const message =
        document.getElementById(
            "motorMessage"
        );


    const card =
        document.querySelector(
            ".motor-card"
        );


    status.textContent =
        motorState;


    card.classList.remove(
        "motor-on",
        "motor-off"
    );


    if (motorState === "ON") {

        icon.textContent = "💧";

        card.classList.add(
            "motor-on"
        );


        message.textContent =
            currentLanguage === "kn"
                ? "ತೇವಾಂಶ 30% ಕ್ಕಿಂತ ಕಡಿಮೆ ಇದೆ. ನೀರಾವರಿ ಮೋಟಾರ್ ON ಆಗಿದೆ."
                : "Moisture is below 30%. Irrigation motor is ON.";

    }

    else {

        icon.textContent = "⏹️";

        card.classList.add(
            "motor-off"
        );


        message.textContent =
            currentLanguage === "kn"
                ? "ತೇವಾಂಶ 50% ಕ್ಕಿಂತ ಹೆಚ್ಚು ಇದೆ. ನೀರಾವರಿ ಮೋಟಾರ್ OFF ಆಗಿದೆ."
                : "Moisture is above 50%. Irrigation motor is OFF.";

    }


    document.getElementById("motorUpdated")
        .textContent =
        formatTime(new Date());

}


/* =====================================================
   SENSOR TEST BUTTONS
   ===================================================== */

function setTestMoisture(value) {

    iotData.moisture =
        value;

    iotData.updatedAt =
        new Date();

    updateIoTDashboard();

    showToast(
        currentLanguage === "kn"
            ? `Sensor moisture ${value}% ಗೆ ಬದಲಾಯಿಸಲಾಗಿದೆ`
            : `Sensor moisture changed to ${value}%`
    );
}


document.getElementById("testDryBtn")
    .addEventListener("click", () => {

        setTestMoisture(25);

    });


document.getElementById("testNormalBtn")
    .addEventListener("click", () => {

        setTestMoisture(40);

    });


document.getElementById("testWetBtn")
    .addEventListener("click", () => {

        setTestMoisture(60);

    });


document.getElementById("refreshSensorBtn")
    .addEventListener("click", () => {

        generateIoTReading();

        showToast(
            currentLanguage === "kn"
                ? "ಹೊಸ IoT reading ಪಡೆಯಲಾಗಿದೆ"
                : "New IoT reading received"
        );

    });


/* =====================================================
   AUTOMATIC SENSOR SIMULATION
   ===================================================== */

/*
    Every 15 seconds the simulated IoT sensor
    generates new data.

    For REAL ESP32:
    remove this setInterval and use
    fetch() / Firebase / MQTT bridge.
*/

setInterval(() => {

    generateIoTReading();

}, 15000);


/* =====================================================
   WEATHER
   ===================================================== */

const weatherCodes = {

    0: {
        kn: "ಸ್ವಚ್ಛ ಆಕಾಶ",
        en: "Clear sky"
    },

    1: {
        kn: "ಬಹುತೇಕ ಸ್ವಚ್ಛ",
        en: "Mainly clear"
    },

    2: {
        kn: "ಭಾಗಶಃ ಮೋಡ",
        en: "Partly cloudy"
    },

    3: {
        kn: "ಮೋಡ ಕವಿದ",
        en: "Overcast"
    },

    45: {
        kn: "ಮಂಜು",
        en: "Fog"
    },

    48: {
        kn: "ಮಂಜು",
        en: "Depositing fog"
    },

    51: {
        kn: "ತುಂತುರು ಮಳೆ",
        en: "Light drizzle"
    },

    53: {
        kn: "ತುಂತುರು ಮಳೆ",
        en: "Drizzle"
    },

    55: {
        kn: "ಭಾರೀ ತುಂತುರು ಮಳೆ",
        en: "Heavy drizzle"
    },

    61: {
        kn: "ಲಘು ಮಳೆ",
        en: "Light rain"
    },

    63: {
        kn: "ಮಳೆ",
        en: "Rain"
    },

    65: {
        kn: "ಭಾರೀ ಮಳೆ",
        en: "Heavy rain"
    },

    71: {
        kn: "ಹಿಮಪಾತ",
        en: "Light snow"
    },

    73: {
        kn: "ಹಿಮಪಾತ",
        en: "Snow"
    },

    75: {
        kn: "ಭಾರೀ ಹಿಮಪಾತ",
        en: "Heavy snow"
    },

    80: {
        kn: "ಮಳೆಯ ತುಂತುರು",
        en: "Rain showers"
    },

    81: {
        kn: "ಮಳೆ",
        en: "Rain showers"
    },

    82: {
        kn: "ಭಾರೀ ಮಳೆ",
        en: "Heavy rain showers"
    },

    95: {
        kn: "ಗುಡುಗು ಸಹಿತ ಮಳೆ",
        en: "Thunderstorm"
    },

    96: {
        kn: "ಗುಡುಗು ಮತ್ತು ಮಳೆ",
        en: "Thunderstorm with hail"
    },

    99: {
        kn: "ಭಾರೀ ಗುಡುಗು",
        en: "Heavy thunderstorm"
    }

};


/* =====================================================
   WEATHER SEARCH
   ===================================================== */

document.getElementById("getWeatherBtn")
    .addEventListener("click", () => {

        const city =
            document.getElementById(
                "weatherCity"
            ).value.trim();


        if (!city) {

            showToast(
                currentLanguage === "kn"
                    ? "ದಯವಿಟ್ಟು ಸ್ಥಳದ ಹೆಸರನ್ನು ನಮೂದಿಸಿ."
                    : "Please enter a location."
            );

            return;
        }


        getWeatherByCity(city);

    });


/* =====================================================
   CITY → COORDINATES
   ===================================================== */

async function getWeatherByCity(city) {

    showWeatherLoading(true);


    try {

        const geoURL =
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;


        const geoResponse =
            await fetch(geoURL);


        const geoData =
            await geoResponse.json();


        if (!geoData.results ||
            geoData.results.length === 0) {

            throw new Error(
                "Location not found"
            );

        }


        const location =
            geoData.results[0];


        document.getElementById(
            "currentLocation"
        ).textContent =
            location.name;


        await fetchWeather(
            location.latitude,
            location.longitude,
            location.name
        );


        localStorage.setItem(
            "gingerLocation",
            location.name
        );

    }

    catch (error) {

        showToast(
            currentLanguage === "kn"
                ? "ಸ್ಥಳ ಅಥವಾ ಹವಾಮಾನ ಮಾಹಿತಿ ಪಡೆಯಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ."
                : "Unable to get location or weather information."
        );

    }

    finally {

        showWeatherLoading(false);

    }

}


/* =====================================================
   FETCH WEATHER
   ===================================================== */

async function fetchWeather(
    latitude,
    longitude,
    locationName
) {

    const url =
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,precipitation_sum,wind_speed_10m_max,weather_code&temperature_unit=celsius&wind_speed_unit=kmh&precipitation_unit=mm&timezone=auto&forecast_days=2`;


    const response =
        await fetch(url);


    if (!response.ok) {

        throw new Error(
            "Weather API error"
        );

    }


    const data =
        await response.json();


    const day =
        1;


    const maxTemp =
        data.daily.temperature_2m_max[day];


    const minTemp =
        data.daily.temperature_2m_min[day];


    const rainChance =
        data.daily.precipitation_probability_max[day];


    const rainfall =
        data.daily.precipitation_sum[day];


    const wind =
        data.daily.wind_speed_10m_max[day];


    const code =
        data.daily.weather_code[day];


    const condition =
        weatherCodes[code]
            ? weatherCodes[code][currentLanguage]
            : "Weather";


    document.getElementById(
        "weatherLocation"
    ).textContent =
        locationName;


    document.getElementById(
        "weatherCondition"
    ).textContent =
        condition;


    document.getElementById(
        "weatherMax"
    ).textContent =
        Math.round(maxTemp);


    document.getElementById(
        "weatherMax2"
    ).textContent =
        Math.round(maxTemp);


    document.getElementById(
        "weatherRain"
    ).textContent =
        rainChance;


    document.getElementById(
        "weatherRainfall"
    ).textContent =
        rainfall;


    document.getElementById(
        "weatherWind"
    ).textContent =
        Math.round(wind);


    document.getElementById(
        "weatherResult"
    ).classList.remove(
        "hidden"
    );


    document.getElementById(
        "dashWeatherCondition"
    ).textContent =
        condition;


    document.getElementById(
        "dashTemp"
    ).textContent =
        Math.round(maxTemp);


    document.getElementById(
        "dashRain"
    ).textContent =
        rainChance;


    document.getElementById(
        "dashWind"
    ).textContent =
        Math.round(wind);


    generateSprayAdvice(
        rainChance,
        rainfall,
        wind,
        maxTemp,
        code
    );


    localStorage.setItem(
        "lastWeather",
        JSON.stringify({
            locationName,
            maxTemp,
            minTemp,
            rainChance,
            rainfall,
            wind,
            code
        })
    );

}


/* =====================================================
   SPRAYING ADVICE
   ===================================================== */

function generateSprayAdvice(
    rainChance,
    rainfall,
    wind,
    maxTemp,
    weatherCode
) {

    let advice;


    if (weatherCode >= 95) {

        advice =
            currentLanguage === "kn"
                ? "ಗುಡುಗು ಸಹಿತ ಮಳೆಯ ಸಾಧ್ಯತೆ ಇದೆ. ಸಿಂಪಡಣೆಯನ್ನು ತಪ್ಪಿಸಿ ಅಥವಾ ಮುಂದೂಡಿ."
                : "Thunderstorm conditions are possible. Avoid or delay spraying.";

    }

    else if (
        rainChance >= 60 ||
        rainfall >= 2
    ) {

        advice =
            currentLanguage === "kn"
                ? "ಮಳೆಯ ಸಾಧ್ಯತೆ ಹೆಚ್ಚಾಗಿದೆ. ಸಿಂಪಡಣೆಯನ್ನು ಮುಂದೂಡುವುದು ಉತ್ತಮ."
                : "Rain probability is high. It is better to delay spraying.";

    }

    else if (wind > 20) {

        advice =
            currentLanguage === "kn"
                ? "ಗಾಳಿ ವೇಗ ಹೆಚ್ಚಾಗಿದೆ. ಸಿಂಪಡಿಸುವಾಗ drift ಅಪಾಯವಿದೆ."
                : "Wind speed is high. There may be a spray-drift risk.";

    }

    else if (maxTemp >= 35) {

        advice =
            currentLanguage === "kn"
                ? "ತಾಪಮಾನ ಹೆಚ್ಚು. ಮಧ್ಯಾಹ್ನ ಸಿಂಪಡಿಸುವುದನ್ನು ತಪ್ಪಿಸಿ ಮತ್ತು ಉತ್ಪನ್ನದ label ಸೂಚನೆ ಅನುಸರಿಸಿ."
                : "Temperature is high. Avoid midday spraying and follow the product label.";

    }

    else {

        advice =
            currentLanguage === "kn"
                ? "ಹವಾಮಾನವು ಸಾಮಾನ್ಯವಾಗಿ ಸಿಂಪಡಣೆಗೆ ಅನುಕೂಲಕರವಾಗಿದೆ. ಸ್ಥಳೀಯ ಪರಿಸ್ಥಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ."
                : "Weather is generally suitable for spraying. Check local field conditions.";

    }


    document.getElementById(
        "sprayAdvice"
    ).textContent =
        advice;

}


/* =====================================================
   MY LOCATION
   ===================================================== */

document.getElementById("locationBtn")
    .addEventListener("click", () => {

        if (!navigator.geolocation) {

            showToast(
                currentLanguage === "kn"
                    ? "ನಿಮ್ಮ browser geolocation support ಮಾಡುವುದಿಲ್ಲ."
                    : "Your browser does not support geolocation."
            );

            return;
        }


        showWeatherLoading(true);


        navigator.geolocation.getCurrentPosition(

            async position => {

                try {

                    const latitude =
                        position.coords.latitude;

                    const longitude =
                        position.coords.longitude;


                    await fetchWeather(
                        latitude,
                        longitude,
                        currentLanguage === "kn"
                            ? "ನಿಮ್ಮ ಸ್ಥಳ"
                            : "Your Location"
                    );

                }

                catch (error) {

                    showToast(
                        currentLanguage === "kn"
                            ? "ಹವಾಮಾನ ಪಡೆಯಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ."
                            : "Unable to get weather."
                    );

                }

                finally {

                    showWeatherLoading(false);

                }

            },


            () => {

                showWeatherLoading(false);

                showToast(
                    currentLanguage === "kn"
                        ? "Location permission ನೀಡಿ."
                        : "Please allow location permission."
                );

            }

        );

    });


/* =====================================================
   WEATHER LOADING
   ===================================================== */

function showWeatherLoading(show) {

    document.getElementById(
        "weatherLoading"
    ).classList.toggle(
        "hidden",
        !show
    );

}


/* =====================================================
   MANUAL TEMPERATURE
   ===================================================== */

document.getElementById("checkTempBtn")
    .addEventListener("click", () => {

        const temp =
            Number(
                document.getElementById(
                    "manualTemp"
                ).value
            );


        const result =
            document.getElementById(
                "manualTempResult"
            );


        if (!temp && temp !== 0) {

            result.textContent =
                currentLanguage === "kn"
                    ? "ತಾಪಮಾನ ನಮೂದಿಸಿ."
                    : "Enter a temperature.";

            return;
        }


        if (temp >= 35) {

            result.textContent =
                currentLanguage === "kn"
                    ? "ತಾಪಮಾನ ಹೆಚ್ಚು. ಮಧ್ಯಾಹ್ನದ ಸಿಂಪಡಣೆ ತಪ್ಪಿಸಿ."
                    : "Temperature is high. Avoid midday spraying.";

        }

        else if (temp < 18) {

            result.textContent =
                currentLanguage === "kn"
                    ? "ತಾಪಮಾನ ಕಡಿಮೆಯಾಗಿದೆ. ಬೆಳೆಯ ಸ್ಥಿತಿಯನ್ನು ಗಮನಿಸಿ."
                    : "Temperature is low. Monitor crop conditions.";

        }

        else {

            result.textContent =
                currentLanguage === "kn"
                    ? "ತಾಪಮಾನ ಸಾಮಾನ್ಯವಾಗಿದೆ."
                    : "Temperature is within a moderate range.";

        }

    });


/* =====================================================
   WEATHER SPEECH
   ===================================================== */

document.getElementById("speakWeather")
    .addEventListener("click", () => {

        const location =
            document.getElementById(
                "weatherLocation"
            ).textContent;


        const condition =
            document.getElementById(
                "weatherCondition"
            ).textContent;


        const temperature =
            document.getElementById(
                "weatherMax"
            ).textContent;


        const rain =
            document.getElementById(
                "weatherRain"
            ).textContent;


        const text =
            currentLanguage === "kn"

                ? `${location} ನಾಳೆಯ ಹವಾಮಾನ ${condition}. ಗರಿಷ್ಠ ತಾಪಮಾನ ${temperature} ಡಿಗ್ರಿ. ಮಳೆಯ ಸಾಧ್ಯತೆ ${rain} ಪ್ರತಿಶತ.`

                : `Tomorrow's weather in ${location} is ${condition}. Maximum temperature is ${temperature} degrees. Rain probability is ${rain} percent.`;


        speak(text);

    });


/* =====================================================
   CROP IMAGE
   ===================================================== */

document.getElementById("cropImage")
    .addEventListener("change", event => {

        const file =
            event.target.files[0];


        if (!file)
            return;


        const preview =
            document.getElementById(
                "cropPreview"
            );


        const placeholder =
            document.getElementById(
                "cropPlaceholder"
            );


        preview.src =
            URL.createObjectURL(file);


        preview.classList.remove(
            "hidden"
        );


        placeholder.classList.add(
            "hidden"
        );


        document.getElementById(
            "cropResult"
        ).classList.add(
            "hidden"
        );

    });


/* =====================================================
   CROP ANALYSIS DEMO
   ===================================================== */

document.getElementById("analyzeCropBtn")
    .addEventListener("click", () => {

        const image =
            document.getElementById(
                "cropImage"
            ).files[0];


        if (!image) {

            showToast(
                currentLanguage === "kn"
                    ? "ಮೊದಲು crop image ಆಯ್ಕೆ ಮಾಡಿ."
                    : "Please choose a crop image first."
            );

            return;
        }


        const result =
            document.getElementById(
                "cropResult"
            );


        const text =
            document.getElementById(
                "cropResultText"
            );


        text.textContent =

            currentLanguage === "kn"

                ? "Demo result: ಬೆಳೆಯಲ್ಲಿ stress ಅಥವಾ rhizome rot ಸಂಬಂಧಿತ ಸಮಸ್ಯೆಯ ಸಾಧ್ಯತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ. ಎಲೆಗಳ ಬಣ್ಣ, ಕಲೆಗಳು, drainage ಮತ್ತು rhizome condition ಅನ್ನು ಪರಿಶೀಲಿಸಿ."

                : "Demo result: Check the crop for possible stress or rhizome-rot related issues. Inspect leaf color, spots, drainage and rhizome condition.";


        result.classList.remove(
            "hidden"
        );

    });


/* =====================================================
   FARMING GUIDE SPEECH
   ===================================================== */

document.querySelectorAll(".listen-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const key =
                    button.dataset.speakKey;


                const text =
                    translations[
                        currentLanguage
                    ][key];


                speak(text);

            }
        );

    });


/* =====================================================
   TEXT TO SPEECH
   ===================================================== */

function speak(text) {

    if (!("speechSynthesis" in window)) {

        showToast(
            currentLanguage === "kn"
                ? "ನಿಮ್ಮ browser speech support ಮಾಡುವುದಿಲ್ಲ."
                : "Your browser does not support speech."
        );

        return;
    }


    window.speechSynthesis.cancel();


    const utterance =
        new SpeechSynthesisUtterance(text);


    utterance.lang =
        currentLanguage === "kn"
            ? "kn-IN"
            : "en-IN";


    utterance.rate = 0.9;


    window.speechSynthesis.speak(
        utterance
    );

}


/* =====================================================
   ASSISTANT
   ===================================================== */

function updateAssistantPlaceholder() {

    document.getElementById(
        "assistantInput"
    ).placeholder =
        currentLanguage === "kn"
            ? "ನಿಮ್ಮ ಪ್ರಶ್ನೆ..."
            : "Ask your question...";

}


/* =====================================================
   SEND ASSISTANT MESSAGE
   ===================================================== */

document.getElementById("sendAssistant")
    .addEventListener("click", sendAssistantMessage);


document.getElementById("assistantInput")
    .addEventListener("keydown", event => {

        if (event.key === "Enter") {

            sendAssistantMessage();

        }

    });


function sendAssistantMessage() {

    const input =
        document.getElementById(
            "assistantInput"
        );


    const question =
        input.value.trim();


    if (!question)
        return;


    addChatMessage(
        question,
        "user"
    );


    input.value = "";


    setTimeout(() => {

        const answer =
            getAssistantAnswer(question);


        addChatMessage(
            answer,
            "bot"
        );

    }, 500);

}


/* =====================================================
   CHAT MESSAGE
   ===================================================== */

function addChatMessage(
    text,
    type
) {

    const container =
        document.getElementById(
            "chatMessages"
        );


    const message =
        document.createElement(
            "div"
        );


    message.className =
        `message ${type}`;


    message.innerHTML = `

        <div class="message-avatar">
            ${type === "bot" ? "🤖" : "👨‍🌾"}
        </div>

        <div class="message-content">
            <p>${escapeHTML(text)}</p>
        </div>

    `;


    container.appendChild(
        message
    );


    container.scrollTop =
        container.scrollHeight;

}


/* =====================================================
   ASSISTANT KNOWLEDGE
   ===================================================== */

function getAssistantAnswer(question) {

    const q =
        question.toLowerCase();


    /* WEATHER */

    if (
        q.includes("weather") ||
        q.includes("forecast") ||
        q.includes("rain") ||
        q.includes("spray") ||
        q.includes("ಹವಾಮಾನ") ||
        q.includes("ಮಳೆ") ||
        q.includes("ಸಿಂಪಡ")
    ) {

        return currentLanguage === "kn"

            ? "ಹವಾಮಾನಕ್ಕಾಗಿ Weather ವಿಭಾಗಕ್ಕೆ ಹೋಗಿ ಮತ್ತು ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ನಮೂದಿಸಿ. ಮಳೆಯ ಸಾಧ್ಯತೆ ಮತ್ತು ಗಾಳಿಯ ವೇಗವನ್ನು ಪರಿಶೀಲಿಸಿ ನಂತರ ಸಿಂಪಡಣೆ ನಿರ್ಧರಿಸಿ."

            : "Go to the Weather section and enter your location. Check rain probability and wind speed before deciding on spraying.";

    }


    /* WATER */

    if (
        q.includes("water") ||
        q.includes("irrigation") ||
        q.includes("ನೀರು") ||
        q.includes("ನೀರಾವರಿ")
    ) {

        return currentLanguage === "kn"

            ? "ಮಣ್ಣಿನ ತೇವಾಂಶವನ್ನು ಗಮನಿಸಿ ನೀರು ನೀಡಿ. ನಮ್ಮ demo ನಲ್ಲಿ 30% ಕ್ಕಿಂತ ಕಡಿಮೆ ಇದ್ದಾಗ motor ON ಮತ್ತು 50% ಕ್ಕಿಂತ ಹೆಚ್ಚು ಇದ್ದಾಗ motor OFF ಆಗುತ್ತದೆ."

            : "Monitor soil moisture before irrigation. In our demo, the motor turns ON below 30% and OFF above 50%.";

    }


    /* NPK */

    if (
        q.includes("npk") ||
        q.includes("nitrogen") ||
        q.includes("phosphorus") ||
        q.includes("potassium") ||
        q.includes("ಗೊಬ್ಬರ") ||
        q.includes("ಪೋಷಕ")
    ) {

        return currentLanguage === "kn"

            ? "NPK ಎಂದರೆ Nitrogen, Phosphorus ಮತ್ತು Potassium. ನಿಖರ fertilizer recommendation ಗೆ ಮಣ್ಣಿನ ಪರೀಕ್ಷೆ ಮತ್ತು ಸ್ಥಳೀಯ ಕೃಷಿ ತಜ್ಞರ ಸಲಹೆಯನ್ನು ಬಳಸಿ."

            : "NPK means Nitrogen, Phosphorus and Potassium. Use soil testing and local agricultural advice for accurate fertilizer recommendations.";

    }


    /* DISEASE */

    if (
        q.includes("disease") ||
        q.includes("pest") ||
        q.includes("ರೋಗ") ||
        q.includes("ಕೀಟ")
    ) {

        return currentLanguage === "kn"

            ? "ಎಲೆಗಳ ಬಣ್ಣ ಬದಲಾವಣೆ, ಕಲೆಗಳು, wilting ಮತ್ತು rhizome rot ಲಕ್ಷಣಗಳನ್ನು ಗಮನಿಸಿ. ಸರಿಯಾದ diagnosis ಗೆ ಕೃಷಿ ತಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಿ."

            : "Watch for leaf discoloration, spots, wilting and rhizome rot symptoms. Consult an agricultural expert for proper diagnosis.";

    }


    /* SOIL */

    if (
        q.includes("soil") ||
        q.includes("ಮಣ್ಣು")
    ) {

        return currentLanguage === "kn"

            ? "ಶುಂಠಿಗೆ ಉತ್ತಮ drainage ಇರುವ ಮಣ್ಣು ಮುಖ್ಯ. ನೀರು ದೀರ್ಘಕಾಲ ನಿಲ್ಲುವುದನ್ನು ತಪ್ಪಿಸಿ ಮತ್ತು ಮಣ್ಣಿನ ಆರೋಗ್ಯವನ್ನು ಪರೀಕ್ಷಿಸಿ."

            : "Good drainage is important for ginger. Avoid prolonged waterlogging and monitor soil health.";

    }


    /* PLANTING */

    if (
        q.includes("plant") ||
        q.includes("planting") ||
        q.includes("ನೆಡುವ")
    ) {

        return currentLanguage === "kn"

            ? "ಆರೋಗ್ಯಕರ seed rhizomes ಆಯ್ಕೆ ಮಾಡಿ. ಸೂಕ್ತ ಅಂತರದಲ್ಲಿ ನೆಟ್ಟು ಉತ್ತಮ drainage ಮತ್ತು ತೇವಾಂಶ ನಿರ್ವಹಿಸಿ."

            : "Select healthy seed rhizomes. Plant with suitable spacing and maintain good drainage and moisture.";

    }


    /* HARVEST */

    if (
        q.includes("harvest") ||
        q.includes("ಕೊಯ್ಲು")
    ) {

        return currentLanguage === "kn"

            ? "ಬೆಳೆ maturity ತಲುಪಿದಾಗ ಕೊಯ್ಲು ಮಾಡಿ. Rhizomes ಗೆ ಹಾನಿಯಾಗದಂತೆ ಎಚ್ಚರಿಕೆಯಿಂದ ತೆಗೆದುಕೊಳ್ಳಿ."

            : "Harvest when the crop reaches maturity. Carefully remove the rhizomes to avoid damage.";

    }


    /* STORAGE */

    if (
        q.includes("storage") ||
        q.includes("ಸಂಗ್ರಹ")
    ) {

        return currentLanguage === "kn"

            ? "ಹಾನಿಗೊಂಡ rhizomes ಬೇರ್ಪಡಿಸಿ ಮತ್ತು ಸ್ವಚ್ಛ, ಗಾಳಿ ಹರಿಯುವ ಸ್ಥಳದಲ್ಲಿ ಸಂಗ್ರಹಿಸಿ."

            : "Separate damaged rhizomes and store them in a clean and ventilated place.";

    }


    /* DEFAULT */

    return currentLanguage === "kn"

        ? "ನಾನು ಶುಂಠಿ ಕೃಷಿ, ಮಣ್ಣು, ನೀರಾವರಿ, NPK, ರೋಗ, ಹವಾಮಾನ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಕುರಿತು ಸಹಾಯ ಮಾಡಬಹುದು."

        : "I can help with ginger farming, soil, irrigation, NPK, diseases, weather and markets.";

}


/* =====================================================
   QUICK QUESTIONS
   ===================================================== */

document.querySelectorAll(
    ".quick-questions button"
)
.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const questionType =
                button.dataset.question;


            let question = "";


            if (questionType === "weather") {

                question =
                    currentLanguage === "kn"
                        ? "ನಾಳೆ ಹವಾಮಾನ ಹೇಗಿದೆ?"
                        : "How is tomorrow's weather?";

            }

            else if (questionType === "water") {

                question =
                    currentLanguage === "kn"
                        ? "ಯಾವಾಗ ನೀರು ಕೊಡಬೇಕು?"
                        : "When should I irrigate?";

            }

            else if (questionType === "npk") {

                question =
                    "NPK";

            }

            else {

                question =
                    currentLanguage === "kn"
                        ? "ಶುಂಠಿಯ ರೋಗದ ಲಕ್ಷಣಗಳು ಯಾವುವು?"
                        : "What are ginger disease symptoms?";

            }


            document.getElementById(
                "assistantInput"
            ).value =
                question;


            sendAssistantMessage();

        }
    );

});


/* =====================================================
   VOICE INPUT
   ===================================================== */

document.getElementById("voiceAssistant")
    .addEventListener("click", () => {

        const SpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;


        if (!SpeechRecognition) {

            showToast(
                currentLanguage === "kn"
                    ? "Voice input ಈ browser ನಲ್ಲಿ support ಆಗುವುದಿಲ್ಲ."
                    : "Voice input is not supported in this browser."
            );

            return;
        }


        const recognition =
            new SpeechRecognition();


        recognition.lang =
            currentLanguage === "kn"
                ? "kn-IN"
                : "en-IN";


        recognition.start();


        recognition.onresult =
            event => {

                const text =
                    event.results[0][0].transcript;


                document.getElementById(
                    "assistantInput"
                ).value =
                    text;

            };

    });


/* =====================================================
   MARKET CONTACT
   ===================================================== */

document.querySelectorAll(".contact-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                showToast(
                    currentLanguage === "kn"
                        ? "ಇದು demo buyer profile. ನಿಜವಾದ ಸಂಪರ್ಕ ಮಾಹಿತಿಯನ್ನು ನಂತರ ಸೇರಿಸಬಹುದು."
                        : "This is a demo buyer profile. Real contact details can be added later."
                );

            }
        );

    });


/* =====================================================
   TOAST
   ===================================================== */

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    const toastMessage =
        document.getElementById(
            "toastMessage"
        );


    toastMessage.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

    }, 3000);

}


/* =====================================================
   ESCAPE HTML
   ===================================================== */

function escapeHTML(text) {

    const div =
        document.createElement(
            "div"
        );

    div.textContent =
        text;

    return div.innerHTML;

}


/* =====================================================
   TIME
   ===================================================== */

function formatTime(date) {

    return date.toLocaleTimeString(
        currentLanguage === "kn"
            ? "kn-IN"
            : "en-IN",
        {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }
    );

}


/* =====================================================
   UPDATE DYNAMIC UI AFTER LANGUAGE CHANGE
   ===================================================== */

function updateDynamicUI() {

    updateDate();

    updateMoistureStatus(
        iotData.moisture
    );

    updateMotorUI();


    document.getElementById(
        "nStatus"
    ).textContent =
        nutrientStatus(iotData.n);


    document.getElementById(
        "pStatus"
    ).textContent =
        nutrientStatus(iotData.p);


    document.getElementById(
        "kStatus"
    ).textContent =
        nutrientStatus(iotData.k);


    /* Recalculate soil health */

    const average =
        Math.round(
            (
                iotData.n +
                iotData.p +
                iotData.k
            ) / 3
        );


    document.getElementById(
        "npkHealth"
    ).textContent =
        soilHealthStatus(average);

}


/* =====================================================
   INITIAL LOAD
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        applyLanguage();

        updateIoTDashboard();

        updateAssistantPlaceholder();


        const savedLocation =
            localStorage.getItem(
                "gingerLocation"
            );


        if (savedLocation) {

            document.getElementById(
                "currentLocation"
            ).textContent =
                savedLocation;

        }

    }
);