# Meilenstein 1
**Thanh Cong Nguyen**   
**Manh Trung Hoang**  
**Hong Quan Nguyen**  
**Nguyen Vu**  
**Timothy Hioe**

## 1. Problemraum

In der heutigen medizinischen Praxis steht Ärzt:innen durchschnittlich nur 7,6 Minuten pro Patient zur Verfügung. In dieser begrenzten Zeit ist eine schnelle, fehlerfreie Informationsverarbeitung entscheidend. Während unsere User Research zeigt, dass das Auffinden relevanter Informationen gut funktioniert, offenbaren sich erhebliche Schwächen in der Benutzerfreundlichkeit bestehender Softwaresysteme – insbesondere bei häufig genutzten Funktionen wie dem Adressbuch und der Nachrichtenfunktion.

**Ziel** unseres Projekts ist die gezielte Optimierung dieser Funktionen, um den Arbeitsalltag medizinischen Personals spürbar zu entlasten. So soll das Adressbuch nicht mehr automatisch alle Patientenkontakte übernehmen, sondern Nutzer:innen die Möglichkeit bieten, gezielt Einträge vorzunehmen. Gleichzeitig soll der Briefkopf in der Nachrichtenfunktion automatisch ausgefüllt werden, um Schreibaufwand zu reduzieren und Fehler zu vermeiden. Das übergeordnete Ziel ist ein intuitives, zeitsparendes Dashboard, das ohne aufwändiges Einarbeiten genutzt werden kann.

**Idealen Zustand**
Im optimalen ermöglicht das geplante System:
- Ärzt:innen: können Nachrichten schneller verfassen, da der Briefkopf automatisch ausgefüllt wird. Dadurch bleibt mehr für die Patientenversorgung.
- Medizinische Fachangestellte profitieren von einem aufgeräumten Adressbuch mit gezielt gespeicherten Kontakten und einer einfachen Suchfunktion.
- Die gesamte Praxis: arbeitet effizienter, da das System intuitiv bedienbar ist und keine lange Einarbeitung erfordert. Fehlerquellen werden reduziert, und die Abläufe werde klarer und schneller.

**Abgegrenzt** werden bewusst Problemfelder wie die Praxisorganisation, Terminplanung oder die Notfallversorgung in Kliniken, da diese zwar relevante Themen darstellen, jedoch nicht zur konkreten Problemstellung der Benutzeroberflächengestaltung in regulären Arztpraxen gehören. Auch vollständig adaptive oder umfassend erweiterbare Softwaresysteme werden ausgeschlossen, da deren Komplexität nicht zur Zielgruppe passt.

**Alternative Lösungsansätze**, etwa die Erhöhung der ärztlichen Kapazitäten oder mehr Zeit pro Patient, wurden berücksichtigt, jedoch aufgrund organisatorischer und wirtschaftlicher Hürden als nicht praktikabel eingestuft. Ebenso wurde die Idee eines umfassenden Systems mit allen Funktionen verworfen, da es der gewünschten Intuitivität widerspricht.

**Annahmen**, die dem Projekt zugrunde liegen:
- Alle relevanten Patientendaten sind bereits im System verfügbar.
- Ärzt:innen besitzen grundlegende Kenntnisse im Umgang mit der bestehenden Software.
- Verbesserungen der Benutzerführung und -logik können unmittelbar zur Effizienzsteigerung beitragen, ohne dass ein erhöhter Schulungsaufwand notwendig ist.

Durch diese gezielte Eingrenzung des Problemraums können wir eine bedarfsgerechte Lösung entwickeln, die sich am realen Nutzungskontext orientiert und konkret auf die Arbeitswirklichkeit der Zielgruppe.

## 2. User research

**Zielsetzung**:
Das Ziel des User Research ist es, die konkreten Bedürfnisse, Erwartungen und Herausforderungen der Nutzer:innen im Arbeitsalltag zu verstehen. Diese Erkenntnisse bilden die Grundlage für die Entwicklung eines benutzerfreundlichen, effizienten Systems, das gezielt die Arbeitsprozesse im Praxisumfeld unterstützt.

**Method :*** Interview

**Die zentralen Fragen** :
* Welche Aufgaben führen Nutzer:innen täglich im System aus?
* Welche Informationen benötigen Nutzer:innen besonders häufig – und wie leicht sind diese auffindbar?
* Welche Aspekte der aktuellen Benutzeroberfläche empfinden Nutzer:innen als unübersichtlich oder zeitraubend?
* Welche Erwartungen und Wünsche haben Nutzer:innen an ein optimiertes System?
* Welche konkreten Schwierigkeiten treten bei der Nutzung des Adressbuchs oder der Nachrichtenfunktion auf?
---
###  Zielgruppe 1: Ärzt:innen

### Merkmale
- Arbeiten unter hohem Zeitdruck (ca. 7,6 Minuten pro Patient)
- Hohe Verantwortung in Diagnose und Therapie
- Häufige Nutzung von Nachrichten- und Dokumentationsfunktionen

### Bedürfnisse
- Schneller Zugriff auf Patientendaten und Kontakte
- Automatisierung von Standardprozessen (z. B. Nachrichtenvorlagen)
- Intuitive, störungsfreie Bedienoberfläche

### Herausforderungen
- Zeitmangel bei der Nutzung komplexer Systeme
- Fehleranfälligkeit bei manueller Dateneingabe
- Hoher Aufwand für nicht-medizinische Tätigkeiten (z. B. Suchen)

---
### ️ Zielgruppe 2: Pflegepersonal / MFA

### Merkmale
- Verantwortlich für Organisation, Kommunikation, Datenpflege
- Erste Anlaufstelle für Patient:innen
- Arbeiten oft parallel an mehreren Aufgaben

### Bedürfnisse
- Übersichtliches, leicht durchsuchbares Adressbuch
- Wenige Klicks und klare Menüstruktur
- Reibungsloser Ablauf bei Routinetätigkeiten

### Herausforderungen
- Unübersichtliche Benutzeroberflächen führen zu Fehlern
- Zeitverlust durch doppelte Dokumentation
- Stress durch technische Komplexität im Alltag

---
### Interview 1 :

**Guten Tag! Vielen Dank, dass Sie sich Zeit für unser Interview nehmen. Könnten Sie bitte kurz beschreiben, wie ein typischer Arbeitstag für Sie aussieht?***

- Guten Tag! Ich arbeite täglich mit einer Praxissoftware, vor allem zur Patientendokumentation und für Medikamentenverordnungen.

**Nutzen Sie diese Software regelmäßig?**

- Ja, ich arbeite täglich damit

**Gibt es Probleme bei der Nutzung der Software?**

- Ja, wenn viele Benutzer gleichzeitig angemeldet sind, wird das System sehr langsam. Außerdem kann ich bei der Medikamentenverordnung nur einen Tag auswählen, nicht mehrere.

**Gab es Situationen, in denen Sie dadurch viel Zeit verloren haben?**

- Ja, besonders bei der Medikamentenverordnung dauert alles länger und erhöht Fehlerrisiko.

**Welche Schritte versuchen Sie zu vermeiden?**

- Ich vermeide, die Medikamente täglich einzeln zu verordnen, wenn möglich.

**Was ist Ihnen bei einer digitalen Lösung besonders wichtig?**

- Die Software muss schnell sein und Fehler sollten sich leicht korrigieren lassen.

**Wie sollte ideale Software Ihre Arbeit unterstützen?**

- Sie sollte einfach und schnell bedienbar sein, damit ich mich auf Aufgaben konzentrieren kann.

**Welche Funktionen wünschen Sie sich einer neuen Software?**

- Eine einfache, schnelle Benutzeroberfläche mit wenigen Klicks und die Möglichkeit, mein Konto selbst zu verwalten

**Wie arbeiten Sie am festen Arbeitsplatz oder auch mobil ?**

- Beides - hauptsächlich am PC, manchmal auch am Tablet

**Wie schätzen Sie Ihre technischen Kenntnisse ein?**

- Durchschnittlich, aber ich bin anpassungsfähig

**Wie viel Zeit benötigen Sie normalerweise, um sich an neue Systeme zu gewöhnen?**

- Etwa 1-2 Wochen, besonders mit einer guten Anleitung.

---
### Interview 2 :

**Vielen Dank, dass Sie sich Zeit für das Gespräch genommen haben. Erzählen Sie doch bitte ein wenig über Ihre aktuelle Position.**

- Ich mache derzeit ein Praktikum im Krankenhaus – meine erste richtige Praxiserfahrung.

**Und wie würden Sie Ihren Arbeitsalltag beschreiben?**

- Ziemlich hektisch. Es gibt ständig was zu tun, man läuft viel rum.

**Welche digitalen Tools nutzen Sie dabei regelmäßig?**

- Meistens nur Excel – ist nicht ideal, aber reicht irgendwie.

**Gibt es Aspekte an der Software, die Sie stören oder verwirrend finden?**

- Ja, zu viele Untermenüs und Icons – man verliert leicht den Überblick.

**Haben Sie denn schon mal durch die Software Zeit verloren oder Fehler gemacht?**

- Nein, bisher nicht. Ich bin eher vorsichtig.

**Wie finden Sie normalerweise Informationen in der Software?**

- Über das Hilfemenü.

**Was würden Sie sich wünschen?**

- Ich möchte, dass das Menü leichter lesbar ist und sich auf die wesentlichen Informationen konzentriert.

**Wie wichtig ist Personalisierung für Sie?**

- Nicht so wichtig – vielleicht 2 von 5.

**Arbeiten Sie mobil oder an einem festen Arbeitsplatz?**

- Mit allem – Desktop, Laptop und manchmal Tablet.

**Ist es wichtig, dass die Software überall gleich gut funktioniert?**

- Ja, sehr. Sonst wird’s schnell nervig.

**Wie viel Zeit haben Sie zum Einarbeiten?**

- Ein paar kurze Sitzungen, verteilt über mehrere Tage.

--- 
### Interview 3

**Vielen Dank, dass Sie sich Zeit für das Gespräch genommen haben. Erzählen Sie doch bitte ein wenig über Ihre aktuelle Position.**

- Ich mache derzeit ein Praktikum im Krankenhaus – meine erste richtige Praxiserfahrung.

**Wie viel Berufserfahrung haben Sie bereits?**

- Zwischen ein und drei Jahren.

**Welche Software nutzen Sie regelmäßig?**

- Wir arbeiten mit DM7.

**Nutzen Sie auch die Adressbuch- oder Nachrichtenfunktionen?**

- Ja, mehrmals pro Woche.

**Gibt es etwas an der Software, das Sie nervt?**

- Die Ladezeiten sind extrem langsam – das kostet Zeit und Nerven.

**Haben Sie dadurch schon mal Fehler gemacht oder Zeit verloren?**

- Ja, das ist leider schon passiert.

**Was sollte besser laufen?**

- Weniger überladene Oberfläche und kürzere Ladezeiten.

**Gibt es Funktionen, die Sie sich wünschen?**

- Autovervollständigung wäre sehr hilfreich – spart Zeit.

**Wie wichtig ist Ihnen Personalisierung, zum Beispiel mit Shortcuts?**

- Sehr wichtig – 5 von 5. Das würde vieles erleichtern.

**Wie finden Sie normalerweise Informationen oder Kontakte in der Software**?

- Über die Suchleiste – wenn sie funktioniert.

**Arbeiten Sie nur am festen Arbeitsplatz oder auch mobil?**

- Ich arbeite am Desktop, aber auch mit Laptop und Tablet.

**Ist es wichtig, dass alles auf verschiedenen Geräten gleich läuft?**

- Ja, auf jeden Fall – 5 von 5.

**Wie viel Zeit bleibt Ihnen für neue Software?**

- Meistens weniger als eine Stunde – es muss schnell gehen.

**Möchten Sie sonst noch etwas sagen?**

- Nein, das war’s.
## 3. Auswertung

### Persona 1 :

![Jessica](Screenshot 2025-04-30 150458.png)

**Biografie :**

- Name : Jessica Christian
- Alter : 24
- Beruf : Pflege-Student (***2. Ausbildungsjahr***)

**Kontext und Verhalten :**

- Arbeitet im Rahmen ihrer Ausbildung regelmäßig im Krankenhaus.
- Beginnt ihren Tag mit dem Einstempeln, erhält die Schichtübergabe und übernimmt vielfältige Aufgaben wie Grundpflege, Vitalzeichen messen, Essen und Medikamente verteilen sowie Begleitung zu Behandlungsräumen.
- Nutzt das Krankenhausinformationssystem **DM7** regelmäßig zur Dokumentation und Kommunikation.
- Verwendet die Software sowohl an festen Arbeitsplätzen (PC) als auch mobil auf **Laptops und Tablets**.

**Ziel und Motivation :**

- Reibungsloser und schneller Arbeitsablauf, um mehr Zeit für Patient\*innen zu haben.
- Ein benutzerfreundliches System, das sich auch unter Stress intuitiv bedienen lässt.
- Weniger Zeitverlust durch technische Hürden oder langsame Systeme.

**Probleme und Frustrationen:**

- **Langsame Ladezeiten** der Software, insbesondere bei mehreren Nutzer\*innen gleichzeitig.
- Überladene Benutzeroberfläche, viele Symbole und verschachtelte Menüs führen zu Verwirrung.
- **Eingeschränkte Textdarstellung**, keine Möglichkeit zur Anpassung der Schriftgröße – bei langen Schichten sehr ermüdend.
- **Unzureichende Autovervollständigung** und fehlende Suchleiste erschweren schnelles Arbeiten.

**Wünsche und Erwartungen :**

- **Klarere Benutzeroberfläche:** Reduktion unnötiger Elemente, Fokus auf relevante Informationen.
- **Autovervollständigung :** Unterstützung bei häufig verwendeten Begriffen, Medikamenten oder Pflegeleistungen.
- **Suchfunktion :** Eine zentrale Suchleiste für schnelle Navigation.
- **Barrierefreiheit :** Möglichkeit, Textgrößen oder Kontraste individuell anzupassen.
- **Geringe Einarbeitungszeit :** Weniger als 1 Stunde für grundlegende Funktionen durch intuitive Bedienung.

**Lösungen:**

- **UI-Design:** Übersichtliche, reduzierte Oberfläche mit sinnvoller Strukturierung.
- **Usability-Features :** Einführung von Autovervollständigung und zentraler Suchleiste.
- **Personalisierung :** Option zur Anpassung der Schriftgröße und Darstellung.
- **Onboarding :** Kurze, interaktive Schulung oder integrierte Hilfe-Funktion bei erstmaliger Nutzung.

---
### Persona 2 :

**Biografie :**

- Name: Dr. Med. Kim
- Alter: 27 Jahre
- Beruf: Facharzt für Allgemeinmedizin

**Kontext und Verhalten :**

- Arbeitet täglich in einer Hausarztpraxis.
- Nutzt die Praxissoftware regelmäßig zur Dokumentation, Medikamentenverordnung und Kommunikation.
- Häufige Nutzung des Adressbuchs und der Nachrichtenfunktion.
- Arbeitet sowohl am festen Arbeitsplatz (PC) als auch mobil (Tablet).

**Ziel und Motivation :**

- Effiziente und fehlerfreie Bearbeitung von administrativen Aufgaben.
- Zeitersparnis bei der Arbeit, um sich stärker auf die Patientenversorgung konzentrieren zu können.
- Eine Software, die schnell reagiert und intuitiv bedienbar ist, ohne lange Einarbeitung.

**Probleme und Frustrationen:**

- **Performance-Probleme:** Bei vielen gleichzeitigen Nutzern wird das System sehr langsam.
- **Medikamentenverordnung:** Nur einzelne Tage auswählbar – für mehrtägige Verordnungen müssen Eingaben manuell mehrfach wiederholt werden → Zeitverlust und Fehleranfälligkeit.
- **Benutzerfreundlichkeit:** Viele Klicks nötig, keine Möglichkeit, Prozesse flexibel zu gestalten.
- **Fehlerquellen:** Überlastung führt zu Fehlern bei der Medikamentenausstellung.

**Wünsche und Erwartungen :**

- **Schnelligkeit:** Schnelle Ladezeiten, selbst bei hoher Auslastung.
- **Einfache Bedienung:** Übersichtliche, logisch aufgebaute Benutzeroberfläche.
- **Automatisierung:** Automatisches Ausfüllen von Briefkopf oder Standardfeldern.
- **Individualisierung:** Verwaltung des eigenen Kontos und Schutz der persönlichen Nutzerdaten.
- **Geringe Einarbeitungszeit:** 1–2 Wochen Einarbeitung sind realistisch, sofern eine verständliche Anleitung vorhanden ist und die Bedienlogik dem alten System ähnlich bleibt.

**Lösungen:**

- **Performance:** Einsatz von Caching für schnellere Datenverarbeitung.
- **Medikamentenverordnung:** Möglichkeit, mehrere Tage gleichzeitig auszuwählen.
- **Benutzeroberfläche:** Klare Struktur, reduzierte Klickanzahl.
- **Kontoverwaltung:** Selbstständige Verwaltung von Passwort und Profil. Einarbeitung: Interaktives Tutorial beim ersten Start.

---
### Persona 3 :

**Biografie :**

- Name: Dr. Alex Nguyen
- Alter: 29 Jahre
- Beruf: Assistenzarzt/-ärztin in der Notaufnahme

**Kontext und Verhalten :**

- Arbeitet im Krankenhaus, hauptsächlich in der Notaufnahme.
- Regelmäßiger Einsatz der Krankenhaussoftware (SIMRS) zur Patientendokumentation und Medikamentenverordnung.
- Nutzt die Software überwiegend an einem festen Arbeitsplatz (Desktop-PC).
- Täglicher Einsatz digitaler Systeme; besonders intensiv während Schichtdiensten.
- Verwendet gelegentlich mobile Geräte (Laptop), aber Fokus auf stationäre Nutzung.
- Kommunikation erfolgt intern, größtenteils über Krankenhaus-IT-Strukturen oder ergänzend über private Messenger (z. B. WhatsApp im Kollegenkreis).

**Ziel und Motivation :**

- Schnelle, fehlerfreie Dokumentation und Verordnung von Medikamenten.
- Zuverlässige Verfügbarkeit von Patienten- und Medikationsdaten während stressiger Notaufnahmesituationen.
- Reduzierung administrativer Belastungen, um sich besser auf die klinische Versorgung konzentrieren zu können.
- Software, die einfach und sicher durch komplexe Prozesse führt, auch unter Zeitdruck.

**Probleme und Frustrationen:**

- **ICD-10-Codierung:** Die Eingabe muss exakt erfolgen; Tippfehler führen zu langen Suchzeiten.
- **Benutzeroberfläche:** Etwas veraltetes Design; Eingabemasken wirken überladen und sind nicht intuitiv strukturiert.
- **Medikamentenverfügbarkeit:** Keine automatische Anzeige, ob Medikamente in der Krankenhausapotheke verfügbar sind → Erhöhter Abstimmungsaufwand mit der Apotheke.
- **Performanceprobleme:** Systemverlangsamungen bei hoher Nutzerlast.


**Wünsche und Erwartungen :**

- **Intuitive Suche:** Fehlerverzeihende Suchfunktionen (z. B. automatische Korrektur bei ICD-10 oder Namenssuche).
- **Bessere Integration:** Anzeige von Medikamentenbeständen direkt bei der Verordnung.
- **Stabilere Performance:** Keine langen Ladezeiten, auch bei Spitzenbelastung in der Notaufnahme.
- **Verbesserte Benutzeroberfläche:** Klar strukturierte Menüs, logische Benutzerführung mit schnellen Zugriffen.
- **Schnelle Einarbeitung:** Möglichkeit, neue Mitarbeitende innerhalb weniger Stunden oder weniger Tage effektiv einzuarbeiten

**Lösungen:**

- **Suchfunktion:** Einführung von Autovervollständigung und unscharfer Suche bei ICD-10-Codes.
- **Medikationsmanagement:** Integration eines Live-Lagerbestands der Apotheke in die Verordnungsansicht.
- **Performanceverbesserungen:** Serverseitige Optimierungen und Lastverteilung.
- **UI-Redesign:** Klare, stressfreie Navigation mit priorisierten Informationen für den Notfallbetrieb.