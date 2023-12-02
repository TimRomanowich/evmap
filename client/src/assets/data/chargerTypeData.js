//import charger images
import chademo from "../images/chademo.png";
import ccs1 from "../images/ccs1.png";
import J1772 from "../images/J1772.png";
import tesla from "../images/tesla.png";



export const chargerTypeList = [
    {
        connector_type: "SAE J1772 Type 1",
        image: J1772,
        current_type: "AC (Alternating Current)",
        manufacturer: [
                        {"maker": "Nissan"},
                        {"maker": "Chrysler"},
                        {"maker": "GM"},
                        {"maker": "Ford"},
                        {"maker": "Honda"},
                        {"maker": "Rivian"},
        ],
        supply_input: "120 Volts or 208/240 Volts",
        charging_level: "Level 1 and Level 2",
        countries: "USA, Canada, Japan"
    },
    {
        connector_type: "Mennekes Type 2",
        current_type: "AC (Alternating Current",
        manufacturer: "",
        supply_input: "",
        charging_level: "",
        countries: ""
    },
    {
        connector_type: "CSS Connector Type 1",
        image: ccs1,
        current_type: "",
        manufacturer: "",
        supply_input: "",
        charging_level: "",
        countries: ""
    },
    {
        connector_type: "CCS Connector Type 2",
        current_type: "",
        manufacturer: "",
        supply_input: "",
        charging_level: "",
        countries: ""
    },
    {
        connector_type: "CHAdeMO Connector",
        image: chademo,
        current_type: "",
        manufacturer: "",
        supply_input: "",
        charging_level: "",
        countries: ""
    },
    {
        connector_type: "Tesla Connectors (NACS)",
        image: tesla,
        current_type: "",
        manufacturer: "",
        supply_input: "",
        charging_level: "",
        countries: ""
    },
    {
        connector_type: "",
        current_type: "",
        manufacturer: "",
        supply_input: "",
        charging_level: "",
        countries: ""
    },
]

export default chargerTypeList