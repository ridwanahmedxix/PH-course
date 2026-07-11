/* =========================================================
   WC26 PREDICT — APPLICATION LOGIC
   All data below is illustrative / fictional projection data
   for a concept front-end project. Not official FIFA data.
   ========================================================= */

(function () {
  "use strict";

  /* ================= MATCH DATA ================= */
  const matches = [
    {
      id: 1,
      homeTeam: "Mexico",
      awayTeam: "South Korea",
      homeFlag: "🇲🇽",
      awayFlag: "🇰🇷",
      date: "2026-06-11",
      time: "20:00",
      stadium: "Estadio Azteca, Mexico City",
      stage: "Group Stage",
      predictionWinner: "Mexico",
      winnerChance: 58,
      loserChance: 22,
      confidence: "Medium",
      expectedGoals: "1.8 - 1.1",
      homePossession: 55,
      awayPossession: 45,
      corners: "6 - 4",
      yellowCards: "2 - 3",
      recentForm: {
        home: ["W", "W", "D", "W", "L"],
        away: ["W", "D", "L", "W", "W"],
      },
      description:
        "Opening the tournament on home soil, Mexico lean on a raucous Azteca crowd and a sharper front line. South Korea counter with pace out wide, but Mexico's control in midfield edges this in the host nation's favor.",
    },
    {
      id: 2,
      homeTeam: "Argentina",
      awayTeam: "Morocco",
      homeFlag: "🇦🇷",
      awayFlag: "🇲🇦",
      date: "2026-06-12",
      time: "17:00",
      stadium: "Mercedes-Benz Stadium, Atlanta",
      stage: "Group Stage",
      predictionWinner: "Argentina",
      winnerChance: 64,
      loserChance: 17,
      confidence: "High",
      expectedGoals: "2.1 - 0.9",
      homePossession: 59,
      awayPossession: 41,
      corners: "7 - 3",
      yellowCards: "1 - 3",
      recentForm: {
        home: ["W", "W", "W", "D", "W"],
        away: ["W", "L", "D", "W", "W"],
      },
      description:
        "The reigning champions' fluid front three should stretch Morocco's disciplined back line early. Morocco have the organization to stay compact, but Argentina's quality in the final third gives them a clear statistical edge.",
    },
    {
      id: 3,
      homeTeam: "France",
      awayTeam: "Uruguay",
      homeFlag: "🇫🇷",
      awayFlag: "🇺🇾",
      date: "2026-06-13",
      time: "14:00",
      stadium: "MetLife Stadium, New Jersey",
      stage: "Group Stage",
      predictionWinner: "France",
      winnerChance: 55,
      loserChance: 24,
      confidence: "Medium",
      expectedGoals: "1.7 - 1.2",
      homePossession: 53,
      awayPossession: 47,
      corners: "5 - 5",
      yellowCards: "2 - 4",
      recentForm: {
        home: ["W", "D", "W", "W", "L"],
        away: ["W", "W", "D", "L", "W"],
      },
      description:
        "France's midfield control and higher possession rate should let them dictate tempo. Uruguay's physical, compact defense makes life difficult, but France's attacking depth from the bench gives them the higher win probability.",
    },
    {
      id: 4,
      homeTeam: "Spain",
      awayTeam: "Japan",
      homeFlag: "🇪🇸",
      awayFlag: "🇯🇵",
      date: "2026-06-13",
      time: "20:00",
      stadium: "SoFi Stadium, Los Angeles",
      stage: "Group Stage",
      predictionWinner: "Spain",
      winnerChance: 60,
      loserChance: 20,
      confidence: "High",
      expectedGoals: "2.0 - 1.0",
      homePossession: 62,
      awayPossession: 38,
      corners: "8 - 3",
      yellowCards: "1 - 2",
      recentForm: {
        home: ["W", "W", "W", "W", "D"],
        away: ["W", "D", "W", "L", "W"],
      },
      description:
        "Spain's short passing rhythm should dominate the ball against Japan's compact mid-block. Japan are dangerous on the transition, but Spain's technical superiority in tight spaces gives them the statistical advantage.",
    },
    {
      id: 5,
      homeTeam: "England",
      awayTeam: "Senegal",
      homeFlag: "🇬🇧",
      awayFlag: "🇸🇳",
      date: "2026-06-14",
      time: "17:00",
      stadium: "Lincoln Financial Field, Philadelphia",
      stage: "Group Stage",
      predictionWinner: "England",
      winnerChance: 52,
      loserChance: 27,
      confidence: "Medium",
      expectedGoals: "1.6 - 1.3",
      homePossession: 54,
      awayPossession: 46,
      corners: "6 - 5",
      yellowCards: "3 - 3",
      recentForm: {
        home: ["W", "D", "W", "L", "W"],
        away: ["W", "W", "L", "D", "W"],
      },
      description:
        "England's set-piece threat and defensive solidity make them slight favorites, though Senegal's direct pace on the counter keeps this tightly contested according to the model's expected-goals split.",
    },
    {
      id: 6,
      homeTeam: "Brazil",
      awayTeam: "Switzerland",
      homeFlag: "🇧🇷",
      awayFlag: "🇨🇭",
      date: "2026-06-15",
      time: "16:00",
      stadium: "Hard Rock Stadium, Miami",
      stage: "Group Stage",
      predictionWinner: "Brazil",
      winnerChance: 61,
      loserChance: 19,
      confidence: "High",
      expectedGoals: "2.0 - 0.9",
      homePossession: 58,
      awayPossession: 42,
      corners: "7 - 4",
      yellowCards: "2 - 3",
      recentForm: {
        home: ["W", "W", "D", "W", "W"],
        away: ["D", "W", "W", "L", "D"],
      },
      description:
        "Brazil's individual quality in wide areas typically overwhelms structured defenses like Switzerland's. The Swiss are efficient at closing space centrally, but Brazil's finishing rate projects a clear edge.",
    },
    {
      id: 7,
      homeTeam: "Portugal",
      awayTeam: "Ghana",
      homeFlag: "🇵🇹",
      awayFlag: "🇬🇭",
      date: "2026-06-16",
      time: "14:00",
      stadium: "NRG Stadium, Houston",
      stage: "Group Stage",
      predictionWinner: "Portugal",
      winnerChance: 63,
      loserChance: 18,
      confidence: "High",
      expectedGoals: "2.1 - 1.0",
      homePossession: 60,
      awayPossession: 40,
      corners: "7 - 3",
      yellowCards: "1 - 4",
      recentForm: {
        home: ["W", "W", "W", "D", "W"],
        away: ["L", "D", "W", "W", "L"],
      },
      description:
        "Portugal's attacking transitions have been the sharpest of any European side in warm-up fixtures, and Ghana's high defensive line is projected to concede space in behind repeatedly.",
    },
    {
      id: 8,
      homeTeam: "Netherlands",
      awayTeam: "Colombia",
      homeFlag: "🇳🇱",
      awayFlag: "🇨🇴",
      date: "2026-06-16",
      time: "20:00",
      stadium: "Levi's Stadium, Santa Clara",
      stage: "Group Stage",
      predictionWinner: "Netherlands",
      winnerChance: 54,
      loserChance: 26,
      confidence: "Medium",
      expectedGoals: "1.7 - 1.3",
      homePossession: 55,
      awayPossession: 45,
      corners: "6 - 5",
      yellowCards: "2 - 3",
      recentForm: {
        home: ["W", "D", "W", "W", "L"],
        away: ["W", "W", "D", "W", "L"],
      },
      description:
        "Two well-drilled sides with contrasting styles: the Dutch build patiently through midfield while Colombia thrive in transition. The model gives a modest edge to Netherlands based on set-piece efficiency.",
    },
    {
      id: 9,
      homeTeam: "Belgium",
      awayTeam: "Croatia",
      homeFlag: "🇧🇪",
      awayFlag: "🇭🇷",
      date: "2026-06-17",
      time: "17:00",
      stadium: "Gillette Stadium, Boston",
      stage: "Group Stage",
      predictionWinner: "Belgium",
      winnerChance: 50,
      loserChance: 30,
      confidence: "Low",
      expectedGoals: "1.5 - 1.4",
      homePossession: 51,
      awayPossession: 49,
      corners: "5 - 5",
      yellowCards: "3 - 3",
      recentForm: {
        home: ["W", "L", "W", "D", "W"],
        away: ["D", "W", "W", "L", "W"],
      },
      description:
        "One of the tightest matchups on paper. Belgium's attacking talent is offset by Croatia's midfield experience and game management, producing the lowest-confidence prediction of the group stage so far.",
    },
    {
      id: 10,
      homeTeam: "Germany",
      awayTeam: "Canada",
      homeFlag: "🇩🇪",
      awayFlag: "🇨🇦",
      date: "2026-06-18",
      time: "18:00",
      stadium: "BMO Field, Toronto",
      stage: "Group Stage",
      predictionWinner: "Germany",
      winnerChance: 57,
      loserChance: 23,
      confidence: "Medium",
      expectedGoals: "1.8 - 1.2",
      homePossession: 56,
      awayPossession: 44,
      corners: "6 - 4",
      yellowCards: "2 - 3",
      recentForm: {
        home: ["W", "W", "D", "W", "L"],
        away: ["W", "W", "L", "D", "W"],
      },
      description:
        "Playing away from home, Germany's structured build-up should still create more clear-cut chances against a host nation that thrives on energy and crowd support rather than raw technical quality.",
    },
    {
      id: 11,
      homeTeam: "USA",
      awayTeam: "Poland",
      homeFlag: "🇺🇸",
      awayFlag: "🇵🇱",
      date: "2026-06-18",
      time: "21:00",
      stadium: "Arrowhead Stadium, Kansas City",
      stage: "Group Stage",
      predictionWinner: "USA",
      winnerChance: 53,
      loserChance: 28,
      confidence: "Medium",
      expectedGoals: "1.6 - 1.3",
      homePossession: 52,
      awayPossession: 48,
      corners: "6 - 5",
      yellowCards: "2 - 2",
      recentForm: {
        home: ["W", "D", "W", "W", "D"],
        away: ["L", "W", "D", "W", "L"],
      },
      description:
        "Host-nation momentum and an in-form front line give the USA a narrow edge over Poland's counter-attacking approach, though the expected-goals gap remains within the model's medium-confidence band.",
    },
    {
      id: 12,
      homeTeam: "Uruguay",
      awayTeam: "Denmark",
      homeFlag: "🇺🇾",
      awayFlag: "🇩🇰",
      date: "2026-06-19",
      time: "14:00",
      stadium: "Lumen Field, Seattle",
      stage: "Group Stage",
      predictionWinner: "Uruguay",
      winnerChance: 51,
      loserChance: 29,
      confidence: "Low",
      expectedGoals: "1.5 - 1.4",
      homePossession: 49,
      awayPossession: 51,
      corners: "5 - 6",
      yellowCards: "3 - 2",
      recentForm: {
        home: ["W", "W", "D", "L", "W"],
        away: ["D", "W", "W", "D", "L"],
      },
      description:
        "Denmark's structured pressing and Uruguay's physical edge in duels balance each other out, making this the second-closest projection of the group stage window.",
    },
    {
      id: 13,
      homeTeam: "Argentina",
      awayTeam: "Mexico",
      homeFlag: "🇦🇷",
      awayFlag: "🇲🇽",
      date: "2026-06-24",
      time: "20:00",
      stadium: "Estadio BBVA, Monterrey",
      stage: "Group Stage",
      predictionWinner: "Argentina",
      winnerChance: 59,
      loserChance: 24,
      confidence: "Medium",
      expectedGoals: "1.9 - 1.2",
      homePossession: 57,
      awayPossession: 43,
      corners: "7 - 4",
      yellowCards: "2 - 3",
      recentForm: {
        home: ["W", "W", "D", "W", "W"],
        away: ["W", "W", "D", "W", "L"],
      },
      description:
        "A high-profile group finale in Monterrey. Argentina's individual brilliance in the final third is projected to outweigh the home advantage Mexico typically enjoys across their three group venues.",
    },
    {
      id: 14,
      homeTeam: "France",
      awayTeam: "Spain",
      homeFlag: "🇫🇷",
      awayFlag: "🇪🇸",
      date: "2026-06-28",
      time: "20:00",
      stadium: "AT&T Stadium, Dallas",
      stage: "Round of 32",
      predictionWinner: "Spain",
      winnerChance: 54,
      loserChance: 27,
      confidence: "Medium",
      expectedGoals: "1.8 - 1.6",
      homePossession: 46,
      awayPossession: 54,
      corners: "5 - 6",
      yellowCards: "3 - 3",
      recentForm: {
        home: ["W", "D", "W", "W", "L"],
        away: ["W", "W", "W", "D", "W"],
      },
      description:
        "A heavyweight knockout clash. Spain's superior ball retention is expected to limit France's transition opportunities, giving the Spanish side a narrow but meaningful statistical edge in this projection.",
    },
    {
      id: 15,
      homeTeam: "Brazil",
      awayTeam: "Portugal",
      homeFlag: "🇧🇷",
      awayFlag: "🇵🇹",
      date: "2026-06-30",
      time: "17:00",
      stadium: "SoFi Stadium, Los Angeles",
      stage: "Round of 32",
      predictionWinner: "Brazil",
      winnerChance: 56,
      loserChance: 26,
      confidence: "Medium",
      expectedGoals: "1.9 - 1.5",
      homePossession: 55,
      awayPossession: 45,
      corners: "6 - 5",
      yellowCards: "2 - 4",
      recentForm: {
        home: ["W", "W", "D", "W", "W"],
        away: ["W", "W", "D", "W", "L"],
      },
      description:
        "Two of the tournament's most dangerous attacks collide. Brazil's dribbling success rate in the final third is the deciding statistical factor, projected to create more high-value chances than Portugal's counter-press.",
    },
    {
      id: 16,
      homeTeam: "England",
      awayTeam: "Netherlands",
      homeFlag: "🇬🇧",
      awayFlag: "🇳🇱",
      date: "2026-07-03",
      time: "18:00",
      stadium: "Lincoln Financial Field, Philadelphia",
      stage: "Round of 16",
      predictionWinner: "England",
      winnerChance: 55,
      loserChance: 27,
      confidence: "Medium",
      expectedGoals: "1.7 - 1.4",
      homePossession: 51,
      awayPossession: 49,
      corners: "6 - 6",
      yellowCards: "3 - 3",
      recentForm: {
        home: ["W", "D", "W", "L", "W"],
        away: ["W", "W", "D", "W", "L"],
      },
      description:
        "England's defensive organization has conceded the fewest expected goals of the round of 32, and that structure is projected to slightly outweigh the Dutch midfield's passing dominance.",
    },
    {
      id: 17,
      homeTeam: "Argentina",
      awayTeam: "Germany",
      homeFlag: "🇦🇷",
      awayFlag: "🇩🇪",
      date: "2026-07-04",
      time: "20:00",
      stadium: "MetLife Stadium, New Jersey",
      stage: "Round of 16",
      predictionWinner: "Argentina",
      winnerChance: 58,
      loserChance: 25,
      confidence: "Medium",
      expectedGoals: "1.9 - 1.5",
      homePossession: 54,
      awayPossession: 46,
      corners: "6 - 5",
      yellowCards: "2 - 3",
      recentForm: {
        home: ["W", "W", "D", "W", "W"],
        away: ["W", "D", "W", "W", "L"],
      },
      description:
        "A classic World Cup rivalry renewed. Argentina's individual quality in one-on-one situations is projected to be the difference against a well-organized but slightly less dynamic German attack.",
    },
    {
      id: 18,
      homeTeam: "Brazil",
      awayTeam: "Spain",
      homeFlag: "🇧🇷",
      awayFlag: "🇪🇸",
      date: "2026-07-09",
      time: "17:00",
      stadium: "Mercedes-Benz Stadium, Atlanta",
      stage: "Quarter Final",
      predictionWinner: "Spain",
      winnerChance: 52,
      loserChance: 30,
      confidence: "Low",
      expectedGoals: "1.7 - 1.6",
      homePossession: 48,
      awayPossession: 52,
      corners: "5 - 6",
      yellowCards: "3 - 3",
      recentForm: {
        home: ["W", "W", "D", "W", "W"],
        away: ["W", "W", "W", "D", "W"],
      },
      description:
        "The closest projection of the knockout stage. Spain's marginally higher possession share is offset almost entirely by Brazil's superior finishing rate, leaving this essentially a coin-flip by the model's own admission.",
    },
    {
      id: 19,
      homeTeam: "Argentina",
      awayTeam: "England",
      homeFlag: "🇦🇷",
      awayFlag: "🇬🇧",
      date: "2026-07-14",
      time: "18:00",
      stadium: "AT&T Stadium, Dallas",
      stage: "Semi Final",
      predictionWinner: "Argentina",
      winnerChance: 55,
      loserChance: 29,
      confidence: "Medium",
      expectedGoals: "1.8 - 1.5",
      homePossession: 53,
      awayPossession: 47,
      corners: "6 - 5",
      yellowCards: "3 - 4",
      recentForm: {
        home: ["W", "W", "D", "W", "W"],
        away: ["W", "D", "W", "L", "W"],
      },
      description:
        "Semi-final tension favors the side with more individual match-winners, and Argentina's attacking depth is projected to create the higher-quality chances against England's disciplined low block.",
    },
    {
      id: 20,
      homeTeam: "Argentina",
      awayTeam: "Spain",
      homeFlag: "🇦🇷",
      awayFlag: "🇪🇸",
      date: "2026-07-19",
      time: "15:00",
      stadium: "MetLife Stadium, New Jersey",
      stage: "Final",
      predictionWinner: "Argentina",
      winnerChance: 51,
      loserChance: 33,
      confidence: "Low",
      expectedGoals: "1.7 - 1.6",
      homePossession: 50,
      awayPossession: 50,
      corners: "6 - 6",
      yellowCards: "3 - 3",
      recentForm: {
        home: ["W", "W", "D", "W", "W"],
        away: ["W", "W", "W", "D", "W"],
      },
      description:
        "The projected final is a near-even matchup between the tournament's most balanced defense and its most clinical attack — the model gives the slightest of edges to Argentina, well within the margin of error.",
    },
  ];

  const TODAY_REF = new Date("2026-06-20T00:00:00");
  matches.forEach((m) => {
    m.completed = new Date(m.date + "T" + m.time) < TODAY_REF;
  });

  /* ================= TEAM DATA (favorites / teams grid) ================= */
  const teams = [
    {
      name: "Argentina",
      flag: "🇦🇷",
      winPct: 19.5,
      form: ["W", "W", "D", "W", "W"],
    },
    {
      name: "France",
      flag: "🇫🇷",
      winPct: 16.8,
      form: ["W", "D", "W", "W", "L"],
    },
    {
      name: "Brazil",
      flag: "🇧🇷",
      winPct: 15.2,
      form: ["W", "W", "D", "W", "W"],
    },
    {
      name: "Spain",
      flag: "🇪🇸",
      winPct: 13.4,
      form: ["W", "W", "W", "D", "W"],
    },
    {
      name: "England",
      flag: "🇬🇧",
      winPct: 10.1,
      form: ["W", "D", "W", "L", "W"],
    },
    {
      name: "Portugal",
      flag: "🇵🇹",
      winPct: 7.6,
      form: ["W", "W", "W", "D", "W"],
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      winPct: 6.3,
      form: ["W", "D", "W", "W", "L"],
    },
    {
      name: "Netherlands",
      flag: "🇳🇱",
      winPct: 4.2,
      form: ["W", "D", "W", "W", "L"],
    },
    {
      name: "Belgium",
      flag: "🇧🇪",
      winPct: 3.1,
      form: ["W", "L", "W", "D", "W"],
    },
    {
      name: "Uruguay",
      flag: "🇺🇾",
      winPct: 2.4,
      form: ["W", "W", "D", "L", "W"],
    },
    {
      name: "Croatia",
      flag: "🇭🇷",
      winPct: 1.4,
      form: ["D", "W", "W", "L", "W"],
    },
    {
      name: "Morocco",
      flag: "🇲🇦",
      winPct: 1.0,
      form: ["W", "L", "D", "W", "W"],
    },
    {
      name: "Mexico",
      flag: "🇲🇽",
      winPct: 0.9,
      form: ["W", "W", "D", "W", "L"],
    },
    { name: "USA", flag: "🇺🇸", winPct: 0.8, form: ["W", "D", "W", "W", "D"] },
    {
      name: "Colombia",
      flag: "🇨🇴",
      winPct: 0.6,
      form: ["W", "W", "D", "W", "L"],
    },
    { name: "Japan", flag: "🇯🇵", winPct: 0.5, form: ["W", "D", "W", "L", "W"] },
    {
      name: "Switzerland",
      flag: "🇨🇭",
      winPct: 0.4,
      form: ["D", "W", "W", "L", "D"],
    },
    {
      name: "South Korea",
      flag: "🇰🇷",
      winPct: 0.3,
      form: ["W", "D", "L", "W", "W"],
    },
    {
      name: "Denmark",
      flag: "🇩🇰",
      winPct: 0.3,
      form: ["D", "W", "W", "D", "L"],
    },
    {
      name: "Senegal",
      flag: "🇸🇳",
      winPct: 0.3,
      form: ["W", "W", "L", "D", "W"],
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      winPct: 0.2,
      form: ["W", "W", "L", "D", "W"],
    },
    { name: "Ghana", flag: "🇬🇭", winPct: 0.2, form: ["L", "D", "W", "W", "L"] },
    {
      name: "Poland",
      flag: "🇵🇱",
      winPct: 0.2,
      form: ["L", "W", "D", "W", "L"],
    },
    { name: "Italy", flag: "🇮🇹", winPct: 0.2, form: ["W", "D", "D", "W", "L"] },
  ];

  /* ================= STANDINGS DATA ================= */
  const standingsGroups = {
    "Group A": [
      { team: "Mexico 🇲🇽", p: 3, w: 2, d: 1, l: 0, gd: 4, pts: 7 },
      { team: "Poland 🇵🇱", p: 3, w: 1, d: 1, l: 1, gd: 1, pts: 4 },
      { team: "South Korea 🇰🇷", p: 3, w: 1, d: 1, l: 1, gd: 0, pts: 4 },
      { team: "Ghana 🇬🇭", p: 3, w: 0, d: 1, l: 2, gd: -5, pts: 1 },
    ],
    "Group B": [
      { team: "Argentina 🇦🇷", p: 3, w: 3, d: 0, l: 0, gd: 6, pts: 9 },
      { team: "Croatia 🇭🇷", p: 3, w: 1, d: 1, l: 1, gd: 1, pts: 4 },
      { team: "Morocco 🇲🇦", p: 3, w: 1, d: 1, l: 1, gd: -1, pts: 4 },
      { team: "Canada 🇨🇦", p: 3, w: 0, d: 0, l: 3, gd: -6, pts: 0 },
    ],
    "Group C": [
      { team: "France 🇫🇷", p: 3, w: 2, d: 1, l: 0, gd: 5, pts: 7 },
      { team: "Denmark 🇩🇰", p: 3, w: 1, d: 2, l: 0, gd: 2, pts: 5 },
      { team: "Uruguay 🇺🇾", p: 3, w: 1, d: 1, l: 1, gd: 0, pts: 4 },
      { team: "Senegal 🇸🇳", p: 3, w: 0, d: 0, l: 3, gd: -7, pts: 0 },
    ],
    "Group D": [
      { team: "Spain 🇪🇸", p: 3, w: 3, d: 0, l: 0, gd: 7, pts: 9 },
      { team: "Japan 🇯🇵", p: 3, w: 2, d: 0, l: 1, gd: 2, pts: 6 },
      { team: "Colombia 🇨🇴", p: 3, w: 1, d: 0, l: 2, gd: -2, pts: 3 },
      { team: "USA 🇺🇸", p: 3, w: 0, d: 0, l: 3, gd: -7, pts: 0 },
    ],
  };

  /* ================= STATE ================= */
  let currentFilter = "all";
  let currentSearch = "";

  /* ================= UTILITIES ================= */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  function confidenceClass(conf) {
    if (conf === "High") return "confidence-high";
    if (conf === "Medium") return "confidence-medium";
    return "confidence-low";
  }

  function formDotsHTML(formArr) {
    return formArr
      .map((r) => {
        const cls = r === "W" ? "form-w" : r === "D" ? "form-d" : "form-l";
        return `<span class="form-dot ${cls}" title="${r === "W" ? "Win" : r === "D" ? "Draw" : "Loss"}"></span>`;
      })
      .join("");
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  /* ================= LOADING SCREEN ================= */
  window.addEventListener("load", () => {
    const fill = $("#loaderFill");
    requestAnimationFrame(() => {
      fill.style.width = "100%";
    });
    setTimeout(() => {
      $("#loadingScreen").classList.add("hide");
      revealOnLoad();
    }, 1300);
  });

  /* ================= HEADER SCROLL + NAV ================= */
  const header = $("#siteHeader");
  function onScroll() {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");

    // active link highlight
    const scrollPos = window.scrollY + 140;
    $$("main section[id]").forEach((sec) => {
      const link = $(`.nav-link[href="#${sec.id}"]`);
      if (!link) return;
      if (
        scrollPos >= sec.offsetTop &&
        scrollPos < sec.offsetTop + sec.offsetHeight
      ) {
        $$(".nav-link").forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", onScroll);

  /* ================= HAMBURGER MENU ================= */
  const hamburger = $("#hamburger");
  const mobileMenu = $("#mobileMenu");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });
  $$("#mobileMenu a").forEach((a) =>
    a.addEventListener("click", () => {
      hamburger.classList.remove("open");
      mobileMenu.classList.remove("open");
    }),
  );

  /* ================= MOUSE GLOW ================= */
  const mouseGlow = $("#mouseGlow");
  window.addEventListener("mousemove", (e) => {
    mouseGlow.style.left = e.clientX + "px";
    mouseGlow.style.top = e.clientY + "px";
  });

  /* ================= FLOATING BALLS ================= */
  function createFloatingBalls() {
    const container = $("#floatingBalls");
    const count = window.innerWidth < 640 ? 6 : 12;
    for (let i = 0; i < count; i++) {
      const ball = document.createElement("div");
      ball.className = "floating-ball";
      ball.textContent = "⚽";
      ball.style.left = Math.random() * 100 + "%";
      ball.style.fontSize = 14 + Math.random() * 20 + "px";
      const duration = 14 + Math.random() * 18;
      ball.style.animationDuration = duration + "s";
      ball.style.animationDelay = -(Math.random() * duration) + "s";
      container.appendChild(ball);
    }
  }

  /* ================= TYPING EFFECT ================= */
  function typeHeadline() {
    const el = $("#typingLine");
    const text = "FIFA WORLD CUP";
    el.textContent = "";
    let i = 0;
    function step() {
      if (i <= text.length) {
        el.textContent = text.slice(0, i);
        i++;
        setTimeout(step, 55);
      } else {
        el.style.borderRightColor = "transparent";
      }
    }
    step();
  }

  /* ================= LIVE CLOCK ================= */
  function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");
    $("#liveClock").textContent = `${h}:${m}:${s}`;
    $("#liveDate").textContent = now.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  /* ================= COUNTDOWN ================= */
  const KICKOFF = new Date("2026-06-11T20:00:00");
  function updateCountdown() {
    const now = new Date();
    let diff = KICKOFF - now;
    if (diff < 0) diff = 0;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    $("#cdDays").textContent = String(days).padStart(2, "0");
    $("#cdHours").textContent = String(hours).padStart(2, "0");
    $("#cdMinutes").textContent = String(minutes).padStart(2, "0");
    $("#cdSeconds").textContent = String(seconds).padStart(2, "0");
  }

  /* ================= ANIMATED COUNTERS ================= */
  function animateCounters() {
    $$(".stat-value").forEach((el) => {
      const target = parseInt(el.dataset.target, 10);
      let current = 0;
      const stepTime = Math.max(1000 / target, 20);
      const timer = setInterval(() => {
        current++;
        el.textContent = current;
        if (current >= target) clearInterval(timer);
      }, stepTime);
    });
  }

  /* ================= RENDER: FAVORITES ================= */
  function renderFavorites() {
    const top = [...teams].sort((a, b) => b.winPct - a.winPct).slice(0, 8);
    const list = $("#favoritesList");
    list.innerHTML = top
      .map(
        (t, i) => `
      <div class="fav-item fade-up" style="--i:${i}">
        <div class="fav-rank">#${i + 1}</div>
        <div class="fav-flag">${t.flag}</div>
        <div class="fav-name">${t.name}</div>
        <div class="fav-bar-track"><div class="fav-bar-fill" data-pct="${t.winPct}"></div></div>
        <div class="fav-pct">${t.winPct}%</div>
      </div>
    `,
      )
      .join("");
    observeFadeUps();
    requestAnimationFrame(() => {
      $$(".fav-bar-fill").forEach((bar) => {
        const pct = parseFloat(bar.dataset.pct);
        bar.style.width = Math.min(pct * 5, 100) + "%";
      });
    });
  }

  /* ================= RENDER: TEAMS ================= */
  function renderTeams() {
    const grid = $("#teamsGrid");
    const sorted = [...teams].sort((a, b) => b.winPct - a.winPct);
    grid.innerHTML = sorted
      .map(
        (t, i) => `
      <div class="team-card fade-up" style="--i:${i}">
        <div class="team-flag">${t.flag}</div>
        <div class="team-name">${t.name}</div>
        <div class="team-rank">Title chance: ${t.winPct}%</div>
        <div class="team-form">${formDotsHTML(t.form)}</div>
      </div>
    `,
      )
      .join("");
    observeFadeUps();
  }

  /* ================= RENDER: STANDINGS ================= */
  function renderStandingsTabs() {
    const tabsWrap = $("#standingsTabs");
    const groupNames = Object.keys(standingsGroups);
    tabsWrap.innerHTML = groupNames
      .map(
        (g, i) =>
          `<button class="standings-tab ${i === 0 ? "active" : ""}" data-group="${g}">${g}</button>`,
      )
      .join("");
    tabsWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".standings-tab");
      if (!btn) return;
      $$(".standings-tab", tabsWrap).forEach((b) =>
        b.classList.remove("active"),
      );
      btn.classList.add("active");
      renderStandingsTable(btn.dataset.group);
    });
    renderStandingsTable(groupNames[0]);
  }

  function renderStandingsTable(groupName) {
    const rows = standingsGroups[groupName];
    const body = $("#standingsBody");
    body.innerHTML = rows
      .map(
        (r, i) => `
      <tr class="${i < 2 ? "qualify" : ""}">
        <td>${i + 1}</td>
        <td>${r.team}</td>
        <td>${r.p}</td>
        <td>${r.w}</td>
        <td>${r.d}</td>
        <td>${r.l}</td>
        <td>${r.gd > 0 ? "+" + r.gd : r.gd}</td>
        <td class="pts-cell">${r.pts}</td>
      </tr>
    `,
      )
      .join("");
  }

  /* ================= RENDER: MATCH CARDS ================= */
  function getFilteredMatches() {
    return matches.filter((m) => {
      const matchesFilter =
        currentFilter === "all" ||
        (currentFilter === "Upcoming" && !m.completed) ||
        (currentFilter === "Completed" && m.completed) ||
        m.stage === currentFilter;

      const searchLower = currentSearch.toLowerCase();
      const matchesSearch =
        !searchLower ||
        m.homeTeam.toLowerCase().includes(searchLower) ||
        m.awayTeam.toLowerCase().includes(searchLower) ||
        m.stadium.toLowerCase().includes(searchLower);

      return matchesFilter && matchesSearch;
    });
  }

  function renderMatches() {
    const list = getFilteredMatches();
    const grid = $("#matchGrid");
    const noResults = $("#noResults");

    if (list.length === 0) {
      grid.innerHTML = "";
      noResults.hidden = false;
      return;
    }
    noResults.hidden = true;

    grid.innerHTML = list
      .map((m, i) => {
        const homeIsWinner = m.predictionWinner === m.homeTeam;
        return `
      <article class="match-card fade-up" style="--i:${i}" data-id="${m.id}" tabindex="0" role="button" aria-label="View prediction for ${m.homeTeam} vs ${m.awayTeam}">
        <div class="mc-top">
          <span class="mc-stage">${m.stage}</span>
          <span class="mc-status ${m.completed ? "completed" : "upcoming"}">${m.completed ? "Completed" : "Upcoming"}</span>
        </div>
        <div class="mc-teams">
          <div class="mc-team">
            <span class="mc-flag">${m.homeFlag}</span>
            <span class="mc-team-name">${m.homeTeam}</span>
          </div>
          <span class="mc-vs">VS</span>
          <div class="mc-team">
            <span class="mc-flag">${m.awayFlag}</span>
            <span class="mc-team-name">${m.awayTeam}</span>
          </div>
        </div>
        <div class="mc-meta">
          <span>${formatDate(m.date)} · ${m.time}</span>
          <span>${m.stadium.split(",")[0]}</span>
        </div>
        <div class="mc-prediction">
          <div class="mc-pred-label">
            <span>Predicted winner: <b>${m.predictionWinner}</b></span>
            <span class="mc-pred-pct">${homeIsWinner ? m.winnerChance : m.winnerChance}%</span>
          </div>
          <div class="progress-track"><div class="progress-fill" data-pct="${m.winnerChance}"></div></div>
        </div>
        <div class="mc-bottom">
          <span class="confidence-badge ${confidenceClass(m.confidence)}">${m.confidence} confidence</span>
          <div class="mc-form">${formDotsHTML(m.predictionWinner === m.homeTeam ? m.recentForm.home : m.recentForm.away)}</div>
        </div>
      </article>
    `;
      })
      .join("");

    observeFadeUps();
    requestAnimationFrame(() => {
      $$(".progress-fill", grid).forEach((bar) => {
        bar.style.width = bar.dataset.pct + "%";
      });
    });

    $$(".match-card", grid).forEach((card) => {
      card.addEventListener("click", () =>
        openModal(parseInt(card.dataset.id, 10)),
      );
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(parseInt(card.dataset.id, 10));
        }
      });
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `translateY(-8px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  /* ================= FILTER BAR ================= */
  $("#filterBar").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    $$(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderMatches();
  });

  /* ================= SEARCH ================= */
  $("#searchInput").addEventListener("input", (e) => {
    currentSearch = e.target.value.trim();
    renderMatches();
  });

  /* ================= MODAL ================= */
  const modalOverlay = $("#modalOverlay");
  const modalContent = $("#modalContent");

  function openModal(id) {
    const m = matches.find((x) => x.id === id);
    if (!m) return;

    modalContent.innerHTML = `
      <div class="mc-top" style="margin-bottom:22px;">
        <span class="mc-stage">${m.stage}</span>
        <span class="mc-status ${m.completed ? "completed" : "upcoming"}">${m.completed ? "Completed" : "Upcoming"}</span>
      </div>
      <div class="modal-teams">
        <div class="modal-team"><span class="modal-flag">${m.homeFlag}</span><span class="modal-team-name">${m.homeTeam}</span></div>
        <span class="modal-vs">VS</span>
        <div class="modal-team"><span class="modal-flag">${m.awayFlag}</span><span class="modal-team-name">${m.awayTeam}</span></div>
      </div>
      <div class="modal-meta-row">
        <span>📅 <b>${formatDate(m.date)}</b></span>
        <span>⏰ <b>${m.time}</b></span>
        <span>🏟️ <b>${m.stadium}</b></span>
      </div>

      <div class="modal-section">
        <h4>Prediction</h4>
        <div class="modal-pred-line"><span>Winner: <b>${m.predictionWinner}</b></span><span class="confidence-badge ${confidenceClass(m.confidence)}">${m.confidence} confidence</span></div>
        <div class="modal-pred-line"><span>${m.homeTeam}</span><span>${m.predictionWinner === m.homeTeam ? m.winnerChance : m.loserChance}%</span></div>
        <div class="progress-track"><div class="progress-fill" style="width:${m.predictionWinner === m.homeTeam ? m.winnerChance : m.loserChance}%"></div></div>
        <div class="modal-pred-line" style="margin-top:10px;"><span>${m.awayTeam}</span><span>${m.predictionWinner === m.awayTeam ? m.winnerChance : m.loserChance}%</span></div>
        <div class="progress-track"><div class="progress-fill" style="width:${m.predictionWinner === m.awayTeam ? m.winnerChance : m.loserChance}%"></div></div>
      </div>

      <div class="modal-section">
        <h4>Match Statistics</h4>
        <div class="modal-stats-grid">
          <div class="modal-stat-box"><div class="label">Expected Goals</div><div class="value">${m.expectedGoals}</div></div>
          <div class="modal-stat-box"><div class="label">Corners</div><div class="value">${m.corners}</div></div>
          <div class="modal-stat-box"><div class="label">Yellow Cards</div><div class="value">${m.yellowCards}</div></div>
          <div class="modal-stat-box">
            <div class="label">Possession</div>
            <div class="value">${m.homePossession}% – ${m.awayPossession}%</div>
            <div class="possession-bar"><span style="width:${m.homePossession}%"></span><span style="width:${m.awayPossession}%"></span></div>
          </div>
        </div>
      </div>

      <div class="modal-section">
        <h4>Recent Form</h4>
        <div class="modal-pred-line"><span>${m.homeTeam}</span><div class="modal-form-row">${formDotsHTML(m.recentForm.home)}</div></div>
        <div class="modal-pred-line"><span>${m.awayTeam}</span><div class="modal-form-row">${formDotsHTML(m.recentForm.away)}</div></div>
      </div>

      <div class="modal-section">
        <h4>AI Match Analysis</h4>
        <p class="modal-analysis">${m.description}</p>
      </div>
    `;

    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  $("#modalClose").addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  /* ================= FORMS ================= */
  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    $("#formStatus").hidden = false;
    e.target.reset();
    setTimeout(() => {
      $("#formStatus").hidden = true;
    }, 4000);
  });

  $("#newsletterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    $("#newsStatus").hidden = false;
    e.target.reset();
    setTimeout(() => {
      $("#newsStatus").hidden = true;
    }, 4000);
  });

  /* ================= SCROLL REVEAL (Intersection Observer) ================= */
  let revealObserver;
  function observeFadeUps() {
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );
    }
    $$(".fade-up:not(.visible)").forEach((el) => revealObserver.observe(el));
  }

  function revealOnLoad() {
    observeFadeUps();
  }

  /* ================= FOOTER YEAR ================= */
  $("#footerYear").textContent = new Date().getFullYear();

  /* ================= INIT ================= */
  function init() {
    createFloatingBalls();
    typeHeadline();
    updateClock();
    setInterval(updateClock, 1000);
    updateCountdown();
    setInterval(updateCountdown, 1000);
    renderFavorites();
    renderMatches();
    renderStandingsTabs();
    renderTeams();
    onScroll();
    observeFadeUps();

    // trigger counters once dashboard is visible
    const dashObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            dashObserver.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    dashObserver.observe($("#dashboard"));
  }

  document.addEventListener("DOMContentLoaded", init);
})();
