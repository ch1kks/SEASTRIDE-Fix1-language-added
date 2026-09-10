export type Language = "en" | "vi";

export interface TranslationDictionary {
  // Common & UI
  common: {
    back: string;
    close: string;
    cancel: string;
    confirm: string;
    save: string;
    saved: string;
    done: string;
    next: string;
    skip: string;
    level: string;
    xp: string;
    hp: string;
    condition: string;
    cost: string;
    free: string;
    coins: string;
    gems: string;
    energy: string;
    buy: string;
    equip: string;
    unequip: string;
    equipped: string;
    unequipped: string;
    owned: string;
    locked: string;
    switch: string;
    select: string;
    selected: string;
    victory: string;
    defeat: string;
    defended: string;
    damage: string;
    critical: string;
    you: string;
    captain: string;
    language: string;
    vietnamese: string;
    english: string;
    all: string;
  };

  // Navigation
  nav: {
    steps: string;
    build: string;
    theSea: string;
    fleet: string;
    startVoyage: string;
    beginAdventure: string;
  };

  // Header & HUD
  header: {
    captainProfile: string;
    helpTutorial: string;
    mute: string;
    unmute: string;
    criticalRepair: string;
    energyTitle: string;
    myServer: string;
  };

  // Home screen
  home: {
    welcomeBack: string;
    wanderer: string;
    dailySteps: string;
    stepGoal: string;
    distance: string;
    calories: string;
    activeTime: string;
    kmUnit: string;
    kcalUnit: string;
    minUnit: string;
    energyChargedTitle: string;
    energyChargedDesc: string;
    dailyQuestsTitle: string;
    claim: string;
    claimed: string;
    completed: string;
    walkTrackerTitle: string;
    activityMap: string;
    historyChart: string;
    day: string;
    week: string;
    month: string;
    autoWalk: string;
    autoWalkOn: string;
    autoWalkOff: string;
    goldEarnedToday: string;
  };

  // Daily Quests
  quests: {
    q1Title: string;
    q1Desc: string;
    q2Title: string;
    q2Desc: string;
    q3Title: string;
    q3Desc: string;
    q4Title: string;
    q4Desc: string;
  };

  // Shipyard / Ship Build Screen
  shipyard: {
    title: string;
    shop: string;
    upgrades: string;
    repair: string;
    history: string;
    upgradeShip: string;
    maxLevelReached: string;
    upgradeCost: string;
    repairShipButton: string;
    flagshipLevel: string;
    hullStatus: string;
    criticalDamage: string;
  };

  // Upgrades Modal
  upgrades: {
    title: string;
    tabShip: string;
    tabCannons: string;
    tabShield: string;
    hullUpgradesTitle: string;
    hullUpgradesDesc: string;
    cannonArmoryTitle: string;
    cannonArmoryDesc: string;
    shieldDefensesTitle: string;
    shieldDefensesDesc: string;
    buyNewCannon: string;
    buyNewShield: string;
    upgradeToLevel: string;
    maxLevel: string;
    cannonDamage: string;
    shieldProtection: string;
    equippedCount: string;
    maxHullStrength: string;
    currentLevelHp: string;
    nextLevelHp: string;
    totalHp: string;
    shipUpgradeNotice: string;
    upgradeShipCost: string;
    cannonItemTitle: string;
    shieldItemTitle: string;
    shieldCharges: string;
    noShieldsOwned: string;
    cannonWarning: string;
    buyCostCoins: string;
  };

  // Repair Modal
  repair: {
    title: string;
    conditionGauge: string;
    fullRepair: string;
    rebuildShip: string;
    repairNow: string;
    fullyOperational: string;
    costInGold: string;
    repairNotice: string;
  };

  // Shop Modal
  shop: {
    title: string;
    watchAdTitle: string;
    watchAdDesc: string;
    watchAdButton: string;
    adPlaying: string;
    tabAll: string;
    tabOwned: string;
    categoryFlag: string;
    categoryFigurehead: string;
    categoryLantern: string;
    categoryEffect: string;
    ownedBadge: string;
    equippedBadge: string;
    buyItem: string;
  };

  // The Sea Screen
  theSea: {
    modeBombing: string;
    modeRaid: string;
    modeTreasure: string;
    switchServer: string;
    modeSelectorTitle: string;
    yourFlagship: string;
    inspectShip: string;
    launchAttack: string;
    targetLocked: string;
    selectTarget: string;
    energyCost: string;
    noEnergy: string;
    shipsInRealm: string;
    bombShip: string;
    modeBombingDesc: string;
    modeRaidDesc: string;
    modeTreasureDesc: string;
    modeDropdownTitle: string;
    firingSalvo: string;
    bombardingText: string;
    raidVictory: string;
    youAttacked: string;
    damageDealt: string;
    enemyRemaining: string;
    plunderedLoot: string;
    stoleCannon: string;
    continuePatrol: string;
    yourFlagshipLabel: string;
    vesselTitleLevel: string;
    mountedCannons: string;
    modifyInYard: string;
    fireBombsCost: string;
    bombBtn: string;
    shipList: string;
    bombRandom: string;
  };

  // Raid Boss Screen
  raid: {
    joinPromptTitle: string;
    joinPromptDesc: string;
    joinButton: string;
    bossActive: string;
    bossDefeated: string;
    timeRemaining: string;
    dealDamage: string;
    attackBoss: string;
    fleetLeaderboard: string;
    yourDamage: string;
    totalDamage: string;
    yourRank: string;
    claimPrize: string;
    prizeClaimed: string;
    dailyPrizeTitle: string;
    topHunters: string;
    respawnBoss: string;
    respawnPrompt: string;
    recentCombatLogs: string;
    joinQuestion: string;
    joinDesc: string;
    stepRule: string;
    yesJoin: string;
    noReturn: string;
    abyssRises: string;
    tier5Target: string;
    tier5Raid: string;
    bossHp: string;
    inBattle: string;
    activeCount: string;
    stepDamageRule: string;
    damageShare: string;
    serverRank: string;
    takeSteps: string;
    walkToStrike: string;
    striker1st: string;
    striker2nd: string;
    striker3rd: string;
    rankN: string;
    sealedBounty: string;
    unlocksAtDefeat: string;
    unseal: string;
    unsealMysteryBounty: string;
    bountyRewardsClaimed: string;
    rankings: string;
    fleetDamageRankings: string;
    serverCaptainsCount: string;
    yourPerformance: string;
    stepsShareDesc: string;
    returnToBattle: string;
    mysteryBountyUnsealed: string;
    bountyContribution: string;
    goldCoins: string;
    collectBounty: string;
    bossDefeatedFleet: string;
  };

  // Treasure Hunt Screen
  treasure: {
    title: string;
    subtitle: string;
    openChest: string;
    claimed: string;
    metersAway: string;
    todayLootTitle: string;
    totalChests: string;
    secretRelics: string;
    liveLog: string;
    claimSuccess: string;
    compassHeading: string;
    gpsActive: string;
    noTreasuresNearby: string;
    congratulations: string;
    openedTitle: string;
    chestLabel: string;
    legendarySecretRelic: string;
    addedToShopInventory: string;
    lootDiscovered: string;
    coins: string;
    gems: string;
    claimContinue: string;
    treasureHunt: string;
    radar2km: string;
    serverActiveChests: string;
    resetIn: string;
    gameModeDescTitle: string;
    gameModeDescP1: string;
    gameModeDescP2: string;
    gameModeDescP3: string;
    gotIt: string;
    dropRates: string;
    treasureDropRates: string;
    secretRelicNote: string;
    radarMapTitle: string;
    liveGps: string;
    treasuresLocated: string;
    scanningRadius: string;
    nearestDist: string;
    away: string;
    touchingChest: string;
    walkWithin45m: string;
    nearestAvailable: string;
    closestTargetRadar: string;
    plunderChest: string;
    focusTarget: string;
    proximityZone: string;
    todayPlundered: string;
    chestsCollectedToday: string;
    dailyStash: string;
    coinsLooted: string;
    gemsLooted: string;
    relicsFound: string;
    legendaryRelicsUnlockedToday: string;
    inShopInventory: string;
    todayPlunderHistory: string;
    noTreasuresClaimedYet: string;
    serverHuntingFeed: string;
    serverWideLiveFeed: string;
    claimedFeed: string;
    noTreasureActivity: string;
    justNow: string;
    minutesAgo: string;
    hoursAgo: string;
    today: string;
  };

  // Leaderboard Screen
  leaderboard: {
    title: string;
    tabLevel: string;
    tabGold: string;
    fleetRankings: string;
    weeklyDistance: string;
    goldEarned: string;
    rankHeader: string;
    playerHeader: string;
    levelHeader: string;
    goldHeader: string;
    playerLevel: string;
    coinsEarned: string;
    myWeeklyVoyage: string;
    distanceThisWeek: string;
    coinsEarnedThisWeek: string;
    dailyCoinsEarned: string;
    rank: string;
    pirate: string;
    level: string;
    gold: string;
    lvlN: string;
    youLabel: string;
  };

  // Server Modal
  server: {
    title: string;
    currentServer: string;
    uniqueCode: string;
    shipsCount: string;
    availableServers: string;
    createPrivateTitle: string;
    islandNamePlaceholder: string;
    createButton: string;
    joinByCodeTitle: string;
    codePlaceholder: string;
    joinButton: string;
    globalType: string;
    privateType: string;
  };

  // Profile Modal
  profile: {
    title: string;
    usernameLabel: string;
    usernamePlaceholder: string;
    aboutMeLabel: string;
    aboutMePlaceholder: string;
    avatarLabel: string;
    uploadImage: string;
    uploadNotice: string;
    saveButton: string;
    savedSuccess: string;
    presetAvatars: string;
    languageSettings: string;
    selectLanguage: string;
  };

  // Ship Inspect Modal
  inspect: {
    title: string;
    flagshipType: string;
    hullHp: string;
    hullCondition: string;
    cannonsEquipped: string;
    shieldEquipped: string;
    mountedCount: string;
    shieldActive: string;
    noShield: string;
    openRepair: string;
    openUpgrades: string;
  };

  // Attack Modal
  attack: {
    title: string;
    raidVictory: string;
    raidDefeat: string;
    attackedPlayer: string;
    damageDealt: string;
    enemyRemainingHp: string;
    coinsLooted: string;
    gemsLooted: string;
    cannonLooted: string;
    shieldBlocked: string;
    selectTargetPrompt: string;
    targetLockedPrompt: string;
    launchRaidButton: string;
    attacking: string;
    noTargets: string;
  };

  // Battle History
  history: {
    title: string;
    empty: string;
    raidOn: string;
    defendedAgainst: string;
    damageLabel: string;
    victoryBadge: string;
    defeatBadge: string;
    defendedBadge: string;
  };

  // Tutorial Popups (Joyride)
  tutorial: {
    guideBadge: string; // "Guide {0} of {1}"
    skip: string;
    back: string;
    next: string;
    done: string;
    step1Title: string;
    step1Content: string;
    step2Title: string;
    step2Content: string;
    step3Title: string;
    step3Content: string;
    step4Title: string;
    step4Content: string;
    step5Title: string;
    step5Content: string;
    step6Title: string;
    step6Content: string;
    step7Title: string;
    step7Content: string;
    step8Title: string;
    step8Content: string;
    step9Title: string;
    step9Content: string;
    step10Title: string;
    step10Content: string;
  };

  // Messages & Alerts
  messages: {
    fileSizeTooLarge: string;
    usernameEmpty: string;
    notEnoughCoins: string;
    notEnoughGems: string;
    shipRepairedSuccess: string;
    shipAlreadyFull: string;
    notEnoughEnergy: string;
    serverCreatedSuccess: string;
    serverSwitchedSuccess: string;
    codeInvalid: string;
    relicUnlocked: string;
    pedometerPrompt: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    common: {
      back: "Back",
      close: "Close",
      cancel: "Cancel",
      confirm: "Confirm",
      save: "Save",
      saved: "Saved!",
      done: "Done",
      next: "Next",
      skip: "Skip",
      level: "Level",
      xp: "XP",
      hp: "HP",
      condition: "Condition",
      cost: "Cost",
      free: "Free",
      coins: "Coins",
      gems: "Gems",
      energy: "Energy",
      buy: "Buy",
      equip: "Equip",
      unequip: "Unequip",
      equipped: "Equipped",
      unequipped: "Unequipped",
      owned: "Owned",
      locked: "Locked",
      switch: "Switch",
      select: "Select",
      selected: "Selected",
      victory: "Victory",
      defeat: "Defeat",
      defended: "Defended",
      damage: "Damage",
      critical: "CRITICAL!",
      you: "You",
      captain: "Captain",
      language: "Language",
      vietnamese: "Vietnamese",
      english: "English",
      all: "All",
    },
    nav: {
      steps: "Steps",
      build: "Build",
      theSea: "The Sea",
      fleet: "Fleet",
      startVoyage: "Start Voyage",
      beginAdventure: "Begin Your Adventure",
    },
    header: {
      captainProfile: "My Captain Profile",
      helpTutorial: "Help & Tutorial",
      mute: "Mute",
      unmute: "Unmute",
      criticalRepair: "CRITICAL: REPAIR SHIP",
      energyTitle: "Energy",
      myServer: "Realm",
    },
    home: {
      welcomeBack: "Welcome back",
      wanderer: "Wanderer",
      dailySteps: "Daily Steps",
      stepGoal: "Goal: 10,000",
      distance: "Distance",
      calories: "Calories",
      activeTime: "Active Time",
      kmUnit: "km",
      kcalUnit: "kcal",
      minUnit: "min",
      energyChargedTitle: "ENERGY CHARGED",
      energyChargedDesc: "Turn your steps into ship Energy! Walk each day to fuel your cannons and exploration.",
      dailyQuestsTitle: "Daily Quests",
      claim: "Claim",
      claimed: "Claimed",
      completed: "Completed",
      walkTrackerTitle: "Walk Tracker & Analytics",
      activityMap: "Activity Map",
      historyChart: "History Chart",
      day: "Day",
      week: "Week",
      month: "Month",
      autoWalk: "Auto Walk",
      autoWalkOn: "Auto Walk: ON",
      autoWalkOff: "Auto Walk: OFF",
      goldEarnedToday: "Gold Earned Today",
    },
    quests: {
      q1Title: "Morning Stroll",
      q1Desc: "Walk 1,500 steps",
      q2Title: "Afternoon Sprint",
      q2Desc: "Walk 3,000 steps",
      q3Title: "Treasure Hunter",
      q3Desc: "Walk 5,000 steps",
      q4Title: "Ocean Voyager",
      q4Desc: "Walk 10,000 steps",
    },
    shipyard: {
      title: "Shipyard",
      shop: "Shop",
      upgrades: "Upgrades",
      repair: "Repair",
      history: "History",
      upgradeShip: "Upgrade Ship",
      maxLevelReached: "Max Level Reached",
      upgradeCost: "Upgrade Ship",
      repairShipButton: "Repair Ship",
      flagshipLevel: "Level {0} Flagship",
      hullStatus: "Hull Status",
      criticalDamage: "Critical Damage!",
    },
    upgrades: {
      title: "Ship Upgrades & Armory",
      tabShip: "Ship",
      tabCannons: "Cannons",
      tabShield: "Shield",
      hullUpgradesTitle: "Flagship Hull Upgrades",
      hullUpgradesDesc: "Upgrade your hull to increase maximum HP and withstand fierce attacks.",
      cannonArmoryTitle: "Cannon Armory",
      cannonArmoryDesc: "Purchase and upgrade cannons to deal massive damage in raids and boss battles.",
      shieldDefensesTitle: "Hull Shielding",
      shieldDefensesDesc: "Deploy energy shields to block enemy bomb attacks and protect your gold.",
      buyNewCannon: "Buy New Cannon",
      buyNewShield: "Buy Hull Shield",
      upgradeToLevel: "Upgrade to Lv {0}",
      maxLevel: "Max Level",
      cannonDamage: "Damage",
      shieldProtection: "Absorption",
      equippedCount: "Equipped: {0}/{1}",
      maxHullStrength: "Max Hull Strength",
      currentLevelHp: "Current Level HP",
      nextLevelHp: "Next Level ({0})",
      totalHp: "Total {0} HP",
      shipUpgradeNotice: "*Permanent Purchase. Level 1→2 costs 1,000 coins (+500 per level afterwards).",
      upgradeShipCost: "Upgrade Ship ({0} Coins)",
      cannonItemTitle: "Cannon #{0} (Lv.{1})",
      shieldItemTitle: "Shield #{0} (Lv.{1})",
      shieldCharges: "Charges: {0}",
      noShieldsOwned: "You don't own any shields yet.",
      cannonWarning: "⚠️ Warning: Cannons can be looted by enemy raiders if your ship's HP falls below 30% during a battle!",
      buyCostCoins: "Buy New ({0} Coins)",
    },
    repair: {
      title: "Ship Repair Bay",
      conditionGauge: "Ship Condition Gauge",
      fullRepair: "Full Repair",
      rebuildShip: "Rebuild Ship",
      repairNow: "Repair Now",
      fullyOperational: "Ship is fully operational!",
      costInGold: "Cost: {0} Gold",
      repairNotice: "Maintaining your ship condition prevents loss of loot when attacked.",
    },
    shop: {
      title: "Pirate Bazaar & Ad Haven",
      watchAdTitle: "Merchant Cargo Ship",
      watchAdDesc: "Watch a short merchant message to receive 15 Free Gems instantly!",
      watchAdButton: "Watch Ad for Gems",
      adPlaying: "Receiving cargo in {0}s...",
      tabAll: "All Items",
      tabOwned: "Owned Items",
      categoryFlag: "Flags",
      categoryFigurehead: "Figureheads",
      categoryLantern: "Lanterns",
      categoryEffect: "Auras",
      ownedBadge: "OWNED",
      equippedBadge: "EQUIPPED",
      buyItem: "Buy",
    },
    theSea: {
      modeBombing: "Ship Bombing",
      modeRaid: "Co-op Raid Boss",
      modeTreasure: "GPS Treasure Hunt",
      switchServer: "Switch",
      modeSelectorTitle: "THE SEA MODE",
      yourFlagship: "Your Flagship",
      inspectShip: "Inspect Ship",
      launchAttack: "Bomb Ship",
      targetLocked: "Target Locked",
      selectTarget: "Select Target",
      energyCost: "Cost: 1 Energy",
      noEnergy: "No Energy!",
      shipsInRealm: "{0} Ships in Realm",
      bombShip: "Launch Bomb Attack",
      modeBombingDesc: "Ocean Ship Bombardment",
      modeRaidDesc: "Abyssal Co-op Beast",
      modeTreasureDesc: "2km Radar & Shared Loot",
      modeDropdownTitle: "THE SEA MODE",
      firingSalvo: "💣 FIRING CANNON SALVO! 💣",
      bombardingText: "Bombarding target ship on the high seas...",
      raidVictory: "⚔️ RAID VICTORY! ⚔️",
      youAttacked: "You attacked {0}!",
      damageDealt: "Damage Dealt",
      enemyRemaining: "Enemy Remaining",
      plunderedLoot: "Plundered Loot:",
      stoleCannon: "Stole enemy Lv{0} Cannon!",
      continuePatrol: "Continue Ocean Patrol",
      yourFlagshipLabel: "(Your Flagship)",
      vesselTitleLevel: "{0} • Lv.{1} Vessel",
      mountedCannons: "Mounted Cannons",
      modifyInYard: "Modify In Ship Build Yard",
      fireBombsCost: "💣 FIRE BOMBS AT THIS SHIP! (1 Energy)",
      bombBtn: "💣 BOMB!",
      shipList: "Ship List",
      bombRandom: "Bomb Random",
    },
    raid: {
      joinPromptTitle: "ANCIENT SEA BEAST AWAKENED",
      joinPromptDesc: "Join captains across the fleet in real-time to defeat this colossal sea terror!",
      joinButton: "Join Raid Battle",
      bossActive: "BATTLE IN PROGRESS",
      bossDefeated: "BOSS DEFEATED!",
      timeRemaining: "Time Left",
      dealDamage: "Fire Cannons!",
      attackBoss: "Attack Boss",
      fleetLeaderboard: "Fleet Damage Rankings",
      yourDamage: "Your Damage",
      totalDamage: "Total Fleet Damage",
      yourRank: "Your Rank",
      claimPrize: "Claim Victory Loot",
      prizeClaimed: "Reward Claimed!",
      dailyPrizeTitle: "Raid Spoils & Chests",
      topHunters: "Top Captains",
      respawnBoss: "Summon Next Beast",
      respawnPrompt: "A new terrifying monster approaches...",
      recentCombatLogs: "Recent Combat Feed",
      joinQuestion: "Join Fleet Raid Battle?",
      joinDesc: "Will you join the server armada to conquer {0}?",
      stepRule: "Every footstep deals 1 HP damage to the leviathan and earns you a share of the sealed bounty!",
      yesJoin: "Yes, Join Raid",
      noReturn: "No, Return",
      abyssRises: "⚔️ FROM THE ABYSS, THERE RISES... ⚔️",
      tier5Target: "TIER 5 RAID TARGET",
      tier5Raid: "TIER 5 RAID",
      bossHp: "Boss HP",
      inBattle: "{0} In Battle",
      activeCount: "{0} Active",
      stepDamageRule: "1 Walk Step = 1 HP Damage",
      damageShare: "DAMAGE SHARE",
      serverRank: "SERVER RANK",
      takeSteps: "Take Steps",
      walkToStrike: "Walk to strike",
      striker1st: "🥇 1st Striker",
      striker2nd: "🥈 2nd Striker",
      striker3rd: "🥉 3rd Striker",
      rankN: "Rank #{0}",
      sealedBounty: "SEALED BOUNTY",
      unlocksAtDefeat: "Unlocks at defeat",
      unseal: "Unseal",
      unsealMysteryBounty: "Unseal Mystery Bounty",
      bountyRewardsClaimed: "Bounty Rewards Claimed",
      rankings: "Rankings",
      fleetDamageRankings: "Fleet Damage Rankings",
      serverCaptainsCount: "{0} • {1} Captains",
      yourPerformance: "YOUR PERFORMANCE",
      stepsShareDesc: "{0} Steps • {1}% Share",
      returnToBattle: "Return To Battle",
      mysteryBountyUnsealed: "MYSTERY BOUNTY UNSEALED!",
      bountyContribution: "You contributed {0}% of server damage against {1}!",
      goldCoins: "Gold Coins",
      collectBounty: "Collect Bounty",
      bossDefeatedFleet: "Your server fleet conquered {0}! The sealed mystery bounty is unlocked.",
    },
    treasure: {
      title: "GPS Treasure Hunt",
      subtitle: "Explore real-world GPS coordinates to unearth buried pirate chests!",
      openChest: "Open Treasure Chest",
      claimed: "Claimed",
      metersAway: "{0}m away",
      todayLootTitle: "Today's Expedition Loot",
      totalChests: "Chests Opened",
      secretRelics: "Ancient Relics",
      liveLog: "Fleet Treasure Activity",
      claimSuccess: "Loot Claimed Successfully!",
      compassHeading: "Bearing",
      gpsActive: "GPS Satellite Active",
      noTreasuresNearby: "Keep walking to discover hidden chests nearby!",
      congratulations: "TREASURE UNEARTHED!",
      openedTitle: "TREASURE CHEST OPENED!",
      chestLabel: "{0} CHEST",
      legendarySecretRelic: "⭐ LEGENDARY SECRET RELIC ⭐",
      addedToShopInventory: "✨ Added directly to your Shop inventory!",
      lootDiscovered: "Loot Discovered",
      coins: "Coins",
      gems: "Gems",
      claimContinue: "Claim & Continue Hunting",
      treasureHunt: "Treasure Hunt",
      radar2km: "2 KM RADAR",
      serverActiveChests: "Server: {0} | Active: {1} Chests",
      resetIn: "Reset in: {0}",
      gameModeDescTitle: "Treasure Hunt",
      gameModeDescP1: "Each day, between 5 to 15 random treasures spawn exclusively within a 2 km radius of your coordinates and remain anchored in place for 24 hours.",
      gameModeDescP2: "Server-Wide Isolation: Each server has its own unique daily treasures and feed. Pirates on other servers cannot see or claim your server's treasures!",
      gameModeDescP3: "Track markers with your live radar and touch chests (≤45m) to plunder them before fellow captains on your server claim them!",
      gotIt: "Got It!",
      dropRates: "Drop Rates",
      treasureDropRates: "Treasure Drop Rates",
      secretRelicNote: "* Secret item drops are unlisted from the shop catalog until plundered from a legendary chest. Once found, they immediately unlock in your decoration inventory.",
      radarMapTitle: "TREASURE RADAR MAP",
      liveGps: "LIVE GPS",
      treasuresLocated: "⚡ {0} Treasure{1} located within 2km radar. Walk to touch & collect!",
      scanningRadius: "📡 Radar scanning 2km radius around captain coordinates...",
      nearestDist: "Nearest: {0}m",
      away: "{0}m away",
      touchingChest: "✨ TOUCHING CHEST!",
      walkWithin45m: "Walk within 45m to claim",
      nearestAvailable: "NEAREST AVAILABLE TREASURE",
      closestTargetRadar: "Closest target on your 2 km radar",
      plunderChest: "Plunder Chest!",
      focusTarget: "Focus Target",
      proximityZone: "Proximity to Touch Zone (≤45m)",
      todayPlundered: "TODAY'S PLUNDERED LOOT",
      chestsCollectedToday: "{0} Chest{1} Collected Today",
      dailyStash: "Daily Stash",
      coinsLooted: "Coins Looted",
      gemsLooted: "Gems Looted",
      relicsFound: "{0} Found",
      legendaryRelicsUnlockedToday: "Legendary Relics Unlocked Today",
      inShopInventory: "✓ In Shop Inventory",
      todayPlunderHistory: "Today's Plunder History ({0})",
      noTreasuresClaimedYet: "No treasures claimed yet today. Walk towards the map icons to touch and collect!",
      serverHuntingFeed: "SERVER HUNTING FEED",
      serverWideLiveFeed: "Server-wide Live Feed",
      claimedFeed: "claimed",
      noTreasureActivity: "No treasure activity on {0} yet today. Be the first to claim a chest!",
      justNow: "Just now",
      minutesAgo: "{0}m ago",
      hoursAgo: "{0}h ago",
      today: "Today",
    },
    leaderboard: {
      title: "Fleet Leaderboard",
      tabLevel: "Highest Level",
      tabGold: "Richest Pirates",
      fleetRankings: "Global Fleet Rankings",
      weeklyDistance: "Weekly Distance",
      goldEarned: "Gold Accumulated",
      rankHeader: "Rank",
      playerHeader: "Captain",
      levelHeader: "Level",
      goldHeader: "Gold",
      playerLevel: "Player Level",
      coinsEarned: "Coins Earned",
      myWeeklyVoyage: "My Weekly Voyage",
      distanceThisWeek: "Distance This Week",
      coinsEarnedThisWeek: "Coins Earned This Week",
      dailyCoinsEarned: "Daily Coins Earned",
      rank: "Rank",
      pirate: "Pirate",
      level: "Level",
      gold: "Gold",
      lvlN: "Lvl {0}",
      youLabel: "{0} (You)",
    },
    server: {
      title: "Server & Island Realms",
      currentServer: "Current Server Realm",
      uniqueCode: "Room Code",
      shipsCount: "Ships",
      availableServers: "Available Fleet Servers",
      createPrivateTitle: "Create Private Beach Realm",
      islandNamePlaceholder: "Enter Island Realm Name...",
      createButton: "Create Realm",
      joinByCodeTitle: "Join by Secret Room Code",
      codePlaceholder: "ENTER 6-CHAR CODE",
      joinButton: "Join Realm",
      globalType: "Global",
      privateType: "Private",
    },
    profile: {
      title: "Captain Profile",
      usernameLabel: "Captain Name",
      usernamePlaceholder: "Enter captain moniker...",
      aboutMeLabel: "Captain's Log / Motto",
      aboutMePlaceholder: "Sailing across uncharted waters!",
      avatarLabel: "Captain Avatar",
      uploadImage: "Upload Custom Image",
      uploadNotice: "Supports JPG/PNG under 5MB",
      saveButton: "Save Profile",
      savedSuccess: "Profile Saved!",
      presetAvatars: "Preset Pirate Avatars",
      languageSettings: "Language / Ngôn ngữ",
      selectLanguage: "Interface Language",
    },
    inspect: {
      title: "Flagship Diagnostics",
      flagshipType: "Level {0} Pirate Flagship",
      hullHp: "Hull HP: {0} / {1} HP",
      hullCondition: "Ship Hull Condition",
      cannonsEquipped: "Cannons",
      shieldEquipped: "Shield Aura",
      mountedCount: "Lv.{0} x{1} Mounted",
      shieldActive: "Lv.{0} Shield Active",
      noShield: "No Shield",
      openRepair: "Repair Ship",
      openUpgrades: "Upgrade Ship",
    },
    attack: {
      title: "Launch Raid",
      raidVictory: "RAID VICTORY!",
      raidDefeat: "RAID REPELLED!",
      attackedPlayer: "You attacked",
      damageDealt: "Damage Dealt",
      enemyRemainingHp: "Enemy Remaining HP",
      coinsLooted: "Coins Looted",
      gemsLooted: "Gems Looted",
      cannonLooted: "Rare Cannon Looted!",
      shieldBlocked: "Enemy Shield Blocked Attack!",
      selectTargetPrompt: "Select Target Ship ({0} Ships in Server)",
      targetLockedPrompt: "Target Locked: {0}",
      launchRaidButton: "Launch Bomb Raid (1 Energy)",
      attacking: "Firing Cannons...",
      noTargets: "No opposing ships detected in this realm.",
    },
    history: {
      title: "Battle History Log",
      empty: "No battle history yet. Launch a BOMB raid on other ships!",
      raidOn: "Raid on {0}",
      defendedAgainst: "Defended against {0}",
      damageLabel: "Damage: {0} HP",
      victoryBadge: "VICTORY",
      defeatBadge: "DEFEAT",
      defendedBadge: "DEFENDED",
    },
    tutorial: {
      guideBadge: "Guide {0} of {1}",
      skip: "Skip",
      back: "Back",
      next: "Next",
      done: "Done",
      step1Title: "Daily Steps",
      step1Content: "This is your Home tab. Use it to track your real-world progress.",
      step2Title: "Level & XP",
      step2Content: "Complete quests and walk to earn XP. Leveling up unlocks stronger ships!",
      step3Title: "Energy Charged",
      step3Content: "Turn your real-world steps into ship Energy! Hit your daily goal to earn 1 Energy point and power your voyages.",
      step4Title: "Daily Quests",
      step4Content: "Hit your step targets to claim XP and rewards here every day.",
      step5Title: "Ship Build",
      step5Content: "Welcome to your shipyard. This is where you modify your flagship!",
      step6Title: "Energy",
      step6Content: "Energy resets everyday, use it to bomb other ships.",
      step7Title: "HUB",
      step7Content: "Shop for supplies and gems, upgrade your ship and defenses, repair battle damage, and review your history of fights and loot.",
      step8Title: "The Sea",
      step8Content: "Welcome to the open ocean! Explore and battle here.",
      step9Title: "Game Modes",
      step9Content: "Tap to explore other game modes like Co-op Raids and GPS Treasure Hunts.",
      step10Title: "Fleet",
      step10Content: "Check out the global rankings and your weekly performance.",
    },
    messages: {
      fileSizeTooLarge: "File size is too large! Please select an image under 5MB.",
      usernameEmpty: "Username cannot be empty!",
      notEnoughCoins: "Not enough coins!",
      notEnoughGems: "Not enough gems!",
      shipRepairedSuccess: "Ship repaired successfully!",
      shipAlreadyFull: "Ship is already in 100% mint condition!",
      notEnoughEnergy: "You need at least 1 Energy to attack! Walk to recharge.",
      serverCreatedSuccess: "Private Realm created! Invite fellow captains.",
      serverSwitchedSuccess: "Sailed to realm: {0}",
      codeInvalid: "Please enter a valid 6-character room code.",
      relicUnlocked: "Ancient secret relic discovered!",
      pedometerPrompt: "Step sensor active. Keep moving to earn gold and energy!",
    },
  },
  vi: {
    common: {
      back: "Quay lại",
      close: "Đóng",
      cancel: "Hủy",
      confirm: "Xác nhận",
      save: "Lưu",
      saved: "Đã lưu!",
      done: "Hoàn tất",
      next: "Tiếp theo",
      skip: "Bỏ qua",
      level: "Cấp",
      xp: "XP",
      hp: "HP",
      condition: "Tình trạng",
      cost: "Chi phí",
      free: "Miễn phí",
      coins: "Vàng",
      gems: "Kim cương",
      energy: "Năng lượng",
      buy: "Mua",
      equip: "Trang bị",
      unequip: "Tháo gỡ",
      equipped: "Đang dùng",
      unequipped: "Chưa dùng",
      owned: "Đã có",
      locked: "Đã khóa",
      switch: "Đổi",
      select: "Chọn",
      selected: "Đã chọn",
      victory: "Chiến thắng",
      defeat: "Thất bại",
      defended: "Đã phòng thủ",
      damage: "Sát thương",
      critical: "CHÍ MẠNG!",
      you: "Bạn",
      captain: "Thuyền trưởng",
      language: "Ngôn ngữ",
      vietnamese: "Tiếng Việt",
      english: "English",
      all: "Tất cả",
    },
    nav: {
      steps: "Bước chân",
      build: "Đóng tàu",
      theSea: "Biển cả",
      fleet: "Hạm đội",
      startVoyage: "Ra khơi",
      beginAdventure: "Bắt đầu cuộc phiêu lưu",
    },
    header: {
      captainProfile: "Hồ sơ Thuyền trưởng",
      helpTutorial: "Trợ giúp & Hướng dẫn",
      mute: "Tắt tiếng",
      unmute: "Bật tiếng",
      criticalRepair: "NGUY CẤP: SỬA CHỮA TÀU",
      energyTitle: "Năng lượng",
      myServer: "Máy chủ",
    },
    home: {
      welcomeBack: "Chào mừng trở lại",
      wanderer: "Nhà thám hiểm",
      dailySteps: "Bước chân hôm nay",
      stepGoal: "Mục tiêu: 10.000",
      distance: "Khoảng cách",
      calories: "Calo tiêu hao",
      activeTime: "Thời gian đi",
      kmUnit: "km",
      kcalUnit: "kcal",
      minUnit: "phút",
      energyChargedTitle: "NẠP ĐẦY NĂNG LƯỢNG",
      energyChargedDesc: "Biến bước chân thực tế thành Năng lượng tàu! Đi bộ mỗi ngày để nạp đại bác và bắt đầu các chuyến hải trình.",
      dailyQuestsTitle: "Nhiệm vụ hàng ngày",
      claim: "Nhận thưởng",
      claimed: "Đã nhận",
      completed: "Đã hoàn thành",
      walkTrackerTitle: "Theo dõi & Phân tích bước chân",
      activityMap: "Bản đồ hành trình",
      historyChart: "Biểu đồ lịch sử",
      day: "Ngày",
      week: "Tuần",
      month: "Month",
      autoWalk: "Tự động đi",
      autoWalkOn: "Tự đi: BẬT",
      autoWalkOff: "Tự đi: TẮT",
      goldEarnedToday: "Vàng kiếm được hôm nay",
    },
    quests: {
      q1Title: "Đi dạo ban mai",
      q1Desc: "Đi bộ 1.500 bước",
      q2Title: "Chạy nước rút chiều",
      q2Desc: "Đi bộ 3.000 bước",
      q3Title: "Thợ săn kho báu",
      q3Desc: "Đi bộ 5.000 bước",
      q4Title: "Du hành đại dương",
      q4Desc: "Đi bộ 10.000 bước",
    },
    shipyard: {
      title: "Xưởng đóng tàu",
      shop: "Cửa hàng",
      upgrades: "Nâng cấp",
      repair: "Sửa chữa",
      history: "Lịch sử",
      upgradeShip: "Nâng cấp tàu",
      maxLevelReached: "Đã đạt cấp tối đa",
      upgradeCost: "Nâng cấp tàu",
      repairShipButton: "Sửa chữa tàu",
      flagshipLevel: "Chiến hạm Cấp {0}",
      hullStatus: "Tình trạng thân tàu",
      criticalDamage: "Hư hại nghiêm trọng!",
    },
    upgrades: {
      title: "Kho vũ khí & Nâng cấp tàu",
      tabShip: "Thân tàu",
      tabCannons: "Đại bác",
      tabShield: "Khiên chắn",
      hullUpgradesTitle: "Nâng cấp thân chiến hạm",
      hullUpgradesDesc: "Nâng cấp thân tàu để gia tăng lượng máu tối đa và chống chịu các đợt tập kích dữ dội.",
      cannonArmoryTitle: "Kho súng đại bác",
      cannonArmoryDesc: "Mua sắm và nâng cấp đại bác để gây sát thương uy lực trong các cuộc tập kích và săn Boss.",
      shieldDefensesTitle: "Hệ thống khiên chắn",
      shieldDefensesDesc: "Triển khai khiên năng lượng để chặn đứng đòn pháo kích của kẻ địch và bảo vệ kho vàng.",
      buyNewCannon: "Mua đại bác mới",
      buyNewShield: "Mua khiên chắn",
      upgradeToLevel: "Nâng lên Cấp {0}",
      maxLevel: "Cấp tối đa",
      cannonDamage: "Sát thương",
      shieldProtection: "Hấp thụ",
      equippedCount: "Đã trang bị: {0}/{1}",
      maxHullStrength: "Độ bền thân tàu tối đa",
      currentLevelHp: "Máu cấp hiện tại",
      nextLevelHp: "Cấp kế tiếp ({0})",
      totalHp: "Tổng {0} HP",
      shipUpgradeNotice: "*Mua vĩnh viễn. Cấp 1→2 giá 1.000 vàng (+500 vàng mỗi cấp sau đó).",
      upgradeShipCost: "Nâng cấp tàu ({0} Vàng)",
      cannonItemTitle: "Đại bác #{0} (Cấp {1})",
      shieldItemTitle: "Khiên #{0} (Cấp {1})",
      shieldCharges: "Số lần đỡ: {0}",
      noShieldsOwned: "Bạn chưa sở hữu chiếc khiên nào.",
      cannonWarning: "⚠️ Cảnh báo: Đại bác có thể bị đối thủ cướp mất nếu máu tàu của bạn giảm xuống dưới 30% trong trận đấu!",
      buyCostCoins: "Mua mới ({0} Vàng)",
    },
    repair: {
      title: "Ụ sửa chữa tàu",
      conditionGauge: "Thước đo tình trạng tàu",
      fullRepair: "Sửa toàn bộ",
      rebuildShip: "Đóng lại tàu",
      repairNow: "Sửa chữa ngay",
      fullyOperational: "Tàu đang hoạt động hoàn hảo!",
      costInGold: "Chi phí: {0} Vàng",
      repairNotice: "Duy trì tình trạng tàu tốt giúp tránh thất thoát kho báu khi bị tập kích.",
    },
    shop: {
      title: "Chợ hải tặc & Trạm quà tặng",
      watchAdTitle: "Tàu buôn hàng hải",
      watchAdDesc: "Xem thông điệp ngắn từ thương nhân để nhận ngay 15 Kim cương miễn phí!",
      watchAdButton: "Xem quảng cáo nhận Kim cương",
      adPlaying: "Đang nhận hàng sau {0}s...",
      tabAll: "Tất cả vật phẩm",
      tabOwned: "Đã sở hữu",
      categoryFlag: "Cờ hải tặc",
      categoryFigurehead: "Mũi tàu điêu khắc",
      categoryLantern: "Đèn hoa tiêu",
      categoryEffect: "Hào quang",
      ownedBadge: "ĐÃ CÓ",
      equippedBadge: "ĐANG DÙNG",
      buyItem: "Mua",
    },
    theSea: {
      modeBombing: "Hải chiến oanh tạc",
      modeRaid: "Đại chiến Thủy quái",
      modeTreasure: "Săn kho báu GPS",
      switchServer: "Đổi",
      modeSelectorTitle: "CHẾ ĐỘ BIỂN CẢ",
      yourFlagship: "Chiến hạm của bạn",
      inspectShip: "Xem thông tin tàu",
      launchAttack: "Bắn pháo kích",
      targetLocked: "Đã khóa mục tiêu",
      selectTarget: "Chọn mục tiêu",
      energyCost: "Tiêu hao: 1 Năng lượng",
      noEnergy: "Hết năng lượng!",
      shipsInRealm: "{0} Tàu trong vùng biển",
      bombShip: "Khai hỏa oanh tạc",
      modeBombingDesc: "Pháo kích oanh tạc tàu biển",
      modeRaidDesc: "Thủy quái biển sâu hợp tác",
      modeTreasureDesc: "Radar 2km & Chia sẻ kho báu",
      modeDropdownTitle: "CHẾ ĐỘ BIỂN CẢ",
      firingSalvo: "💣 KHAI HỎA PHÁO KÍCH! 💣",
      bombardingText: "Đang oanh tạc dữ dội tàu mục tiêu trên biển...",
      raidVictory: "⚔️ TẬP KÍCH THẮNG LỢI! ⚔️",
      youAttacked: "Bạn đã tấn công {0}!",
      damageDealt: "Sát thương gây ra",
      enemyRemaining: "Máu đối thủ còn",
      plunderedLoot: "Chiến lợi phẩm cướp được:",
      stoleCannon: "Cướp được Đại bác Cấp {0} của địch!",
      continuePatrol: "Tiếp tục tuần tra biển",
      yourFlagshipLabel: "(Chiến hạm của bạn)",
      vesselTitleLevel: "{0} • Thuyền Cấp {1}",
      mountedCannons: "Đại bác trang bị",
      modifyInYard: "Tùy chỉnh trong Xưởng đóng tàu",
      fireBombsCost: "💣 KHAI HỎA VÀO TÀU NÀY! (1 Năng lượng)",
      bombBtn: "💣 BẮN!",
      shipList: "Danh sách tàu",
      bombRandom: "Bắn ngẫu nhiên",
    },
    raid: {
      joinPromptTitle: "THỦY QUÁI CỔ ĐẠI THỨC TỈNH",
      joinPromptDesc: "Gia nhập lực lượng cùng các thuyền trưởng toàn hạm đội để hạ gục quái thú biển khơi khổng lồ!",
      joinButton: "Tham gia săn Boss",
      bossActive: "CHIẾN ĐẬU ĐANG DIỄN RA",
      bossDefeated: "ĐÃ HẠ GỤC BOSS!",
      timeRemaining: "Thời gian còn lại",
      dealDamage: "Khai hỏa đại bác!",
      attackBoss: "Tấn công Boss",
      fleetLeaderboard: "Bảng xếp hạng sát thương",
      yourDamage: "Sát thương của bạn",
      totalDamage: "Tổng sát thương hạm đội",
      yourRank: "Hạng của bạn",
      claimPrize: "Nhận chiến lợi phẩm",
      prizeClaimed: "Đã nhận thưởng!",
      dailyPrizeTitle: "Rương & Phần thưởng Raid",
      topHunters: "Thợ săn hàng đầu",
      respawnBoss: "Triệu hồi Thủy quái mới",
      respawnPrompt: "Một quái vật biển đáng sợ đang tiến lại gần...",
      recentCombatLogs: "Nhật ký chiến trường gần đây",
      joinQuestion: "Tham gia hạm đội săn Boss?",
      joinDesc: "Bạn có muốn cùng hạm đội trên máy chủ chinh phục {0}?",
      stepRule: "Mỗi bước chân gây 1 sát thương HP lên quái thú và mang lại phần thưởng phong ấn cho bạn!",
      yesJoin: "Có, tham gia",
      noReturn: "Không, quay lại",
      abyssRises: "⚔️ TỪ BIỂN SÂU THĂM THẲM, XUẤT HIỆN... ⚔️",
      tier5Target: "MỤC TIÊU RAID CẤP 5",
      tier5Raid: "RAID CẤP 5",
      bossHp: "Máu Boss",
      inBattle: "{0} Đang chiến đấu",
      activeCount: "{0} Đang hoạt động",
      stepDamageRule: "1 Bước chân = 1 Sát thương HP",
      damageShare: "TỶ LỆ SÁT THƯƠNG",
      serverRank: "HẠNG MÁY CHỦ",
      takeSteps: "Bước đi",
      walkToStrike: "Đi bộ để tấn công",
      striker1st: "🥇 Hạng 1 Sát thương",
      striker2nd: "🥈 Hạng 2 Sát thương",
      striker3rd: "🥉 Hạng 3 Sát thương",
      rankN: "Hạng #{0}",
      sealedBounty: "CHIẾN LỢI PHẨM PHONG ẤN",
      unlocksAtDefeat: "Mở khi hạ gục",
      unseal: "Mở ấn",
      unsealMysteryBounty: "Mở phong ấn phần thưởng bí ẩn",
      bountyRewardsClaimed: "Đã nhận phần thưởng",
      rankings: "Bảng xếp hạng",
      fleetDamageRankings: "Xếp hạng sát thương hạm đội",
      serverCaptainsCount: "{0} • {1} Thuyền trưởng",
      yourPerformance: "HIỆU SUẤT CỦA BẠN",
      stepsShareDesc: "{0} Bước • {1}% Đóng góp",
      returnToBattle: "Trở lại chiến trận",
      mysteryBountyUnsealed: "ĐÃ MỞ PHONG ẤN THƯỞNG BÍ ẨN!",
      bountyContribution: "Bạn đã đóng góp {0}% sát thương máy chủ lên {1}!",
      goldCoins: "Tiền vàng",
      collectBounty: "Thu nhận chiến lợi phẩm",
      bossDefeatedFleet: "Hạm đội máy chủ của bạn đã chinh phục thành công {0}! Kho báu phong ấn đã được mở khóa.",
    },
    treasure: {
      title: "Săn kho báu GPS",
      subtitle: "Khám phá tọa độ GPS ngoài đời thực để khai quật các rương kho báu hải tặc chôn giấu!",
      openChest: "Mở rương kho báu",
      claimed: "Đã mở",
      metersAway: "Cách {0}m",
      todayLootTitle: "Chiến lợi phẩm hôm nay",
      totalChests: "Số rương đã mở",
      secretRelics: "Cổ vật bí truyền",
      liveLog: "Hoạt động tìm kho báu hạm đội",
      claimSuccess: "Khai quật kho báu thành công!",
      compassHeading: "Phương vị",
      gpsActive: "Định vị GPS hoạt động",
      noTreasuresNearby: "Hãy tiếp tục di chuyển để tìm các rương kho báu ẩn gần đây!",
      congratulations: "KHAI QUẬT KHO BÁU THÀNH CÔNG!",
      openedTitle: "ĐÃ MỞ RƯƠNG KHO BÁU!",
      chestLabel: "RƯƠNG {0}",
      legendarySecretRelic: "⭐ CỔ VẬT BÍ TRUYỀN HUYỀN THOẠI ⭐",
      addedToShopInventory: "✨ Đã thêm trực tiếp vào kho đồ Cửa hàng!",
      lootDiscovered: "Chiến lợi phẩm phát hiện",
      coins: "Tiền vàng",
      gems: "Kim cương",
      claimContinue: "Nhận & Tiếp tục săn lùng",
      treasureHunt: "Săn kho báu",
      radar2km: "RADAR 2 KM",
      serverActiveChests: "Máy chủ: {0} | Đang mở: {1} Rương",
      resetIn: "Làm mới sau: {0}",
      gameModeDescTitle: "Săn kho báu",
      gameModeDescP1: "Mỗi ngày, từ 5 đến 15 rương kho báu ngẫu nhiên xuất hiện độc quyền trong bán kính 2 km quanh tọa độ của bạn và cố định vị trí trong 24 giờ.",
      gameModeDescP2: "Độc lập từng máy chủ: Mỗi máy chủ có rương và bảng tin riêng. Hải tặc ở máy chủ khác không thể thấy hoặc cướp rương trên máy chủ của bạn!",
      gameModeDescP3: "Theo dõi tín hiệu trên radar trực tiếp và chạm vào rương (≤45m) để cướp trước khi các thuyền trưởng khác trên máy chủ đoạt lấy!",
      gotIt: "Đã hiểu!",
      dropRates: "Tỷ lệ rơi",
      treasureDropRates: "Tỷ lệ rơi kho báu",
      secretRelicNote: "* Vật phẩm bí truyền không hiển thị trong danh mục Cửa hàng cho đến khi được khai quật từ rương huyền thoại. Khi tìm thấy, chúng sẽ mở khóa ngay trong kho trang trí của bạn.",
      radarMapTitle: "BẢN ĐỒ RADAR KHO BÁU",
      liveGps: "GPS TRỰC TIẾP",
      treasuresLocated: "⚡ {0} Kho báu nằm trong phạm vi radar 2km. Hãy đi bộ tới gần để chạm & thu thập!",
      scanningRadius: "📡 Radar đang quét bán kính 2km quanh tọa độ thuyền trưởng...",
      nearestDist: "Gần nhất: {0}m",
      away: "Cách {0}m",
      touchingChest: "✨ ĐANG CHẠM RƯƠNG!",
      walkWithin45m: "Đi bộ trong phạm vi 45m để mở",
      nearestAvailable: "KHO BÁU KHẢ DỤNG GẦN NHẤT",
      closestTargetRadar: "Mục tiêu gần nhất trên radar 2 km",
      plunderChest: "Cướp rương!",
      focusTarget: "Tiêu điểm mục tiêu",
      proximityZone: "Khoảng cách tới vùng chạm (≤45m)",
      todayPlundered: "CHIẾN LỢI PHẨM HÔM NAY",
      chestsCollectedToday: "{0} Rương đã thu thập hôm nay",
      dailyStash: "Chiến lợi phẩm ngày",
      coinsLooted: "Vàng đã cướp",
      gemsLooted: "Kim cương đã cướp",
      relicsFound: "{0} Đã tìm thấy",
      legendaryRelicsUnlockedToday: "Cổ vật huyền thoại mở khóa hôm nay",
      inShopInventory: "✓ Trong kho đồ Cửa hàng",
      todayPlunderHistory: "Lịch sử mở rương hôm nay ({0})",
      noTreasuresClaimedYet: "Chưa mở rương kho báu nào hôm nay. Hãy đi bộ về phía biểu tượng trên bản đồ để chạm và thu thập!",
      serverHuntingFeed: "BẢNG TIN SĂN BÁU MÁY CHỦ",
      serverWideLiveFeed: "Bảng tin trực tiếp toàn máy chủ",
      claimedFeed: "đã cướp",
      noTreasureActivity: "Chưa có hoạt động săn kho báu nào trên {0} hôm nay. Hãy là người đầu tiên khai quật rương!",
      justNow: "Vừa xong",
      minutesAgo: "{0} phút trước",
      hoursAgo: "{0} giờ trước",
      today: "Hôm nay",
    },
    leaderboard: {
      title: "Bảng xếp hạng Hạm đội",
      tabLevel: "Cấp độ cao nhất",
      tabGold: "Hải tặc giàu nhất",
      fleetRankings: "Bảng xếp hạng toàn cầu",
      weeklyDistance: "Khoảng cách trong tuần",
      goldEarned: "Số vàng tích lũy",
      rankHeader: "Hạng",
      playerHeader: "Thuyền trưởng",
      levelHeader: "Cấp",
      goldHeader: "Vàng",
      playerLevel: "Cấp độ Thuyền trưởng",
      coinsEarned: "Tiền vàng kiếm được",
      myWeeklyVoyage: "Hành trình tuần của tôi",
      distanceThisWeek: "Khoảng cách tuần này",
      coinsEarnedThisWeek: "Vàng kiếm được tuần này",
      dailyCoinsEarned: "Vàng kiếm được hàng ngày",
      rank: "Hạng",
      pirate: "Hải tặc",
      level: "Cấp",
      gold: "Vàng",
      lvlN: "Cấp {0}",
      youLabel: "{0} (Bạn)",
    },
    server: {
      title: "Máy chủ & Vùng biển riêng",
      currentServer: "Vùng biển hiện tại",
      uniqueCode: "Mã phòng",
      shipsCount: "Chiến hạm",
      availableServers: "Danh sách máy chủ hạm đội",
      createPrivateTitle: "Tạo vùng biển đảo riêng",
      islandNamePlaceholder: "Nhập tên vùng biển mới...",
      createButton: "Tạo vùng biển",
      joinByCodeTitle: "Gia nhập bằng mã phòng bí mật",
      codePlaceholder: "NHẬP MÃ 6 KÝ TỰ",
      joinButton: "Gia nhập",
      globalType: "Toàn cầu",
      privateType: "Riêng tư",
    },
    profile: {
      title: "Hồ sơ Thuyền trưởng",
      usernameLabel: "Tên Thuyền trưởng",
      usernamePlaceholder: "Nhập tên hiệu của bạn...",
      aboutMeLabel: "Nhật ký / Châm ngôn hàng hải",
      aboutMePlaceholder: "Lướt sóng vượt qua những đại dương chưa ai biết đến!",
      avatarLabel: "Ảnh đại diện",
      uploadImage: "Tải ảnh tùy chọn",
      uploadNotice: "Hỗ trợ ảnh JPG/PNG dưới 5MB",
      saveButton: "Lưu hồ sơ",
      savedSuccess: "Đã lưu hồ sơ!",
      presetAvatars: "Ảnh hải tặc có sẵn",
      languageSettings: "Ngôn ngữ / Language",
      selectLanguage: "Ngôn ngữ giao diện",
    },
    inspect: {
      title: "Chẩn đoán & Tình trạng chiến hạm",
      flagshipType: "Chiến hạm hải tặc Cấp {0}",
      hullHp: "Máu thân tàu: {0} / {1} HP",
      hullCondition: "Tình trạng thân tàu",
      cannonsEquipped: "Đại bác",
      shieldEquipped: "Khiên hào quang",
      mountedCount: "Cấp {0} x{1} Đã trang bị",
      shieldActive: "Khiên Cấp {0} Hoạt động",
      noShield: "Không có khiên",
      openRepair: "Sửa chữa tàu",
      openUpgrades: "Nâng cấp tàu",
    },
    attack: {
      title: "Phát động tập kích",
      raidVictory: "CHIẾN THẮNG TẬP KÍCH!",
      raidDefeat: "TẬP KÍCH BỊ ĐẨY LÙI!",
      attackedPlayer: "Bạn đã tấn công",
      damageDealt: "Sát thương gây ra",
      enemyRemainingHp: "Máu đối thủ còn lại",
      coinsLooted: "Vàng cướp được",
      gemsLooted: "Kim cương cướp được",
      cannonLooted: "Cướp được Đại bác hiếm!",
      shieldBlocked: "Khiên đối thủ đã chặn đòn đánh!",
      selectTargetPrompt: "Chọn tàu mục tiêu ({0} Tàu trong máy chủ)",
      targetLockedPrompt: "Đã khóa mục tiêu: {0}",
      launchRaidButton: "Khai hỏa pháo kích (1 Năng lượng)",
      attacking: "Đang nã đại bác...",
      noTargets: "Không phát hiện tàu đối thủ nào trong vùng biển này.",
    },
    history: {
      title: "Nhật ký chiến trận",
      empty: "Chưa có lịch sử chiến đấu. Hãy tiến hành oanh tạc tàu khác!",
      raidOn: "Tập kích {0}",
      defendedAgainst: "Phòng thủ trước {0}",
      damageLabel: "Sát thương: {0} HP",
      victoryBadge: "CHIẾN THẮNG",
      defeatBadge: "THẤT BẠI",
      defendedBadge: "PHÒNG THỦ",
    },
    tutorial: {
      guideBadge: "Hướng dẫn {0}/{1}",
      skip: "Bỏ qua",
      back: "Quay lại",
      next: "Tiếp theo",
      done: "Hoàn tất",
      step1Title: "Bước chân hàng ngày",
      step1Content: "Đây là thẻ Trang chủ. Dùng để theo dõi số bước đi bộ ngoài đời thực của bạn.",
      step2Title: "Cấp độ & Điểm kinh nghiệm",
      step2Content: "Hoàn thành nhiệm vụ và đi bộ để nhận XP. Lên cấp giúp mở khóa những chiến hạm mạnh mẽ hơn!",
      step3Title: "Nạp đầy năng lượng",
      step3Content: "Biến bước chân thực tế thành Năng lượng tàu! Đạt mục tiêu mỗi ngày để nhận 1 điểm Năng lượng cho các chuyến hải trình.",
      step4Title: "Nhiệm vụ hàng ngày",
      step4Content: "Đạt mục tiêu bước chân để nhận thưởng XP và vàng tại đây mỗi ngày.",
      step5Title: "Đóng tàu",
      step5Content: "Chào mừng đến với xưởng đóng tàu. Nơi bạn tùy chỉnh và gia cố chiến hạm của mình!",
      step6Title: "Năng lượng chiến đấu",
      step6Content: "Năng lượng được làm mới mỗi ngày, hãy dùng nó để oanh tạc các tàu khác.",
      step7Title: "Trung tâm chỉ huy (HUB)",
      step7Content: "Mua vật phẩm và kim cương, nâng cấp tàu và hệ thống phòng thủ, sửa chữa hư tổn sau trận đánh và xem lịch sử chiến tích.",
      step8Title: "Biển cả",
      step8Content: "Chào mừng đến với đại dương bao la! Thỏa sức thám hiểm và chiến đấu tại đây.",
      step9Title: "Chế độ chơi",
      step9Content: "Chạm để chuyển đổi giữa các chế độ chơi như Săn Boss Thủy quái hay Săn kho báu GPS.",
      step10Title: "Hạm đội",
      step10Content: "Xem bảng xếp hạng toàn cầu và thành tích vận động hàng tuần của bạn.",
    },
    messages: {
      fileSizeTooLarge: "Dung lượng ảnh quá lớn! Vui lòng chọn ảnh dưới 5MB.",
      usernameEmpty: "Tên Thuyền trưởng không được để trống!",
      notEnoughCoins: "Không đủ vàng!",
      notEnoughGems: "Không đủ kim cương!",
      shipRepairedSuccess: "Đã sửa chữa tàu thành công!",
      shipAlreadyFull: "Chiến hạm đã ở tình trạng hoàn hảo 100%!",
      notEnoughEnergy: "Bạn cần ít nhất 1 Năng lượng để tấn công! Hãy đi bộ để sạc lại.",
      serverCreatedSuccess: "Đã tạo Vùng biển riêng! Hãy mời các thuyền trưởng khác tham gia.",
      serverSwitchedSuccess: "Đã dong buồm đến vùng biển: {0}",
      codeInvalid: "Vui lòng nhập đúng mã phòng gồm 6 ký tự.",
      relicUnlocked: "Đã phát hiện cổ vật bí truyền cổ đại!",
      pedometerPrompt: "Cảm biến bước chân đang hoạt động. Hãy tiếp tục di chuyển để nhận vàng và năng lượng!",
    },
  },
};
