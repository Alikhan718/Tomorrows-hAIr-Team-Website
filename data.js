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
      role: "GitHub Manager, Web Site Manager",
      initials: "AS",
    },
    {
      name: "Alec Kovalczik",
      role: "Communication Lead",
      initials: "AK",
    },
    {
      name: "Angela Ngo",
      role: "Project Manager",
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
      activities: "Reviewed proposal document",
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
      activities: "review proposal document and create questions regarding certain features ",
    },
    {
      id: 4,
      week: "Week 1 (Aug 25-Aug 29, 2025)",
      member: "Aric Hoang",
      hoursWorked: 2,
      hoursPlanned: 8,
      activities: "review proposal document",
    },
    {
      id: 5,
      week: "Week 1 (Aug 25-Aug 29, 2025)",
      member: "Kalen Luraschi",
      hoursWorked: 2,
      hoursPlanned: 8,
      activities: "review proposal doc",
    },

    // Week 2 (Sep 1-5, 2025)
    {
      id: 6,
      week: "Week 2 (Sep 1-Sep 5, 2025)",
      member: "Alec Kovalczik",
      hoursWorked: 5.5,
      hoursPlanned: 8,
      activities: "Team and stakeholder meetings, spent time extracting expected requirements from proposal document",
    },
    {
      id: 7,
      week: "Week 2 (Sep 1-Sep 5, 2025)",
      member: "Alikhan Seitkadyrov",
      hoursWorked: 3,
      hoursPlanned: 8,
      activities: "Team and stakeholder meetings, extract requirements and generate questions based on initial business proposal ",
    },
    {
      id: 8,
      week: "Week 2 (Sep 1-Sep 5, 2025)",
      member: "Angela Ngo",
      hoursWorked: 3,
      hoursPlanned: 8,
      activities: "Team and stakeholder meetings, extract requirements and generate questions based on initial business proposal ",
    },
    {
      id: 9,
      week: "Week 2 (Sep 1-Sep 5, 2025)",
      member: "Aric Hoang",
      hoursWorked: 3,
      hoursPlanned: 8,
      activities: "",
    },
    {
      id: 10,
      week: "Week 2 (Sep 1-Sep 5, 2025)",
      member: "Kalen Luraschi",
      hoursWorked: 3,
      hoursPlanned: 8,
      activities: "team and stakeholder meetings, questions for business proposal",
    },

    // Week 3 (Sep 8-12, 2025)
    {
      id: 11,
      week: "Week 3 (Sep 8-Sep 12, 2025)",
      member: "Alec Kovalczik",
      hoursWorked: 4.5,
      hoursPlanned: 12,
      activities: "Meetings with team and sponsors.",
    },
    {
      id: 12,
      week: "Week 3 (Sep 8-Sep 12, 2025)",
      member: "Alikhan Seitkadyrov",
      hoursWorked: 4.5,
      hoursPlanned: 12,
      activities: "Team and stakeholder meetings, prepared questions, initialized work processes, brainstormed on possible technology stack. Also created the senior project website",
    },
    {
      id: 13,
      week: "Week 3 (Sep 8-Sep 12, 2025)",
      member: "Angela Ngo",
      hoursWorked: 6.5,
      hoursPlanned: 12,
      activities: "created proposed features user stories (loosely sounding like user stories) based on extracted features / requirements from the initial business proposal. Also created questions to ask to stakeholder. Did research on some potential technologies we could use for some of the advanced features she was asking for ",
    },
    {
      id: 14,
      week: "Week 3 (Sep 8-Sep 12, 2025)",
      member: "Aric Hoang",
      hoursWorked: 6.5,
      hoursPlanned: 12,
      activities: "",
    },
    {
      id: 15,
      week: "Week 3 (Sep 8-Sep 12, 2025)",
      member: "Kalen Luraschi",
      hoursWorked: 4.5,
      hoursPlanned: 12,
      activities: "meetings with team sponsor",
    },

    // Week 4 (Sep 15-19, 2025)
    {
      id: 16,
      week: "Week 4 (Sep 15-Sep 19, 2025)",
      member: "Alec Kovalczik",
      hoursWorked: 14,
      hoursPlanned: 12,
      activities: "Research on feasibility of the development of specific features, meetings with stakeholders and team, requirements gathering, scope management.",
    },
    {
      id: 17,
      week: "Week 4 (Sep 15-Sep 19, 2025)",
      member: "Alikhan Seitkadyrov",
      hoursWorked: 8,
      hoursPlanned: 12,
      activities: "meetings with team and sponsor. Updated the website and contributed on the research on what features exactly we should be focusing on.",
    },
    {
      id: 18,
      week: "Week 4 (Sep 15-Sep 19, 2025)",
      member: "Angela Ngo",
      hoursWorked: 14,
      hoursPlanned: 12,
      activities: "Conducted more research on the feasibility on some of the features proposed. Created email draft to send to Janice regarding Scope Creep and considering doing minimum viable product features first. Created proposed MVP requirements to help steer her in right direction. ",
    },
    {
      id: 19,
      week: "Week 4 (Sep 15-Sep 19, 2025)",
      member: "Aric Hoang",
      hoursWorked: 8.5,
      hoursPlanned: 12,
      activities: "",
    },
    {
      id: 20,
      week: "Week 4 (Sep 15-Sep 19, 2025)",
      member: "Kalen Luraschi",
      hoursWorked: 7,
      hoursPlanned: 12,
      activities: "research on development tools, meetings with sponsor, requirements gathering",
    },

    // Week 5 (Sep 22-26, 2025)
    {
      id: 21,
      week: "Week 5 (Sep 22-Sep 26, 2025)",
      member: "Alec Kovalczik",
      hoursWorked: 8,
      hoursPlanned: 12,
      activities: "Meetings with team and stakeholders, requirement clarification, development methodologies, processes and proceedures, metrics, domain diagram, work breakdown structure, sick for a lot of this week.",
    },
    {
      id: 22,
      week: "Week 5 (Sep 22-Sep 26, 2025)",
      member: "Alikhan Seitkadyrov",
      hoursWorked: 8,
      hoursPlanned: 12,
      activities: "",
    },
    {
      id: 23,
      week: "Week 5 (Sep 22-Sep 26, 2025)",
      member: "Angela Ngo",
      hoursWorked: 11,
      hoursPlanned: 12,
      activities: "Worked on the development methodologies roles and responsibilities, worked on gathering information about what needs to be on the \"prokect plan and additional elements\", created and finished the domain model, came up with questions regarding Janice new MVP, working on Work Break Down Structure and creating user stories . Met with Project Coach to go over the different artifacts and gather feedback, created the communication & stakeholder management plan, coordinate with prior coach to get AWS resources ",
    },
    {
      id: 24,
      week: "Week 5 (Sep 22-Sep 26, 2025)",
      member: "Aric Hoang",
      hoursWorked: 7,
      hoursPlanned: 12,
      activities: "",
    },
    {
      id: 25,
      week: "Week 5 (Sep 22-Sep 26, 2025)",
      member: "Kalen Luraschi",
      hoursWorked: 6,
      hoursPlanned: 12,
      activities: "meeting with sponsor, go over more requirements, refine requirements, dev methodologies, work breakdown structure",
    },

    // Week 6 (Sep 29-Oct 3, 2025)
    {
      id: 26,
      week: "Week 6 (Sep 29-Oct 3, 2025)",
      member: "Alec Kovalczik",
      hoursWorked: 15,
      hoursPlanned: 12,
      activities: "User stories, ordering epic development. Created an initial draft of a PERT chart. Agenda, Weekly-4up, Discussion about priorities with team, and further dividing roles. Created and Sent email to Janice, Sponsor meeting, Created IAM User accounts for all team members. Spent time migrating user stories and epics for Client Growth and Routine Tracking, Searching, and Recommendations, to the Trello board, and assigned acceptance criteria to all user stories migrated. Worked on coming up with some dev stories for backend.",
    },
    {
      id: 27,
      week: "Week 6 (Sep 29-Oct 3, 2025)",
      member: "Alikhan Seitkadyrov",
      hoursWorked: 11,
      hoursPlanned: 12,
      activities: "User stories, meeting with sponsor, setting up IAM user. Did research on how to accept payments from stylists. Worked on setting up backend user stories. Updated the project website with recent data",
    },
    {
      id: 28,
      week: "Week 6 (Sep 29-Oct 3, 2025)",
      member: "Angela Ngo",
      hoursWorked: 20,
      hoursPlanned: 12,
      activities: "created user stories based on the updated project requriements, updated the development methodologies document after feedback, added Project goals and scope statement, methodology, and domain model to the Project Plan : Additional elements and final plan. Create low fidelity wireframes for client screens - home screen, user profile, user settings, direct messaging screen, recomendation screen, user profile survey, met with team to plan for weekly meeting with Sponsor, Created user flows for wireframes, created wireframes for client experience UI, create user stories for initial ones generated from requirements, refined user stories with team based on Tuesdays meeting",
    },
    {
      id: 29,
      week: "Week 6 (Sep 29-Oct 3, 2025)",
      member: "Aric Hoang",
      hoursWorked: 10.5,
      hoursPlanned: 12,
      activities: "created user stories, finalized project metrics, worked on wireframes. After working on the wireframes, wrote up the user flows to help understand the user perspective of the app more. After the sponsor meeting, edited the user stories, user flows, and some of the wireframes. ",
    },
    {
      id: 30,
      week: "Week 6 (Sep 29-Oct 3, 2025)",
      member: "Kalen Luraschi",
      hoursWorked: 13.5,
      hoursPlanned: 12,
      activities: "Backend User Stories created, Sponsor meeting, team meetings, start the DB design, finishing up backend user stories, AWS set up, acceptance criteria on trello",
    },

    // Week 7 (Oct 6-Oct 10, 2025)
    {
      id: 31,
      week: "Week 7 (Oct 6-Oct 10, 2025)",
      member: "Alec Kovalczik",
      hoursWorked: 2.5,
      hoursPlanned: 12,
      activities: "Populated trello board with backend dev stories and the epics they belong to. Spent some time researching ML approaches to recommendation systems. ",
    },
    {
      id: 32,
      week: "Week 7 (Oct 6-Oct 10, 2025)",
      member: "Alikhan Seitkadyrov",
      hoursWorked: 2,
      hoursPlanned: 12,
      activities: "Found the CI/CD pipeline template for the ios development in github actions section, team meeting, weekly 4-up, weekly agenda, updated trello board with backend dev stories.",
    },
    {
      id: 33,
      week: "Week 7 (Oct 6-Oct 10, 2025)",
      member: "Angela Ngo",
      hoursWorked: 0,
      hoursPlanned: 12,
      activities: "",
    },
    {
      id: 34,
      week: "Week 7 (Oct 6-Oct 10, 2025)",
      member: "Aric Hoang",
      hoursWorked: 0,
      hoursPlanned: 12,
      activities: "",
    },
    {
      id: 35,
      week: "Week 7 (Oct 6-Oct 10, 2025)",
      member: "Kalen Luraschi",
      hoursWorked: 1,
      hoursPlanned: 12,
      activities: "team meeting, weekly 4-up, weekly agenda",
    },
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
      totalHours: 51.5,
      memberHours: {
        "Alec Kovalczik": 14,
        "Alikhan Seitkadyrov": 8,
        "Angela Ngo": 14,
        "Aric Hoang": 8.5,
        "Kalen Luraschi": 7,
      },
    },
    {
      week: "Week 5 (Sep 22-Sep 26, 2025)",
      totalHours: 40,
      memberHours: {
        "Alec Kovalczik": 8,
        "Alikhan Seitkadyrov": 8,
        "Angela Ngo": 11,
        "Aric Hoang": 7,
        "Kalen Luraschi": 6,
      },
    },
    {
      week: "Week 6 (Sep 29-Oct 3, 2025)",
      totalHours: 70,
      memberHours: {
        "Alec Kovalczik": 15,
        "Alikhan Seitkadyrov": 11,
        "Angela Ngo": 20,
        "Aric Hoang": 10.5,
        "Kalen Luraschi": 13.5,
      },
    },
    {
      week: "Week 7 (Oct 6-Oct 10, 2025)",
      totalHours: 5.5,
      memberHours: {
        "Alec Kovalczik": 2.5,
        "Alikhan Seitkadyrov": 2,
        "Angela Ngo": 0,
        "Aric Hoang": 0,
        "Kalen Luraschi": 1,
      },
    },
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
