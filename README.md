# PU-Burgers

Кода на заданието е в папка ./src. Желателно е да прочетете **Структура на файловете** за да видите кой файл за какво е и в кой патърн участва тъй като съм сменял имената на класовете и методите и не са по конвеция както са в дизайн патърните. Написал съм каква е мойта интерпретация на заданието тъй като казахте че сте оставили свободно тълкуване от части.

## Структура на файловете

- index.ts - стартов файл ( main ) вика се ресторанта и му се подават поръчки
- Restaurant.ts - **Singleton** клас който приема поръчки създава командите, сетва ги на касиера и започва изпълнението им
- Cashier.ts - Играе ролята на Invoker в **Command DP**
- Cook.ts - Играе ролята на Receiver в **Command DP**
- Order.ts - Интърфейт за командата в **Command DP**
- Orders.ts - Няколко класа с конкретни имплементации на командите в **Command DP**
- BurgerWithSauce.ts - Интърфейс за базовия декоратон в Decorator DP и няколко конкретни класове имплементации за кетчуп и чеснов сос декоратори в **Decorator DP**
- Burger.ts - Интърфейс за бургера в **Factory Method DP**
- ConcreteBurgers.ts - Конкретни имплементации на бургера с логика как се приготвят за **Factory Method DP**
- Kitchen.ts - Базов абстрактен клас за създване и приготвяне на бургера за **Factory Method DP**
- Kitchenware.ts - Конкретни класове наследяват Kitchen и казват с коя посуда какъв бургер ще се правя - Наследяващите факторита в **Factory Method DP**

## Моята интерпретация на заданието

1. Касиерът приемал поръчка
2. Казва на готвача какъв бургер трябва да приготви.
3. Готвачът приготвял в кухнята съответния бургер
4. Към готовия бургер можело да се добавят чеснов сос или кетчуп

- Ресторант (Singleton) - ресторанта ще има в себе си методи за отваряне и затваряне с които ще инициализира и трие касиера и готвача. Ще има метод за приемане на поръчка и ще има брояч колко бургери са направени - като се затвори ресторант се изписва бройката

- Кухня и бургери ( Factory ) - избрах да ползвам factory method тъй като структурата не е толкова сложно. Имаме интърфейт за бургер който в себе си има рецептата си за приготвяне. Имаме конкретните класове за бургер - Класик, Кралски, Вегетариански които сами определят каква е логиакта за приготвянето им. Имаме базов абстрактен клас кухня който почва да приготвя бургера, приема параметър сос и ако е подаден кетчуп или чеснов сос, създава класове които да добавят сосовете към бургера (декоратори). Имаме кухненски посуда - грил, тостер, тиган които наследяват кухнята и override-ват метода на кухнята за взимане на рецепката на конкретния бургер ( creational метода на факторито )

- Добавяне на сосове към бургер - Decorator - имам класове за бургет със сос и за конкретни бургеси със сос - бугер с кетчуп и бургер с чеснов сос, викат логикат за рецептата на бургера и отгоре добавят логика за свагане на соса, който след това ще се подаде като опция от клиента.

- Касиер и Главен готвач - Command - Касиера ще играе роля на Invоker - ще приема поръчки ( set command ) и ще носи бележката на готвача за да запозне правенето им ( startExecute). Поръчките сами по себе си ще са командите и ще описват както прати готвача за да направи бургера. Готвача е в ролята на Receiver който знае бизнес логиката за направата на бургерите и как да действа с кухнята и посудата.

## Как да стартираме проекта

1. Tрябва да имате инсталиран **node**, препоръчително последна версия ( v19.8.1 )
2. Пишете `npm install` за да се инсталират всички пакети
3. Стартовия файл е `./src/index.ts`
4. Пишете `ts-node ./src/index.ts` или рънвате пре конфигураната команда `npm run start`