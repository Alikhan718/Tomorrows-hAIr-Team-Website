// 4Ups tracking data for each week
const fourUpsData = [
    {
        week: "Week 3 (Sep 6-Sep 12, 2025)",
        projectTitle: "MisTee - Digital Hair Style Planner",
        dates: "9/6/25 – 9/12/25",
        progress: [
            "Reviewed the requirements and came up with what is feasible and what isn't. (TEAM)",
            "Met with the sponsor to get a better overall understanding of the project, asking questions regarding specific features and then generating more questions based on the responses. (TEAM)",
            "Assigned team roles for everyone (TEAM)",
            "Decided on development methodology to be SCRUM (TEAM)",
            "Set up Trello for project management",
            "Set up the GitHub repository (Alikhan)"
        ],
        risks: [
            "Infrequent meetings with Sponsor - might make assumptions that don't match her vision",
            "Budget Risks - not sure where the funding is coming from, so some technology might be more expensive than others to construct certain models etc.",
            "Limited Data - There are many requirements that need a ton of data to be done properly. If there isn't data available, how many resources would we need to gather and process the data so it would be valuable to the application?"
        ],
        plans: [
            "Finalize initial project tools and techniques",
            "Finalize what technologies we are planning on using, which means doing research on what technology stack is needed, and if this requires something that is paid",
            "Research on other applications similar to MisTee and see what kind of layout they follow",
            "Plan on how we should best work with the focus group to get as much information as we can.",
            "Project metrics and process",
            "Research what goes into each feature, divided by team member."
        ],
        needs: [
            "Understanding what kind of budget we are working with.",
            "Are there any tech stack constraints?",
            "Application priorities",
            "Focus group people follow-up"
        ]
    },
    {
        week: "Week 4 (Sep 15-Sep 19, 2025)",
        projectTitle: "MisTee - Digital Hair Style Planner",
        dates: "9/15/25 – 9/19/25",
        progress: [
            "Created a rough draft of the initial requirements from the business proposal. (Angela)",
            "Write a rough draft of a suggested MVP for the project and shared with stakeholders. (Angela, Alec, Aric)",
            "Wrote a draft of Project Synopsis and shared it with the project coach and stakeholders. (Alec)",
            "Researched all of the requirements that were listed out regarding tools, pricing, and methods. (Team)",
            "Come up with project metrics and processes and development methodology artifacts (Team)"
        ],
        risks: [
            "Scope Creep - Might add on too many features that the team cannot all handle during the development process. Best to communicate further until we have a finalized version of the project requirements.",
            "Budget Risks - not sure where the funding is coming from, so some technology might be more expensive than others to construct certain models etc."
        ],
        plans: [
            "Discuss plans for Minimum Viable Product (MVP)",
            "Discuss more thoroughly what features Janice would like to prioritize",
            "Discuss questions that were referred to in the \"September 16 Meeting follow-up - Senior Project\"",
            "Finalize tools and Techniques",
            "Start creating Domain Model",
            "Start creating actual user stories based on determined MVP."
        ],
        needs: [
            "Feedback and approval for the following documents:",
            "Project Synopsis",
            "MVP requirements",
            "Process and Project Metrics",
            "Development Methodology"
        ]
    }
    // Add more weeks as they become available
];

// Helper functions for 4Ups data management
const FourUpsManager = {
    // Get all 4Ups data
    getAllFourUps() {
        return fourUpsData;
    },
    
    // Get 4Ups for a specific week
    getFourUpsForWeek(week) {
        return fourUpsData.find(entry => entry.week === week);
    },
    
    // Add new 4Ups entry
    addFourUps(entry) {
        fourUpsData.push(entry);
        this.saveToLocalStorage();
    },
    
    // Update existing 4Ups entry
    updateFourUps(week, updatedEntry) {
        const index = fourUpsData.findIndex(entry => entry.week === week);
        if (index !== -1) {
            fourUpsData[index] = updatedEntry;
            this.saveToLocalStorage();
        }
    },
    
    // Save to localStorage
    saveToLocalStorage() {
        try {
            localStorage.setItem('tomorrowsHairFourUpsData', JSON.stringify(fourUpsData));
        } catch (e) {
            console.warn('Could not save 4Ups data to localStorage:', e);
        }
    },
    
    // Load from localStorage
    loadFromLocalStorage() {
        try {
            const saved = localStorage.getItem('tomorrowsHairFourUpsData');
            if (saved) {
                const savedData = JSON.parse(saved);
                fourUpsData.length = 0; // Clear existing data
                fourUpsData.push(...savedData); // Add saved data
            }
        } catch (e) {
            console.warn('Could not load 4Ups data from localStorage:', e);
        }
    }
};

// Load saved data on page load
FourUpsManager.loadFromLocalStorage();
