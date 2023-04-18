"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[905],{4137:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=d(t),c=i,m=k["".concat(s,".").concat(c)]||k[c]||u[c]||l;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=k;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var d=2;d<l;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9294:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=t(7462),i=(t(7294),t(4137));const l={title:"Erweiterte Einstellungen",sidebar_position:9},a=void 0,o={unversionedId:"adguard-for-mac/solving-problems/advanced-settings",id:"adguard-for-mac/solving-problems/advanced-settings",title:"Erweiterte Einstellungen",description:"Wo findet man die Eweiterten Einstellungen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/advanced-settings.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/advanced-settings",permalink:"/KnowledgeBase/de/adguard-for-mac/solving-problems/advanced-settings",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/advanced-settings.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Erweiterte Einstellungen",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Mail-Aktivit\xe4ten und AdGuard sch\xfctzen",permalink:"/KnowledgeBase/de/adguard-for-mac/solving-problems/protect-mail-activity"},next:{title:"Filterung im Tor-Browser einrichten",permalink:"/KnowledgeBase/de/adguard-for-mac/solving-problems/tor-filtering"}},s={},d=[{value:"Wo findet man die Eweiterten Einstellungen",id:"wo-findet-man-die-eweiterten-einstellungen",level:2},{value:"Erweiterte Einstellungen",id:"erweiterte-einstellungen",level:2}],p={toc:d};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"wo-findet-man-die-eweiterten-einstellungen"},"Wo findet man die Eweiterten Einstellungen"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Das \xc4ndern von ",(0,i.kt)("em",{parentName:"p"},"Low-Level-Einstellungen")," kann Probleme mit der Leistung von AdGuard verursachen, die Internetverbindung unterbrechen oder Ihre Sicherheit und Privatsph\xe4re gef\xe4hrden. Sie sollten diesen Abschnitt nur \xf6ffnen, wenn Sie sicher sind, was Sie tun, oder wenn unser Support-Team Sie darum gebeten hat. Um zu ",(0,i.kt)("em",{parentName:"p"},"Erweiterte Einstellungen")," zu gelangen, folgen Sie dieser Route: das AdGuard-Symbol im Taskleistenmen\xfc \u2192 das Zahnradsymbol \u2192 Erweitert \u2192 Erweiterte Einstellungen.")),(0,i.kt)("h2",{id:"erweiterte-einstellungen"},"Erweiterte Einstellungen"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"network.extension.exclude.domains")),(0,i.kt)("p",null,"Die aufgelisteten Domains werden von der Filterung im Modus ",(0,i.kt)("em",{parentName:"p"},"Netzwerk-Erweiterung")," ausgeschlossen. Verwenden Sie ein Komma oder einen Zeilenumbruch, um Werte zu trennen."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"network.extension.exclude.ports")),(0,i.kt)("p",null,"Die aufgelisteten Ports werden im Modus ",(0,i.kt)("em",{parentName:"p"},"Netzwerk-Erweiterung")," von der Filterung ausgeschlossen. Verwenden Sie ein Komma oder einen Zeilenumbruch, um Werte zu trennen."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"network.extension.route.exclude")),(0,i.kt)("p",null,"Die aufgelisteten Routen werden von der Filterung im Modus ",(0,i.kt)("em",{parentName:"p"},"Netzwerk-Erweiterung")," ausgeschlossen. Legen Sie Routen mit einer IP-Adresse oder einem Ziel-CIDR fest. Trennen Sie die Werte durch Kommas oder Zeilenumbr\xfcche."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"network.extension.http.downgrade.bundleids")),(0,i.kt)("p",null,"Hier k\xf6nnen Sie eine Liste von Anwendungen angeben, f\xfcr die das HTTP/2-Protokoll im Filtermodus ",(0,i.kt)("em",{parentName:"p"},"Netzwerk-Erweiterung")," auf HTTP/1.1 heruntergestuft wird. Die Bundle-ID sollte durch ein Komma oder einen Zeilenumbruch getrennt werden."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"network.extension.monterey.force.split.tunnel")),(0,i.kt)("p",null,"Hier k\xf6nnen Sie AdGuard verbieten, die \u201eStandard-Route\u201c zu verwenden, die im Modus ",(0,i.kt)("em",{parentName:"p"},"Netzwerk-Erweiterung")," unter macOS Monterey standardm\xe4\xdfig aktiviert ist. AdGuard verwendet \u201eStandard-Route\u201c, um iCloud Private Relay und Protect Mail Activity zu deaktivieren, da es nicht gleichzeitig mit ihnen arbeiten kann."),(0,i.kt)("p",null,"Weitere Informationen zum Problem finden Sie in ",(0,i.kt)("a",{parentName:"p",href:"../icloud-private-relay"},"diesem Artikel"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"network.extension.dns.redirect.exclude.bundleids")),(0,i.kt)("p",null,"Hier k\xf6nnen Sie eine Liste von Anwendungen angeben, die DNS-Abfragen direkt und nicht \xfcber den System-DNS-Resolver durchf\xfchren (z. B. einige VPN-Clients oder DNS-Filteranwendungen). Die DNS-Filterung wird f\xfcr sie im ",(0,i.kt)("em",{parentName:"p"},"Netzwerk-Erweiterung")," Modus deaktiviert. Die Bundle-IDs sollten durch ein Komma oder einen Zeilenumbruch getrennt werden."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"network.dns.filter.secure.request")),(0,i.kt)("p",null,"Redirects secure DNS requests to a local DNS proxy, if there is one available."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"network.https.ocsp.check")),(0,i.kt)("p",null,"Indem Sie ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," festlegen, aktivieren Sie die Sperrpr\xfcfung von HTTPS-Zertifikaten."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"network.tcp.keepalive.enabled")),(0,i.kt)("p",null,"Periodically sends TCP packets over an idle connection to ensure that it remains active and to renew NAT timeouts."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"network.tcp.keepalive.interval.seconds")),(0,i.kt)("p",null,"Idle time, in seconds, before sending a keepalive probe. If 0 is specified, the system will use the default value."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"network.tcp.keepalive.timeout.seconds")),(0,i.kt)("p",null,"Time, in seconds, before sending another keepalive probe to an unresponsive peer. If 0 is specified, the value selected by the system will be used."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"network.https.ech.enabled")),(0,i.kt)("p",null,"Uses a local DNS proxy to look for configs in the ECH Config Lists. If found, encrypts ClientHellos."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"network.https.enforce.certificate.transparency")),(0,i.kt)("p",null,"Verifies the authenticity of all certificates for the domain based on Chrome Certificate Transparency Policy."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"network.filtering.localnetwork")),(0,i.kt)("p",null,"Indem Sie ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," setzen, aktivieren Sie die lokale Netzwerkfilterung."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"network.filtering.localhost")),(0,i.kt)("p",null,"Wenn Sie ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," setzen, aktivieren Sie die LoopBack-Filterung."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dns.proxy.bootstrap.ips")),(0,i.kt)("p",null,"Hier k\xf6nnen Sie die IP-Adressen der DNS-Server eingeben, die verwendet werden, um die Adresse des verschl\xfcsselten DNS-Servers zu ermitteln."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dns.proxy.fallback.ips")),(0,i.kt)("p",null,"Hier k\xf6nnen Sie eine Liste mit IP-Adressen von DNS-Servern angeben, die als Backup verwendet werden, falls der verschl\xfcsselte DNS-Server nicht antwortet."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dns.proxy.fallback.on.upstreams.failure.enabled")),(0,i.kt)("p",null,"Normal queries will be redirected to a fallback upstream if all normal upstreams fail."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dns.proxy.detect.search.domains")),(0,i.kt)("p",null,"Diese Option aktiviert die automatische Erkennung der lokalen Netzwerkdomains, die automatisch auf den Fallback-DNS-Server statt auf den Haupt-DNS-Server umgeleitet wird."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dns.proxy.fallback.domains")),(0,i.kt)("p",null,"Hier k\xf6nnen Sie Domains auflisten, f\xfcr die der Fallback-DNS-Server anstelle des Haupt-DNS-Servers verwendet werden soll."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dns.proxy.adblockrules.blocking.mode")),(0,i.kt)("p",null,"Hier k\xf6nnen Sie die Art der Antwort des DNS-Servers auf blockierte Anfragen festlegen, die den Regeln im Stil von Werbeblockern entsprechen."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0 \u2014 respond with REFUSED"),(0,i.kt)("li",{parentName:"ul"},"1 \u2014 respond with NXDOMAIN"),(0,i.kt)("li",{parentName:"ul"},"2 \u2014 respond with 0.0.0.0 or the addresses specified in ",(0,i.kt)("inlineCode",{parentName:"li"},"dns.proxy.blocking.response.IPv4.address")," and/or ",(0,i.kt)("inlineCode",{parentName:"li"},"dns.proxy.blocking.response.IPv6.address"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dns.proxy.hostrules.blocking.mode")),(0,i.kt)("p",null,"Hier k\xf6nnen Sie die Art der Antwort des DNS-Servers auf blockierte Anfragen entsprechend den Hosts-Regeln festlegen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0 \u2014 respond with REFUSED"),(0,i.kt)("li",{parentName:"ul"},"1 \u2014 respond with NXDOMAIN"),(0,i.kt)("li",{parentName:"ul"},"2 \u2014 respond with 0.0.0.0 or the addresses specified in ",(0,i.kt)("inlineCode",{parentName:"li"},"dns.proxy.blocking.response.IPv4.address")," and/or ",(0,i.kt)("inlineCode",{parentName:"li"},"dns.proxy.blocking.response.IPv6.address"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dns.proxy.blocking.response.IPv4.address")),(0,i.kt)("p",null,"Hier k\xf6nnen Sie die IPv4-Adresse angeben, die als Antwort auf blockierte \u201eA\u201c-Anfragen zur\xfcckgegeben wird, wenn ",(0,i.kt)("inlineCode",{parentName:"p"},"dns.proxy.adblockrules.blocking.mode")," oder ",(0,i.kt)("inlineCode",{parentName:"p"},"dns.proxy.hostrules.blocking.mode")," auf den Antworttyp \u201eADRESSE\u201c eingestellt ist."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dns.proxy.blocking.response.IPv6.address")),(0,i.kt)("p",null,"Hier k\xf6nnen Sie die IPv6-Adresse angeben, die als Antwort auf blockierte \u201eAAAA\u201c-Anfragen zur\xfcckgegeben wird, wenn ",(0,i.kt)("inlineCode",{parentName:"p"},"dns.proxy.adblockrules.blocking.mode")," oder ",(0,i.kt)("inlineCode",{parentName:"p"},"dns.proxy.hostrules.blocking.mode")," auf den Antworttyp \u201eADRESSE\u201c eingestellt ist."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dns.proxy.block.AAAA.requests")),(0,i.kt)("p",null,"Hier k\xf6nnen Sie die Blockierung von IPv6-DNS-Abfragen aktivieren."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dns.proxy.blocked.response.TTL.in.seconds")),(0,i.kt)("p",null,"Hier k\xf6nnen Sie den TTL-Wert (Time to Live) angeben, der als Antwort auf eine blockierte Anfrage zur\xfcckgegeben wird."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dns.proxy.parallel.upstream.queries.enabled")),(0,i.kt)("p",null,"All upstreams are queried simultaneously. The first response is returned."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dns.proxy.servfail.on.upstreams.failure.enabled")),(0,i.kt)("p",null,"Responds to upstream failure with a SERVFAIL packet."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dns.proxy.http3.enabled")),(0,i.kt)("p",null,"Enables HTTP/3 for DNS-over-HTTPS upstreams to accelerate connection."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dns.proxy.block.encrypted.client.hello.response")),(0,i.kt)("p",null,"Removes the Encrypted Client Hello parameters from responses."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"stealth.antidpi.http.split.fragment.size")),(0,i.kt)("p",null,"Adjusts the size of the HTTP request fragmentation. Accepted values: 1\u20131500. If an invalid size is specified, the system will use the default value."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"stealth.antidpi.clienthello.split.fragment.size")),(0,i.kt)("p",null,"This option specifies the size of TCP packet fragmentation, which helps avoid deep packet inspection. Accepted values: 1\u20131500. If an invalid size is specified, the system will use the default value."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"stealth.antidpi.http.space.juggling")),(0,i.kt)("p",null,'Adds extra space between the HTTP method and the URL and removes space after the "Host:" field.'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"subscription.link.interception.userscript")),(0,i.kt)("p",null,"Aktivieren Sie diese Funktion, wenn Sie m\xf6chten, dass AdGuard die URLs von Benutzerskripten automatisch abf\xe4ngt und das Installationsfenster \xf6ffnet."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"subscription.link.interception.filter")),(0,i.kt)("p",null,"Aktivieren Sie diese Funktion, wenn Sie m\xf6chten, dass AdGuard Abonnement-URLs (z. B. abp:subscribe usw.) automatisch abf\xe4ngt, und \xf6ffnen Sie das benutzerdefinierte Filter-Setup-Fenster."))}u.isMDXComponent=!0}}]);