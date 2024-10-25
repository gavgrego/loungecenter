"use client";

import { CheckboxGroup } from "@nextui-org/react";
import { useMemo } from "react";

import AllianceCheck from "./alliance-check";

type AlliancesListProps = {
  onChange: (value: string[]) => void;
  value: string[];
};

const AlliancesList = ({ onChange, value }: AlliancesListProps) => {
  // Not sure if these would be best to live in Strapi or not
  const alliancesList = useMemo(
    () => [
      {
        name: "Oneworld Emerald",
        value: (
          <>
            <li>American Airlines - AAdvantage Executive Platinum</li>
            <li>British Airways - Executive Club Gold</li>
            <li>Cathay Pacific - Marco Polo Club Diamond</li>
            <li>Finnair - Finnair Plus Platinum/Platinum Lumo</li>
            <li>Iberia - Iberia Plus Oro/Platinum</li>
            <li>Japan Airlines - JMB Diamond/Sapphire</li>
            <li>Qantas - Qantas Frequent Flyer Platinum/Platinum One</li>
            <li>Qatar Airways - Privilege Club Platinum</li>
            <li>Royal Jordanian - Royal Club Platinum</li>
            <li>SriLankan Airlines - FlySmiLes Platinum</li>
          </>
        ),
      },
      {
        name: "Oneworld Sapphire",
        value: (
          <>
            <li>American Airlines - AAdvantage Platinum/Platinum Pro</li>
            <li>British Airways - Executive Club Silver</li>
            <li>Cathay Pacific - Marco Polo Club Gold</li>
            <li>Finnair - Finnair Plus Gold</li>
            <li>Iberia - Iberia Plus Plata</li>
            <li>Japan Airlines - JMB Sapphire</li>
            <li>Qantas - Qantas Frequent Flyer Gold</li>
            <li>Qatar Airways - Privilege Club Gold</li>
            <li>Royal Jordanian - Royal Club Gold</li>
            <li>SriLankan Airlines - FlySmiLes Gold</li>
          </>
        ),
      },
      {
        name: "Skyteam Elite",
        value: (
          <>
            <li>Aeroflot - Elite</li>
            <li>Aerolíneas Argentinas - Elite</li>
            <li>Aeroméxico - Elite</li>
            <li>Air Europa - Elite</li>
            <li>Air France / KLM - Flying Blue Silver, Flying Blue Gold</li>
            <li>China Airlines - SkyTeam Elite</li>
            <li>China Eastern Airlines - Elite</li>
            <li>Czech Airlines - Elite</li>
            <li>Delta Air Lines - Gold Medallion</li>
            <li>Garuda Indonesia - Elite</li>
            <li>ITA Airways - Freccia Alata</li>
            <li>Kenya Airways - Elite</li>
            <li>Korean Air - SkyPass Gold</li>
            <li>Middle East Airlines - Elite</li>
            <li>Saudia - Alfursan Silver</li>
            <li>TAROM - Elite</li>
            <li>Vietnam Airlines - Elite</li>
            <li>Xiamen Airlines - Elite</li>
          </>
        ),
      },
      {
        name: "Skyteam Elite Plus",
        value: (
          <>
            <li>Aeroflot - Platinum</li>
            <li>Aerolíneas Argentinas - Platinum</li>
            <li>Aeroméxico - Platinum</li>
            <li>Air Europa - Platinum</li>
            <li>Air France / KLM - Flying Blue Gold, Flying Blue Platinum</li>
            <li>China Airlines - Emerald</li>
            <li>China Eastern Airlines - Platinum</li>
            <li>Czech Airlines - Platinum</li>
            <li>Delta Air Lines - Diamond Medallion, Platinum Medallion</li>
            <li>Garuda Indonesia - Platinum</li>
            <li>ITA Airways - Freccia Alata Plus, Freccia Alata</li>
            <li>Kenya Airways - Platinum</li>
            <li>Korean Air - Million Miler, Morning Calm Premium Club</li>
            <li>Middle East Airlines - Platinum</li>
            <li>Saudia - Alfursan Gold</li>
            <li>TAROM - Platinum</li>
            <li>Vietnam Airlines - Platinum</li>
            <li>Xiamen Airlines - Gold</li>
          </>
        ),
      },
      {
        name: "Star Alliance Gold",
        value: (
          <>
            <li>Aegean Airlines - Miles+Bonus Gold</li>
            <li>
              Air Canada - Aeroplan 50K, Aeroplan 75K, Aeroplan Super Elite 100K
            </li>
            <li>Air China - PhoenixMiles Gold, PhoenixMiles Platinum</li>
            <li>
              Air India - Flying Returns Golden Edge Club, Flying Returns
              Maharajah Club
            </li>
            <li>Air New Zealand - Gold, Elite</li>
            <li>ANA (All Nippon Airways) - Platinum, Diamond</li>
            <li>
              Asiana Airlines - Asiana Club Diamond Plus, Asiana Club Platinum
            </li>
            <li>Austrian Airlines - Senator, HON Circle</li>
            <li>Avianca - LifeMiles Gold, LifeMiles Diamond</li>
            <li>
              Copa Airlines - ConnectMiles Gold, ConnectMiles Platinum,
              ConnectMiles Presidential Platinum
            </li>
            <li>
              Croatia Airlines - Miles & More Senator, Miles & More HON Circle
            </li>
            <li>EgyptAir - Golden Lotus Plus</li>
            <li>Ethiopian Airlines - ShebaMiles Gold, ShebaMiles Platinum</li>
            <li>
              Eva Air - Infinity MileageLands Gold, Infinity MileageLands
              Diamond
            </li>
            <li>
              LOT Polish Airlines - Miles & More Senator, Miles & More HON
              Circle
            </li>
            <li>Lufthansa - Miles & More Senator, Miles & More HON Circle</li>
            <li>
              Scandinavian Airlines (SAS) - EuroBonus Gold, EuroBonus Diamond
            </li>
            <li>
              Singapore Airlines - KrisFlyer Gold, PPS Club, Solitaire PPS Club
            </li>
            <li>
              South African Airways - SAA Voyager Gold, SAA Voyager Platinum
            </li>
            <li>SWISS - Miles & More Senator, Miles & More HON Circle</li>
            <li>TAP Air Portugal - Miles&Go Gold</li>
            <li>Thai Airways - Royal Orchid Plus Gold</li>
            <li>
              Turkish Airlines - Miles&Smiles Elite, Miles&Smiles Elite Plus
            </li>
            <li>
              United Airlines - Premier Gold, Premier Platinum, Premier 1K,
              Global Services
            </li>
          </>
        ),
      },
    ],
    [],
  );

  return (
    <CheckboxGroup
      color="secondary"
      label="Select all airline alliance statuses you have:"
      value={value}
      onChange={(value) => onChange(value)}
    >
      {alliancesList.map((alliance) => (
        <AllianceCheck key={alliance.name} name={alliance.name}>
          {alliance.value}
        </AllianceCheck>
      ))}
    </CheckboxGroup>
  );
};

export default AlliancesList;
