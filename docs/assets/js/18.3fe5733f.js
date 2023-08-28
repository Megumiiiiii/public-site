(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{297:function(e,t,a){"use strict";a.r(t);var i=a(10),n=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"gateway-architecture"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gateway-architecture"}},[e._v("#")]),e._v(" Gateway Architecture")]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("A gateway’s primary role in the Arweave ecosystem is to act as a bridge between the Arweave network and the outside world. This means that a gateway's main task is to make it easier for users to interact with the Arweave network by simplifying the technical processes of writing, reading, and discovering data on the blockweave in a trust-minimized fashion.")]),e._v(" "),t("p",[e._v("The core functions of a general Arweave gateway are broken down into the following areas.")]),e._v(" "),t("p",[t("strong",[e._v("Writing data involves:")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Proxying Layer 1 transaction headers to one or more healthy and active Arweave nodes (miners) to facilitate inclusion in the mempools of as many nodes as possible.")])]),e._v(" "),t("li",[t("p",[e._v("Proxying chunks for Layer 1 Arweave transactions to Arweave nodes to help facilitate storage and replication of the chunks on the blockweave.")])]),e._v(" "),t("li",[t("p",[e._v("Receiving and bundling so-called Layer 2 data items (e.g., ANS-104 spec) as Layer 1 transactions.")])])]),e._v(" "),t("p",[t("strong",[e._v("Reading involves retrieving:")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Transaction headers for a Layer 1 Arweave transaction.")])]),e._v(" "),t("li",[t("p",[e._v("Individual data chunks for a Layer 1 Arweave transaction.")])]),e._v(" "),t("li",[t("p",[e._v("Blocks from the blockweave.")])]),e._v(" "),t("li",[t("p",[e._v("Storage pricing rates for data from the Arweave node network.")])]),e._v(" "),t("li",[t("p",[e._v("Contiguous streams of chunks representing an entire Layer 1 transaction.")])]),e._v(" "),t("li",[t("p",[e._v("Layer 2 bundled data items (e.g., ANS-104).")])]),e._v(" "),t("li",[t("p",[e._v("Wallet information (e.g., token balance).")])])]),e._v(" "),t("p",[t("strong",[e._v("Discovering data involves:")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Facilitating efficient, structured queries for Layer 1 and Layer 2 transaction and wallet data by:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("examining incoming streams of data (i.e., directly ingested transactions and data items, blocks emitted by the chain, etc.).")])]),e._v(" "),t("li",[t("p",[e._v("managing index data in a database or analogous data store.")])])])]),e._v(" "),t("li",[t("p",[e._v("Parsing and executing user queries.")])]),e._v(" "),t("li",[t("p",[e._v("Facilitating friendly-path routing via Arweave manifest indexing.")])])]),e._v(" "),t("h2",{attrs:{id:"ar-io-gateway-benefits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ar-io-gateway-benefits"}},[e._v("#")]),e._v(" AR.IO Gateway Benefits")]),e._v(" "),t("p",[e._v("AR.IO gateways provide many new benefits and capabilities beyond general Arweave gateways:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Providing the modularity and configurability necessary for operating extensible gateways that can be deployed at small or large scales to meet the needs of specific applications, use cases, communities, or business models.")])]),e._v(" "),t("li",[t("p",[e._v("Providing pluggable means for consuming telemetry data for internal and external monitoring and alerting.")])]),e._v(" "),t("li",[t("p",[e._v("Facilitating friendly-subdomain-name routing to Arweave transactions via a direct integration with the Arweave Name System (ArNS).")])]),e._v(" "),t("li",[t("p",[e._v("Facilitating configurable content moderation policies.")])]),e._v(" "),t("li",[t("p",[e._v("Providing connectivity to a decentralized network of other AR.IO gateways, enabling data sharing and other shared workloads.")])])]),e._v(" "),t("h2",{attrs:{id:"gateway-modularity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gateway-modularity"}},[e._v("#")]),e._v(" Gateway Modularity")]),e._v(" "),t("p",[e._v("A design principle of AR.IO gateways is that their core components should be interchangeable with compatible implementations.")]),e._v(" "),t("p",[e._v("The core services in the gateway are written in Typescript, with flexible interfaces to the various subsystems and databases. This allows operators to customize their gateway to meet their specific requirements. Gateway services can be turned on or off depending on the operator's needs. For example, an operator might choose to have their gateway serve data, but not actively index Layer 2 bundled data.")]),e._v(" "),t("img",{staticClass:"amazingdiagram",attrs:{src:e.$withBase("/images/diagram-7-3-modded.png")}}),e._v(" "),t("p",[e._v("This flexibility also allows operators to utilize the technologies that are appropriate for the scale and environments in which they operate.")]),e._v(" "),t("p",[e._v("For example, small scale operators might want to use low-overhead relational databases to power their indexing while larger scale operators might opt to use cloud-native, horizontally scalable databases. Analogous examples for storage and caching exist as well.")]),e._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("table",{staticClass:"inline-table"},[t("tr",[t("th",{staticStyle:{"font-weight":"bold"},attrs:{colspan:"5"}},[e._v("Gateway Tech Stack Options")])]),e._v(" "),t("tr",[t("th",[e._v("Topology")]),e._v(" "),t("th",[e._v("Chain Index")]),e._v(" "),t("th",[e._v("Budle Index")]),e._v(" "),t("th",[e._v("Data Index")]),e._v(" "),t("th",[e._v("Data Store")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"font-weight":"bold"}},[e._v("Small")]),e._v(" "),t("td",[e._v("SQLite")]),e._v(" "),t("td",[e._v("SQLite")]),e._v(" "),t("td",[e._v("SQLite")]),e._v(" "),t("td",[e._v("Local File System")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"font-weight":"bold"}},[e._v("Large")]),e._v(" "),t("td",[e._v("PostgreSQL")]),e._v(" "),t("td",[e._v("Cassandra")]),e._v(" "),t("td",[e._v("Cassandra")]),e._v(" "),t("td",[e._v("S3 Compatible")])])])]),e._v(" "),t("h2",{attrs:{id:"arns-indexing-and-routing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arns-indexing-and-routing"}},[e._v("#")]),e._v(" ARNS Indexing and Routing")]),e._v(" "),t("p",[e._v("The Arweave Name System’s (ArNS) state is managed by the IO token’s SmartWeave smart contract. AR.IO gateways shall perform the following minimum functions relative to ArNS:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Actively track state changes in the contract.")])]),e._v(" "),t("li",[t("p",[e._v("Maintain up-to-date indexes for routing configurations based on the state of the IO contract as well as the states of the Arweave Name Token (ANT) contracts to which each name is affiliated.")])]),e._v(" "),t("li",[t("p",[e._v("Manage the expiration of stale records.")])]),e._v(" "),t("li",[t("p",[e._v("Facilitate ArNS routing based on the subdomains specified on incoming requests where appropriate.")])]),e._v(" "),t("li",[t("p",[e._v("Provide a custom HTTP response header for ArNS requests indicating the corresponding Arweave transaction ID.")])])]),e._v(" "),t("h2",{attrs:{id:"content-moderation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#content-moderation"}},[e._v("#")]),e._v(" Content Moderation")]),e._v(" "),t("p",[e._v("The AR.IO Network will adopt Arweave’s self-censorship or voluntary censorship model whereby every participant of the network has the autonomy to decide which content they want to store, serve, and see. Each gateway operating on the network has the right and ability to blocklist any content (or address) that is deemed in violation of its content policies or non-compliant with local regulations.")])])}),[],!1,null,null,null);t.default=n.exports}}]);