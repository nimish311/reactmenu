import React from "react";
import Sidebar from "./Sidebar";

function onClick(e, item) {
  window.alert(JSON.stringify(item, null, 2));
}

const items = [
  { 
    name: "service-management", label: "Service Management",
    items: [
      {name: 'service-parameters', label: 'Service Parameters'}
    ]
  },

  "divider",
  {
    name: "environment-setup",
    label: "Environment Setup",
    items: [
      { name: "home-network", label: "Home Network", onClick },
      { name: "retry-policy", label: "Retry Policy", onClick },
      { name: "redirection-accounts", label: "Redirection Accounts", onClick },
      { name: "redirection-list", label: "Redirection List", onClick },
      { name: "operator-profile", label: "Operator Profile", onClick },
      { name: "operator-cluster", label: "Operator Cluster", onClick },
      { name: "lcr-profile", label: "LCR Profile", onClick },
      { name: "sc-at-lcr-profile", label: "SC AT LCR Profile", onClick },
      { name: "customer-supplier", label: "Customer Supplier", onClick },
      { name: "http-templates", label: "HTTP Templates", onClick },
      { name: "customer-supplier-group", label: "Customer Supplier Group", onClick },
      { name: "deal-mgmt", label: "Deal Management", onClick },
      { name: "channel-partner", label: "Channel Partner", onClick },
      { name: "customer-credit-profile", label: "Customer Credit Profile", onClick },
      // {name:'', label:'', onClick},
      {name:'credit-transaction', label:'Credit Transaction', onClick}
    ]
  },

  "divider",
  {
    name: "esme-mgmt",
    label: "ESME Management",
    items: [
      {name:'esme-accounts', label:'ESME Accounts', onClick},
      {name:'ports', label:'Ports', onClick}
    ]
  },
  
  "divider",
  {
    name:'session-mgmt', label:'Session Management',
    items: [
      {name:'esme-sessions', label:'ESME Sessions', onClick},
      {name:'smsc-sessions', label:'SMSC Sessions', onClick},
      {name:'node-sessions', label:'Node Sessions', onClick}
    ]
  },
  
  "divider",
  {
    name:'rules-mgmt', label:'Rules Management', 
    items: [
      {name:'rules-config', label:'Rules Configuration', onClick},
      {name:'hub-rules-config', label:'Hub Rules Configuration', onClick}
    ]
  },
  
  "divider",
  {
    name:'msg-mgmt', label:'Message Management',
    item: [
      {name:'sms-query', label:'SMS Query', onClick},
    ]
  },

  "divider",
  {
    name:'user-mgmt', label:'User Management', 
    item: [
      {name:'change-pwd', label:'Change Password', onClick},
      {name:'provision-user', label:'Provision User', onClick},
      {name:'customer-portal-user', label:'Customer Portal User', onClick}
    ]
  },

  "divider",
  {
    name:'search', label:'Search', onClick
  },
  
  "divider",
  {
    name:'contact-us', label:'Contact Us', onClick
  },
  
  "divider",
  {
    name:'about', label:'About', onClick
  },
  "divider",
  {
    name:'logout', label:'Logout', onClick
  }
];

function App() {
  return (
    <div>
      <Sidebar items={items} />
    </div>
  );
}

export default App;