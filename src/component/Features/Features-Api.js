const data = [
  {
    id: 1,
    iconClass: "fas fa-microchip",
    title: "PCB ARCHITECTURE",
    desc: "Designing multi-layer, impedance-controlled boards for high-stress aerospace and robotic environments.",
    specs: [
      "EMI / EMC Mitigation",
      "High-Current Power Delivery (PDN)",
      "Dense BGA & STM32 Routing"
    ],
    tags: ["Altium Designer", "KiCAD", "Signal Integrity"]
  },
  {
    id: 2,
    iconClass: "fas fa-robot",
    title: "AUTONOMOUS SYSTEMS",
    desc: "Bridging complex control algorithms with robust mechanical execution for high-speed, dynamic robotics.",
    specs: [
      "Sensor Fusion (LiDAR, IR, Vision)",
      "Path Planning & Navigation",
      "Closed-loop PID Tuning"
    ],
    tags: ["ROS", "Kinematics", "WRO Specs"]
  },
  {
    id: 3,
    iconClass: "fas fa-cube",
    title: "MECHANICAL MODELING",
    desc: "Advanced 3D modeling and stress simulation to ensure precision-engineered components are optimized for manufacturability.",
    specs: [
      "Aerodynamic Frame Design",
      "Structural Failure Analysis",
      "Complex Gear Kinematics"
    ],
    tags: ["SOLIDWORKS", "CoreXY", "Rapid Prototyping"]
  },
  {
    id: 4,
    iconClass: "fas fa-fighter-jet",
    title: "UAV & AEROSPACE",
    desc: "Spearheading VTOL drone R&D, focusing on flight dynamics and the complex physical transitions between hover and forward flight.",
    specs: [
      "Transwing Tilt-Rotor Mechanisms",
      "Payload Weight Distribution",
      "Aerofoil Prototyping"
    ],
    tags: ["SN-21 VTOL", "ArduPilot", "Flight Dynamics"]
  },
  {
    id: 5,
    iconClass: "fas fa-code-branch",
    title: "EMBEDDED FIRMWARE",
    desc: "Writing highly efficient, bare-metal C/C++ code and implementing real-time operating systems for mission-critical hardware.",
    specs: [
      "STM32 Cortex-M Integration",
      "I2C / SPI / UART Communication",
      "Hardware-in-the-Loop Testing"
    ],
    tags: ["C / C++", "FreeRTOS", "Microcontrollers"]
  },
  {
    id: 6,
    iconClass: "fas fa-satellite-dish",
    title: "INDUSTRIAL IoT",
    desc: "Architecting edge-compute devices and telemetry hardware for real-time monitoring in heavy industrial and factory environments.",
    specs: [
      "Wireless Telemetry Links",
      "Rugged Automation Interfaces",
      "ESP32 Edge Processing"
    ],
    tags: ["MQTT", "Telemetry", "Python"]
  }
];

export default data;