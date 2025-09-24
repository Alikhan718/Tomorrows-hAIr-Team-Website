// Project data - Easy to update for weekly changes
// Last updated: ${new Date().toLocaleString()}
const projectData = {
  // Basic project information
  projectName: "Tomorrow's hAIr",
  sponsor: "MisTee Wants To Know, Inc.",
  coach: "Sudhir Khazanchi",
  keywords:
    "Hair Planner, Calendar, Hair Style Tool, Budget Planning, Mistee",

  // Project synopsis (max 250 words)
  synopsis: `The Digital Hair Style Planner is a web and mobile application developed for MisTee Wants to Know, Inc.  The planner’s objective is to further facilitate a collaboration with curly/coily clients and their hair stylists as hair styles are planned throughout the year.
    The goal is to provide a centralized, intelligent and two-way platform for users to plan, organize and manage their hair care routines and styles throughout the year. 
    Individuals with curly/coily hair have hair style options that include cornrows, braids, weaves, twists etc.  This flexibility enables the selection of styles that consider lifestyle events and season changes. 
    There is sizable upside to include this target audience’s needs when building digital tools.  Currently, most digital tools are limited to static PDF planners or generic scheduling apps that lack personalization, interaction, and cultural appropriateness.  There is a great deal of opportunity for innovation.  
    The Digital Hair Style Planner will offer a calendar-based planning interface, AI-powered hairstyle recommendations plus routine tracking. Users will be able to
    schedule styles, set hair goals, log product usage, and budget for upcoming appointments. There will be a data collection/tracking component incorporated too. 
    Users will be able to share plans with their hair stylists, enabling professional input on style appropriateness, salon visit preparation and cost. For hairstylists, the platform offers insight into client histories, preferences, and hair goals thus, improving pre-appointment preparation.
    By building this planner, our team aims to support healthy hair habits, better financial planning, and deeper stylist-client communication.`,

  // Team members - Add your team information here
  teamMembers: [
    {
      name: "Alikhan Seitkadyrov",
      role: "Web Site Manager",
      initials: "AS",
    },
    {
      name: "Alec Kovalczik",
      role: "Communication lead",
      initials: "AK",
    },
    {
      name: "Angela Ngo",
      role: "Project manager",
      initials: "AN",
    },
    {
      name: "Aric Hoang",
      role: "Frontend Lead",
      initials: "AH",
    },
    {
      name: "Kalen Luraschi",
      role: "Backend Lead",
      initials: "KL",
    },
    // Add more team members as needed
  ],

  // Time tracking data - This will be updated weekly
  timeEntries: [
    // Week 1 (Aug 25-29, 2025)
    {
      id: 1,
      week: "Week 1 (Aug 25-Aug 29, 2025)",
      member: "Alec Kovalczik",
      hoursWorked: 1,
      hoursPlanned: 8,
      activities: "Initial project planning",
    },
    {
      id: 2,
      week: "Week 1 (Aug 25-Aug 29, 2025)",
      member: "Alikhan Seitkadyrov",
      hoursWorked: 0,
      hoursPlanned: 8,
      activities: "Project setup",
    },
    {
      id: 3,
      week: "Week 1 (Aug 25-Aug 29, 2025)",
      member: "Angela Ngo",
      hoursWorked: 2,
      hoursPlanned: 8,
      activities: "Project coordination",
    },
    {
      id: 4,
      week: "Week 1 (Aug 25-Aug 29, 2025)",
      member: "Aric Hoang",
      hoursWorked: 2,
      hoursPlanned: 8,
      activities: "Frontend research",
    },
    {
      id: 5,
      week: "Week 1 (Aug 25-Aug 29, 2025)",
      member: "Kalen Luraschi",
      hoursWorked: 2,
      hoursPlanned: 8,
      activities: "Backend research",
    },

    // Week 2 (Sep 1-5, 2025)
    {
      id: 6,
      week: "Week 2 (Sep 1-Sep 5, 2025)",
      member: "Alec Kovalczik",
      hoursWorked: 5.5,
      hoursPlanned: 8,
      activities: "Communication planning",
    },
    {
      id: 7,
      week: "Week 2 (Sep 1-Sep 5, 2025)",
      member: "Alikhan Seitkadyrov",
      hoursWorked: 3,
      hoursPlanned: 8,
      activities: "Website development",
    },
    {
      id: 8,
      week: "Week 2 (Sep 1-Sep 5, 2025)",
      member: "Angela Ngo",
      hoursWorked: 3,
      hoursPlanned: 8,
      activities: "Project management",
    },
    {
      id: 9,
      week: "Week 2 (Sep 1-Sep 5, 2025)",
      member: "Aric Hoang",
      hoursWorked: 3,
      hoursPlanned: 8,
      activities: "Frontend development",
    },
    {
      id: 10,
      week: "Week 2 (Sep 1-Sep 5, 2025)",
      member: "Kalen Luraschi",
      hoursWorked: 3,
      hoursPlanned: 8,
      activities: "Backend development",
    },

    // Week 3 (Sep 8-12, 2025)
    {
      id: 11,
      week: "Week 3 (Sep 8-Sep 12, 2025)",
      member: "Alec Kovalczik",
      hoursWorked: 4.5,
      hoursPlanned: 8,
      activities: "Team communication",
    },
    {
      id: 12,
      week: "Week 3 (Sep 8-Sep 12, 2025)",
      member: "Alikhan Seitkadyrov",
      hoursWorked: 4.5,
      hoursPlanned: 8,
      activities: "Website updates",
    },
    {
      id: 13,
      week: "Week 3 (Sep 8-Sep 12, 2025)",
      member: "Angela Ngo",
      hoursWorked: 6.5,
      hoursPlanned: 8,
      activities: "Project coordination and planning",
    },
    {
      id: 14,
      week: "Week 3 (Sep 8-Sep 12, 2025)",
      member: "Aric Hoang",
      hoursWorked: 6.5,
      hoursPlanned: 8,
      activities: "Frontend implementation",
    },
    {
      id: 15,
      week: "Week 3 (Sep 8-Sep 12, 2025)",
      member: "Kalen Luraschi",
      hoursWorked: 4.5,
      hoursPlanned: 8,
      activities: "Backend implementation",
    },

    // Week 4 (Sep 15-19, 2025)
    {
      id: 16,
      week: "Week 4 (Sep 15-Sep 19, 2025)",
      member: "Alec Kovalczik",
      hoursWorked: 13,
      hoursPlanned: 8,
      activities: "Communication and documentation",
    },
    {
      id: 17,
      week: "Week 4 (Sep 15-Sep 19, 2025)",
      member: "Alikhan Seitkadyrov",
      hoursWorked: 8,
      hoursPlanned: 8,
      activities: "Website development and testing",
    },
    {
      id: 18,
      week: "Week 4 (Sep 15-Sep 19, 2025)",
      member: "Angela Ngo",
      hoursWorked: 13,
      hoursPlanned: 8,
      activities: "Project management and coordination",
    },
    {
      id: 19,
      week: "Week 4 (Sep 15-Sep 19, 2025)",
      member: "Aric Hoang",
      hoursWorked: 7,
      hoursPlanned: 8,
      activities: "Frontend development",
    },
    {
      id: 20,
      week: "Week 4 (Sep 15-Sep 19, 2025)",
      member: "Kalen Luraschi",
      hoursWorked: 7,
      hoursPlanned: 8,
      activities: "Backend development",
    },
    // Add more entries as you track time
  ],

  // Weekly summaries - Auto-calculated but can be manually adjusted
  weeklySummaries: [
    {
      week: "Week 1 (Aug 25-Aug 29, 2025)",
      totalHours: 7,
      memberHours: {
        "Alec Kovalczik": 1,
        "Alikhan Seitkadyrov": 0,
        "Angela Ngo": 2,
        "Aric Hoang": 2,
        "Kalen Luraschi": 2,
      },
    },
    {
      week: "Week 2 (Sep 1-Sep 5, 2025)",
      totalHours: 17.5,
      memberHours: {
        "Alec Kovalczik": 5.5,
        "Alikhan Seitkadyrov": 3,
        "Angela Ngo": 3,
        "Aric Hoang": 3,
        "Kalen Luraschi": 3,
      },
    },
    {
      week: "Week 3 (Sep 8-Sep 12, 2025)",
      totalHours: 26.5,
      memberHours: {
        "Alec Kovalczik": 4.5,
        "Alikhan Seitkadyrov": 4.5,
        "Angela Ngo": 6.5,
        "Aric Hoang": 6.5,
        "Kalen Luraschi": 4.5,
      },
    },
    {
      week: "Week 4 (Sep 15-Sep 19, 2025)",
      totalHours: 48,
      memberHours: {
        "Alec Kovalczik": 13,
        "Alikhan Seitkadyrov": 8,
        "Angela Ngo": 13,
        "Aric Hoang": 7,
        "Kalen Luraschi": 7,
      },
    },
    // Add more weekly summaries
  ],
};

// Helper functions for data management
const DataManager = {
  // Get current week string
  getCurrentWeek() {
    const now = new Date();
    const projectStartDate = new Date(2025, 8, 8); // September 8, 2025 (month is 0-indexed)

    // Calculate which week we're in based on project start
    const timeDiff = now.getTime() - projectStartDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    const weekNumber = Math.floor(daysDiff / 7) + 1;

    // Calculate the start and end of current week
    const weekStart = new Date(projectStartDate);
    weekStart.setDate(projectStartDate.getDate() + (weekNumber - 1) * 7);

    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 4); // Friday (5-day work week)

    const formatDate = (date) => {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    };

    return `Week ${weekNumber} (${formatDate(weekStart)}-${formatDate(
      weekEnd
    )}, 2025)`;
  },

  // Get all available weeks from project start to mid-December
  getAllAvailableWeeks() {
    const weeks = [];

    // Generate weeks 1-14 with the exact format used in timeEntries
    const weekData = [
      { num: 1, start: "Aug 25", end: "Aug 29" },
      { num: 2, start: "Sep 1", end: "Sep 5" },
      { num: 3, start: "Sep 8", end: "Sep 12" },
      { num: 4, start: "Sep 15", end: "Sep 19" },
      { num: 5, start: "Sep 22", end: "Sep 26" },
      { num: 6, start: "Sep 29", end: "Oct 3" },
      { num: 7, start: "Oct 6", end: "Oct 10" },
      { num: 8, start: "Oct 13", end: "Oct 17" },
      { num: 9, start: "Oct 20", end: "Oct 24" },
      { num: 10, start: "Oct 27", end: "Oct 31" },
      { num: 11, start: "Nov 3", end: "Nov 7" },
      { num: 12, start: "Nov 10", end: "Nov 14" },
      { num: 13, start: "Nov 17", end: "Nov 21" },
      { num: 14, start: "Nov 24", end: "Nov 28" },
    ];

    weekData.forEach((week) => {
      weeks.push(`Week ${week.num} (${week.start}-${week.end}, 2025)`);
    });

    return weeks;
  },

  // Get week number based on project start
  getWeekNumber() {
    const now = new Date();
    const projectStartDate = new Date(2025, 8, 8); // September 8, 2025
    const timeDiff = now.getTime() - projectStartDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    return Math.floor(daysDiff / 7) + 1;
  },

  // Add new time entry
  addTimeEntry(entry) {
    const newEntry = {
      id: Date.now(), // Simple ID generation
      week: entry.week,
      member: entry.member,
      hoursWorked: parseFloat(entry.hoursWorked),
      hoursPlanned: parseFloat(entry.hoursPlanned),
      activities: entry.activities || "",
    };

    projectData.timeEntries.push(newEntry);
    this.updateWeeklySummary(entry.week, entry.member, entry.hoursWorked);
    this.saveToLocalStorage();
    return newEntry;
  },

  // Update weekly summary
  updateWeeklySummary(week, member, hours) {
    let summary = projectData.weeklySummaries.find((s) => s.week === week);

    if (!summary) {
      summary = {
        week: week,
        totalHours: 0,
        memberHours: {},
      };
      projectData.weeklySummaries.push(summary);
    }

    // Ensure we're using the current team member name
    const currentMember = projectData.teamMembers.find(
      (m) => m.name === member
    );
    const memberName = currentMember ? currentMember.name : member;

    if (!summary.memberHours[memberName]) {
      summary.memberHours[memberName] = 0;
    }

    summary.memberHours[memberName] += hours;
    summary.totalHours = Object.values(summary.memberHours).reduce(
      (sum, h) => sum + h,
      0
    );
  },

  // Get total hours for current week
  getCurrentWeekHours() {
    const currentWeek = this.getCurrentWeek();
    const summary = projectData.weeklySummaries.find(
      (s) => s.week === currentWeek
    );
    return summary ? summary.totalHours : 0;
  },

  // Get average hours per member
  getAverageHoursPerMember() {
    const totalHours = projectData.timeEntries.reduce(
      (sum, entry) => sum + entry.hoursWorked,
      0
    );
    const uniqueMembers = [
      ...new Set(projectData.timeEntries.map((entry) => entry.member)),
    ];
    return uniqueMembers.length > 0
      ? (totalHours / uniqueMembers.length).toFixed(1)
      : 0;
  },

  // Get all weeks
  getAllWeeks() {
    const weeks = [
      ...new Set(projectData.timeEntries.map((entry) => entry.week)),
    ];
    return weeks.sort();
  },

  // Get all team members
  getAllMembers() {
    return projectData.teamMembers.map((member) => member.name);
  },

  // Export data as JSON
  exportData() {
    const dataStr = JSON.stringify(projectData, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "project-data.json";
    link.click();
    URL.revokeObjectURL(url);
  },

  // Save to localStorage
  saveToLocalStorage() {
    try {
      localStorage.setItem(
        "tomorrowsHairProjectData",
        JSON.stringify(projectData)
      );
    } catch (e) {
      console.warn("Could not save to localStorage:", e);
    }
  },

  // Load from localStorage
  loadFromLocalStorage() {
    try {
      const saved = localStorage.getItem("tomorrowsHairProjectData");
      if (saved) {
        const savedData = JSON.parse(saved);
        // Merge with current data, keeping current structure
        Object.assign(projectData, savedData);
      }
    } catch (e) {
      console.warn("Could not load from localStorage:", e);
    }
  },
};

// Note: Basic project data is loaded from this file
// Time tracking data is loaded from localStorage to preserve user entries
