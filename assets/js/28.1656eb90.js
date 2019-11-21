(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{231:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"address-reuse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#address-reuse"}},[e._v("#")]),e._v(" Address Reuse")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("The first rule of Bitcoin privacy: "),s("br"),e._v(" "),s("strong",[e._v("never reuse addresses")]),e._v(".")])]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("The second rule of Bitcoin privacy: "),s("br"),e._v(" "),s("strong",[e._v("NEVER REUSE ADDRESSES")]),e._v(".")])]),e._v(" "),s("p",[e._v("But not all types of address reuse are equal - there are 6 different ways how there can be address reuse with Wasabi:")]),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-donations"}},[e._v("1. Donations")])]),s("li",[s("a",{attrs:{href:"#_2-coordinator-address"}},[e._v("2. Coordinator Address")])]),s("li",[s("a",{attrs:{href:"#_3-dusting"}},[e._v("3. Dusting")])]),s("li",[s("a",{attrs:{href:"#_4-intentional"}},[e._v("4. Intentional")])]),s("li",[s("a",{attrs:{href:"#_5-mixing-with-same-wallet-file"}},[e._v("5. Mixing With Same Wallet File")])]),s("li",[s("a",{attrs:{href:"#_6-wallet-state-issue"}},[e._v("6. Wallet State Issue")])])])]),s("p"),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"_1-donations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-donations"}},[e._v("#")]),e._v(" 1. Donations")]),e._v(" "),s("p",[e._v("Many peers post one of their Bitcoin addresses on the internet, and then the same address can be viewed by countless others, not just at the time of publishing, but even years afterwards.\nIt is very easy and convenient to have such a donation address, and thus many peers do this.")]),e._v(" "),s("p",[e._v("To register such a donation UTXO for coin join is not only legitimate, but desired.\nIf you accept donations to an address, you should be registering these UTXOs together to one CoinJoin round.\nOf course block explorers will note it as address reuse in the CoinJoin, which is technically correct, but it misleads the observer, because he will think something is wrong.\nYou better consolidate your donations into one UTXO instead of many, and you might as well do it in a CoinJoin.")]),e._v(" "),s("p",[s("strong",[e._v("How to improve?")]),e._v("\nTo encourage address reuse here, when we are selecting coins to CoinJoin, we should intentionally select coins together those are on the same address.")]),e._v(" "),s("h2",{attrs:{id:"_2-coordinator-address"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-coordinator-address"}},[e._v("#")]),e._v(" 2. Coordinator Address")]),e._v(" "),s("p",[e._v("The coordinator address participates in every CoinJoin, thus it’s address reuse.\nThe idea is to be transparent about what a Wasabi CoinJoin is and what isn’t, as well as to show the total fee earnings of Wasabi.\nOtherwise only blockchain analysis would be able to figure this information out, and it’d be able to do this without a mistake.\nThis way anyone can.")]),e._v(" "),s("p",[s("strong",[e._v("How to improve?")]),e._v("\nThe idea of coordinator address reuse is transparency.\nWe could give up transparency here to confuse less sophisticated observers by creating a new coordinator address for every CoinJoin.\nIt’s a different tradeoff, not an improvement.\nThe current coordinator address is "),s("code",[e._v("bc1qs604c7jv6amk4cxqlnvuxv26hv3e48cds4m0ew")]),e._v(", and the new one is "),s("code",[e._v("bc1qa24tsgchvuxsaccp8vrnkfd85hrcpafg20kmjw")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"_3-dusting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-dusting"}},[e._v("#")]),e._v(" 3. Dusting")]),e._v(" "),s("p",[e._v("A while ago someone dusted many Wasabi CoinJoin UTXOs, this is also called the "),s("a",{attrs:{href:"https://en.bitcoin.it/Privacy#Forced_address_reuse",target:"_blank",rel:"noopener noreferrer"}},[e._v("forced address reuse attack"),s("OutboundLink")],1),e._v(".\nHere the attacker sends a small amount of bitcoin to an already existing address of a old coin.\nThe hope is that this dust coin is consolidated with another coin, thus linking the two in a cluster.\nThis is also address reuse, there’s nothing to do about it, Bitcoin is a push-based system.")]),e._v(" "),s("p",[s("strong",[e._v("How to improve?")]),e._v("\nIn response we introduced a default, modifiable dust limit.\nWhile this mitigates the potential privacy implications, this doesn’t make the address reuse to not appear in block explorers.")]),e._v(" "),s("h2",{attrs:{id:"_4-intentional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-intentional"}},[e._v("#")]),e._v(" 4. Intentional")]),e._v(" "),s("p",[e._v("Since Wasabi is libre and open source, anyone can modify a fork of Wasabi to make sure the same two addresses are recycled in every CoinJoin registration.\nThis is someone intentionally deanonymizing himself, such a behavior might have quite dubious motives.\nHowever there are numerous claims about this being some kind of Sybil attack, which makes no sense in multiple levels.\nOne bad actor participating in numerous mixes lowers our anonymity set, but only a bit.\nIf there’s 100 participants in a mix and of them one isn’t anonymous it makes no difference.\nFurthermore if I would want to Sybil attack Wasabi I would do it in a way to try to hide the fact that I’m Sybil attacking, or at the very least I wouldn’t make changes to the code to announce that I’m Sybil attacking.")]),e._v(" "),s("p",[s("strong",[e._v("How to improve?")]),e._v("\nThere’s nothing to improve.\nBecause the CoinJoin output is blinded in the first steps of the ceremony, it cannot be noticed before the output registration phase.\nWe could refuse the registration of these actors, but then they’d change their addresses, then we’d have to pick them out again, then they’d change their addresses again and so on…\nThis would also decrease the denial of service protections currently implemented.")]),e._v(" "),s("h2",{attrs:{id:"_5-mixing-with-same-wallet-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-mixing-with-same-wallet-file"}},[e._v("#")]),e._v(" 5. Mixing With Same Wallet File")]),e._v(" "),s("p",[e._v("In order to increase the speed of mixing large amounts, some are running multiple Wasabi instances with the same wallet file.\nIn this case one wallet software instance is not aware of the other registering the same coin to a mix and it results in address reuse.\nThis is not how Wasabi is designed to be used, and such a hack around the proper work flow is always dangerous.")]),e._v(" "),s("p",[s("strong",[e._v("How to improve?")]),e._v("\nWe could prevent mixing with the same wallet file, but we have long term plans to fix it.\nIn the future we want to prevent opening multiple Wasabi instances altogether.\nBut for this we will have to build out multi-wallet monitoring and by extension multiwallet loading so to not take away existing functionality without providing an alternative.")]),e._v(" "),s("h2",{attrs:{id:"_6-wallet-state-issue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-wallet-state-issue"}},[e._v("#")]),e._v(" 6. Wallet State Issue")]),e._v(" "),s("p",[e._v("Finally we arrived to the type of address reuse that was actually a known bug in Wasabi.\nThis was happening, because Wasabi sometimes lost unconfirmed transactions, so the wallet wasn’t aware of that an address was used, thus it registered it to a CoinJoin.\nThe unconfirmed tx loss is thought to be eliminated since version 1.1.6, but of course this still happens for those who are using older software versions.\nBecause only very few users report this bugs there’s no need for forcing everyone to update.\nAlthough rigorous testing by several contributors, we could not reproduce the bug in the v1.1.6 release.")])])}),[],!1,null,null,null);t.default=n.exports}}]);