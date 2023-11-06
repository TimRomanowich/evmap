import L from "leaflet";

import chargerPng from "./../images/ev-station.png"

const LeafIcon = L.Icon.extend({
    options: {
        iconSize: [35,35],
        tooltipAnchor: [15, -5],
        popupAnchor: [15, -5]
    }
})

export const chargerIcon = new LeafIcon({ iconUrl: chargerPng})