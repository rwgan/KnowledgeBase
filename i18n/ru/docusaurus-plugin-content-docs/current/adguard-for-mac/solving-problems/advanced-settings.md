---
title: Гид по расширенным настройкам
sidebar_position: 9
---

## Как перейти к расширенным настройкам

> Изменение *Низкоуровневых настроек* может вызвать проблемы с производительностью AdGuard, нарушить подключение к интернету или поставить под угрозу вашу безопасность и конфиденциальность. You should only open this section if you are sure of what you are doing or our support team has asked you to do it. To go to *Advanced settings*, follow this route: the AdGuard icon at the tray menu → the gear icon → Advanced → Advanced settings.

## Расширенные настройки

`network.extension.exclude.domains`

Перечисленные домены будут исключены из фильтрации в режиме *Сетевого расширения*. Разделяйте значения запятыми или переносом строки.

`network.extension.exclude.ports`

Перечисленные порты будут исключены из фильтрации в режиме *Сетевого расширения*. Разделяйте значения запятыми или переносом строки.

`network.extension.route.exclude`

Перечисленные маршруты будут исключены из фильтрации в режиме *Сетевого расширения*. Используйте IP-адрес или значение CIDR, чтобы задать маршрут. Разделяйте значения запятыми или переносом строки.

`network.extension.http.downgrade.bundleids`

Здесь можно задать список приложений, для которых протокол HTTP/2 будет понижен до HTTP/1.1 в режиме фильтрации *Сетевое расширение*. Идентификаторы приложений (bundle ID) разделяются запятой или переносом строки.

`network.extension.monterey.force.split.tunnel`

Здесь можно запретить AdGuard использовать маршрут по умолчанию, который включён в режиме *Сетевого расширения* на macOS Monterey. AdGuard использует маршрут по умолчанию, чтобы отключить Частный узел iCloud и Защиту конфиденциальности в Почте, так как не может работать с ними одновременно.

You will find more information about the problem [in this article](../icloud-private-relay).

`network.extension.dns.redirect.exclude.bundleids`

Здесь можно указать список приложений, осуществляющих DNS-запросы напрямую, а не через DNS-резолвер (например, некоторые VPN-клиенты или приложения с DNS-фильтрацией). Для них *в режиме Сетевого расширения* DNS-фильтрация будет отключена. Идентификаторы приложений (bundle ID) следует разделять запятой или переносом строки.

`network.https.ocsp.check`

Установив значение `true`, вы включите проверку отзыва HTTPS-сертификатов.

`network.filtering.localnetwork`

Установив значение `true`, вы включите фильтрацию локальной сети.

`network.filtering.localhost`

Установив значение `true`, вы включите фильтрацию loopback-соединений.

`upstream.proxy`

В этой строке можно указать прокси-сервер для исходящих соединений. Например:

* SOCKS5 proxy, требующий проверки подлинности — `socks5://username:password@proxy.example.org:1080`
* Локальный HTTP-прокси без аутентификации — `http://localhost:3128`

`upstream.proxy.socks5udp`

Установив значение `true`, вы включите перенаправление UDP-трафика через локальный сервер в режиме SOCKS5. Обратите внимание: если ваш SOCKS5-сервер не поддерживает протокол UDP, включение данной настройки приведёт к обрыву интернет-соединения.

`dns.proxy.bootstrap.ips`

Сюда можно внести IP-адреса DNS-серверов, которые будут использоваться для определения адреса зашифрованного DNS-сервера.

`dns.proxy.fallback.ips`

Здесь можно указать список IP-адресов DNS-серверов, которые будут использоваться в качестве резервных в случае, есть зашифрованный DNS-сервер не будет отвечать.

`dns.proxy.detect.search.domains`

Эта опция включает автоопределение домена локальной сети, который будет автоматически перенаправляться на резервный DNS-сервер вместо основного.

`dns.proxy.fallback.domains`

Здесь можно перечислить домены, для которых будет использоваться резервный DNS-сервер вместо основного.

`dns.proxy.adblockrules.blocking.mode`

Здесь вы можете указать тип ответа DNS-сервера на заблокированные запросы, соответствующие правилам в стиле блокировщика рекламы.

0 — respond with REFUSED 1 — respond with NXDOMAIN 2 — respond with 0.0.0.0 or the addresses specified in `dns.proxy.blocking.response.IPv4.address` and/or `dns.proxy.blocking.response.IPv6.address`

`dns.proxy.hostrules.blocking.mode`

Здесь вы можете указать тип ответа DNS-сервера на заблокированные запросы, соответствующие правилам hosts:

0 — respond with REFUSED 1 — respond with NXDOMAIN 2 — respond with 0.0.0.0 or the addresses specified in `dns.proxy.blocking.response.IPv4.address` and/or `dns.proxy.blocking.response.IPv6.address`

`dns.proxy.blocking.response.IPv4.address`

Здесь вы можете указать IPv4-адрес, который будет возвращаться в ответ на заблокированные "A" запросы, когда в `dns.proxy.adblockrules.blocking.mode` или в `dns.proxy.hostrules.blocking.mode` выбран тип ответа "ADDRESS".

`dns.proxy.blocking.response.IPv6.address`

Здесь вы можете указать IPv6-адрес, который будет возвращаться в ответ на заблокированные "AAAA" запросы, когда в `dns.proxy.adblockrules.blocking.mode` или в `dns.proxy.hostrules.blocking.mode` выбран тип ответа "ADDRESS".

`dns.proxy.block.AAAA.requests`

Здесь вы можете активировать блокировку DNS-запросов IPv6.

`dns.proxy.blocked.response.TTL.in.seconds`

Здесь вы можете указать значение TTL (время жизни пакета данных в протоколе IP), которое будет возвращено в ответ на заблокированный запрос.

`subscription.link.interception.userscript`

Активируйте эту функцию, если хотите, чтобы AdGuard автоматически перехватывал URL-адреса пользовательских скриптов и открывал диалоговое окно установки.

`subscription.link.interception.filter`

Активируйте эту функцию, если хотите, чтобы AdGuard автоматически перехватывал URL-адреса подписки (например, abp:subscribe) и открывал диалоговое окно установки пользовательского фильтра.