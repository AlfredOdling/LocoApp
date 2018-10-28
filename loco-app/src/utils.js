import React from 'react'

export const getGames = () => {
  const fuckTheDealer = {
    iconSrc: require('./assets/gameIcons/fuckthedealer.svg'),
    id: 'fuckTheDealer',
    title: 'F**K THE DEALER',
    texts: [
      (
        <p>
          En spelare är ansvarig för kortleken och kallas dealer. Dealern ber spelaren till höger gissa ett värde på översta kortet. Spelaren har två försök att gissa rätt. Om spelaren gissar rätt eller misslyckas på sista försöket läggs kortet på bordet med värdet synligt. Kort med samma värde placeras på varandra.
          Korten på bordet bör ligga i storleksordning.
        </p>
      ),
      (
        <p>
          Gissar spelaren rätt måste dealern dricka sex klunkar annars berättar dealern om den faktiska kortet är högre eller lägre än gissningen och spelaren får en ny gissning. Gissar spelaren rätt på andra försöket får dealern dricka tre klunkar.
          Gissar spelaren fel på andra försöket får spelaren dricka mellanskillnaden mellan kortet och gissningen.
        </p>
      ),
      (
        <p>
          Dealern skickar vidare kortleken till den vänstra spelaren om dealern klarat sig från att dricka efter 3 omgångar.
          Spelet är slut när hela kortleken ligger på bordet. Den sista dealern förlorar.
        </p>
      ),
    ]
  }

  const hetspong = {
    iconSrc: require('./assets/gameIcons/hetspong.svg'),
    id: 'hetspong',
    title: 'HETSPONG',
    texts: [
      (
        <p>
          Minst 12 muggar ställs i mitten av bordet i par på en linje. Fyll alla muggar med lämplig mängd av valfri dryck. Alla spelare placerar sig runt bordet.
          Två spelare som står långt bort ifrån varandra runt bordet börjar med varsin pingisboll och varsin tom mugg. Spelet går ut på att pricka den tomma muggen genom att studsa pingisbollen i bordet.
        </p>
      ),
      (
        <p>
          Prickar pingisbollen den tomma muggen på första försöket får spelaren skicka vidare muggen och pingisbollen till valfri spelare.
          Annars skickas muggen och pingisbollen vidare till den högra spelaren.
        </p>
      ),
      (
        <p>
          När en mugg hinner ikapp den andra muggen staplas dem i varandra. De staplade muggarna skickas vidare med en pingisboll till nästa högra spelare som fortsätter spelet. Spelaren vars mugg blev staplad i tar en ny mugg med dryck, tömmer muggen och fortsätter spelet.
        </p>
      ),
      (
        <p>
          Om pingisbollen prickar en mugg med dryck måste spelaren tömma muggen innan spelaren fortsätter. Stapla sedan de muggarna i varandra och fortsätt spelet.
          Spelet pågår tills alla muggar med dryck är tömda. Spelaren som måste dricka sista muggen med dryck förklaras till förlorare.
        </p>
      ),
    ]
  }

  const jagharaldrig = {
    iconSrc: require('./assets/gameIcons/jagharaldrig.svg'),
    id: 'jagharaldrig',
    title: 'JAG HAR ALDRIG',
    texts: [
      (
        <p>
        En spelar i taget säger: ” Jag har aldrig…” följt av ett påstående.
        Varje person dricker om de HAR gjort det.
        Om man inte har gjort påståendet men man VILL göra det ställer man koppen på huvudet. 
        </p>
      ),
      (
        <p>
         Story Time
         Om endast en person dricker bör spelaren berätta historien om hur påståendet blev sant.
        </p>
      ),
    ]
  }

  const pekleken = {
    iconSrc: require('./assets/gameIcons/pekleken.svg'),
    id: 'pekleken',
    title: 'PEKLEKEN',
    texts: [
      (
        <p>
        En spelare säger ett påstående som börjar med ”Vem i rummet…” och räknar till 3.
        På tre pekar alla spelare i rummet på den spelaren påståendet passar bäst in på.
        Alla dricker så många pekningar de får.
        </p>
      ),
      (
        <p>
        Story time
        Om alla pekar på samma person bör den spelaren berätta historien om påståendet. 
        </p>
      ),
    ]
  }

  const ringoffire = {
    iconSrc: require('./assets/gameIcons/ringoffire.svg'),
    id: 'ringoffire',
    title: 'RING OF FIRE',
    texts: [
      (
        <p>
        Ställ en mugg i mitten, denna kallas kungen. Placera alla korten från en kortlek runt kungen i en sluten cirkel. Varje spelare häller en skvätt av sin dryck i muggen. Spelaren som börjar drar ett kort från cirkeln. Spelaren läser upp och utför regeln för kortet. 
        Om en spelare bryter cirkeln dricker spelaren kungen.
        </p>
      ),
      (
        <p>
        2-6 röda kort
        Spelaren delar ut lika många klunkar som kortet visar.
        
        2-6 svarta kort
        Spelaren dricker lika många klunkar som kortet visar.
        </p>
      ),
      (
        <p>
        7 Kissekort
        Kortet sparas. Spelaren får när som helst använda kortet genom att gå på toa. 
        Spelaren får också ”sälja ” kortet till andra spelare.

        8 tumregeln
        Kortet sparas. Spelaren får närsomhelst sätta tummen på bordet. Alla spelare tävlar nu om att sätta tummen på pannan. Den som kommer sist dricker.
        </p>
      ),
      (
        <p>
        9 Tema 
        Spelaren som drog kortet bestämmer tema. 
        Varje spelare ska jag tur och ordning säga något som passar in på temat och som inte har sagts tidigare. Spelaren som misslyckas dricker, och det vanliga spelet fortsätter.

        10 ny regel
        Spelaren får bestämma en ny regel som gäller resten av spelet.
        </p>
      ),
      (
        <p>
        Kn
        Alla killar dricker.

        D skål
        Alla tjejer dricker.

        K 
        Spelaren dricker upp muggen i mitten av ringen. Alla fyller muggen igen.

        A- vattenfall
        Alla börja dricka och man får sluta dricka när personen innan slutar. 
        Spelaren som drog kortet får själv bestämma hur länge spelaren ska dricka. 
        </p>
      ),
    ]
  }

  const content = [
    fuckTheDealer,
    hetspong,
    jagharaldrig,
    pekleken,
    ringoffire,
  ]

  return content
}
