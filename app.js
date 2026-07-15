// Laptop Recommendation Platform Database and Logic
// Laptop Catalog Database
const laptopCatalog = [
    {
        id: "acer-aspire-lite",
        name: "Acer Aspire Lite",
        brand: "Acer",
        image: "laptop_generic_budget",
        prices: {
            amazon: 29990,
            flipkart: 28990,
            croma: 30990,
            reliance: 29490
        },
        specs: {
            cpu: "Intel Core i3-1215U (6 Cores)",
            gpu: "Intel UHD Graphics",
            ram: "8GB DDR4 RAM",
            storage: "512GB PCIe Gen3 SSD",
            display: "15.6\" Full HD (1920x1080) Anti-glare",
            battery: "Up to 6 hours (36 Wh)",
            weight: "1.59 kg"
        },
        scores: {
            performance: 4,
            portability: 7,
            battery: 4,
            display: 5,
            build: 5
        },
        useCases: ["everyday", "office"],
        keywords: ["cheap", "budget", "affordable", "school", "office", "documents", "youtube", "movies", "basic", "students", "excel", "word", "lowest price"]
    },
    {
        id: "lenovo-ideapad-slim-3",
        name: "Lenovo IdeaPad Slim 3",
        brand: "Lenovo",
        image: "laptop_lenovo_ideapad",
        prices: {
            amazon: 35990,
            flipkart: 34990,
            croma: 36990,
            reliance: 35490
        },
        specs: {
            cpu: "Intel Core i3-1215U (6 Cores)",
            gpu: "Intel UHD Graphics",
            ram: "8GB LPDDR5 RAM",
            storage: "512GB PCIe Gen4 SSD",
            display: "15.6\" Full HD (1920x1080) IPS 300 nits",
            battery: "Up to 7 hours (47 Wh)",
            weight: "1.62 kg"
        },
        scores: {
            performance: 4.5,
            portability: 6.5,
            battery: 5,
            display: 5.5,
            build: 6
        },
        useCases: ["everyday", "office", "college"],
        keywords: ["budget", "lenovo", "student", "college", "school", "typing", "online class", "browse", "zoom", "teams"]
    },
    {
        id: "hp-15s",
        name: "HP Laptop 15s",
        brand: "HP",
        image: "laptop_hp_generic",
        prices: {
            amazon: 39990,
            flipkart: 37990,
            croma: 38990,
            reliance: 38490
        },
        specs: {
            cpu: "AMD Ryzen 3 5300U (4 Cores / 8 Threads)",
            gpu: "AMD Radeon Graphics",
            ram: "8GB DDR4 RAM",
            storage: "512GB PCIe SSD",
            display: "15.6\" Full HD (1920x1080) Micro-edge",
            battery: "Up to 7.5 hours (41 Wh)",
            weight: "1.69 kg"
        },
        scores: {
            performance: 4.5,
            portability: 6,
            battery: 5,
            display: 5,
            build: 6
        },
        useCases: ["everyday", "office"],
        keywords: ["hp", "ryzen", "amd", "reliable", "home", "parents", "basic", "keyboard"]
    },
    {
        id: "xiaomi-redmibook-pro-15",
        name: "Xiaomi RedmiBook Pro 15",
        brand: "Xiaomi",
        image: "laptop_xiaomi",
        prices: {
            amazon: 46990,
            flipkart: 45990,
            croma: 47990,
            reliance: 46490
        },
        specs: {
            cpu: "Intel Core i5-12450H (8 Cores)",
            gpu: "Intel UHD Graphics",
            ram: "16GB LPDDR5 RAM",
            storage: "512GB NVMe SSD",
            display: "15.6\" 3.2K (3200x2000) 90Hz 100% sRGB",
            battery: "Up to 9 hours (70 Wh)",
            weight: "1.8 kg"
        },
        scores: {
            performance: 6.5,
            portability: 5.5,
            battery: 7.5,
            display: 8,
            build: 7
        },
        useCases: ["coding", "everyday", "office"],
        keywords: ["coding", "programming", "developer", "web", "html", "css", "high resolution", "sharp display", "screen", "cheap coding", "python"]
    },
    {
        id: "asus-vivobook-15-oled",
        name: "ASUS Vivobook 15 OLED",
        brand: "ASUS",
        image: "laptop_asus_vivobook",
        prices: {
            amazon: 53990,
            flipkart: 52990,
            croma: 54990,
            reliance: 55990
        },
        specs: {
            cpu: "Intel Core i5-1335U (10 Cores)",
            gpu: "Intel Iris Xe Graphics",
            ram: "16GB DDR4 RAM",
            storage: "512GB PCIe Gen4 SSD",
            display: "15.6\" FHD (1920x1080) OLED 600 nits 100% DCI-P3",
            battery: "Up to 8 hours (50 Wh)",
            weight: "1.7 kg"
        },
        scores: {
            performance: 6,
            portability: 6,
            battery: 6.5,
            display: 9,
            build: 6.5
        },
        useCases: ["everyday", "creator", "office"],
        keywords: ["oled", "display", "movies", "netflix", "color accuracy", "vibrant", "hdr", "design", "photoshop", "fhd"]
    },
    {
        id: "acer-swift-go-14",
        name: "Acer Swift Go 14 OLED",
        brand: "Acer",
        image: "laptop_acer_swift",
        prices: {
            amazon: 58990,
            flipkart: 57990,
            croma: 59990,
            reliance: 59490
        },
        specs: {
            cpu: "Intel Core i5-13500H (12 Cores)",
            gpu: "Intel Iris Xe Graphics",
            ram: "16GB LPDDR5 RAM",
            storage: "512GB PCIe Gen4 SSD",
            display: "14\" 2.8K (2880x1800) OLED 90Hz 100% DCI-P3",
            battery: "Up to 9.5 hours (65 Wh)",
            weight: "1.25 kg"
        },
        scores: {
            performance: 7.5,
            portability: 9,
            battery: 7.5,
            display: 9,
            build: 7.5
        },
        useCases: ["coding", "college", "travel", "creator"],
        keywords: ["lightweight", "thin", "swift", "oled", "intel evo", "battery", "fast", "processing", "college coding", "traveling", "programming", "value"]
    },
    {
        id: "msi-cyborg-15",
        name: "MSI Cyborg 15",
        brand: "MSI",
        image: "laptop_msi_cyborg",
        prices: {
            amazon: 63990,
            flipkart: 62990,
            croma: 64990,
            reliance: 63490
        },
        specs: {
            cpu: "Intel Core i5-12450H (8 Cores)",
            gpu: "NVIDIA GeForce RTX 4050 (6GB VRAM, 45W)",
            ram: "8GB DDR5 RAM (Expandable)",
            storage: "512GB NVMe Gen4 SSD",
            display: "15.6\" FHD (1920x1080) IPS 144Hz",
            battery: "Up to 4 hours (53.5 Wh)",
            weight: "1.98 kg"
        },
        scores: {
            performance: 7,
            portability: 4.5,
            battery: 3,
            display: 6,
            build: 6
        },
        useCases: ["gaming"],
        keywords: ["gaming", "rtx 4050", "nvidia", "cheap gaming", "entry gaming", "games", "valorant", "gta", "fps", "graphics", "gpu"]
    },
    {
        id: "hp-victus-16",
        name: "HP Victus 16",
        brand: "HP",
        image: "laptop_hp_victus",
        prices: {
            amazon: 68990,
            flipkart: 67990,
            croma: 69990,
            reliance: 68490
        },
        specs: {
            cpu: "AMD Ryzen 5 5600H (6 Cores)",
            gpu: "NVIDIA GeForce RTX 3050 (4GB VRAM)",
            ram: "16GB DDR4 RAM",
            storage: "512GB PCIe NVMe SSD",
            display: "16.1\" FHD (1920x1080) 144Hz 250 nits",
            battery: "Up to 5.5 hours (70 Wh)",
            weight: "2.46 kg"
        },
        scores: {
            performance: 6.5,
            portability: 3,
            battery: 4.5,
            display: 6,
            build: 6.5
        },
        useCases: ["gaming", "coding"],
        keywords: ["gaming", "victus", "ryzen", "coding gaming", "student gaming", "entry level", "3050"]
    },
    {
        id: "hp-pavilion-plus-14",
        name: "HP Pavilion Plus 14",
        brand: "HP",
        image: "laptop_hp_pavilion",
        prices: {
            amazon: 71990,
            flipkart: 73990,
            croma: 72990,
            reliance: 71490
        },
        specs: {
            cpu: "Intel Core i5-1340P (12 Cores)",
            gpu: "Intel Iris Xe Graphics",
            ram: "16GB LPDDR5 RAM",
            storage: "512GB PCIe SSD",
            display: "14\" 2.8K (2880x1800) OLED 120Hz 100% DCI-P3",
            battery: "Up to 8 hours (51 Wh)",
            weight: "1.4 kg"
        },
        scores: {
            performance: 7,
            portability: 8,
            battery: 7,
            display: 9,
            build: 7.5
        },
        useCases: ["office", "coding", "college"],
        keywords: ["hp pavilion", "premium", "student", "programming", "business", "120hz", "oled", "sharp screen", "comfortable keyboard"]
    },
    {
        id: "asus-tuf-gaming-f15",
        name: "ASUS TUF Gaming F15",
        brand: "ASUS",
        image: "laptop_asus_tuf",
        prices: {
            amazon: 73990,
            flipkart: 71990,
            croma: 74990,
            reliance: 73490
        },
        specs: {
            cpu: "Intel Core i5-12500H (12 Cores)",
            gpu: "NVIDIA GeForce RTX 3050 (4GB VRAM, 95W)",
            ram: "16GB DDR4 RAM",
            storage: "512GB NVMe Gen4 SSD",
            display: "15.6\" FHD (1920x1080) 144Hz Adaptive-Sync",
            battery: "Up to 6 hours (56 Wh)",
            weight: "2.2 kg"
        },
        scores: {
            performance: 7,
            portability: 4,
            battery: 5,
            display: 6,
            build: 8
        },
        useCases: ["gaming", "coding"],
        keywords: ["tuf", "military grade", "durable gaming", "coding student", "games", "valorant", "fifa", "graphics"]
    },
    {
        id: "dell-g15",
        name: "Dell G15 Gaming",
        brand: "Dell",
        image: "laptop_dell_g15",
        prices: {
            amazon: 78990,
            flipkart: 77990,
            croma: 79990,
            reliance: 78490
        },
        specs: {
            cpu: "Intel Core i5-13450HX (10 Cores)",
            gpu: "NVIDIA GeForce RTX 3050 (6GB VRAM)",
            ram: "16GB DDR5 RAM",
            storage: "1TB NVMe PCIe SSD",
            display: "15.6\" FHD (1920x1080) 120Hz 250 nits",
            battery: "Up to 5 hours (56 Wh)",
            weight: "2.65 kg"
        },
        scores: {
            performance: 7.5,
            portability: 3,
            battery: 4,
            display: 6,
            build: 7.5
        },
        useCases: ["gaming", "coding"],
        keywords: ["dell gaming", "robust", "g15", "1tb storage", "rtx 3050 6gb", "performance", "school gaming"]
    },
    {
        id: "macbook-air-m2",
        name: "Apple MacBook Air M2",
        brand: "Apple",
        image: "laptop_macbook_air_m2",
        prices: {
            amazon: 84900,
            flipkart: 82900,
            croma: 85900,
            reliance: 84900
        },
        specs: {
            cpu: "Apple M2 Chip (8-Core CPU)",
            gpu: "8-Core GPU",
            ram: "8GB Unified Memory",
            storage: "256GB SSD",
            display: "13.6\" Liquid Retina (2560x1664) 500 nits",
            battery: "Up to 18 hours",
            weight: "1.24 kg"
        },
        scores: {
            performance: 7.5,
            portability: 10,
            battery: 10,
            display: 8,
            build: 9
        },
        useCases: ["everyday", "college", "travel", "office"],
        keywords: ["macbook", "m2", "apple", "battery life", "ultra portable", "silent", "no fan", "ios developer", "college thin", "macos", "aesthetic", "premium"]
    },
    {
        id: "lenovo-legion-5",
        name: "Lenovo Legion 5 AMD",
        brand: "Lenovo",
        image: "laptop_lenovo_legion",
        prices: {
            amazon: 108990,
            flipkart: 106990,
            croma: 109990,
            reliance: 107990
        },
        specs: {
            cpu: "AMD Ryzen 7 6800H (8 Cores)",
            gpu: "NVIDIA GeForce RTX 3060 (6GB VRAM, 140W)",
            ram: "16GB DDR5 RAM",
            storage: "512GB PCIe SSD",
            display: "15.6\" WQHD (2560x1440) IPS 165Hz sRGB 100%",
            battery: "Up to 6 hours (80 Wh)",
            weight: "2.4 kg"
        },
        scores: {
            performance: 8.2,
            portability: 3.5,
            battery: 5,
            display: 8,
            build: 8.5
        },
        useCases: ["gaming", "creator", "coding"],
        keywords: ["legion", "high tgp", "rtx 3060", "gamers", "3d modeling", "unreal engine", "autocad", "coding gaming", "premium gaming", "keyboard legion"]
    },
    {
        id: "microsoft-surface-laptop-5",
        name: "Microsoft Surface Laptop 5",
        brand: "Microsoft",
        image: "laptop_surface_5",
        prices: {
            amazon: 105990,
            flipkart: 104990,
            croma: 107990,
            reliance: 106490
        },
        specs: {
            cpu: "Intel Core i5-1235U (10 Cores)",
            gpu: "Intel Iris Xe Graphics",
            ram: "8GB LPDDR5x RAM",
            storage: "512GB SSD",
            display: "13.5\" PixelSense (2256x1504) Touch Screen",
            battery: "Up to 15 hours",
            weight: "1.27 kg"
        },
        scores: {
            performance: 6,
            portability: 9.5,
            battery: 9,
            display: 8,
            build: 9
        },
        useCases: ["office", "travel", "everyday"],
        keywords: ["surface", "microsoft", "touchscreen", "stylus", "executive", "meeting", "thin", "light", "premium windows", "battery"]
    },
    {
        id: "lenovo-yoga-slim-7x",
        name: "Lenovo Yoga Slim 7x",
        brand: "Lenovo",
        image: "laptop_lenovo_yoga",
        prices: {
            amazon: 112990,
            flipkart: 110990,
            croma: 114990,
            reliance: 113490
        },
        specs: {
            cpu: "Snapdragon X Elite X1E-78-100 (12 Cores)",
            gpu: "Qualcomm Adreno GPU",
            ram: "16GB LPDDR5X RAM",
            storage: "512GB NVMe PCIe Gen4 SSD",
            display: "14.5\" 3K (2944x1840) OLED 90Hz Touch 100% sRGB/P3",
            battery: "Up to 22 hours (70 Wh)",
            weight: "1.28 kg"
        },
        scores: {
            performance: 8.5,
            portability: 9.5,
            battery: 10,
            display: 9.5,
            build: 8.5
        },
        useCases: ["office", "coding", "travel"],
        keywords: ["snapdragon", "arm", "copilot+", "copilot plus", "extreme battery", "battery beast", "oled touch", "silent windows", "writer", "executive", "python coding"]
    },
    {
        id: "hp-omen-16",
        name: "HP Omen 16",
        brand: "HP",
        image: "laptop_hp_omen",
        prices: {
            amazon: 123990,
            flipkart: 121990,
            croma: 124990,
            reliance: 122490
        },
        specs: {
            cpu: "Intel Core i7-13700HX (16 Cores)",
            gpu: "NVIDIA GeForce RTX 4060 (8GB VRAM)",
            ram: "16GB DDR5 RAM",
            storage: "1TB PCIe Gen4 NVMe SSD",
            display: "16.1\" QHD (2560x1440) 165Hz IPS 100% sRGB",
            battery: "Up to 5.5 hours (83 Wh)",
            weight: "2.35 kg"
        },
        scores: {
            performance: 8.8,
            portability: 3.5,
            battery: 4.5,
            display: 8,
            build: 8
        },
        useCases: ["gaming", "creator", "coding"],
        keywords: ["gaming", "omen", "rtx 4060", "high performance", "video editing", "render 4k", "machine learning", "deep learning", "ai coding", "coding gaming"]
    },
    {
        id: "framework-13",
        name: "Framework Laptop 13",
        brand: "Framework",
        image: "laptop_framework",
        prices: {
            amazon: 118990,
            flipkart: 117990,
            croma: 119990,
            reliance: 119490
        },
        specs: {
            cpu: "Intel Core Ultra 5 125H (14 Cores)",
            gpu: "Intel Arc Graphics",
            ram: "16GB DDR5 RAM (Modular)",
            storage: "512GB M.2 SSD (Modular)",
            display: "13.5\" (2256x1504) 3:2 Ratio 120Hz",
            battery: "Up to 11 hours (61 Wh)",
            weight: "1.3 kg"
        },
        scores: {
            performance: 7.8,
            portability: 9,
            battery: 8,
            display: 8,
            build: 8
        },
        useCases: ["coding", "college", "office"],
        keywords: ["modular", "repairable", "ports", "developer", "linux", "tinker", "coding linux", "customizable", "framework", "sustainable"]
    },
    {
        id: "samsung-galaxy-book4-pro",
        name: "Samsung Galaxy Book4 Pro",
        brand: "Samsung",
        image: "laptop_samsung_book",
        prices: {
            amazon: 126990,
            flipkart: 124990,
            croma: 128990,
            reliance: 127490
        },
        specs: {
            cpu: "Intel Core Ultra 7 155H (16 Cores)",
            gpu: "Intel Arc Graphics",
            ram: "16GB LPDDR5X RAM",
            storage: "512GB NVMe SSD",
            display: "14\" 3K (2880x1800) AMOLED Touch 120Hz",
            battery: "Up to 14 hours (63 Wh)",
            weight: "1.23 kg"
        },
        scores: {
            performance: 8,
            portability: 9.5,
            battery: 8.5,
            display: 9.5,
            build: 9
        },
        useCases: ["office", "college", "travel", "creator"],
        keywords: ["galaxy", "samsung eco", "thin", "ultra light", "amoled", "touchscreen", "drawing", "traveling coding", "office premium"]
    },
    {
        id: "macbook-air-m3",
        name: "Apple MacBook Air M3 (16GB)",
        brand: "Apple",
        image: "laptop_macbook_air_m3",
        prices: {
            amazon: 129900,
            flipkart: 127900,
            croma: 131900,
            reliance: 129900
        },
        specs: {
            cpu: "Apple M3 Chip (8-Core CPU)",
            gpu: "10-Core GPU",
            ram: "16GB Unified Memory",
            storage: "512GB SSD",
            display: "13.6\" Liquid Retina (2560x1664) 500 nits",
            battery: "Up to 18 hours",
            weight: "1.24 kg"
        },
        scores: {
            performance: 8.2,
            portability: 10,
            battery: 10,
            display: 8,
            build: 9
        },
        useCases: ["coding", "college", "travel", "office"],
        keywords: ["macbook m3", "apple coding", "swift compiler", "ios build", "xcode", "programming mac", "16gb ram", "silent coding", "best battery", "macbook air 16gb", "macos"]
    },
    {
        id: "dell-xps-13",
        name: "Dell XPS 13 (2024)",
        brand: "Dell",
        image: "laptop_dell_xps_13",
        prices: {
            amazon: 138990,
            flipkart: 139990,
            croma: 136990,
            reliance: 137490
        },
        specs: {
            cpu: "Intel Core Ultra 7 155H (16 Cores)",
            gpu: "Intel Arc Graphics",
            ram: "16GB LPDDR5X RAM",
            storage: "512GB PCIe NVMe SSD",
            display: "13.4\" FHD+ (1920x1200) InfinityEdge 500 nits",
            battery: "Up to 13 hours",
            weight: "1.19 kg"
        },
        scores: {
            performance: 8,
            portability: 10,
            battery: 8.5,
            display: 8.5,
            build: 9.5
        },
        useCases: ["office", "travel", "coding"],
        keywords: ["xps", "dell premium", "borderless", "carbon fiber", "executive", "compact", "very light", "windows air", "coding travel"]
    },
    {
        id: "asus-rog-zephyrus-g14",
        name: "ASUS ROG Zephyrus G14 (OLED)",
        brand: "ASUS",
        image: "laptop_asus_rog_g14",
        prices: {
            amazon: 147990,
            flipkart: 145990,
            croma: 149990,
            reliance: 148490
        },
        specs: {
            cpu: "AMD Ryzen 7 8845HS (8 Cores)",
            gpu: "NVIDIA GeForce RTX 4060 (8GB VRAM)",
            ram: "16GB LPDDR5X RAM",
            storage: "1TB PCIe Gen4 SSD",
            display: "14\" 3K (2880x1800) OLED 120Hz ROG Nebula",
            battery: "Up to 8.5 hours (73 Wh)",
            weight: "1.5 kg"
        },
        scores: {
            performance: 9,
            portability: 8.5,
            battery: 7,
            display: 9.8,
            build: 9.2
        },
        useCases: ["gaming", "creator", "coding"],
        keywords: ["zephyrus", "g14", "oled gaming", "light gaming", "video editor", "3d animation", "machine learning", "rtx 4060 oled", "best creator", "all-rounder", "portable power"]
    },
    {
        id: "lenovo-thinkpad-x1-carbon",
        name: "Lenovo ThinkPad X1 Carbon Gen 11",
        brand: "Lenovo",
        image: "laptop_thinkpad_x1",
        prices: {
            amazon: 187900,
            flipkart: 185900,
            croma: 189990,
            reliance: 188490
        },
        specs: {
            cpu: "Intel Core i7-1355U (10 Cores)",
            gpu: "Intel Iris Xe Graphics",
            ram: "16GB LPDDR5 RAM",
            storage: "1TB PCIe Gen4 SSD",
            display: "14\" WUXGA (1920x1200) IPS Low Power 400 nits",
            battery: "Up to 14 hours (57 Wh)",
            weight: "1.12 kg"
        },
        scores: {
            performance: 7.8,
            portability: 10,
            battery: 9,
            display: 7.5,
            build: 10
        },
        useCases: ["office", "coding", "travel"],
        keywords: ["thinkpad", "x1 carbon", "keyboard champion", "coding business", "linux compatibility", "durable", "executive work", "it manager", "security"]
    },
    {
        id: "apple-macbook-pro-14",
        name: "Apple MacBook Pro 14 (M3 Pro)",
        brand: "Apple",
        image: "laptop_macbook_pro_14",
        prices: {
            amazon: 194900,
            flipkart: 191900,
            croma: 196900,
            reliance: 193900
        },
        specs: {
            cpu: "Apple M3 Pro Chip (11-Core CPU)",
            gpu: "14-Core GPU",
            ram: "18GB Unified Memory",
            storage: "512GB SSD",
            display: "14.2\" Liquid Retina XDR (3024x1964) 120Hz ProMotion",
            battery: "Up to 18 hours",
            weight: "1.61 kg"
        },
        scores: {
            performance: 9.2,
            portability: 8,
            battery: 10,
            display: 10,
            build: 9.8
        },
        useCases: ["coding", "creator"],
        keywords: ["macbook pro 14", "m3 pro", "heavy coding", "ios app dev", "xcode compile", "4k editing", "sound engineering", "docker containers", "virtual machines", "hdr editing"]
    },
    {
        id: "razer-blade-14",
        name: "Razer Blade 14 (RTX 4070)",
        brand: "Razer",
        image: "laptop_razer_blade_14",
        prices: {
            amazon: 247990,
            flipkart: 245990,
            croma: 249990,
            reliance: 248490
        },
        specs: {
            cpu: "AMD Ryzen 9 7940HS (8 Cores)",
            gpu: "NVIDIA GeForce RTX 4070 (8GB VRAM, 140W)",
            ram: "16GB DDR5 RAM",
            storage: "1TB PCIe Gen4 SSD",
            display: "14\" QHD+ (2560x1600) 240Hz sRGB 100%",
            battery: "Up to 7 hours (68.1 Wh)",
            weight: "1.84 kg"
        },
        scores: {
            performance: 9.5,
            portability: 7.5,
            battery: 6.5,
            display: 9,
            build: 9.8
        },
        useCases: ["gaming", "creator"],
        keywords: ["razer", "blade", "rtx 4070", "macbook of windows", "metal chassis", "high-end gamer", "lan party", "3d render", "heavy gpu"]
    },
    {
        id: "apple-macbook-pro-16",
        name: "Apple MacBook Pro 16 (M3 Max)",
        brand: "Apple",
        image: "laptop_macbook_pro_16",
        prices: {
            amazon: 339900,
            flipkart: 335900,
            croma: 342900,
            reliance: 341900
        },
        specs: {
            cpu: "Apple M3 Max Chip (14-Core CPU)",
            gpu: "30-Core GPU",
            ram: "36GB Unified Memory",
            storage: "1TB SSD",
            display: "16.2\" Liquid Retina XDR (3456x2234) 120Hz ProMotion",
            battery: "Up to 22 hours",
            weight: "2.14 kg"
        },
        scores: {
            performance: 10,
            portability: 6,
            battery: 10,
            display: 10,
            build: 10
        },
        useCases: ["coding", "creator"],
        keywords: ["macbook pro 16", "m3 max", "heavy machine learning", "ai model compile", "red digital video", "professional video editing", "sound production", "enterprise coding", "docker clusters", "extreme performance"]
    }
];
// Helper: Format price as INR
function formatINR(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount);
}
// Function to find the lowest price in the prices object
function getLowestPriceInfo(prices) {
    let minPrice = Infinity;
    let minMerchant = "";
    
    for (const [merchant, price] of Object.entries(prices)) {
        if (price < minPrice) {
            minPrice = price;
            minMerchant = merchant;
        }
    }
    
    return {
        price: minPrice,
        merchant: minMerchant,
        merchantLabel: merchantLabels[minMerchant] || minMerchant
    };
}
const merchantLabels = {
    amazon: "Amazon.in",
    flipkart: "Flipkart",
    croma: "Croma",
    reliance: "Reliance Digital"
};
// Generate simulated price trend graph coordinates
function generatePriceHistory(basePrice) {
    const points = [];
    const now = new Date();
    const monthLabels = [];
    
    for (let i = 5; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        monthLabels.push(d.toLocaleString('default', { month: 'short' }));
    }
    
    // Create random fluctuation (up to 8% higher in past months, showing price drops)
    const seed = basePrice * 0.08;
    points.push(basePrice + Math.round(seed * 0.9));
    points.push(basePrice + Math.round(seed * 1.2));
    points.push(basePrice - Math.round(seed * 0.3)); // Sale dip
    points.push(basePrice + Math.round(seed * 0.7));
    points.push(basePrice + Math.round(seed * 0.2));
    points.push(basePrice); // Current lowest price
    
    return {
        labels: monthLabels,
        prices: points,
        min: Math.min(...points),
        max: Math.max(...points)
    };
}
// Scoring Engine Algorithm
function evaluateRecommendations(filters) {
    const { budget, useCase, priorities, osPref, sizePref, brandPref } = filters;
    
    const results = laptopCatalog.map(laptop => {
        const lowestInfo = getLowestPriceInfo(laptop.prices);
        const price = lowestInfo.price;
        
        let score = 0;
        const deductions = [];
        const bonuses = [];
        
        // 1. Budget Scopes
        if (price > budget * 1.15) {
            // Out of budget range by more than 15%, filter out
            return null;
        }
        
        // Moderate budget fit
        if (price > budget) {
            const overage = ((price - budget) / budget) * 100;
            score -= overage * 1.5; // Small penalty for going slightly over budget
            deductions.push(`Exceeds preferred budget by ${formatINR(price - budget)}`);
        } else {
            // Fits within budget
            if (price < budget * 0.5) {
                // If it is too far under budget, we apply a small penalty unless their use case is basic everyday tasks
                if (useCase !== "everyday") {
                    score -= 5;
                    deductions.push("Spec level is likely below your expectations for this budget.");
                } else {
                    bonuses.push("Saves you substantial money while fulfilling everyday needs.");
                }
            } else {
                bonuses.push("Excellent fit within your specified budget.");
            }
        }
        
        // 2. Use Case Matching
        let useCaseMatch = false;
        if (laptop.useCases.includes(useCase)) {
            score += 25; // Massive boost for matching category
            useCaseMatch = true;
            bonuses.push(`Engineered specifically for ${useCase === 'everyday' ? 'everyday school/school' : useCase} workloads.`);
        }
        
        // Special use case logic
        if (useCase === "gaming") {
            if (laptop.scores.performance >= 8) {
                score += 15;
                bonuses.push("Powerful CPU and high thermal headroom for intensive gaming.");
            } else if (laptop.scores.performance < 6) {
                score -= 30; // Deduct severely if trying to game on standard integrated graphics
                deductions.push("Lacks a dedicated graphics processor needed for smooth gameplay.");
            }
        } else if (useCase === "coding") {
            if (laptop.scores.performance >= 7.5) {
                score += 12;
                bonuses.push("High multi-threaded CPU speeds for compiling code and running servers.");
            }
            if (laptop.specs.ram.includes("16GB") || laptop.specs.ram.includes("18GB") || laptop.specs.ram.includes("32GB") || laptop.specs.ram.includes("36GB")) {
                score += 10;
                bonuses.push("Generous 16GB+ RAM ensures multitasking and smooth IDE compilation.");
            } else {
                score -= 8;
                deductions.push("8GB RAM might feel constrained during heavy programming or running VMs.");
            }
        } else if (useCase === "creator") {
            if (laptop.scores.display >= 8.5) {
                score += 15;
                bonuses.push("High color-accuracy wide-gamut display (OLED/Retina) ideal for editing.");
            }
            if (laptop.scores.performance >= 8) {
                score += 10;
                bonuses.push("Dedicated GPU or Apple Silicon hardware media engine helps render video fast.");
            }
        }
        
        // 3. Priorities Weighted Sum
        let priorityScore = 0;
        let totalWeights = 0;
        
        for (const [key, weight] of Object.entries(priorities)) {
            const laptopValue = laptop.scores[key] || 5;
            priorityScore += laptopValue * weight;
            totalWeights += weight;
            
            if (weight >= 4 && laptopValue >= 9) {
                bonuses.push(`Top-tier ${key} rating matches your high priority.`);
            } else if (weight >= 4 && laptopValue < 6) {
                score -= 15;
                deductions.push(`Sub-par ${key} score conflicts with your priority checklist.`);
            }
        }
        
        const priorityAverage = (priorityScore / totalWeights) * 10;
        score += priorityAverage;
        
        // 4. Preferences (Filters/Boosts)
        if (osPref !== "no-pref") {
            const laptopOS = laptop.brand === "Apple" ? "macos" : "windows";
            if (laptopOS === osPref) {
                score += 10;
                bonuses.push(`Matches your preference for ${osPref === 'macos' ? 'macOS' : 'Windows'}.`);
            } else {
                score -= 20; // Heavy penalty if they strictly prefer something else
                deductions.push(`Runs ${laptopOS === 'macos' ? 'macOS' : 'Windows'} instead of your preferred OS.`);
            }
        }
        
        if (sizePref !== "no-pref") {
            const specsText = laptop.specs.display;
            let currentSizeCategory = "";
            if (specsText.includes("13.") || specsText.includes("13-inch")) currentSizeCategory = "small";
            else if (specsText.includes("14.") || specsText.includes("14-inch")) currentSizeCategory = "mid-small";
            else if (specsText.includes("15.") || specsText.includes("16.") || specsText.includes("15-inch") || specsText.includes("16-inch")) currentSizeCategory = "medium";
            else currentSizeCategory = "large";
            
            if (currentSizeCategory === sizePref) {
                score += 5;
            } else {
                score -= 8;
                deductions.push(`Form factor screen size falls outside your target.`);
            }
        }
        
        if (brandPref !== "no-pref" && laptop.brand.toLowerCase() === brandPref.toLowerCase()) {
            score += 8;
            bonuses.push(`Made by your preferred brand: ${laptop.brand}`);
        }
        
        let finalMatchPercentage = Math.round(50 + (score / 170) * 50);
        if (finalMatchPercentage > 99) finalMatchPercentage = 99;
        if (finalMatchPercentage < 30) finalMatchPercentage = 30;
        
        return {
            laptop,
            matchPercentage: finalMatchPercentage,
            bonuses: [...new Set(bonuses)],
            deductions: [...new Set(deductions)],
            lowestPriceInfo: lowestInfo
        };
    }).filter(item => item !== null);
    
    results.sort((a, b) => {
        if (b.matchPercentage !== a.matchPercentage) {
            return b.matchPercentage - a.matchPercentage;
        }
        return a.lowestPriceInfo.price - b.lowestPriceInfo.price;
    });
    
    return results;
}
// Natural Language / Query matching parser
function getLaptopByUsefulQuery(queryText) {
    if (!queryText || queryText.trim() === "") return null;
    
    const query = queryText.toLowerCase().trim();
    
    const scoredLaptops = laptopCatalog.map(laptop => {
        let matchCount = 0;
        const matchedKeywords = [];
        
        laptop.keywords.forEach(keyword => {
            if (query.includes(keyword)) {
                matchCount += 1.5;
                matchedKeywords.push(keyword);
            }
        });
        
        if ((query.includes("compile") || query.includes("coder") || query.includes("developer") || query.includes("coding") || query.includes("programming") || query.includes("python") || query.includes("java") || query.includes("c++") || query.includes("ml") || query.includes("machine learning") || query.includes("ai")) && 
            (laptop.id.includes("macbook") || laptop.id.includes("thinkpad") || laptop.id.includes("swift") || laptop.id.includes("framework") || laptop.id.includes("yoga") || laptop.id.includes("redmibook") || laptop.id.includes("omen") || laptop.id.includes("zephyrus"))) {
            matchCount += 3;
        }
        
        if ((query.includes("gaming") || query.includes("game") || query.includes("cyberpunk") || query.includes("gta") || query.includes("valorant") || query.includes("gpu") || query.includes("play")) && 
            (laptop.id.includes("gaming") || laptop.id.includes("cyborg") || laptop.id.includes("legion") || laptop.id.includes("omen") || laptop.id.includes("blade") || laptop.id.includes("zephyrus") || laptop.id.includes("victus") || laptop.id.includes("tuf") || laptop.id.includes("g15"))) {
            matchCount += 5;
        }
        
        if ((query.includes("video") || query.includes("photoshop") || query.includes("render") || query.includes("editor") || query.includes("color") || query.includes("editing") || query.includes("design") || query.includes("graphics")) && 
            (laptop.specs.display.includes("OLED") || laptop.specs.display.includes("Retina") || laptop.scores.display >= 9 || laptop.id.includes("zephyrus") || laptop.id.includes("creator") || laptop.id.includes("macbook-pro"))) {
            matchCount += 3;
        }
        
        if ((query.includes("travel") || query.includes("battery") || query.includes("flight") || query.includes("long") || query.includes("light") || query.includes("thin") || query.includes("portability")) && 
            (laptop.scores.battery >= 9 || laptop.scores.portability >= 9 || laptop.id.includes("air") || laptop.id.includes("xps") || laptop.id.includes("yoga"))) {
            matchCount += 4;
        }
        if ((query.includes("cheap") || query.includes("budget") || query.includes("less") || query.includes("lowest") || query.includes("student") || query.includes("school") || query.includes("college")) && 
            (laptop.prices.amazon < 40000 || laptop.prices.amazon < 60000)) {
            matchCount += 3;
        }
        
        return {
            laptop,
            matchCount,
            matchedKeywords
        };
    });
    
    const validMatches = scoredLaptops.filter(item => item.matchCount > 0);
    
    if (validMatches.length === 0) {
        // Fallback: Return a solid mid-range creator laptop
        return {
            laptop: laptopCatalog.find(l => l.id === "asus-rog-zephyrus-g14") || laptopCatalog.find(l => l.id === "acer-swift-go-14") || laptopCatalog[0],
            matchedKeywords: ["all-rounder"],
            isFallback: true
        };
    }
    
    validMatches.sort((a, b) => {
        if (b.matchCount !== a.matchCount) {
            return b.matchCount - a.matchCount;
        }
        return a.laptop.prices.amazon - b.laptop.prices.amazon;
    });
    
    return {
        laptop: validMatches[0].laptop,
        matchedKeywords: validMatches[0].matchedKeywords,
        isFallback: false
    };
}