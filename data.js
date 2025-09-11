// Project data - Easy to update for weekly changes
// Last updated: ${new Date().toLocaleString()}
const projectData = {
    // Basic project information
    projectName: "Tomorrow's hAIr",
    sponsor: "MisTee Wants To Know, Inc.",
    coach: "Sudhir Khazanchi",
    keywords: "AI, Hair Care, Machine Learning, Computer Vision, Beauty Technology",
    
    // Project synopsis (max 250 words)
    synopsis: `A description of your project a.k.a. the project synopsis. This should be no longer than 250 words, and should be approved by your sponsor and coach before submission/publication.`,
    
    // Team members - Add your team information here
    teamMembers: [
        {
            name: "Alikhan Seitkadyrov",
            role: "Web Site Manager / Full-Stack Developer",
            initials: "AS"
        },
        {
            name: "Alec Kovalczik",
            role: "Communication lead",
            initials: "AK"
        },
        {
            name: "Angela Ngo",
            role: "Project manager",
            initials: "AN"
        },
        {
            name: "Aric Hoang",
            role: "Frontend Lead",
            initials: "AH"
        },
        {
            name: "Kalen L",
            role: "Backend Lead",
            initials: "KL"
        }
        // Add more team members as needed
    ],
    
    // Time tracking data - This will be updated weekly
    timeEntries: [
        // Example entries - replace with your actual data
        {
            id: 1,
            week: "Week 1 (Sep 8-Sep 12, 2025)",
            member: "Alikhan Seitkadyrov",
            hoursWorked: 10,
            hoursPlanned: 10,
            activities: "Project setup"
        },
        {
            id: 2,
            week: "Week 1 (Sep 8-Sep 12, 2025)",
            member: "Angela Ngo",
            hoursWorked: 10,
            hoursPlanned: 10,
            activities: "Project setup"
        },
        {
            id: 3,
            week: "Week 1 (Sep 8-Sep 12, 2025)",
            member: "Aric Hoang",
            hoursWorked: 10,
            hoursPlanned: 10,
            activities: "Project setup"
        },
        {
            id: 4,
            week: "Week 1 (Sep 8-Sep 12, 2025)",
            member: "Kalen L",
            hoursWorked: 10,
            hoursPlanned: 10,
            activities: "Project setup"
        },
        {
            id: 5,
            week: "Week 1 (Sep 8-Sep 12, 2025)",
            member: "Alec Kovalczik",
            hoursWorked: 10,
            hoursPlanned: 10,
            activities: "Project setup"
        }
        // Add more entries as you track time
    ],
    
    // Weekly summaries - Auto-calculated but can be manually adjusted
    weeklySummaries: [
        {
            week: "Week 1 (Sep 8-12, 2025)",
            totalHours: 50,
            memberHours: {
                "Alikhan Seitkadyrov": 10,
                "Angela Ngo": 10,
                "Aric Hoang": 10,
                "Kalen L": 10,
                "Alec Kovalczik": 10
            }
        }
        // Add more weekly summaries
    ]
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
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        };
        
        return `Week ${weekNumber} (${formatDate(weekStart)}-${formatDate(weekEnd)}, 2025)`;
    },
    
    // Get all available weeks from project start to mid-December
    getAllAvailableWeeks() {
        const weeks = [];
        
        // Generate weeks 1-14 with the exact format used in timeEntries
        const weekData = [
            { num: 1, start: "Sep 8", end: "Sep 12" },
            { num: 2, start: "Sep 15", end: "Sep 19" },
            { num: 3, start: "Sep 22", end: "Sep 26" },
            { num: 4, start: "Sep 29", end: "Oct 3" },
            { num: 5, start: "Oct 6", end: "Oct 10" },
            { num: 6, start: "Oct 13", end: "Oct 17" },
            { num: 7, start: "Oct 20", end: "Oct 24" },
            { num: 8, start: "Oct 27", end: "Oct 31" },
            { num: 9, start: "Nov 3", end: "Nov 7" },
            { num: 10, start: "Nov 10", end: "Nov 14" },
            { num: 11, start: "Nov 17", end: "Nov 21" },
            { num: 12, start: "Nov 24", end: "Nov 28" },
            { num: 13, start: "Dec 1", end: "Dec 5" },
            { num: 14, start: "Dec 8", end: "Dec 12" }
        ];
        
        weekData.forEach(week => {
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
            activities: entry.activities || ""
        };
        
        projectData.timeEntries.push(newEntry);
        this.updateWeeklySummary(entry.week, entry.member, entry.hoursWorked);
        this.saveToLocalStorage();
        return newEntry;
    },
    
    // Update weekly summary
    updateWeeklySummary(week, member, hours) {
        let summary = projectData.weeklySummaries.find(s => s.week === week);
        
        if (!summary) {
            summary = {
                week: week,
                totalHours: 0,
                memberHours: {}
            };
            projectData.weeklySummaries.push(summary);
        }
        
        // Ensure we're using the current team member name
        const currentMember = projectData.teamMembers.find(m => m.name === member);
        const memberName = currentMember ? currentMember.name : member;
        
        if (!summary.memberHours[memberName]) {
            summary.memberHours[memberName] = 0;
        }
        
        summary.memberHours[memberName] += hours;
        summary.totalHours = Object.values(summary.memberHours).reduce((sum, h) => sum + h, 0);
    },
    
    // Get total hours for current week
    getCurrentWeekHours() {
        const currentWeek = this.getCurrentWeek();
        const summary = projectData.weeklySummaries.find(s => s.week === currentWeek);
        return summary ? summary.totalHours : 0;
    },
    
    // Get average hours per member
    getAverageHoursPerMember() {
        const totalHours = projectData.timeEntries.reduce((sum, entry) => sum + entry.hoursWorked, 0);
        const uniqueMembers = [...new Set(projectData.timeEntries.map(entry => entry.member))];
        return uniqueMembers.length > 0 ? (totalHours / uniqueMembers.length).toFixed(1) : 0;
    },
    
    // Get all weeks
    getAllWeeks() {
        const weeks = [...new Set(projectData.timeEntries.map(entry => entry.week))];
        return weeks.sort();
    },
    
    // Get all team members
    getAllMembers() {
        return projectData.teamMembers.map(member => member.name);
    },
    
    // Export data as JSON
    exportData() {
        const dataStr = JSON.stringify(projectData, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'project-data.json';
        link.click();
        URL.revokeObjectURL(url);
    },
    
    // Save to localStorage
    saveToLocalStorage() {
        try {
            localStorage.setItem('tomorrowsHairProjectData', JSON.stringify(projectData));
        } catch (e) {
            console.warn('Could not save to localStorage:', e);
        }
    },
    
    // Load from localStorage
    loadFromLocalStorage() {
        try {
            const saved = localStorage.getItem('tomorrowsHairProjectData');
            if (saved) {
                const savedData = JSON.parse(saved);
                // Merge with current data, keeping current structure
                Object.assign(projectData, savedData);
            }
        } catch (e) {
            console.warn('Could not load from localStorage:', e);
        }
    }
};

// Note: Basic project data is loaded from this file
// Time tracking data is loaded from localStorage to preserve user entries
