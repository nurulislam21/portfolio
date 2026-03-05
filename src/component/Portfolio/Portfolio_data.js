import WRO_V11 from '../pic/WRO_V11.jpg'
import WRO_V3 from '../pic/WRO_V3.jpg'
import WRO_V2 from '../pic/WRO_V2.jpg'
import WRO_V1 from '../pic/WRO_V1.jpg'
import wing_PT from '../pic/Wing printing.jpg'
import V002 from '../pic/V002.jpg'
import TrashC_BOT from '../pic/Trash-collectorBOT.jpg'
import TDriver from '../pic/testing_Driver.jpg'
import ST_indrustry from '../pic/Steel-Tech_indrustry.jpg'
import sn21 from '../pic/SN-21.jpg'
import sn210 from '../pic/SN21 Project (2).jpg'
import sensor from '../pic/Sensor.jpg'
import ricshaw from '../pic/RICSHAW.jpg'
import ricshaw1 from '../pic/RICSHAW1.jpg'
import plane_crash from '../pic/PLANE CRASH.jpg'
import pimg10 from '../pic/pimg10.jpg'
import pimg9 from '../pic/pimg9.jpg'
import pimg8 from '../pic/pimg8.jpg'
import pimg7 from '../pic/pimg7.jpg'
import pcb_rg from '../pic/PCB_RG.jpg'
import pimg1 from '../pic/pimg1.jpg'
import pcb from '../pic/PCB.png'
import motordriver from '../pic/Motor_driver.jpg'
import lfr from '../pic/LFR.jpg'
import indrousty from '../pic/INDROUSTRY.jpg'
import indrousty1 from '../pic/INDROUSTRIAL AUTOMATION.jpg'
import id9 from '../pic/id9.jpg'
import id8 from '../pic/id8.jpg'
import id7 from '../pic/id7.png'
import glass3d from '../pic/GLASS MODEL.jpg'
import glass from '../pic/GLASS.jpg'
import robotGathering from '../pic/GATHERING.jpg'
import espcamr from '../pic/ESPCAM.jpg'
import espcam from '../pic/ESP CAM.jpg'
import printer3d from '../pic/3D_printer.jpg'

const Portfolio_data = [
  {
    id: 1,
    category: "Robotics",
    totalLike: "320",
    title: "Autonomous Waste Classifier",
    description: "Architected an environmental-remediation ground vehicle. Implemented vision-based waste classification algorithms and automated path planning for dynamic obstacle avoidance.",
    techStack: ["Computer Vision", "Path Planning", "ROS"],
    image: TrashC_BOT,
  },
  {
    id: 2,
    category: "Embedded Systems",
    totalLike: "390",
    title: "Isolated Logic Controller",
    description: "Designed a bespoke embedded hardware interface focusing on isolated power distribution and deterministic logic control for high-noise electromechanical environments.",
    techStack: ["Altium", "Power Distribution", "C++"],
    image: pimg1,
  },
  {
    id: 3,
    category: "Embedded Systems",
    totalLike: "420",
    title: "RTOS Industrial Prototype",
    description: "Prototyped a low-latency embedded MCU system. Integrated closed-loop sensor feedback and RTOS-based task scheduling for complex industrial automation cycles.",
    techStack: ["FreeRTOS", "STM32", "Sensor Fusion"],
    image: pimg7,
  },
  {
    id: 4,
    category: "Robotics",
    totalLike: "470",
    title: "Wireless Vision Testbed",
    description: "Developed an autonomous differential-drive testbed. Integrated wireless telemetry and a remote vision-processing pipeline to offload onboard computational loads.",
    techStack: ["Telemetry", "Computer Vision", "Differential Kinematics"],
    image: pimg8,
  },
  {
    id: 5,
    category: "Hardware Design",
    totalLike: "350",
    title: "Multi-Sensor MCU Interface",
    description: "Led hardware R&D for next-generation robotics, focusing on high-speed I2C/SPI sensor integration and robust microcontroller peripheral routing.",
    techStack: ["I2C/SPI", "Hardware Arch", "PCB Routing"],
    image: pimg9,
  },
  {
    id: 6,
    category: "Robotics",
    totalLike: "480",
    title: "Mobile Manipulator Kinematics",
    description: "Conducted rigorous environmental field testing of a mobile manipulator prototype, optimizing PID payload actuation and chassis traction across variable terrains.",
    techStack: ["PID Tuning", "Actuator Control", "Field Testing"],
    image: pimg10,
  },
  {
    id: 7,
    category: "Robotics",
    totalLike: "630",
    title: "Spatial Mapping Rover",
    description: "Engineered a vision-guided autonomous rover utilizing a Raspberry Pi compute node. Integrated forward-facing ultrasonic arrays and an elevated optical mast for 3D spatial mapping.",
    techStack: ["Raspberry Pi", "Ultrasonic Arrays", "Python"],
    image: id9,
  },
  {
    id: 8,
    category: "Robotics",
    totalLike: "550",
    title: "High-Torque Mobility Platform",
    description: "Architected a heavy-duty robotic mobility platform. Emphasized electromechanical integration, power delivery network (PDN) stability, and multi-sensor data fusion.",
    techStack: ["PDN Stability", "High-Torque Drive", "Systems Arch"],
    image: id7,
  },
  {
    id: 9,
    category: "Robotics",
    totalLike: "840",
    title: "Hex-Effector Manipulator",
    description: "Designed a custom payload-manipulation robot for the International Robot Olympiad. Engineered a 3D-printed hex-head effector and a parallel LiPo power architecture for extended endurance.",
    techStack: ["End Effectors", "LiPo Power Arch", "3D Printing"],
    image: robotGathering,
  },
  {
    id: 10,
    category: "Robotics",
    totalLike: "450",
    title: "WRO Chassis Architecture",
    description: "Rapid-prototyped an early-stage WRO autonomous vehicle chassis using FDM fabrication. Focused on structural rigidity, modular payload mounting, and optical sensor wire routing.",
    techStack: ["FDM Fabrication", "Structural Rigidity", "WRO Specs"],
    image: WRO_V1,
  },
  {
    id: 11,
    category: "Prototype",
    totalLike: "690",
    title: "Drishti Opto-Mechanical Assembly",
    description: "Executed precise electro-mechanical assembly of the Drishti Smart Glass. Integrated micro-camera modules and high-density flex-cable routing within an ultra-compact wearable form factor.",
    techStack: ["Wearables", "Micro-Assembly", "Optics"],
    image: glass,
  },
  {
    id: 12,
    category: "3D Design",
    totalLike: "410",
    title: "Parametric Linkage Modeling",
    description: "Authored a high-fidelity SOLIDWORKS parametric model of a traditional rickshaw. Focused on structural load paths, kinematic linkages, and precise digital preservation of complex mechanical assemblies.",
    techStack: ["SOLIDWORKS", "Parametric Modeling", "Kinematics"],
    image: ricshaw,
  },
  {
    id: 13,
    category: "3D Design",
    totalLike: "450",
    title: "Complex FDM Slicing Optimization",
    description: "Executed advanced FDM manufacturing of complex, thin-walled mechanical structures. Optimized slicer parameters for unsupported spans and delicate radial spoke geometries.",
    techStack: ["G-Code Slicing", "FDM", "Tolerance Testing"],
    image: ricshaw1,
  },
  {
    id: 14,
    category: "Product Design",
    totalLike: "500",
    title: "Ruggedized Heavy Machinery UI",
    description: "Engineered a robust hardware control interface for heavy industrial machinery. Prioritized EMC/EMI shielding and fault-tolerant input mechanisms for factory floor deployment.",
    techStack: ["EMC/EMI Shielding", "Fault Tolerance", "Industrial Design"],
    image: indrousty,
  },
  {
    id: 15,
    category: "Product Design",
    totalLike: "520",
    title: "IP-Rated Factory Automation Hub",
    description: "Designed an IP-rated industrial automation enclosure. Integrated a high-contrast LCD, tactile membrane switches, and heavy-duty circular military-style connectors for robust signal integrity.",
    techStack: ["IP-Rating Design", "Signal Integrity", "HMI"],
    image: indrousty1,
  },
  {
    id: 16,
    category: "Product Design",
    totalLike: "610",
    title: "Steel-Tech IIoT Telemetry Node",
    description: "Deployed an Industrial IoT (IIoT) edge node at Steel-Tech. Designed real-time telemetry systems for load-cell data acquisition and production yield tracking in high-stress environments.",
    techStack: ["IIoT", "Telemetry", "Data Acquisition"],
    image: ST_indrustry,
  },
  {
    id: 17,
    category: "PCB",
    totalLike: "590",
    title: "ESP8266 Audio Edge Node",
    description: "Designed an application-specific ESP8266 IoT edge node. Routed a custom PCB with integrated audio amplification stages, power regulation, and dedicated antenna clearance zones.",
    techStack: ["ESP8266", "Audio Amplification", "RF Clearance"],
    image: pcb,
  },
  {
    id: 18,
    category: "Prototype",
    totalLike: "910",
    title: "Micro-Scale SMD Rework",
    description: "Performed sub-millimeter component-level rework on an ESP32-CAM. Utilized enamel wire and floating SMD resistors to bypass native circuitry for a severely space-constrained machine vision application.",
    techStack: ["SMD Soldering", "ESP32", "Circuit Bypass"],
    image: espcam,
  },
  {
    id: 19,
    category: "Prototype",
    totalLike: "880",
    title: "FPC Trace Restoration",
    description: "Executed high-precision micro-soldering on flexible printed circuits (FPC). Repaired and modified fragile trace pathways to restore optical data integrity for a custom camera array.",
    techStack: ["FPC Soldering", "Optical Integrity", "Hardware Repair"],
    image: espcamr,
  },
  {
    id: 20,
    category: "Prototype",
    totalLike: "490",
    title: "CoreXY Motion Architecture",
    description: "Engineered a custom CoreXY motion platform. Assembled precision linear rails and optimized 3D-printed structural brackets to eliminate mechanical resonance during high-speed kinematics.",
    techStack: ["CoreXY", "Linear Kinematics", "Resonance Damping"],
    image: printer3d,
  },
  {
    id: 21,
    category: "Robotics",
    totalLike: "750",
    title: "Championship High-Speed LFR",
    description: "Architected a high-speed Line Follower Robot for Team Dynamic Spark. Engineered a custom high-density logic board, optimized center of gravity, and ultra-low latency sensor polling.",
    techStack: ["Low-Latency Polling", "CG Optimization", "C++"],
    image: id8,
  },
  {
    id: 22,
    category: "Hardware Design",
    totalLike: "850",
    title: "High-Density IR Sensor Array",
    description: "Designed a specialized, high-density IR emitter/receiver PCB array. Engineered custom footprint geometry to maximize track-edge detection resolution for competitive, high-speed line following.",
    techStack: ["IR Sensor Fusion", "Altium Design", "PCB Footprints"],
    image: sensor,
  },
  {
    id: 23,
    category: "PCB",
    totalLike: "710",
    title: "STM32 Cortex-M3 Controller Board",
    description: "Routed a dense, multi-layer motor control board (B1.0) for an STM32 Cortex-M3. Applied advanced EDA techniques for trace impedance matching and high-current noise isolation.",
    techStack: ["STM32", "Impedance Matching", "EDA Routing"],
    image: pcb_rg,
  },
  {
    id: 24,
    category: "3D Design",
    totalLike: "540",
    title: "WRO Echo Drift CAD Assembly",
    description: "Generated a complete SOLIDWORKS CAD assembly for the WRO Echo Drift rover. Conducted digital interference checks and optimized the modular placement of the compute node and optical gantry.",
    techStack: ["SOLIDWORKS", "Interference Checking", "Modular Design"],
    image: WRO_V11,
  },
  {
    id: 25,
    category: "Robotics",
    totalLike: "610",
    title: "Optical Targeting Rover Validation",
    description: "Constructed the physical Echo Drift rover prototype. Validated stacked PCB logic arrays, high-traction kinematics, and the mechanical stability of the custom optical targeting mast.",
    techStack: ["Kinematics Validation", "PCB Stacking", "Targeting Systems"],
    image: WRO_V2,
  },
  {
    id: 26,
    category: "Aviation",
    totalLike: "500",
    title: "Aerospace Structural Failure Analysis",
    description: "Conducted destructive physical testing on a 3D-printed RC aerospace airframe. Analyzed post-impact structural fractures to iterate on infill density and stress-point reinforcement.",
    techStack: ["Failure Analysis", "Stress Testing", "Aerospace Materials"],
    image: plane_crash,
  },
  {
    id: 27,
    category: "Aviation",
    totalLike: "610",
    title: "Aerofoil Lattice Optimization",
    description: "Rapid-prototyped aerodynamic wing geometries using FDM techniques. Iterated on internal lattice support structures to maximize the strength-to-weight ratio for RC aviation research.",
    techStack: ["Aerodynamics", "Lattice Structures", "FDM"],
    image: wing_PT,
  },
  {
    id: 28,
    category: "Aviation",
    totalLike: "890",
    title: "SN-21 VTOL Transwing Kinematics",
    description: "Spearheaded mechanical R&D for the SN-21 VTOL. Optimized the aerodynamic fuselage and the complex kinematic linkages required for the Transwing-style hover-to-forward flight transition.",
    techStack: ["VTOL Dynamics", "Transwing Kinematics", "Aerodynamics"],
    image: sn210,
  },
  {
    id: 29,
    category: "Hardware Design",
    totalLike: "720",
    title: "High-Current UAV Motor Driver",
    description: "Engineered a custom high-current motor driver PCB. Designed wide, exposed copper pours and XT60 power delivery networks to safely handle transient current spikes in heavy robotics.",
    techStack: ["Power Delivery Network", "High-Current PCB", "Thermal Dissipation"],
    image: motordriver,
  },
  {
    id: 30,
    category: "Hardware Design",
    totalLike: "680",
    title: "Hardware-in-the-Loop (HIL) Testing",
    description: "Executed hardware-in-the-loop (HIL) testing. Interfaced custom power electronics with microcontrollers to validate PWM frequency response and thrust output of a ducted fan assembly.",
    techStack: ["HIL Testing", "PWM Control", "Thrust Validation"],
    image: TDriver,
  },
  {
    id: 31,
    category: "Robotics",
    totalLike: "380",
    title: "Extreme Cornering Kinematics",
    description: "Optimized the electromechanical architecture of a podium-placing LFR. Integrated custom copper-etched logic boards with specialized high-grip foam kinematics for extreme cornering.",
    techStack: ["Kinematic Optimization", "Traction Dynamics", "Custom Logic"],
    image: lfr,
  },
  {
    id: 32,
    category: "3D Design",
    totalLike: "690",
    title: "Drishti Smart Glass Volumetric Optimization",
    description: "Rendered high-fidelity 3D CAD models of the Drishti Smart Glass. Focused on ergonomic contouring, thermal dissipation for the micro-camera, and internal volumetric optimization.",
    techStack: ["Volumetric Optimization", "Thermal Design", "CAD Rendering"],
    image: glass3d,
  },
  {
    id: 33,
    category: "Robotics",
    totalLike: "820",
    title: "WRO Frequency-Selective Vision System",
    description: "Engineered the optical detection system for the WRO Singapore International Finalist rover (29th global). Integrated custom frequency-selective optical filters to isolate competition obstacle wavelengths.",
    techStack: ["Optical Filtration", "Wavelength Isolation", "WRO Global"],
    image: WRO_V3,
  },
  {
    id: 34,
    category: "Aviation",
    totalLike: "1.2k",
    title: "SN-21 VTOL Flight Architecture",
    description: "Architected the DynamicSpark SN-21, a highly advanced Vertical Take-Off and Landing (VTOL) aircraft. Implemented sophisticated tilt-rotor aerodynamics and ArduPilot flight control integration.",
    techStack: ["ArduPilot", "Tilt-Rotor Aero", "Flight Control"],
    image: sn21,
  },
  {
    id: 35,
    category: "PCB",
    totalLike: "950",
    title: "Transient Response V1 Architecture",
    description: "Designed a highly complex, multi-layer logic board for advanced control systems. Achieved dense surface-mount component placement and utilized precise length-matching for high-speed STM32 data buses.",
    techStack: ["Length-Matching", "High-Speed Bus", "Altium Designer"],
    image: V002,
  }
];

export default Portfolio_data;