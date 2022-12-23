---
title: Как создать файл дампа
sidebar_position: 8
---

Для диагностики проблем и ошибок, с которыми пользователи могут столкнуться при использовании AdGuard, службе поддержки может понадобиться файл дампа. Файл дампа помогает разработчикам увидеть процессы, которые выполнялись в приложении за определённый период времени. Ниже вы можете ознакомиться с инструкциями о том, как собрать файл дампа на вашем компьютере.

1. Нажмите **Ctrl + Shift + Esc** и нажмите **Диспетчер задач**
2. В верхней строке меню выберите **Подробности**

![Сведения о диспетчере задач](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/details_en.png)

3. Щёлкните правой кнопкой мыши на процесс, для которого вы хотите создать файл дампа (например, служба поддержки может попросить вас создать дамп для `Adguard.exe`)
4. В раскрывающемся меню нажмите **Создать файл дампа**
5. Файл успешно создан!

![Создать файл дампа](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/create_dump_file_en.png)

После создания файла дампа перейдите к его расположению. Вам будет предложено открыть папку, содержащую файл дампа, сразу после его создания. В противном случае вы сможете найти его в папке **%tmp%**. Созданный файл дампа (`.DMP`) имеет то же название, что и процесс, который вы выбрали в предыдущих пунктах. Файл довольно большой, поэтому перед отправкой в поддержку сожмите его в архив.

> Обратите внимание, что AdGuard для Windows имеет два запущенных процесса (`Adguard.exe` и `AdguardSvc.exe`). Поэтому вам нужно создать файл дампа отдельно для каждого процесса.

![Процессы AdGuard](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/processes_en.png)

Когда вы отправляете файлы дампа в службу поддержки, пожалуйста, отправьте их вместе с логами, чтобы мы могли решить проблему как можно быстрее. [Here](../adguard-logs) you can check the instructions on how to collect the log file.