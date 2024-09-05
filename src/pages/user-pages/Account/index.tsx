import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Payout from "../../../components/Account/Payout";
import Certificate from "../../../components/Account/Certificate";
import Affiliate from "../../../components/Account/Affiliate";
import Security from "../../../components/Account/Security";
 
export default function MyAccount() {
  const [activeTab, setActiveTab] = React.useState("payout");
  const data = [
    {
      label: "Payout",
      value: "payout",
      desc: <Payout />,
    },
    {
      label: "Certificate",
      value: "certificate",
      desc: <Certificate />,
    },
    {
      label: "Affiliate",
      value: "affiliate",
      desc: <Affiliate />,
    },
    {
      label: "Security",
      value: "security",
      desc: <Security />,
    }
  ];
  return (
    <Tabs value={activeTab} className="m-10">
      <TabsHeader
        placeholder={undefined}
        className="rounded-none bg-gray-900 flex justify-center item-center p-6"
        indicatorProps={{
          className:
            "bg-transparent border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            placeholder={undefined}
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`${activeTab === value ? "text-white" : "text-gray-500"} w-50`}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody placeholder={undefined} className="mt-10">
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="p-0">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}