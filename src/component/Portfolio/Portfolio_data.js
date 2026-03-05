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
// import plane from '../pic/PLANE.jpg'
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
    category: "Robotic",
    totalLike: "320",
    title: "Autonomous Waste Collector Prototype",
    description: "Design and development of an autonomous trash-collecting robot prototype, engineered for environmental cleanup and automated waste detection.",
    image: TrashC_BOT,
  },
  {
    id: 2,
    category: "Embedded Systems",
    totalLike: "390",
    title: "Custom Embedded Interface",
    description: "Design and fabrication of a custom embedded hardware interface for specialized logic control and power distribution.",
    image: pimg1,
  },
  {
    id: 3,
    category: "Embedded Systems",
    totalLike: "420",
    title: "Embedded Systems Prototyping",
    description: "Development and prototyping of an embedded microcontroller system designed for complex automation and sensor feedback loops.",
    image: pimg7,
  },
  {
    id: 4,
    category: "Robotic",
    totalLike: "470",
    title: "Wireless Vision Testbed",
    description: "Autonomous navigation testbed built on a yellow-wheeled chassis, integrating a standard webcam and an exposed Bluetooth module for wireless telemetry and remote vision processing.",
    image: pimg8,
  },
  {
    id: 5,
    category: "Hardware Design",
    totalLike: "350",
    title: "Robotics Hardware R&D",
    description: "Research and development phase for custom robotics hardware, focusing on sensor integration and microcontroller interfacing.",
    image: pimg9,
  },
  {
    id: 6,
    category: "Robotic",
    totalLike: "480",
    title: "Mobile Manipulator Field Test",
    description: "Mobile robot prototype featuring a large black payload bucket and a servo-actuated mechanism, photographed outdoors during environmental field testing outside the ECE building.",
    image: pimg10,
  },
  {
    id: 7,
    category: "Robotic",
    totalLike: "630",
    title: "Raspberry Pi Vision Chassis",
    description: "Vision-based autonomous robot prototype utilizing a blue 3D-printed chassis base, a Raspberry Pi compute module, forward-facing ultrasonic sensors, and an elevated webcam mast for spatial awareness.",
    image: id9,
  },
  {
    id: 8,
    category: "Robotic",
    totalLike: "550",
    title: "High-Performance Robotics Platform",
    description: "Advanced robotics platform engineering focusing on custom hardware integration, high-torque motor control, and reliable sensor data fusion.",
    image: id7,
  },
  {
    id: 9,
    category: "Robotics",
    totalLike: "840",
    title: "Robot Gathering: Blue Hex Prototype",
    description: "Custom autonomous robot featuring a distinctive blue 3D-printed hex-head payload mechanism. Built on a perfboard chassis and powered by parallel cylindrical LiPo cells for an International Robot Olympiad event.",
    image: robotGathering,
  },
  {
    id: 10,
    category: "Robotic",
    totalLike: "450",
    title: "WRO Vehicle: Early Chassis Concept",
    description: "Early-stage prototype of the autonomous vehicle engineered for the World Robot Olympiad (WRO). Features a striking red 3D-printed chassis structure and an exposed ribbon cable for the overhead vision system.",
    image: WRO_V1,
  },
  {
    id: 11,
    category: "Prototype",
    totalLike: "690",
    title: "Smart Glass Physical Assembly",
    description: "Physical assembly and prototyping of the Drishti smart glass wearable. Held over a complex electronics workbench, it demonstrates the real-world integration of the micro-camera and wiring.",
    image: glass,
  },
  {
    id: 12,
    category: "3D Design",
    totalLike: "410",
    title: "Traditional Rickshaw CAD Model",
    description: "Detailed 3D CAD modeling of a traditional rickshaw, focusing on structural accuracy, mechanical linkage design, and preserving cultural heritage through digital fabrication.",
    image: ricshaw,
  },
  {
    id: 13,
    category: "3D Design",
    totalLike: "450",
    title: "Rickshaw FDM 3D Print",
    description: "Completed FDM 3D print of a traditional rickshaw model resting on a Creality printer bed, showcasing the ability to fabricate delicate, complex structures like bicycle spokes.",
    image: ricshaw1,
  },
  {
    id: 14,
    category: "Product Design",
    totalLike: "500",
    title: "Industrial Machinery Interface",
    description: "Development of a robust hardware module specifically designed for heavy-duty industrial automation and machinery control.",
    image: indrousty,
  },
  {
    id: 15,
    category: "Product Design",
    totalLike: "520",
    title: "Rugged Factory Automation Interface",
    description: "Fabricated a rugged white industrial device enclosure featuring a character LCD screen, tactile yellow buttons, and three heavy-duty metal circular connectors for reliable factory floor integration.",
    image: indrousty1,
  },
  {
    id: 16,
    category: "Product Design",
    totalLike: "610",
    title: "Steel-Tech Production Monitor",
    description: "Real-world deployment of custom industrial automation hardware at Steel-Tech. Features a robust, integrated LCD reporting real-time material weight and production count directly on the factory floor machinery.",
    image: ST_indrustry,
  },
  {
    id: 17,
    category: "PCB",
    totalLike: "590",
    title: "ESP8266 Custom Audio IoT Node",
    description: "2D rendering of a custom, shield-shaped black printed circuit board centered around an ESP8266 IoT module, complete with dedicated audio output stages and integrated power management.",
    image: pcb,
  },
  {
    id: 18,
    category: "Prototype",
    totalLike: "910",
    title: "ESP32-CAM Component Modification",
    description: "Precision micro-soldering directly on an ESP32-CAM module. Utilizes fine enamel copper wire and floating resistors to modify the native circuitry for a highly space-constrained IoT vision project.",
    image: espcam,
  },
  {
    id: 19,
    category: "Prototype",
    totalLike: "880",
    title: "Camera Ribbon Micro-Soldering",
    description: "Extremely delicate micro-level soldering executed directly onto the fragile traces of a camera ribbon cable, demonstrating advanced fine-pitch rework skills for compact machine vision.",
    image: espcamr,
  },
  {
    id: 20,
    category: "Prototype",
    totalLike: "490",
    title: "Custom 3D Printer Assembly",
    description: "Top-down view of a partially assembled custom 3D printer gantry, showcasing a CoreXY motion system constructed with purple and orange 3D-printed brackets and smooth linear rods.",
    image: printer3d,
  },
  {
    id: 21,
    category: "Robotic",
    totalLike: "750",
    title: "Dynamic Spark Champion LFR",
    description: "Front-profile view of the Champion high-speed Line Follower Robot. Engineered as the Project Lead for Team Dynamic Spark, this system features dual ultrasonic sensors, a custom logic board, and optimized mechanical weight distribution.",
    image: id8,
  },
  {
    id: 22,
    category: "Hardware Design",
    totalLike: "850",
    title: "High-Density IR Sensor Array",
    description: "Engineered a custom, horseshoe-shaped black PCB housing a high-density array of infrared emitters and receivers. Designed specifically to maximize track detection resolution for elite LFRs.",
    image: sensor,
  },
  {
    id: 23,
    category: "PCB",
    totalLike: "710",
    title: "BEES-ROBOTICS Advanced KI-CAD Routing",
    description: "Comprehensive schematic layout and dense multi-layer routing for a Line Follower Robot control board (B1.0) designed in EDA software, integrating an STM32 Cortex-M3 core.",
    image: pcb_rg,
  },
  {
    id: 24,
    category: "3D Design",
    totalLike: "540",
    title: "WRO Echo Drift: SOLIDWORKS Assembly",
    description: "Complete 3D mechanical CAD assembly of the Team Echo Drift autonomous vehicle chassis. Demonstrates precise component placement, including the Raspberry Pi and an upright camera gantry, utilized for international competition preparation.",
    image: WRO_V11,
  },
  {
    id: 25,
    category: "Robotic",
    totalLike: "610",
    title: "WRO Echo Drift: Prototype Profile",
    description: "Physical prototype of the Team Echo Drift rover featuring a custom 3D-printed white camera gantry, stacked logic boards, an accessible LiPo battery mount, and high-traction yellow-rimmed wheels.",
    image: WRO_V2,
  },
  {
    id: 26,
    category: "AVIATION",
    totalLike: "500",
    title: "Aerospace Structural Failure Testing",
    description: "Post-crash analysis of a custom 3D-printed RC aircraft on pavement. The fractured green fuselage exposes the internal battery and ESC, demonstrating critical, hands-on structural durability testing.",
    image: plane_crash,
  },
  {
    id: 27,
    category: "AVIATION",
    totalLike: "610",
    title: "Aerofoil FDM Prototyping",
    description: "Rapid prototyping of an aerodynamic wing section utilizing lightweight FDM 3D printing techniques. The green printed section demonstrates internal support structuring necessary for RC aviation research.",
    image: wing_PT,
  },
  {
    id: 28,
    category: "AVIATION",
    totalLike: "890",
    title: "SN-21 VTOL Structural Design",
    description: "Advanced aerodynamic and structural design iterations for the sn21 VTOL project. Led by Team RoboMore, this initiative optimizes the complex transition mechanisms between vertical hover and forward flight.",
    image: sn210,
  },
  {
    id: 29,
    category: "Hardware Design",
    totalLike: "720",
    title: "High-Current Bat Motor Driver",
    description: "Custom-designed bat-shaped motor driver PCB. This unpopulated board features a central XT60 power connector and pads designed for high-current handling and rapid-response robotics control.",
    image: motordriver,
  },
  {
    id: 30,
    category: "Hardware Design",
    totalLike: "680",
    title: "Hardware Integration & Firmware Testing",
    description: "Hardware-in-the-loop testing setup featuring a custom bat-shaped motor driver PCB. The board interfaces with an Arduino Nano and a laptop IDE to control and test a 3D-printed ducted fan assembly.",
    image: TDriver,
  },
  {
    id: 31,
    category: "Robotic",
    totalLike: "380",
    title: "High-Speed LFR: Internal Architecture",
    description: "Internal teardown view of a high-speed line follower robot. Led to podium finishes at the BUET Robocarnival, revealing a custom copper-etched mainboard, an Arduino Nano, and specialized high-grip foam tires.",
    image: lfr,
  },
  {
    id: 32,
    category: "3D Design",
    totalLike: "690",
    title: "Drishti Smart Glass CAD Render",
    description: "Professional 3D CAD render of the Drishti smart glass wearable device, highlighting the ergonomic frame design, integrated center camera housing, and internal optics modules.",
    image: glass3d,
  },
  {
    id: 33,
    category: "Robotic",
    totalLike: "820",
    title: "WRO Singapore: Optical Testing",
    description: "Advanced iteration of the autonomous vehicle navigated at the World Robot Olympiad (WRO) International Final in Singapore. Engineered by Team Echo Drift to secure a 29th place global finish, utilizing custom optical filters to enhance obstacle detection.",
    image: WRO_V3,
  },
  {
    id: 34,
    category: "AVIATION",
    totalLike: "1.2k",
    title: "Team RoboMore: SN-21 VTOL",
    description: "High-fidelity 3D render of the SN-21, an advanced Vertical Take-Off and Landing (VTOL) aircraft. Spearheaded as part of Team RoboMore's R&D initiatives, it features a sophisticated Transwing-style tilt-rotor mechanism and aerodynamic fuselage.",
    image: sn21,
  },
  {
    id: 35,
    category: "PCB",
    totalLike: "950",
    title: "TRANSIENT RESPONSE V1 PCB",
    description: "A highly complex, multi-layer custom printed circuit board designed for advanced control systems, showcasing highly intricate Altium trace routing and dense STM32 surface-mount component placement.",
    image: V002,
  }
];

export default Portfolio_data;