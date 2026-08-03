export interface Product {
  id: string;
  model: string;
  name: string;
  category: string;
  description: string;
  loadCapacity?: string;
  sizes?: string[];
  features: string[];
  applications: string[];
  image: string;
  isPopular?: boolean;
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  itemCount: number;
}

export const COMPANY_INFO = {
  name: "JIYA Sales & Services",
  shortName: "JIYA Industrial",
  tagline: "Sales & Manufacturing of Material Handling Equipments & Industrial Spares",
  proprietor: "Shah Ajay Kumar",
  phone: "+91 99094 68007",
  phoneClean: "919909468007",
  email: "jiyasalesservices@gmail.com",
  gstin: "24DAIPS6965R1ZJ",
  address: "Shop No. 26, Plot No. 147, Nirmal Shopping Center, Near Tulshi Hotel, 2nd Phase, GIDC, Vapi - 396195, Gujarat, India",
  city: "Vapi",
  state: "Gujarat",
  pincode: "396195",
  whatsappMsg: "Hello JIYA Sales & Services, I am interested in getting a quote for industrial material handling equipment / spares.",
  devotionTitles: ["II Shree Paras Nath Namah II", "II Shree Ganeshay Namah II", "II Shree Sidheshwari Namah II"],
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "material-handling",
    title: "Material Handling Equipments",
    description: "Hand Pallet Trucks (550mm/685mm, SS 304, Weighing, Scissor), Hydraulic Stackers (Manual, Semi/Fully Electric), Reel Stackers & Scissor Tables.",
    image: "/images/products/hpt_yellow_550_clean.png",
    itemCount: 16
  },
  {
    id: "pallet-truck-parts",
    title: "Hydraulic Hand Pallet Truck Parts",
    description: "Complete spare parts for 2.5T/3T/5T pallet trucks: Jack Pumps, Handles, Oil Seal Kits, Shafts, Release Valves, Pistons, Arms, Brackets & Wheels (Items 1-40).",
    image: "/images/products/17.jpeg",
    itemCount: 40
  },
  {
    id: "electric-stacker-parts",
    title: "Fully Electric Stacker Spare Parts",
    description: "OEM electronic components & drive spares for electric stackers: Curtis Controllers, Electronic Throttles, EM Brakes, Encoders, DC Contactors & Battery Connectors.",
    image: "/images/products/hydraulic_stacker_yellow.png",
    itemCount: 12
  },
  {
    id: "forklift-parts",
    title: "Forklift Spare Parts & Safety Accessories",
    description: "Forklift safety equipment & replacement parts: Biometric Access Control, Strobe Beacons, Red/Blue Safety Spotlights, Wireless Fork Cameras, Solid Tires & Fork Tines.",
    image: "/images/products/hpt_yellow_550_clean.png",
    itemCount: 14
  },
  {
    id: "trolleys-cranes",
    title: "Platform Trolleys, Cranes & Storage",
    description: "Goods Mesh Trolleys, MS & SS Platform Trolleys, Hydraulic Floor Cranes, Dock Levelers, Stair Climbing Carts & Storage Bins.",
    image: "/images/products/ms_platform_trolley_blue.png",
    itemCount: 16
  },
  {
    id: "caster-wheels",
    title: "All Types of Industrial Caster Wheels",
    description: "4mm & 3mm PU Casters, Fabricated Forged Steel Casters, Medical & Chair Casters, Scaffolding, Spring Loaded & SS 304 Casters.",
    image: "/images/products/pu_caster_wheel_red.png",
    itemCount: 32
  },
  {
    id: "industrial-wheels-spares",
    title: "Industrial Wheels & OEM Spare Parts",
    description: "Red & White PU Pallet Truck Load Rollers, CI PU Bonded Wheels, UHMW Solid Block Wheels, Stacker Drive Wheels & Cast Iron Wheels.",
    image: "/images/products/29.jpeg",
    itemCount: 16
  }
];

export const PRODUCTS: Product[] = [
  // ==========================================
  // SHEET 1: MATERIAL HANDLING EQUIPMENTS
  // ==========================================
  {
    id: "mh-jss-1",
    model: "JSS-1",
    name: "Hand Pallet Truck-550",
    category: "material-handling",
    description: "Standard industrial 550mm width hand pallet truck with leak-proof hydraulic pump, reinforced steel fork frame, and tandem PU load wheels.",
    loadCapacity: "2500 kg - 3000 kg",
    sizes: ["550mm x 1150mm"],
    features: ["Heavy Duty Steel Frame", "Leak-proof Monoblock Pump", "Tandem PU / Nylon Wheels", "Overload Relief Valve"],
    applications: ["Warehouses", "Factories", "Logistics Hubs", "Loading Bays"],
    image: "/images/products/16.jpeg",
    isPopular: true
  },
  {
    id: "mh-jss-2",
    model: "JSS-2",
    name: "Hand Pallet Truck-685 (Wide Fork)",
    category: "material-handling",
    description: "Wide width 685mm hand pallet truck engineered for wide EURO pallets, broad machinery platforms, and export containers.",
    loadCapacity: "2500 kg - 3500 kg",
    sizes: ["685mm x 1220mm"],
    features: ["Wide Span Forks", "Ergonomic Rubber Handle", "Precision Sealed Bearings", "Powder Coated Finish"],
    applications: ["Pharma Plants", "Export Packaging", "Textile Mills", "Chemical Plants"],
    image: "/images/products/15.jpeg",
    isPopular: true
  },
  {
    id: "mh-jss-3",
    model: "JSS-3",
    name: "Weighing Scale Hand Pallet Truck",
    category: "material-handling",
    description: "Precision digital weighing scale hand pallet truck for real-time weight checks during material movement.",
    loadCapacity: "2000 kg",
    sizes: ["550mm / 685mm Width"],
    features: ["Digital LCD Indicator Display", "Tare & Zero Weight Buttons", "High Precision Load Cells", "Rechargeable Battery"],
    applications: ["Dispatch Depots", "Freight Forwarding", "Raw Material Inward"],
    image: "/images/products/14.jpeg"
  },
  {
    id: "mh-jss-4",
    model: "JSS-4",
    name: "SS Hand Pallet Truck (Grade 304)",
    category: "material-handling",
    description: "100% Grade 304 Stainless Steel hand pallet truck designed for cleanroom, pharmaceutical, chemical, and food plant environments.",
    loadCapacity: "2000 kg",
    sizes: ["550mm x 1150mm", "685mm x 1220mm"],
    features: ["Full SS 304 Frame & Pump", "Corrosion Resistant", "Washdown Safe", "Hygienic Nylon Wheels"],
    applications: ["Pharma Cleanrooms", "Food & Beverage", "Chemical Processing"],
    image: "/images/products/13.jpeg",
    isPopular: true
  },
  {
    id: "mh-jss-5",
    model: "JSS-5",
    name: "Scissor Lift Hand Pallet Truck",
    category: "material-handling",
    description: "Dual-purpose pallet truck and height-adjustable ergonomic assembly workstation table up to 800mm lift height.",
    loadCapacity: "1000 kg - 1500 kg",
    sizes: ["Max Lift: 800mm"],
    features: ["Automatic Rear Lock Stabilisers", "Dual Cylinder Lift Pump", "Ergonomic Workstation Height"],
    applications: ["Assembly Lines", "Sorting Stations", "Packaging Bay"],
    image: "/images/products/12.jpeg"
  },
  {
    id: "mh-jss-6",
    model: "JSS-6",
    name: "Battery Operated Hand Pallet Truck",
    category: "material-handling",
    description: "Motorized electric drive pallet truck eliminating manual pushing fatigue for long-distance horizontal transfers.",
    loadCapacity: "1500 kg - 2000 kg",
    sizes: ["Compact Chassis"],
    features: ["Lithium / Lead-Acid Battery", "Creep Speed Control", "Electromagnetic Emergency Brake"],
    applications: ["Distribution Centers", "Logistics Hubs", "Multi-shift Warehouses"],
    image: "/images/products/11.jpeg"
  },
  {
    id: "mh-jss-7",
    model: "JSS-7",
    name: "Manual Stacker",
    category: "material-handling",
    description: "Manual hydraulic hand & foot pump stacker with C-channel steel mast for vertical pallet stacking and truck loading.",
    loadCapacity: "1000 kg - 2000 kg",
    sizes: ["Lift Height: 1.6m", "2.0m", "3.0m"],
    features: ["High Tensile C-Channel Mast", "Foot Brake Wheel Lock", "Adjustable Tine Width"],
    applications: ["Warehouse Racking", "Truck Loading", "Small Plants"],
    image: "/images/products/10.jpeg",
    isPopular: true
  },
  {
    id: "mh-jss-8",
    model: "JSS-8",
    name: "Semi Electric Stacker",
    category: "material-handling",
    description: "Electric hydraulic motor lifting stacker with manual travel steering for fast vertical stacking with minimal effort.",
    loadCapacity: "1500 kg",
    sizes: ["Lift Height: 1.6m - 3.5m"],
    features: ["Heavy Duty Electric Lift Motor", "Built-in Battery Charger", "Key Control Switch"],
    applications: ["Racking Warehouses", "Manufacturing Plants"],
    image: "/images/products/9.jpeg"
  },
  {
    id: "mh-jss-9",
    model: "JSS-9",
    name: "Fully Electric Stacker",
    category: "material-handling",
    description: "Fully motorized electric drive and lift walkie stacker equipped with Curtis speed controller and ergonomic tiller arm.",
    loadCapacity: "1500 kg - 2000 kg",
    sizes: ["Lift Height: up to 4.5m"],
    features: ["Curtis AC Drive System", "Proportional Lifting Control", "Turtle Speed Mode"],
    applications: ["High Density Warehouses", "Automotive Plants"],
    image: "/images/products/8.jpeg"
  },
  {
    id: "mh-jss-10",
    model: "JSS-10",
    name: "Reel Stacker",
    category: "material-handling",
    description: "Specialized hydraulic stacker engineered with V-shape / cylindrical prongs for lifting paper rolls, textile beams & cable reels.",
    loadCapacity: "1000 kg",
    sizes: ["Lift Height: 1.6m - 2.5m"],
    features: ["V-Cradle Roll Attachment", "Hydraulic Lift Pump", "Safety Load Guard"],
    applications: ["Paper Mills", "Textile & Fabric Units", "Cable Manufacturers"],
    image: "/images/products/7.jpeg"
  },
  {
    id: "mh-jss-11",
    model: "JSS-11",
    name: "Drum Lifter & Tilter Stacker",
    category: "material-handling",
    description: "Hydraulic drum lifter with 360-degree worm gear tilter box for lifting, transporting, and controlled liquid pouring of 210L drums.",
    loadCapacity: "350 kg - 500 kg",
    sizes: ["Fits Standard 210L Steel & Plastic Drums"],
    features: ["360° Worm Gear Rotation", "Automatic Rim Clamp", "Hydraulic Foot Pump"],
    applications: ["Chemical Plants", "Pharma Dosing", "Paint Batching"],
    image: "/images/products/6.jpeg",
    isPopular: true
  },
  {
    id: "mh-js-12",
    model: "JSS-12",
    name: "Box Trolley",
    category: "material-handling",
    description: "Heavy duty 2-wheel upright hand box trolley for moving cardboard cartons, crates, and sacks.",
    loadCapacity: "300 kg - 500 kg",
    sizes: ["Standard Upright Frame"],
    features: ["Solid Rubber / Pneumatic Wheels", "Tubular Steel Frame", "Toe Plate Floor Guard"],
    applications: ["Logistics Stores", "FMCG Depots", "Parcel Hubs"],
    image: "/images/products/5.jpeg"
  },
  {
    id: "mh-jss-9-dt",
    model: "JSS-13",
    name: "Drum Trolley",
    category: "material-handling",
    description: "Heavy duty 2-wheel & 4-wheel drum transport trolley with rim latch hook for easy tilting of metal/plastic 200L barrels.",
    loadCapacity: "300 kg - 500 kg",
    sizes: ["Fits 210L / 55 Gallon Drums"],
    features: ["Safety Rim Hold Hook", "Auxiliary Rear Swivel Wheels", "Powder Coated Frame"],
    applications: ["Oil Refineries", "Chemical Warehouses", "Distilleries"],
    image: "/images/products/4.jpeg"
  },
  {
    id: "mh-jss-10-daf",
    model: "JSS-14",
    name: "Drum Attachment Forklift",
    category: "material-handling",
    description: "Automatic mechanical beak-jaw drum grabber slip-on attachment for forklifts to lift single or dual drums.",
    loadCapacity: "500 kg - 1000 kg",
    sizes: ["Single / Dual Drum Attachment"],
    features: ["Automatic Beak Grip", "Fits Standard Fork Tines", "Safety Securing Chain"],
    applications: ["Bulk Chemical Loading", "Container Export Handling"],
    image: "/images/products/3.jpeg"
  },
  {
    id: "mh-jss-11-lt",
    model: "JSS-15",
    name: "Lifting Table",
    category: "material-handling",
    description: "Mobile hydraulic scissor lift work table with foot pump mechanism and lockable swivel caster wheels.",
    loadCapacity: "300 kg - 1000 kg",
    sizes: ["Lift Height: 900mm - 1300mm"],
    features: ["Foot Hydraulic Pump", "Overload Protection Valve", "Locking Swivel Casters"],
    applications: ["Die & Mold Loading", "Assembly Line Feed", "Machine Shops"],
    image: "/images/products/2.jpeg"
  },
  {
    id: "mh-jss-12-st",
    model: "JSS-16",
    name: "Scissor Table",
    category: "material-handling",
    description: "Heavy duty stationary hydraulic scissor lift table for heavy machinery positioning and factory floor material transfer.",
    loadCapacity: "500 kg - 2000 kg",
    sizes: ["Custom Table Top Platform"],
    features: ["Dual Scissors Mechanism", "Heavy Steel Frame", "Safety Clearance Bumper"],
    applications: ["Factory Production Lines", "Heavy Metal Assembly"],
    image: "/images/products/1.jpeg"
  },

  // ==========================================
  // SHEET 2: PLATFORM TROLLEYS, CRANES & STORAGE
  // ==========================================
  {
    id: "tc-jss-1",
    model: "JSS-1",
    name: "Goods Trolley",
    category: "trolleys-cranes",
    description: "Wire mesh enclosed heavy-duty goods transport trolley with drop-down side gate for secure warehouse inventory movement.",
    loadCapacity: "500 kg - 1000 kg",
    sizes: ["3ft x 2ft", "4ft x 2.5ft"],
    features: ["Wire Mesh Cage Enclosure", "Drop Side Access Gate", "Heavy Duty PU Casters"],
    applications: ["Textile Stores", "Pharma Stockrooms", "Hardware Depots"],
    image: "/images/products/goods_trolley_mesh.png"
  },
  {
    id: "tc-jss-2",
    model: "JSS-2",
    name: "Dram Handler",
    category: "trolleys-cranes",
    description: "Low-profile drum cradle cart with roller wheels for easy horizontal decanting and dispensing of 210L liquid drums.",
    loadCapacity: "300 kg - 500 kg",
    sizes: ["Fits Standard 200 Liter Drums"],
    features: ["Horizontal Decanting Rollers", "Drainage Spout Height", "Heavy Steel Construction"],
    applications: ["Oil Stores", "Chemical Blending", "Paint Stores"],
    image: "/images/products/drum_handler_cart.png"
  },
  {
    id: "tc-jss-3",
    model: "JSS-3",
    name: "Chan Pully Block",
    category: "trolleys-cranes",
    description: "Heavy-duty manual chain pulley block hoist equipped with grade 80 alloy steel load chain and dual pawl brake system.",
    loadCapacity: "1 Ton - 10 Ton",
    sizes: ["Lift Height: 3m - 10m"],
    features: ["Grade 80 Alloy Steel Chain", "Dual Pawl Brake", "Drop Forged Safety Hooks"],
    applications: ["Machinery Erection", "Factory Overhead Lifting", "Shipbuilding"],
    image: "/images/products/chain_pulley_block.png"
  },
  {
    id: "tc-jss-4",
    model: "JSS-4",
    name: "MS Platform Trollry",
    category: "trolleys-cranes",
    description: "Heavy gauge Mild Steel (MS) flat platform cart with tubular push handle and 2 fixed + 2 swivel caster wheels.",
    loadCapacity: "250 kg - 750 kg",
    sizes: ["36\" x 24\"", "48\" x 30\""],
    features: ["Heavy MS Sheet Flat Deck", "Tubular Steel Push Bar", "Smooth Rolling PU Casters"],
    applications: ["Industrial Plants", "Raw Material Movement", "General Stores"],
    image: "/images/products/ms_platform_trolley_blue.png"
  },
  {
    id: "tc-jss-5",
    model: "JSS-5",
    name: "Dram Handling Plllet",
    category: "trolleys-cranes",
    description: "Specialized hydraulic drum lifter & pallet stacker frame designed for lifting and maneuvering heavy 210L liquid drums.",
    loadCapacity: "500 kg - 1500 kg",
    sizes: ["Fits Standard 210L Drums"],
    features: ["Heavy Duty Vertical Mast", "Safety Rim Grabber", "Smooth Rolling PU Casters"],
    applications: ["Chemical Storage", "Hazardous Material Bays", "Pharma Plants"],
    image: "/images/products/drum_handling_pallet.png",
    isPopular: true
  },
  {
    id: "tc-jss-6",
    model: "JSS-6",
    name: "Floor Crain",
    category: "trolleys-cranes",
    description: "Mobile hydraulic workshop floor crane with adjustable 4-position telescopic boom arm and heavy swivel hook.",
    loadCapacity: "1.0 Ton - 2.0 Ton",
    sizes: ["Max Hook Height: 2.2m"],
    features: ["Telescopic Boom Jib Arm", "Hydraulic Ram Pump", "Foldable Leg Design"],
    applications: ["Engine Overhauling", "Die & Mold Loading", "Maintenance Bays"],
    image: "/images/products/floor_crane_yellow.png",
    isPopular: true
  },
  {
    id: "tc-jss-7",
    model: "JSS-7",
    name: "Dock Leveler",
    category: "trolleys-cranes",
    description: "Heavy duty hydraulic dock leveler ramp bridging the gap between warehouse loading docks and truck container beds.",
    loadCapacity: "6.0 Ton - 10.0 Ton",
    sizes: ["Standard Container Dock Dimensions"],
    features: ["High Strength Chequered Plate", "Hydraulic Lip Cylinder", "Toe Guard Protection"],
    applications: ["3PL Logistics Depots", "Export Warehouse Docks"],
    image: "/images/products/dock_leveler_ramp.png"
  },
  {
    id: "tc-jss-8",
    model: "JSS-8",
    name: "Gas Cylinder Trolley",
    category: "trolleys-cranes",
    description: "Heavy duty 2-wheel dual gas cylinder trolley for holding Oxygen and Acetylene / Nitrogen cylinders with securing chain.",
    loadCapacity: "Dual Cylinder Capacity",
    sizes: ["Standard High Pressure Cylinders"],
    features: ["Safety Retaining Chain", "Large Rubber Wheels", "Welded Steel Cradle"],
    applications: ["Welding Shops", "Fabrication Yards", "Maintenance Units"],
    image: "/images/products/gas_cylinder_trolley.png"
  },
  {
    id: "tc-jss-9-ss-hpt",
    model: "JSS-9",
    name: "SS Hand Pallet Truck",
    category: "trolleys-cranes",
    description: "Full Grade 304 Stainless Steel pallet truck built specifically for hygienic, washdown, and corrosive environments.",
    loadCapacity: "2000 kg",
    sizes: ["550mm x 1150mm"],
    features: ["Full SS 304 Construction", "Acid & Alkali Resistant", "Nylon Wheels"],
    applications: ["Pharma Plants", "Food & Beverage"],
    image: "/images/products/ss_hpt_silver.png",
    isPopular: true
  },
  {
    id: "tc-jss-10-ss-sci",
    model: "JSS-10",
    name: "SS Hydraulic Scior",
    category: "trolleys-cranes",
    description: "Stainless Steel SS 304 hydraulic scissor lift table for cleanrooms, chemical dosing, and sterilizer transfer.",
    loadCapacity: "300 kg - 500 kg",
    sizes: ["Lift Height: 900mm"],
    features: ["Full Grade 304 Stainless Steel", "Washdown Pump", "Cleanroom Approved"],
    applications: ["Sterilizer Bays", "Pharma Packaging"],
    image: "/images/products/ss_hydraulic_scissor.png",
    isPopular: true
  },
  {
    id: "tc-jss-11-ss-tb",
    model: "JSS-11",
    name: "SS Tool Box",
    category: "trolleys-cranes",
    description: "Multi-tier cantilever Stainless Steel tool storage box for plant technicians and maintenance mechanics.",
    loadCapacity: "50 kg - 100 kg",
    sizes: ["5-Tray Cantilever Design"],
    features: ["Grade 304 Stainless Steel", "Lockable Latches", "Heavy Carry Handles"],
    applications: ["Plant Maintenance", "Cleanroom Tool Storage"],
    image: "/images/products/ss_tool_box.png"
  },
  {
    id: "tc-jss-12-ss-dt",
    model: "JSS-12",
    name: "SS Dram Trolly",
    category: "trolleys-cranes",
    description: "Grade 304 Stainless Steel 200L drum tilting and transport trolley for pharmaceutical and food grade liquids.",
    loadCapacity: "300 kg",
    sizes: ["Fits Standard 210L Drums"],
    features: ["Full Stainless Steel SS 304", "Hygienic Nylon Wheels", "Rust Proof"],
    applications: ["Pharma Formulations", "Food Liquids"],
    image: "/images/products/ss_drum_trolley.png"
  },
  {
    id: "tc-jss-9-ss-plat",
    model: "JSS-9",
    name: "SS Platfrom Trolley",
    category: "trolleys-cranes",
    description: "Grade 304 Stainless Steel flat platform cart with SS handles and non-marking quiet polyurethane casters.",
    loadCapacity: "300 kg - 500 kg",
    sizes: ["36\" x 24\""],
    features: ["Polished SS 304 Deck", "Smooth Washdown Surface", "Non-Marking Casters"],
    applications: ["Hospital Stores", "Pharma Warehouses"],
    image: "/images/products/ss_platform_trolley.png"
  },
  {
    id: "tc-ss-10-lcb",
    model: "SS-10",
    name: "Lifiting Ceiling Belt",
    category: "trolleys-cranes",
    description: "High-tensile polyester flat webbing sling belt for heavy machinery and overhead crane lifting.",
    loadCapacity: "1 Ton - 10 Ton",
    sizes: ["Length: 2m to 10m"],
    features: ["100% High Tenacity Polyester", "Safety Factor 6:1 / 7:1", "Reinforced Eye Loops"],
    applications: ["Crane Rigging", "Heavy Steel Handling"],
    image: "/images/products/lifting_ceiling_belt.png"
  },
  {
    id: "tc-jss-11-sct",
    model: "JSS-11",
    name: "Stair Camping Trolly",
    category: "trolleys-cranes",
    description: "Specialized 6-wheel stair climbing hand trolley designed to move heavy loads up and down stairs effortlessly.",
    loadCapacity: "200 kg - 300 kg",
    sizes: ["Tri-Wheel Rotation Mechanism"],
    features: ["Tri-Wheel Star Assembly", "Tubular Steel Frame", "Folding Foot Plate"],
    applications: ["Multi-story Deliveries", "Building Maintenance"],
    image: "/images/products/stair_climbing_trolley.png",
    isPopular: true
  },
  {
    id: "tc-jss-12-smb",
    model: "JSS-12",
    name: "Storage Metal Bins",
    category: "trolleys-cranes",
    description: "Stackable wire mesh & solid metal storage container bins for factory parts storage and warehouse logistics.",
    loadCapacity: "500 kg - 1500 kg",
    sizes: ["Standard Pallet Storage Size"],
    features: ["Stackable Interlocking Corners", "Drop Gate Front Access", "Forklift Pocket Base"],
    applications: ["Automotive Parts", "Foundry Scrap", "Warehouse Racks"],
    image: "/images/products/storage_metal_bins.png"
  },

  // ==========================================
  // SHEET 3 & 4: ALL TYPES OF INDUSTRIAL CASTER WHEELS
  // ==========================================
  {
    id: "cw-jss-1-4mm",
    model: "JSS-1",
    name: "4MM PU Caster",
    category: "caster-wheels",
    description: "4mm heavy gauge pressed steel bracket swivel caster fitted with red polyurethane wheel on cast iron core.",
    loadCapacity: "400 kg (4x2) | 600 kg (6x2) | 800 kg (8x2)",
    sizes: ["4\" x 2\"", "6\" x 2\"", "8\" x 2\""],
    features: ["4mm Heavy Steel Plate", "Red PU Tread", "Precision Ball Bearings"],
    applications: ["Factory Trolleys", "Machinery Movers"],
    image: "/images/products/caster_4mm_pu_red.png",
    isPopular: true
  },
  {
    id: "cw-jss-2-fab",
    model: "JSS-2",
    name: "Fabricated Caster",
    category: "caster-wheels",
    description: "Forged steel plate heavy-duty fabricated swivel & fixed caster for extreme shock loads.",
    loadCapacity: "400 kg (4x2) | 600 kg (6x2) | 800 kg (8x2)",
    sizes: ["4\" x 2\"", "6\" x 2\"", "8\" x 2\""],
    features: ["Heavy Welded Steel Yoke", "Cast Iron Core PU", "Tapered Roller Bearings"],
    applications: ["Heavy Assembly Lines", "Die Transportation"],
    image: "/images/products/caster_fabricated.png",
    isPopular: true
  },
  {
    id: "cw-jss-3-3mm",
    model: "JSS-3",
    name: "3MM PU Caster",
    category: "caster-wheels",
    description: "3mm medium-duty zinc passivated pressed steel swivel caster wheel with smooth ball swivel head.",
    loadCapacity: "400 kg (4x2) | 600 kg (6x2) | 800 kg (8x2)",
    sizes: ["4\" x 2\"", "6\" x 2\"", "8\" x 2\""],
    features: ["Zinc Coated Finish", "Double Ball Race", "Oil Resistant PU Tread"],
    applications: ["Warehouse Carts", "Storage Racks"],
    image: "/images/products/caster_3mm_pu_red.png"
  },
  {
    id: "cw-jss-4-fix",
    model: "JSS-4",
    name: "Fix PU Caster",
    category: "caster-wheels",
    description: "Rigid fixed bracket polyurethane wheel caster providing straight directional tracking for industrial carts.",
    loadCapacity: "400 kg (4x2) | 600 kg (6x2) | 800 kg (8x2)",
    sizes: ["4\" x 2\"", "6\" x 2\"", "8\" x 2\""],
    features: ["Rigid Fixed Bracket", "High Load Capacity", "Floor Protective"],
    applications: ["Platform Trolley Rear Wheels", "Factory Line Carts"],
    image: "/images/products/caster_fix_pu.png"
  },
  {
    id: "cw-jss-5-brake",
    model: "JSS-5",
    name: "PU Wheel Break Type Caster",
    category: "caster-wheels",
    description: "Swivel caster fitted with total lock pedal brake that locks both wheel rotation and swivel head simultaneously.",
    loadCapacity: "200 kg (3x1.25) | 300 kg (4x1.25)",
    sizes: ["3\" x 1.25\"", "4\" x 1.25\""],
    features: ["Total Lock Foot Brake", "Smooth Rolling", "Zinc Plated Steel"],
    applications: ["Medical Carts", "Pharma Equipment", "Light Trolleys"],
    image: "/images/products/caster_pu_brake.png"
  },
  {
    id: "cw-jss-6-thread",
    model: "JSS-6",
    name: "12MM Thread Caster",
    category: "caster-wheels",
    description: "Threaded bolt stem swivel caster with M12 bolt mounting for light equipment, racks, and aluminum profiling.",
    loadCapacity: "200 kg (3x1.25) | 300 kg (4x1.25)",
    sizes: ["3\" x 1.25\"", "4\" x 1.25\""],
    features: ["M12 Threaded Stem Mount", "Polyurethane Wheel", "Dual Ball Bearing"],
    applications: ["Display Racks", "Modular Workbenches"],
    image: "/images/products/caster_12mm_thread.png"
  },
  {
    id: "cw-jss-7-piller",
    model: "JSS-7",
    name: "22MM Piller Caster",
    category: "caster-wheels",
    description: "Solid pillar pin stem mounting swivel caster for tubular frame carts, scaffolds, and industrial fixtures.",
    loadCapacity: "200 kg (3x1.25) | 300 kg (4x1.25)",
    sizes: ["3\" x 1.25\"", "4\" x 1.25\""],
    features: ["22mm Solid Pin Stem", "Non-Marking PU Tread", "High Durability"],
    applications: ["Scaffolding Towers", "Tubular Carts"],
    image: "/images/products/caster_22mm_piller.png"
  },
  {
    id: "cw-jss-8-pp",
    model: "JSS-8",
    name: "PP Caster Wheel",
    category: "caster-wheels",
    description: "White Polypropylene (PP) caster wheel offering complete chemical resistance and lightweight rolling.",
    loadCapacity: "120 kg (2x1) | 200 kg (3x1.25) | 250 kg (4x1.25)",
    sizes: ["2\" x 1\"", "3\" x 1.25\"", "4\" x 1.25\""],
    features: ["100% White PP Body", "Chemical & Acid Proof", "Zero Floor Marking"],
    applications: ["Chemical Laboratories", "Textile Cans", "Waste Bins"],
    image: "/images/products/caster_pp_white.png"
  },
  {
    id: "cw-jss-9-ilet",
    model: "JSS-9",
    name: "I-Let PU Caster",
    category: "caster-wheels",
    description: "Hollow kingpin eyelet hole swivel caster for single bolt fixing on equipment legs.",
    loadCapacity: "400 kg (4x2) | 600 kg (6x2) | 800 kg (8x2)",
    sizes: ["4\" x 2\"", "6\" x 2\"", "8\" x 2\""],
    features: ["Hollow Kingpin Hole", "High Impact PU", "Sealed Bearings"],
    applications: ["Hospital Beds", "Industrial Machinery Legs"],
    image: "/images/products/caster_ilet_pu.png"
  },
  {
    id: "cw-jss-10-med",
    model: "JSS-10",
    name: "Medical Caster",
    category: "caster-wheels",
    description: "Hygienic white plastic housing medical swivel caster with grey non-marking rubber tire for silent hospital operation.",
    loadCapacity: "150 kg (3\") | 250 kg (4\") | 350 kg (5\") | 400 kg (6\")",
    sizes: ["3\"", "4\"", "5\"", "6\""],
    features: ["Silent Rolling Rubber Tread", "Thread Guard Covers", "Sterilizer Safe"],
    applications: ["Hospital Beds", "Medical Stretcher Carts", "Cleanroom Units"],
    image: "/images/products/caster_medical_white.png"
  },
  {
    id: "cw-jss-11-twinmed",
    model: "JSS-11",
    name: "Twin Medical Caster",
    category: "caster-wheels",
    description: "Twin wheel medical caster offering low overall height and smooth 360-degree swivelling under load.",
    loadCapacity: "150 kg (3\") | 250 kg (4\") | 350 kg (5\")",
    sizes: ["3\"", "4\"", "5\""],
    features: ["Twin Wheel Balance", "Central Brake Lock Compatible", "Elegant Synthetic Body"],
    applications: ["Ultrasound Machines", "Hospital Equipment"],
    image: "/images/products/caster_twin_medical.png"
  },
  {
    id: "cw-jss-12-wc",
    model: "JSS-12",
    name: "Wheel Chair Caster",
    category: "caster-wheels",
    description: "Front wheel chair fork assembly caster fitted with narrow solid rubber/PU tire and stem pin.",
    loadCapacity: "150 kg (6\") | 250 kg (8\")",
    sizes: ["6\"", "8\""],
    features: ["Narrow Profile Rim", "Smooth Ball Bearings", "Solid Rubber Tire"],
    applications: ["Wheelchairs", "Patient Mobility Carts"],
    image: "/images/products/caster_wheelchair.png"
  },
  {
    id: "cw-jss-9-hd-nylon",
    model: "JSS-9",
    name: "Heavy Duty Nylon Caster",
    category: "caster-wheels",
    description: "Solid white virgin nylon wheel mounted in heavy steel bracket for maximum load-bearing on smooth floors.",
    loadCapacity: "800 kg (4x2) | 1000 kg (6x2) | 1500 kg (8x2)",
    sizes: ["4\" x 2\"", "6\" x 2\"", "8\" x 2\""],
    features: ["Ultra High Load Nylon", "Low Rolling Resistance", "Acid & Solvent Proof"],
    applications: ["Heavy Chemical Carts", "Foundry Platforms"],
    image: "/images/products/caster_hd_nylon.png"
  },
  {
    id: "cw-jss-10-black-pu",
    model: "JSS-10",
    name: "Black PU Caster Wheel",
    category: "caster-wheels",
    description: "Heavy duty black polyurethane wheel caster engineered for oil-contaminated industrial plant floors.",
    loadCapacity: "120 kg (1.5\") | 200 kg (2\") | 300 kg (3\") | 400 kg (4\")",
    sizes: ["1.5\"", "2\"", "3\"", "4\""],
    features: ["Oil & Chemical Resistant Black PU", "Steel Hub Core", "Double Ball Race"],
    applications: ["Machine Shops", "Tool Trolleys"],
    image: "/images/products/caster_black_pu.png"
  },
  {
    id: "cw-jss-11-red-pu",
    model: "JSS-11",
    name: "Red PU Caster",
    category: "caster-wheels",
    description: "Medium-heavy red polyurethane wheel on black nylon core with zinc passivated steel swivel housing.",
    loadCapacity: "400 kg (3x1.25) | 500 kg (4x1.25) | 600 kg (5x1.25)",
    sizes: ["3\" x 1.25\"", "4\" x 1.25\"", "5\" x 1.25\""],
    features: ["High Elasticity Red PU", "Quiet Floor Movement", "Dust Guard Caps"],
    applications: ["Pharma Packaging", "Warehouse Logistics"],
    image: "/images/products/caster_red_pu_brake.png"
  },
  {
    id: "cw-jss-12-nylon",
    model: "JSS-12",
    name: "Nylon Caster",
    category: "caster-wheels",
    description: "White nylon wheel caster with pressed steel bracket for washdown and food processing plants.",
    loadCapacity: "400 kg (3x1.25) | 500 kg (4x1.25) | 600 kg (5x1.25)",
    sizes: ["3\" x 1.25\"", "4\" x 1.25\"", "5\" x 1.25\""],
    features: ["100% White Nylon", "Non-Chipping", "Corrosion Resistant"],
    applications: ["Food Processing", "Dairies", "Fisheries"],
    image: "/images/products/caster_nylon_white.png"
  },
  {
    id: "cw-jss-1-spring",
    model: "JSS-1",
    name: "Spring Load Caster",
    category: "caster-wheels",
    description: "Heavy duty shock absorbing spring-loaded swivel caster designed to cushion sensitive instruments over rough ground.",
    loadCapacity: "1200 kg (6x2) | 1500 kg (8x2)",
    sizes: ["6\" x 2\"", "8\" x 2\""],
    features: ["Heavy Compression Springs", "High Shock Absorption", "Durable PU Tread"],
    applications: ["Aerospace Tooling", "Precision Electronics Transport"],
    image: "/images/products/spring_loaded_caster.png",
    isPopular: true
  },
  {
    id: "cw-jss-2-skid",
    model: "JSS-2",
    name: "Skid Proof Caster",
    category: "caster-wheels",
    description: "Patterned anti-skid polyurethane caster wheel providing extra traction on slippery or wet tile floors.",
    loadCapacity: "800 kg (4x2) | 1000 kg (6x2) | 1500 kg (8x2)",
    sizes: ["4\" x 2\"", "6\" x 2\"", "8\" x 2\""],
    features: ["Grooved Anti-Skid Tread", "High Grip Formula", "Industrial Grade Bracket"],
    applications: ["Washdown Bays", "Cold Storage Plants"],
    image: "/images/products/caster_skid_proof.png"
  },
  {
    id: "cw-jss-3-puw",
    model: "JSS-3",
    name: "PU Wheel Caster (Heavy Rating)",
    category: "caster-wheels",
    description: "Extra heavy capacity red polyurethane caster wheel for heavy loads up to 3000 kg.",
    loadCapacity: "1500 kg (4x2) | 2000 kg (6x2) | 3000 kg (8x2)",
    sizes: ["4\" x 2\"", "6\" x 2\"", "8\" x 2\""],
    features: ["Heavy Forged Top Plate", "Thick PU Tread", "Precision Roller Bearings"],
    applications: ["Heavy Industrial Carts", "Automotive Assembly"],
    image: "/images/products/caster_puw_heavy.png"
  },
  {
    id: "cw-jss-4-scaffold",
    model: "JSS-4",
    name: "Scaffold Caster",
    category: "caster-wheels",
    description: "Heavy duty scaffolding caster with pin stem and dual total lock brake mechanism.",
    loadCapacity: "800 kg (4x2) | 1000 kg (6x2)",
    sizes: ["4\" x 2\"", "6\" x 2\""],
    features: ["Solid Steel Pin Stem", "Dual Lock Brake", "High Impact PU Rim"],
    applications: ["Construction Scaffolding", "Maintenance Staging"],
    image: "/images/products/caster_scaffold.png"
  },
  {
    id: "cw-jss-5-tpr",
    model: "JSS-5",
    name: "TPR Caster",
    category: "caster-wheels",
    description: "Thermoplastic Rubber (TPR) grey wheel caster offering quiet rolling and high floor protection.",
    loadCapacity: "800 kg (3x1.25) | 1000 kg (4x1.25) | 1200 kg (5x1.25)",
    sizes: ["3\" x 1.25\"", "4\" x 1.25\"", "5\" x 1.25\""],
    features: ["Quiet TPR Tread", "Non-Marking", "Thread Guards"],
    applications: ["Hospitals", "Cleanrooms", "Office Furniture"],
    image: "/images/products/caster_tpr_red.png"
  },
  {
    id: "cw-jss-6-rubber",
    model: "JSS-6",
    name: "Rubber Caster",
    category: "caster-wheels",
    description: "Black solid rubber caster wheel with shock-absorbing resilience over unpaved grounds.",
    loadCapacity: "300 kg (4\") | 400 kg (5\") | 500 kg (6\")",
    sizes: ["4\"", "5\"", "6\""],
    features: ["High Elastic Rubber", "Shock Absorbing", "Pressed Steel Yoke"],
    applications: ["Outdoor Hand Carts", "Waste Containers"],
    image: "/images/products/caster_rubber_black.png"
  },
  {
    id: "cw-jss-7-solid",
    model: "JSS-7",
    name: "Solid Caster",
    category: "caster-wheels",
    description: "Solid cast iron / steel wheel caster engineered for extreme high temperature environments.",
    loadCapacity: "800 kg (4x2) | 1000 kg (6x2) | 1200 kg (8x2)",
    sizes: ["4\" x 2\"", "6\" x 2\"", "8\" x 2\""],
    features: ["High Temp Cast Iron", "Machined Tread", "Grease Nipple Bore"],
    applications: ["Bakeries", "Foundry Ovens", "Furnace Carts"],
    image: "/images/products/caster_solid_nylon.png"
  },
  {
    id: "cw-jss-8-puc",
    model: "JSS-8",
    name: "PU Caster",
    category: "caster-wheels",
    description: "Standard industrial polyurethane wheel caster with total lock brake mechanism.",
    loadCapacity: "800 kg (4x2) | 1000 kg (6x2) | 1200 kg (8x2)",
    sizes: ["4\" x 2\"", "6\" x 2\"", "8\" x 2\""],
    features: ["Total Lock Brake", "Zinc Plated Yoke", "PU Tread"],
    applications: ["Assembly Carts", "Warehouses"],
    image: "/images/products/caster_pu_jss8.png"
  },
  {
    id: "cw-jss-9-ss304",
    model: "JSS-9",
    name: "SS 304 Caster",
    category: "caster-wheels",
    description: "100% Grade 304 Stainless Steel bracket caster for strict hygienic USFDA / GMP plants.",
    loadCapacity: "200 kg (3x1.25) | 300 kg (4x1.25) | 700 kg (4x2) | 1000 kg (6x2)",
    sizes: ["3\" x 1.25\"", "4\" x 1.25\"", "4\" x 2\"", "6\" x 2\""],
    features: ["100% Stainless Steel SS 304", "Sterilizer Safe", "Stainless Ball Bearings"],
    applications: ["Pharma Plants", "Food Industry"],
    image: "/images/products/caster_ss304_jss9.png"
  },
  {
    id: "cw-jss-10-chair",
    model: "JSS-10",
    name: "Chair Wheel",
    category: "caster-wheels",
    description: "Twin wheel swivel caster for office chairs and light mobile equipment furniture.",
    loadCapacity: "80 kg (1.5\") | 100 kg (2\")",
    sizes: ["1.5\"", "2\""],
    features: ["Nylon Twin Wheels", "Grip Neck Stem", "Smooth Swivel"],
    applications: ["Office Chairs", "Light Trolleys"],
    image: "/images/products/caster_chair_jss10.png"
  },
  {
    id: "cw-jss-11-sixer",
    model: "JSS-11",
    name: "Sixer Wheel",
    category: "caster-wheels",
    description: "Heavy duty multi-roller conveyor transfer wheel for omnidirectional material movement.",
    loadCapacity: "200 kg (25mm) | 400 kg (2\")",
    sizes: ["25mm", "2\""],
    features: ["Multi-Roller PU Segment", "360° Transfer", "Heavy Steel Axle"],
    applications: ["Conveyor Tables", "Packaging Sorting"],
    image: "/images/products/caster_sixer_jss11.png"
  },
  {
    id: "cw-jss-12-ball",
    model: "JSS-12",
    name: "Ball Caster",
    category: "caster-wheels",
    description: "Spherical metal ball swivel caster for smooth omnidirectional movement on furniture and electronic stands.",
    loadCapacity: "80 kg (1.5\") | 100 kg (2\")",
    sizes: ["1.5\"", "2\""],
    features: ["Solid Steel Ball", "Polished Chrome Finish", "Top Plate Mount"],
    applications: ["Display Cabinets", "Electronic Racks"],
    image: "/images/products/caster_ball_jss12.png"
  },
  {
    id: "cw-jss-9-ladder",
    model: "JSS-9",
    name: "Ladder Caster",
    category: "caster-wheels",
    description: "Spring loaded retractable step-ladder caster that locks when stepped on for ladder safety.",
    loadCapacity: "500 kg",
    sizes: ["4\" x 1.25\""],
    features: ["Spring Retractable Lock", "Safety Brake", "PU Wheel"],
    applications: ["Warehouse Mobile Ladders", "Stock Picking"],
    image: "/images/products/caster_ladder_jss9.png"
  },
  {
    id: "cw-jss-10-shop",
    model: "JSS-10",
    name: "Shopping Trolly Caster",
    category: "caster-wheels",
    description: "Travelator / escalator locking caster wheel with split grooves for retail shopping carts.",
    loadCapacity: "200 kg (4x1.25\") | 300 kg (5x1.25\")",
    sizes: ["4\" x 1.25\"", "5\" x 1.25\""],
    features: ["Escalator Rail Locking Ribs", "Polyurethane Tread", "Thread Guards"],
    applications: ["Retail Supermarkets", "Airport Luggage Carts"],
    image: "/images/products/caster_shop_jss10.png"
  },
  {
    id: "cw-jss-11-level",
    model: "JSS-11",
    name: "Levelling Caster",
    category: "caster-wheels",
    description: "Dual function swivel caster and retractable anti-vibration leveling pad for heavy machinery stability.",
    loadCapacity: "1000 kg (50x25) | 2000 kg (63x30)",
    sizes: ["50 x 25", "63 x 30"],
    features: ["Adjustable Rubber Leveling Foot", "Die-Cast Aluminum Frame", "High Static Load"],
    applications: ["CNC Machines", "Laboratory Instruments"],
    image: "/images/products/caster_level_jss11.png"
  },
  {
    id: "cw-jss-12-btu",
    model: "JSS-12",
    name: "Ball Transfer Unit",
    category: "caster-wheels",
    description: "Heavy duty omnidirectional steel ball transfer unit for conveyor tables, glass processing, and sheet feeding.",
    loadCapacity: "1000 kg (1/2\") | 2000 kg (1\")",
    sizes: ["1/2\"", "1\""],
    features: ["Hardened Chrome Steel Ball", "Flange Mount Collar", "Self-Cleaning Drain Hole"],
    applications: ["Conveyor Feed Tables", "Sheet Metal Shear Beds"],
    image: "/images/products/caster_btu_jss12.png"
  },

  // ==========================================
  // SHEET 5: INDUSTRIAL WHEELS & OEM SPARES
  // ==========================================
  {
    id: "ws-jss-1-pp",
    model: "JSS-1",
    name: "Black PP Wheel",
    category: "industrial-wheels-spares",
    description: "Solid heavy-duty black polypropylene wheel with roller bearing bore.",
    loadCapacity: "400 to 3000 kg",
    sizes: ["4\" To 14\" Diameter"],
    features: ["High Impact PP Material", "Chemical Resistant", "Roller Bearing Bore"],
    applications: ["Waste Carts", "Industrial Trolleys"],
    image: "/images/products/32.jpeg"
  },
  {
    id: "ws-jss-2-puhpt",
    model: "JSS-2",
    name: "PU HPT Pallet Wheel",
    category: "industrial-wheels-spares",
    description: "OEM replacement red polyurethane load wheel roller for hand pallet trucks with dual 6204 ball bearings.",
    loadCapacity: "1000 kg per wheel",
    sizes: ["80mm x 70mm", "80mm x 90mm"],
    features: ["Direct Cast Iron Hub Bonded PU", "Precision Sealed Bearings", "Floor Protective"],
    applications: ["Hand Pallet Truck Repairs", "Tandem Load Rollers"],
    image: "/images/products/31.jpeg",
    isPopular: true
  },
  {
    id: "ws-jss-3-cirubber",
    model: "JSS-3",
    name: "CI Rubber Bonded Wheel",
    category: "industrial-wheels-spares",
    description: "Heavy cast iron hub bonded with thick vulcanized black rubber tread for high shock absorption.",
    loadCapacity: "500 to 5000 kg",
    sizes: ["5\" To 14\" Diameter"],
    features: ["Vulcanized Rubber Tread", "Heavy Cast Iron Core", "Taper Roller Bearing Bore"],
    applications: ["Factory Carts", "Outdoor Rough Roads"],
    image: "/images/products/30.jpeg"
  },
  {
    id: "ws-jss-4-cipu",
    model: "JSS-4",
    name: "CI PU Wheel",
    category: "industrial-wheels-spares",
    description: "Heavy cast iron core wheel directly bonded with high grade elastomeric red polyurethane tread.",
    loadCapacity: "500 to 5000 kg",
    sizes: ["3\" To 12\" Diameter"],
    features: ["High Grade Polyurethane Bonding", "Oil & Grease Proof", "Extreme Load Capacity"],
    applications: ["Heavy Industrial Carts", "Machinery Movers"],
    image: "/images/products/29.jpeg",
    isPopular: true
  },
  {
    id: "ws-jss-5-nylon-pallet",
    model: "JSS-5",
    name: "Nylon Pallet Wheel",
    category: "industrial-wheels-spares",
    description: "White solid virgin nylon replacement load wheel roller for pallet trucks in wet or chemical plants.",
    loadCapacity: "1000 kg per roller",
    sizes: ["80mm x 70mm", "80mm x 90mm", "180mm Steer Wheel"],
    features: ["100% Virgin Nylon", "Low Rolling Resistance", "Acid Proof"],
    applications: ["Chemical Plants", "Cold Storages"],
    image: "/images/products/28.jpeg"
  },
  {
    id: "ws-jss-6-ppcp",
    model: "JSS-6",
    name: "PPCP Block Wheel",
    category: "industrial-wheels-spares",
    description: "Machined Polypropylene Co-Polymer (PPCP) solid block wheel for heavy industrial load carriers.",
    loadCapacity: "400 to 3000 kg",
    sizes: ["4\" To 10\" Diameter"],
    features: ["Solid PPCP Block", "High Mechanical Strength", "Precision Machined Bore"],
    applications: ["Heavy Plant Trolleys", "Textile Cans"],
    image: "/images/products/27.jpeg"
  },
  {
    id: "ws-jss-7-red-pps",
    model: "JSS-7",
    name: "Red PP S Type Wheel",
    category: "industrial-wheels-spares",
    description: "Red S-type polypropylene replacement wheel for light and medium factory carts.",
    loadCapacity: "80 to 1000 kg",
    sizes: ["2\" To 10\" Diameter"],
    features: ["Red PP Material", "Smooth Rolling", "Bush / Bearing Bore"],
    applications: ["Light Store Trolleys", "Hardware Carts"],
    image: "/images/products/26.jpeg"
  },
  {
    id: "ws-jss-8-red-uhmw",
    model: "JSS-8",
    name: "Red UHMW Wheel",
    category: "industrial-wheels-spares",
    description: "Machined red Ultra High Molecular Weight (UHMW) polyethylene wheel for high impact & chemical resistance.",
    loadCapacity: "400 to 5000 kg",
    sizes: ["4\" To 14\" Diameter"],
    features: ["Red UHMW Polyethylene", "Zero Floor Denting", "Chemical Proof"],
    applications: ["Chemical Plants", "Pharma Formulations"],
    image: "/images/products/25.jpeg"
  },
  {
    id: "ws-jss-9-scooter",
    model: "JSS-9",
    name: "Scooter Wheel",
    category: "industrial-wheels-spares",
    description: "Pneumatic air-filled / solid rubber scooter wheel with pressed steel rim for hand carts.",
    loadCapacity: "400 kg",
    sizes: ["3.50 x 8", "3.50 x 10"],
    features: ["Pneumatic Air Tire", "Heavy Steel Rim", "Smooth Ball Bearings"],
    applications: ["Hand Carts", "Agricultural Carts"],
    image: "/images/products/24.jpeg"
  },
  {
    id: "ws-jss-10-uhmw-block",
    model: "JSS-10",
    name: "UHMW Block Wheel",
    category: "industrial-wheels-spares",
    description: "Solid CNC machined UHMW block extra heavy wheel capable of supporting extreme loads up to 8 Tons.",
    loadCapacity: "500 to 8000 kg",
    sizes: ["4\" To 16\" Diameter"],
    features: ["CNC Machined UHMW Block", "Supports up to 8 Tons", "Silent Rolling"],
    applications: ["Steel Mills", "Shipyards", "Heavy Rigging Skids"],
    image: "/images/products/23.jpeg",
    isPopular: true
  },
  {
    id: "ws-jss-11-white-pps",
    model: "JSS-11",
    name: "White PPCP S Type Wheel",
    category: "industrial-wheels-spares",
    description: "White PPCP S-Type replacement wheel for food grade and cleanroom platform carts.",
    loadCapacity: "80 to 1500 kg",
    sizes: ["2\" To 10\" Diameter"],
    features: ["White Cleanroom Grade PPCP", "Hygienic Surface", "Chemical Resistant"],
    applications: ["Pharma Storage", "Food Processing"],
    image: "/images/products/22.jpeg"
  },
  {
    id: "ws-js-12-pu-stacker",
    model: "JS-12",
    name: "PU Stacker Wheel",
    category: "industrial-wheels-spares",
    description: "Complete set of OEM polyurethane drive, caster, and load wheels for electric hydraulic stackers.",
    loadCapacity: "1500 kg - 2500 kg Rating",
    sizes: ["Full Stacker Replacement Wheel Set"],
    features: ["High Elasticity Yellow/Red PU", "Steel Hub Core", "Direct OEM Replacement"],
    applications: ["Electric Stacker Overhauls", "BOPT Maintenance"],
    image: "/images/products/21.jpeg"
  },
  {
    id: "ws-js-9-hand-cart",
    model: "JS-9",
    name: "Hand Cart Wheel",
    category: "industrial-wheels-spares",
    description: "Cast iron spoke hand cart wheel for heavy construction and foundry material transport.",
    loadCapacity: "300 kg - 600 kg",
    sizes: ["12\" To 18\" Spoke Rim"],
    features: ["Cast Iron Spoke Body", "Heavy Center Boss", "Durable Tread"],
    applications: ["Construction Carts", "Foundry Yard Barrows"],
    image: "/images/products/20.jpeg"
  },
  {
    id: "ws-js-10-forged-castle",
    model: "JS-10",
    name: "Forged Castle Wheel",
    category: "industrial-wheels-spares",
    description: "Forged steel heavy caster wheel with castle nut axle pin for heavy industrial machinery dollies.",
    loadCapacity: "1000 kg - 3000 kg",
    sizes: ["4\" To 8\" Diameter"],
    features: ["Forged Steel Construction", "Castle Nut Locking Axle", "Taper Roller Bearings"],
    applications: ["Heavy Machinery Dollies", "Die Carts"],
    image: "/images/products/19.jpeg"
  },
  {
    id: "ws-js-11-ci-casting",
    model: "JS-11",
    name: "CI Casting Wheel",
    category: "industrial-wheels-spares",
    description: "Heavy solid cast iron casting wheel machined with precision bearing bore for high temp factory trolleys.",
    loadCapacity: "500 kg - 4000 kg",
    sizes: ["4\" To 12\" Diameter"],
    features: ["Solid Cast Iron Grade 20/25", "Machined Rim & Bore", "High Temperature Safe"],
    applications: ["Foundries", "Oven Carts", "Brick Kilns"],
    image: "/images/products/18.jpeg"
  },
  {
    id: "ws-js-12-pu-pallet-set",
    model: "JS-12",
    name: "PU Pallet Truck Wheel",
    category: "industrial-wheels-spares",
    description: "Complete tandem load roller set and front steering wheel assembly for hand pallet truck overhauling.",
    loadCapacity: "2500 kg - 3500 kg Rating",
    sizes: ["180x50 Steer Wheels + 80x70 Load Rollers"],
    features: ["Heavy Duty Polyurethane Tread", "Pre-fitted Precision Bearings", "Universal HPT Fit"],
    applications: ["Pallet Truck Maintenance", "Hydraulic Servicing"],
    image: "/images/products/17.jpeg",
    isPopular: true
  },

  // ==========================================
  // SHEET 5: HYDRAULIC HAND PALLET TRUCK PARTS (1-40)
  // ==========================================
  {
    id: "hpt-part-1",
    model: "Item 1",
    name: "Jack Pump",
    category: "pallet-truck-parts",
    description: "Complete hydraulic jack pump assembly suitable for 2.5 Ton, 3 Ton, and 5 Ton hand pallet trucks (Maini / Neelakamal / Baka models).",
    loadCapacity: "2.5 Ton / 3 Ton / 5 Ton",
    sizes: ["Maini / Neelakamal / Baka Fitment"],
    features: ["Monoblock Cast Body", "Integrated Overload Relief", "Leak-Proof Seals", "Heavy Duty Lift Capacity"],
    applications: ["Pallet Truck Repair", "Hydraulic Pump Replacement", "Overhaul Maintenance"],
    image: "/images/products/50.jpeg"
  },
  {
    id: "hpt-part-2",
    model: "Item 2",
    name: "Handle Assembly",
    category: "pallet-truck-parts",
    description: "Ergonomic 3-position lever control handle bar assembly for hydraulic hand pallet trucks.",
    sizes: ["Standard Ergonomic Length"],
    features: ["3-Position Control Lever (Raise/Neutral/Lower)", "Heavy Steel Tube", "Rubber Grip Handle"],
    applications: ["Pallet Truck Maintenance", "Handle Replacement"],
    image: "/images/products/46.jpeg"
  },
  {
    id: "hpt-part-3",
    model: "Item 3",
    name: "Oil Seal Kit",
    category: "pallet-truck-parts",
    description: "High-durability hydraulic pump oil seal kit to prevent fluid leakage in 31.5mm and 35mm piston cylinders.",
    sizes: ["Size: 31.5 mm", "35 mm"],
    features: ["Polyurethane Oil Seals", "Dust Wipers & O-Rings", "Pressure-Resistant Seals"],
    applications: ["Hydraulic Leak Repair", "Pump Overhauling"],
    image: "/images/products/42.jpeg"
  },
  {
    id: "hpt-part-4",
    model: "Item 4",
    name: "Bracket / Glant",
    category: "pallet-truck-parts",
    description: "Heavy-duty cast steel pump bracket glant connector for 2.5T, 3T, and 5T hydraulic pallet truck lifting linkages.",
    loadCapacity: "2.5 Ton / 3 Ton / 5 Ton",
    sizes: ["Universal Fitment"],
    features: ["High Tensile Cast Steel", "Precision Pin Holes", "Corrosion Resistant"],
    applications: ["Pump Linkage Assembly", "Lift Mechanism Support"],
    image: "/images/products/39.jpeg"
  },
  {
    id: "hpt-part-5",
    model: "Item 5",
    name: "Jack Side Handle (Arm)",
    category: "pallet-truck-parts",
    description: "Side handle lifting arm suitable for 550mm and 685mm fork width hand pallet trucks.",
    sizes: ["Size: 550 mm", "685 mm"],
    features: ["Reinforced Steel Construction", "Precision Pivot Pins"],
    applications: ["Frame Linkage Repair", "Lift Arm Replacement"],
    image: "/images/products/35.jpeg"
  },
  {
    id: "hpt-part-6",
    model: "Item 6",
    name: "Spring",
    category: "pallet-truck-parts",
    description: "High-tensile spring steel return spring for pallet truck handle sockets and pump pistons.",
    sizes: ["Size: 91 mm", "100 mm", "110 mm"],
    features: ["Tempered Spring Steel", "High Fatigue Strength"],
    applications: ["Handle Return Mechanism", "Pump Reset"],
    image: "/images/products/49.jpeg"
  },
  {
    id: "hpt-part-7",
    model: "Item 7",
    name: "Releasing Valve",
    category: "pallet-truck-parts",
    description: "Precision hydraulic lowering release valve cartridge pin for controlled fork lowering.",
    features: ["Precision Machined Valve Stem", "Leak-Free Sealing Seat"],
    applications: ["Lowering Control Repair", "Pump Valve Maintenance"],
    image: "/images/products/45.jpeg"
  },
  {
    id: "hpt-part-8",
    model: "Item 8",
    name: "Jack Main Support",
    category: "pallet-truck-parts",
    description: "Heavy-duty cast steel main support base for hydraulic pump mounting and chassis connection.",
    features: ["Heavy Duty Steel Casting", "Machined Mounting Flange"],
    applications: ["Hydraulic Jack Mounting", "Pivot Base"],
    image: "/images/products/41.jpeg"
  },
  {
    id: "hpt-part-9",
    model: "Item 9",
    name: "Shaft (25 x 176 mm)",
    category: "pallet-truck-parts",
    description: "Precision ground steel pivot shaft for hand pallet truck main linkage.",
    sizes: ["25 x 176 mm"],
    features: ["Hardened Steel Bar", "Precision Tolerance"],
    applications: ["Main Pivot Axle", "Chassis Linkage"],
    image: "/images/products/38.jpeg"
  },
  {
    id: "hpt-part-10",
    model: "Item 10",
    name: "Shaft Set",
    category: "pallet-truck-parts",
    description: "Hardened steel linkage pin shafts for pallet truck fork frame and lifting arm joints.",
    sizes: ["20 x 95 mm", "20 x 140 mm", "20 x 150 mm", "20 x 167 mm"],
    features: ["High Wear Resistance", "Pre-drilled Retaining Holes"],
    applications: ["Fork Arm Jointing", "Frame Shaft Replacement"],
    image: "/images/products/44.jpeg"
  },
  {
    id: "hpt-part-11",
    model: "Item 11",
    name: "Shaft (20 x 105 mm)",
    category: "pallet-truck-parts",
    description: "Heavy-duty steel pivot shaft pin for pallet truck rocker arm connection.",
    sizes: ["20 x 105 mm"],
    features: ["Ground Finish Surface", "Dowel Pin Locking Holes"],
    applications: ["Rocker Arm Axle", "Linkage Shaft"],
    image: "/images/products/48.jpeg"
  },
  {
    id: "hpt-part-12",
    model: "Item 12",
    name: "Shaft (16 x 47 / 16 x 41 mm)",
    category: "pallet-truck-parts",
    description: "Steel roller axle shaft set for front load wheel brackets.",
    sizes: ["16 x 47 mm", "16 x 41 mm"],
    features: ["Corrosion Resistant Coating", "Heavy Shear Strength"],
    applications: ["Load Roller Axle", "Wheel Pin Replacement"],
    image: "/images/products/34.jpeg"
  },
  {
    id: "hpt-part-13",
    model: "Item 13",
    name: "Shaft (16 x 85 mm)",
    category: "pallet-truck-parts",
    description: "Hardened steel axle shaft pin for front load roller wheels.",
    sizes: ["16 x 85 mm"],
    features: ["Precision Diameter", "Heavy Duty Steel"],
    applications: ["Front Load Wheel Axle"],
    image: "/images/products/40.jpeg"
  },
  {
    id: "hpt-part-14",
    model: "Item 14",
    name: "Shaft (16 x 50 mm)",
    category: "pallet-truck-parts",
    description: "Flanged head precision steel shaft pin for hydraulic lifting linkage.",
    sizes: ["16 x 50 mm"],
    features: ["Retaining Head Design", "Hardened Steel"],
    applications: ["Lift Linkage Hinge Pin"],
    image: "/images/products/37.jpeg"
  },
  {
    id: "hpt-part-15",
    model: "Item 15",
    name: "Main Piston",
    category: "pallet-truck-parts",
    description: "Hydraulic main lift piston rod engineered for smooth lifting under heavy load.",
    sizes: ["32 x 265 mm", "32 x 285 mm", "35 x 285 mm"],
    features: ["Polished Surface Finish", "Hardened Steel Core"],
    applications: ["Hydraulic Pump Ram Replacement"],
    image: "/images/products/33.jpeg"
  },
  {
    id: "hpt-part-16",
    model: "Item 16",
    name: "Hard Chrome Piston",
    category: "pallet-truck-parts",
    description: "Hard chrome plated smooth piston rod for hydraulic plunger unit.",
    sizes: ["18 x 100 mm"],
    features: ["Hard Chrome Plated Layer", "Corrosion & Scratch Resistant"],
    applications: ["Plunger Piston Rod"],
    image: "/images/products/47.jpeg"
  },
  {
    id: "hpt-part-17",
    model: "Item 17",
    name: "Thread Chapla / Thread Rod",
    category: "pallet-truck-parts",
    description: "Threaded push rod connector eyelet and chapla bracket for fork height adjustment.",
    features: ["Heavy Duty Threading", "Forged Eyelet Joint"],
    applications: ["Push Rod Height Adjustment"],
    image: "/images/products/43.jpeg"
  },
  {
    id: "hpt-part-18",
    model: "Item 18",
    name: "Small Wheel Stand",
    category: "pallet-truck-parts",
    description: "Guide entry roller bracket stand for smooth pallet entry and exit without fork scuffing.",
    features: ["Durable Steel Plate", "Pre-drilled Mounting"],
    applications: ["Pallet Entry Roller Guide"],
    image: "/images/products/51.jpeg"
  },
  {
    id: "hpt-part-19",
    model: "Item 19",
    name: "Lever Plate / Foot Control Arm",
    category: "pallet-truck-parts",
    description: "Cast iron foot release pedal arm lever plate for hand pallet truck release system.",
    features: ["Durable Cast Iron", "Foot Pedal Lever Pad"],
    applications: ["Foot Lowering Control"],
    image: "/images/products/36.jpeg"
  },
  {
    id: "hpt-part-20",
    model: "Item 20",
    name: "Pressure Roller & Pressure Shaft",
    category: "pallet-truck-parts",
    description: "Steel pressure roller and matching pressure shaft set for handle socket pump engagement.",
    sizes: ["Roller: 25x22x16 mm, 25x22x12 mm", "Shaft: 16x60 mm, 12x60 mm"],
    features: ["Hardened Steel Roller", "Smooth Piston Pushing"],
    applications: ["Handle Socket Roller Assembly"],
    image: "/images/products/32.jpeg"
  },
  {
    id: "hpt-part-21",
    model: "Item 21",
    name: "Maini Shaft",
    category: "pallet-truck-parts",
    description: "Special flanged main shaft pin designed for Maini brand hand pallet trucks.",
    features: ["Flanged Locking Head", "Exact Maini OEM Specs"],
    applications: ["Maini Pallet Truck Overhaul"],
    image: "/images/products/72.jpeg"
  },
  {
    id: "hpt-part-22",
    model: "Item 22",
    name: "Releasing Spare Kit",
    category: "pallet-truck-parts",
    description: "Complete release valve overhaul kit including springs, steel balls, guide pins, and sealing seats.",
    features: ["Full 8-Piece Valve Rebuild Kit", "High Precision Components"],
    applications: ["Complete Release Valve Repair"],
    image: "/images/products/67.jpeg"
  },
  {
    id: "hpt-part-23",
    model: "Item 23",
    name: "Chain + Bolt / Bracket Set",
    category: "pallet-truck-parts",
    description: "Control handle chain link with adjusting bolt and eyelet bracket for lever linkage.",
    features: ["High Tensile Roller Chain", "Adjustable Threaded Stud"],
    applications: ["Handle Lever Connection"],
    image: "/images/products/62.jpeg"
  },
  {
    id: "hpt-part-24",
    model: "Item 24",
    name: "Spring Dubby (Cap)",
    category: "pallet-truck-parts",
    description: "Steel spring retaining cup cap for handle spring housing.",
    features: ["Deep Drawn Steel Cup", "Spring Alignment Ring"],
    applications: ["Handle Spring Retainer"],
    image: "/images/products/57.jpeg"
  },
  {
    id: "hpt-part-25",
    model: "Item 25",
    name: "S Lock / Dowel / Washer Set",
    category: "pallet-truck-parts",
    description: "Retaining snap locks, spring dowel pins, and washer hardware set for axle shaft securing.",
    sizes: ["Dowel: 5 x 35 mm", "8 x 50 mm"],
    features: ["Hardened Spring Steel Pins", "Corrosion Resistant Washers"],
    applications: ["Axle Locking & Retaining"],
    image: "/images/products/71.jpeg"
  },
  {
    id: "hpt-part-26",
    model: "Item 26",
    name: "Bracket Set (Tandem Roller)",
    category: "pallet-truck-parts",
    description: "Complete tandem load wheel rocker arm bracket assembly with twin PU rollers.",
    features: ["Forged Steel Rocker Arm", "Tandem Wheel Mounting"],
    applications: ["Front Load Wheel Bracket"],
    image: "/images/products/66.jpeg"
  },
  {
    id: "hpt-part-27",
    model: "Item 27",
    name: "Long Pipe (Push Rod)",
    category: "pallet-truck-parts",
    description: "Tubular steel long push rod connecting front load wheel rocker arms to rear pump linkage.",
    sizes: ["Length: 850 mm", "930 mm"],
    features: ["Heavy Wall Steel Tube", "Welded End Clevis Joints"],
    applications: ["Fork Push Rod Mechanism"],
    image: "/images/products/61.jpeg"
  },
  {
    id: "hpt-part-28",
    model: "Item 28",
    name: "Handle Bush Brass",
    category: "pallet-truck-parts",
    description: "Self-lubricating split bronze/brass bushing for handle joint wear protection.",
    features: ["High Grade Brass/Bronze Alloy", "Split Design for Easy Press Fit"],
    applications: ["Handle Pivot Sleeve"],
    image: "/images/products/56.jpeg"
  },
  {
    id: "hpt-part-29",
    model: "Item 29",
    name: "Circlip Washer Set",
    category: "pallet-truck-parts",
    description: "External and internal circlip snap ring washer set for shaft locking.",
    sizes: ["Sizes: A55", "A20", "A15", "B26"],
    features: ["Spring Steel Construction", "Reliable Axle Locking"],
    applications: ["Shaft Retaining Rings"],
    image: "/images/products/70.jpeg"
  },
  {
    id: "hpt-part-30",
    model: "Item 30",
    name: "CI PU Steering Wheel",
    category: "pallet-truck-parts",
    description: "Cast Iron hub with heavy Polyurethane tread rear steering wheel.",
    sizes: ["150 x 50 mm", "180 x 50 mm", "200 x 50 mm"],
    features: ["Heavy Duty CI Core", "Red Polyurethane Tread", "Dual Sealed Bearings"],
    applications: ["Rear Steering Wheel Replacement"],
    image: "/images/products/65.jpeg"
  },
  {
    id: "hpt-part-31",
    model: "Item 31",
    name: "Nylon Steering Wheel",
    category: "pallet-truck-parts",
    description: "High-density white virgin nylon steering wheel for chemical & cleanroom environments.",
    sizes: ["150 x 50 mm", "180 x 50 mm", "200 x 50 mm"],
    features: ["100% Virgin Nylon", "Chemical & Water Resistant", "Smooth Rolling"],
    applications: ["Pharma & Food Plant Pallet Trucks"],
    image: "/images/products/60.jpeg"
  },
  {
    id: "hpt-part-32",
    model: "Item 32",
    name: "PPCP Steering Wheel",
    category: "pallet-truck-parts",
    description: "Polypropylene Copolymer (PPCP) lightweight durable steering wheel.",
    sizes: ["150 x 50 mm", "180 x 50 mm", "200 x 50 mm"],
    features: ["Impact Resistant PPCP", "Economy Standard Usage"],
    applications: ["Standard Warehouse Pallet Trucks"],
    image: "/images/products/55.jpeg"
  },
  {
    id: "hpt-part-33",
    model: "Item 33",
    name: "CI PU Load Wheel",
    category: "pallet-truck-parts",
    description: "Cast Iron core Polyurethane coated front load roller wheel.",
    sizes: ["70 x 80 mm"],
    features: ["Cast Iron Core", "Red Polyurethane Tread", "Heavy Load Rating"],
    applications: ["Front Tandem Load Rollers"],
    image: "/images/products/69.jpeg"
  },
  {
    id: "hpt-part-34",
    model: "Item 34",
    name: "Nylon Load Wheel",
    category: "pallet-truck-parts",
    description: "Solid virgin nylon front load roller wheel for smooth non-marking movement.",
    sizes: ["70 x 80 mm"],
    features: ["Non-Marking White Nylon", "Low Rolling Resistance"],
    applications: ["Cleanroom & Epoxy Floor Loading"],
    image: "/images/products/64.jpeg"
  },
  {
    id: "hpt-part-35",
    model: "Item 35",
    name: "PPCP Load Wheel",
    category: "pallet-truck-parts",
    description: "Polypropylene copolymer front load roller wheel for standard industrial use.",
    sizes: ["70 x 80 mm"],
    features: ["Durable PPCP Molded Body", "Precision Bearing Bore"],
    applications: ["Front Load Wheel Replacement"],
    image: "/images/products/59.jpeg"
  },
  {
    id: "hpt-part-36",
    model: "Item 36",
    name: "Small Wheel / Dust Cap",
    category: "pallet-truck-parts",
    description: "Protective wheel dust cap covers to prevent dirt entering wheel bearings.",
    features: ["Snap-fit Protective Cap", "Grease Retention"],
    applications: ["Wheel Bearing Protection"],
    image: "/images/products/54.jpeg"
  },
  {
    id: "hpt-part-37",
    model: "Item 37",
    name: "Planjar (Piston Bush)",
    category: "pallet-truck-parts",
    description: "Threaded steel/brass plunger piston guide bushing for hydraulic pump head.",
    features: ["Precision Internal Threading", "Machined Seal Groove"],
    applications: ["Hydraulic Cylinder Plunger Guide"],
    image: "/images/products/68.jpeg"
  },
  {
    id: "hpt-part-38",
    model: "Item 38",
    name: "Bearing Set",
    category: "pallet-truck-parts",
    description: "Sealed deep groove ball bearings and thrust bearings for wheel and steering head.",
    sizes: ["6204 2RS", "6204 ZZ", "6205 ZZ", "Thrust Bearing 51111"],
    features: ["High Chrome Steel", "Rubber / Metal Shielded"],
    applications: ["Wheel & Steering Overhaul"],
    image: "/images/products/63.jpeg"
  },
  {
    id: "hpt-part-39",
    model: "Item 39",
    name: "Bleed Spring / Shaft Bush Set",
    category: "pallet-truck-parts",
    description: "Air bleed valve spring, 19mm steel ball, and shaft bushing set for hydraulic pump.",
    sizes: ["19 mm Steel Ball & Spring"],
    features: ["Precision Steel Ball", "Tempered Air Bleed Spring"],
    applications: ["Hydraulic Pump Air Bleeding"],
    image: "/images/products/58.jpeg"
  },
  {
    id: "hpt-part-40",
    model: "Item 40",
    name: "Manual Stacker Cylinder",
    category: "pallet-truck-parts",
    description: "Complete hydraulic lift cylinder assembly for manual stacker vertical lifting.",
    loadCapacity: "1000 kg - 2000 kg",
    features: ["Heavy Cylinder Bore", "Polished Lift Ram", "Foot & Hand Pump Port"],
    applications: ["Manual Hydraulic Stacker Overhaul"],
    image: "/images/products/53.jpeg"
  },

  // ==========================================
  // SHEET 6: FULLY ELECTRIC STACKER SPARE PARTS
  // ==========================================
  {
    id: "es-jss-1",
    model: "JSS-1",
    name: "Electronic Throttle & Accelerator",
    category: "electric-stacker-parts",
    description: "Precision electronic speed control throttle pedal and accelerator box for electric stackers & BOPT.",
    features: ["Solid State Potentiometer", "Smooth Speed Modulation", "Dust & Moisture Sealed"],
    applications: ["Electric Stacker Drive Control", "BOPT Accelerator Replacement"],
    image: "/images/products/88.jpeg"
  },
  {
    id: "es-jss-2",
    model: "JSS-2",
    name: "Battery Connector",
    category: "electric-stacker-parts",
    description: "Heavy duty industrial battery plug connector (160A / 320A) with handles for electric equipment.",
    sizes: ["160 Amp", "320 Amp"],
    features: ["Silver-Plated Copper Contacts", "High Impact Polycarbonate Housing", "Ergonomic Handle"],
    applications: ["Traction Battery Charging & Connection"],
    image: "/images/products/96.jpeg"
  },
  {
    id: "es-jss-3",
    model: "JSS-3",
    name: "Curtis Speed Controllers",
    category: "electric-stacker-parts",
    description: "Genuine Curtis programmable motor speed controller units (1212 / 1232 / 1234 series) for electric stackers.",
    features: ["Programmable Speed & Acceleration", "Thermal Protection", "Regenerative Braking"],
    applications: ["Electric Stacker Motor Speed Regulation"],
    image: "/images/products/94.jpeg",
    isPopular: true
  },
  {
    id: "es-jss-4",
    model: "JSS-4",
    name: "DC Controls & Solenoids",
    category: "electric-stacker-parts",
    description: "Heavy duty DC contactor solenoids (24V / 36V / 48V) for drive and pump motor switching.",
    sizes: ["24V DC", "36V DC", "48V DC"],
    features: ["Silver Alloy Contacts", "High Current Capacity", "Continuous Duty Coil"],
    applications: ["Main Drive & Pump Motor Switching"],
    image: "/images/products/92.jpeg"
  },
  {
    id: "es-jss-5",
    model: "JSS-5",
    name: "EM Brakes (Electromagnetic Brake)",
    category: "electric-stacker-parts",
    description: "Fail-safe electromagnetic disc brake assembly for electric stacker drive motors.",
    sizes: ["24V DC Electromagnetic Brake"],
    features: ["Fail-Safe Spring Applied", "High Torque Retaining", "Fast Engagement"],
    applications: ["Traction Motor Emergency Braking"],
    image: "/images/products/97.jpeg"
  },
  {
    id: "es-jss-6",
    model: "JSS-6",
    name: "Encoder Sensor Type",
    category: "electric-stacker-parts",
    description: "Magnetic speed and direction encoder sensor for traction motor speed regulation.",
    features: ["High Resolution Pulse Output", "Vibration Resistant Housing"],
    applications: ["Drive Motor Speed Feedback"],
    image: "/images/products/95.jpeg"
  },
  {
    id: "es-jss-7",
    model: "JSS-7",
    name: "Encoder SME",
    category: "electric-stacker-parts",
    description: "SME type bearing encoder sensor unit for AC drive motor speed control.",
    features: ["Integrated Bearing Sensor Ring", "Shielded Cable Lead"],
    applications: ["SME Controller AC Motor Feedback"],
    image: "/images/products/93.jpeg"
  },
  {
    id: "es-jss-8",
    model: "JSS-8",
    name: "Tiller Handle Assembly",
    category: "electric-stacker-parts",
    description: "Ergonomic control tiller head with butterfly switches, horn, and belly emergency reverse button.",
    features: ["Butterfly Speed Rockers", "Safety Belly Reversing Switch", "Dual Lift/Lower Switches"],
    applications: ["Walkie Electric Stacker Control Head"],
    image: "/images/products/91.jpeg",
    isPopular: true
  },
  {
    id: "es-jss-11",
    model: "JSS-11",
    name: "Electronic Throttle & Accelerator Module",
    category: "electric-stacker-parts",
    description: "Solid-state electronic potentiometer accelerator switch module.",
    features: ["Linear Voltage Output", "Rugged Mounting Frame"],
    applications: ["Foot Pedal / Hand Throttle Replacement"],
    image: "/images/products/98.jpeg"
  },
  {
    id: "es-js-12",
    model: "JS-12",
    name: "Bearing Encoder",
    category: "electric-stacker-parts",
    description: "Integrated bearing speed encoder sensor for high precision motor speed feedback.",
    features: ["Sealed Bearing Unit", "High Precision Sensor Board"],
    applications: ["Electric Stacker Motor Speed Sensing"],
    image: "/images/products/90.jpeg"
  },
  {
    id: "es-js-11-wheels",
    model: "JS-11",
    name: "Stacker Polyurethane Drive & Load Wheels",
    category: "electric-stacker-parts",
    description: "Heavy duty yellow Vulkollan / Polyurethane drive wheels and castor wheels for electric stackers.",
    sizes: ["230x75 mm Drive", "85x85 mm Load", "150x50 mm Castor"],
    features: ["High Traction Polyurethane", "Heavy Load Capacity", "Oil & Wear Resistant"],
    applications: ["Electric Stacker Wheel Replacement"],
    image: "/images/products/89.jpeg"
  },
  {
    id: "es-js-12-light",
    model: "JS-12",
    name: "Blue Safety Spot Light",
    category: "electric-stacker-parts",
    description: "High visibility LED blue spot warning safety projection light for stackers and forklifts.",
    features: ["10V-80V Multi-Voltage", "High Power Blue LED", "Waterproof IP67 Housing"],
    applications: ["Warehouse Pedestrian Safety Warning"],
    image: "/images/products/87.jpeg"
  },

  // ==========================================
  // SHEET 7: FORKLIFT SPARE PARTS & ACCESSORIES
  // ==========================================
  {
    id: "fl-jss-1",
    model: "JSS-1",
    name: "Finger Access Control Kit",
    category: "forklift-parts",
    description: "Biometric fingerprint identity key access control starter module for forklift ignition security.",
    features: ["Biometric Fingerprint Scanner", "Operator Authorization Memory", "Relay Output Ignition Control"],
    applications: ["Forklift Access Control", "Fleet Operator Safety"],
    image: "/images/products/86.jpeg"
  },
  {
    id: "fl-jss-2",
    model: "JSS-2",
    name: "Flasher / Beacon Light",
    category: "forklift-parts",
    description: "Amber revolving LED strobe warning beacon light (12V-80V) for forklift safety.",
    sizes: ["12V - 80V Multi Voltage"],
    features: ["Super Bright Amber LEDs", "Multiple Flash Patterns", "Impact Resistant Dome"],
    applications: ["Forklift Visual Warning Signal"],
    image: "/images/products/84.jpeg",
    isPopular: true
  },
  {
    id: "fl-jss-3",
    model: "JSS-3",
    name: "Red Zone Light / Blue Spot Light",
    category: "forklift-parts",
    description: "Pedestrian safety red zone boundary laser light and blue spot spotlight set.",
    features: ["High Intensity Red Line & Blue Spot", "Heavy Duty Die-Cast Aluminum Base"],
    applications: ["Forklift Perimeter Warning Safety Zone"],
    image: "/images/products/82.jpeg"
  },
  {
    id: "fl-jss-4",
    model: "JSS-4",
    name: "Indicator Light",
    category: "forklift-parts",
    description: "Front and rear twin-lens LED turn signal and position indicator light assembly.",
    features: ["Dual Amber/Clear Lens", "Vibration Proof LED Board"],
    applications: ["Forklift Turn & Brake Signal"],
    image: "/images/products/80.jpeg"
  },
  {
    id: "fl-jss-5",
    model: "JSS-5",
    name: "LED Headlight",
    category: "forklift-parts",
    description: "High intensity flood LED work headlight for low-light warehouse & yard operations.",
    features: ["Heavy Duty Square LED Headlamp", "Stainless Steel Bracket"],
    applications: ["Forklift Front Headlight Replacement"],
    image: "/images/products/85.jpeg"
  },
  {
    id: "fl-jss-6",
    model: "JSS-6",
    name: "Fork Camera System",
    category: "forklift-parts",
    description: "Mast-mounted fork tine tip camera for high racking visibility and accurate pallet entry.",
    features: ["Wireless HD Camera Unit", "Wide Angle Lens", "Built-in Night Vision IR"],
    applications: ["High Rack Stacking Safety"],
    image: "/images/products/83.jpeg"
  },
  {
    id: "fl-jss-7",
    model: "JSS-7",
    name: "Reverse Camera With Display",
    category: "forklift-parts",
    description: "Heavy-duty waterproof rear view camera with cabin LCD display monitor.",
    features: ["7-Inch Color LCD Monitor", "Waterproof Rear Camera", "Automatic Reversing Trigger"],
    applications: ["Forklift Rear View & Blind Spot Elimination"],
    image: "/images/products/81.jpeg",
    isPopular: true
  },
  {
    id: "fl-jss-8",
    model: "JSS-8",
    name: "Horn / Reverse Horn",
    category: "forklift-parts",
    description: "High-decibel dual tone warning horn and automatic reverse beeper alarm.",
    features: ["105dB High Decibel Warning", "Waterproof Housing"],
    applications: ["Forklift Audio Hazard Warning"],
    image: "/images/products/79.jpeg"
  },
  {
    id: "fl-jss-9",
    model: "JSS-9",
    name: "Safety Helmet",
    category: "forklift-parts",
    description: "HDPE impact-resistant industrial safety hard hat helmet with adjustable ratchet suspension.",
    features: ["High Density Polyethylene Shell", "Adjustable Chin Strap & Ratchet"],
    applications: ["Warehouse & Factory Personal Protective Equipment (PPE)"],
    image: "/images/products/78.jpeg"
  },
  {
    id: "fl-jss-10",
    model: "JSS-10",
    name: "Forklift Tires (Solid & Pneumatic)",
    category: "forklift-parts",
    description: "Heavy load solid resilient rubber tires and pneumatic tires for all forklift tonnage.",
    sizes: ["6.00-9", "7.00-12", "28x9-15", "Custom Sizes"],
    features: ["Puncture-Proof Solid Rubber Option", "Deep Tread Compound for Long Life"],
    applications: ["Forklift Wheel Replacement"],
    image: "/images/products/76.jpeg"
  },
  {
    id: "fl-jss-11",
    model: "JSS-11",
    name: "Seat Belt With Interlock Display",
    category: "forklift-parts",
    description: "Retractable driver seatbelt equipped with ignition safety interlock switch.",
    features: ["Emergency Locking Retractor (ELR)", "Integrated Safety Switch"],
    applications: ["Forklift Operator Safety Compliance"],
    image: "/images/products/74.jpeg"
  },
  {
    id: "fl-jss-12",
    model: "JSS-12",
    name: "Fire Extinguisher",
    category: "forklift-parts",
    description: "ABC dry powder fire extinguisher with quick-release mounting bracket for forklift safety.",
    sizes: ["1 kg", "2 kg ABC Powder"],
    features: ["Pressure Gauge Included", "Heavy Duty Vehicle Mounting Bracket"],
    applications: ["Forklift Emergency Fire Safety"],
    image: "/images/products/73.jpeg"
  },
  {
    id: "fl-jss-13",
    model: "JSS-13",
    name: "Filter (Hydraulic & Engine)",
    category: "forklift-parts",
    description: "Complete range of hydraulic return, oil, fuel, and air intake filters for forklifts.",
    features: ["High Efficiency Filtration", "Extends Engine & Hydraulic Life"],
    applications: ["Forklift Preventive Maintenance"],
    image: "/images/products/77.jpeg"
  },
  {
    id: "fl-jss-14",
    model: "JSS-14",
    name: "Fork Tines (Forklift Forks)",
    category: "forklift-parts",
    description: "Class II & Class III heavy duty forged alloy steel forklift fork tines.",
    sizes: ["Length: 1070 mm", "1220 mm", "1500 mm"],
    features: ["High Grade Forged Steel", "Standard ITA Hook Mounting"],
    applications: ["Forklift Pallet Lifting Tines"],
    image: "/images/products/75.jpeg"
  }
];

export const TRUST_BADGES = [
  {
    title: "GST Registered B2B Entity",
    desc: "100% Tax Compliant Invoicing with Input Tax Credit (GSTIN: 24DAIPS6965R1ZJ)",
    icon: "FileCheck"
  },
  {
    title: "In-House Manufacturing",
    desc: "Precision engineering & load testing for material handling equipment in GIDC Vapi",
    icon: "Factory"
  },
  {
    title: "Complete OEM Spares",
    desc: "80+ Caster Wheel variants, PU Pallet Rollers, Hydraulic Pumps & Seal Kits in stock",
    icon: "ShieldCheck"
  },
  {
    title: "Rapid Dispatch Hub",
    desc: "Strategic GIDC Phase 2 Vapi location for fast dispatch across Gujarat & Pan-India",
    icon: "Truck"
  }
];

export const WHY_CHOOSE_US = [
  {
    number: "01",
    title: "GIDC Industrial Hub Base",
    text: "Located in the heart of GIDC Vapi 2nd Phase, we ensure rapid breakdown support and spare dispatch for chemical, pharma, and textile plants."
  },
  {
    number: "02",
    title: "Custom Engineering & Load Ratings",
    text: "From 80 kg light office chair wheels to 8,000 kg heavy UHMW steel mill wheels, we manufacture custom load-bearing equipment tailored to your plant specifications."
  },
  {
    number: "03",
    title: "Comprehensive Maintenance & Repairs",
    text: "We don't just sell equipment — our dedicated technicians provide complete hydraulic pump overhauling, stacker mast repairs, and seal kit replacements."
  },
  {
    number: "04",
    title: "Uncompromising Quality & Testing",
    text: "Every hand pallet truck, stacker, and caster wheel undergoes load testing, weld inspection, and pressure testing prior to dispatch to ensure zero downtime."
  }
];

export const INDUSTRIES_SERVED = [
  {
    title: "Pharmaceuticals & Cleanrooms",
    desc: "SS 304 Stainless Steel hand pallet trucks, hygienic medical casters, and dust-free electric stackers for USFDA/GMP compliant plants.",
    icon: "Sparkles"
  },
  {
    title: "Chemicals & Petrochemicals",
    desc: "Flameproof drum tilters, explosion-resistant wheels, and acid-resistant UHMW/Polyurethane rollers.",
    icon: "FlaskConical"
  },
  {
    title: "Warehousing & 3PL Logistics",
    desc: "High lift scissor trucks, pallet trucks, dock levelers, and floor protection casters for continuous multi-shift distribution.",
    icon: "Warehouse"
  },
  {
    title: "Textile & Paper Mills",
    desc: "Wide fork 685mm pallet trucks, heavy reel stackers, and high capacity floor platform trolleys.",
    icon: "Scroll"
  },
  {
    title: "Heavy Engineering & Metal Fabrication",
    desc: "8 Ton load-bearing UHMW wheels, cast iron PU bonded casters, floor cranes, and heavy-duty die transport carts.",
    icon: "Wrench"
  },
  {
    title: "Food, Beverage & FMCG",
    desc: "Stainless steel hydraulic scissors, food-grade drum handling equipment, and washdown-safe wheel assemblies.",
    icon: "Utensils"
  }
];

export const ORDER_PROCESS = [
  {
    step: "01",
    title: "Requirement / RFQ",
    desc: "Send your technical specifications, load requirements, or product model numbers (JSS-1 to JSS-12) via WhatsApp or phone call."
  },
  {
    step: "02",
    title: "Technical Quote & Drawing",
    desc: "Our engineering team provides a formal B2B GST quotation with load ratings, dimensions, lead time, and pricing."
  },
  {
    step: "03",
    title: "Quality Check & Assembly",
    desc: "Goods undergo pressure testing, wheel alignment checks, and safety inspection at our GIDC Vapi facility."
  },
  {
    step: "04",
    title: "Fast Dispatch & Support",
    desc: "Shipped directly to your factory or warehouse with full tax invoice, warranty docs, and operational guidance."
  }
];

export const FAQS = [
  {
    q: "Are your hand pallet trucks and stackers customizable?",
    a: "Yes! We manufacture and supply hand pallet trucks and stackers in custom fork lengths (e.g. 550mm, 685mm, custom narrow/wide options), stainless steel SS 304 cleanroom grades, reel stackers, and custom lift heights up to 4.5 meters."
  },
  {
    q: "How do I choose between Polyurethane (PU), Nylon, and Cast Iron wheels?",
    a: "Polyurethane (PU) wheels are quiet, shock-absorbing, and floor-protective — ideal for epoxy floors, pharma cleanrooms, and smooth tiles. Nylon wheels offer lower rolling resistance for wet/chemical plants. Cast Iron wheels handle extreme heat and heavy loads."
  },
  {
    q: "Do you supply all models shown in your official catalog sheets (JSS-1 to JSS-12)?",
    a: "Yes! All 80+ products from our official catalog sheets — including Hand Pallet Trucks, Stackers, Platform Trolleys, Floor Cranes, Dock Levelers, 8000kg UHMW wheels, and Caster Wheels — are manufactured & stocked at our GIDC Vapi facility."
  },
  {
    q: "Can I get GST tax credit on my purchase?",
    a: "Absolutely. JIYA Sales & Services is a registered B2B entity (GSTIN: 24DAIPS6965R1ZJ). All orders include a formal Tax Invoice enabling your business to claim full Input Tax Credit (ITC)."
  },
  {
    q: "Where is your facility located and do you deliver across India?",
    a: "Our office and workshop are located at Shop No.26, Plot No.147, Nirmal Shopping Center, 2nd Phase, GIDC, Vapi, Gujarat. We supply across Gujarat (Vapi, Ankleshwar, Surat, Ahmedabad, Silvassa, Daman) and dispatch goods pan-India via express transport."
  },
  {
    q: "How do I request an immediate quote?",
    a: "You can click on the 'WhatsApp Quote' button, call Shah Ajay Kumar directly on +91 99094 68007, or visit our GIDC Vapi shop for instant technical advice and pricing."
  }
];
