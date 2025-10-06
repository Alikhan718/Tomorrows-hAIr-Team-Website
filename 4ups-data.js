// 4Ups tracking data for each week
const fourUpsData = [
    {
        week: "Week 5 (Sep 22-Sep 26, 2025)",
        projectTitle: "MisTee - Digital Hair Style Planner",
        dates: "9/22/25 – 9/26/25",
        progress: [
            "Decided on project and process metrics",
            "Finalized project tools and techniques",
            "Completed the domain model",
            "Created all the user stories from MVP requirements",
            "Spoke with the previous advisor and team to understand how they did AWS access."
        ],
        risks: [
            "Budget Risks - Some technology might be more expensive than others to construct certain models etc.",
            "New Technologies - Some of the technologies we are intending to use are new to most of us, and our assumptions could be off about how long they will take to learn or the amount of benefit they will provide to us. We will do some research to get a better understanding of what is feasible."
        ],
        plans: [
            "Create the initial wireframes of the application",
            "Finalize the project plan and additional elements (Team)",
            "Start DB design (Kalen) this includes getting AWS root access",
            "Start CI/CD pipeline design (Kalen)",
            "Stretch Plan research XCode on free VM or classroom VM and research PGVector (Kalen)",
            "Develop a PERT Chart to understand feature dependencies (Alec)",
            "Create user stories based on feedback on low fidelity wire frames (Angela and Aric)",
            "Create user stories for backend development"
        ],
        needs: [
            "IAM User creation on AWS",
            "Feedback and approval for:",
            "User Stories",
            "Wireframes"
        ]
    },
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
    ,
    {
        week: "Week 7 (Oct 6-Oct 10, 2025)",
        projectTitle: "MisTee - Digital Hair Style Planner",
        dates: "10/6/25 – 10/10/25",
        progress: [
            "Updated the initial wireframes based on Janice’s feedback (Angela and Aric)",
            "Wrote out user flows for wireframes to go over during Tuesday’s meeting (Angela and Aric)",
            "Research on potential datasets that are within correct licensing (Angela)",
            "Start DB design (Kalen, Alec)",
            "Start CI/CD pipeline design (Kalen, Alikhan)",
            "Develop an epic-level PERT Chart to understand feature dependencies (Alec)",
            "Created user stories for backend development (Alec, Kalen, Alikhan)",
            "Set up plans for Sprint 0 (TEAM)"
        ],
        risks: [
            "Budget Risks - Some technology might be more expensive than others to construct certain models etc.",
            "New Technologies - Some of the technologies we are intending to use are new to most of us, and our assumptions could be off about how long they will take to learn or the amount of benefit they will provide to us. We will do some research to get a better understanding of what is feasible.",
            "Limited Dataset - based on our research on licensing, we found that we don’t actually have photos of a ton of hairstyles. We were wondering if it would be possible to get these from partnered hair stylists."
        ],
        plans: [
            "Come up with the primary entities and their attributes for the database (Kalen, Alec, Alikhan)",
            "Start Sprint 0 (TEAM)",
            "Stretch Plan research XCode on free VM or classroom VM and on research PGVector (Kalen)",
            "Create an ERD based on database entities (Kalen, Alec, Alikhan)",
            "Application Architecture Diagram (Alec)",
            "Research recommendation systems (Alec)",
            "Continue to refine user stories based on Janice Feedback (from email from over the weekend) (TEAM)"
        ],
        needs: [
            "Feedback and approval for:",
            "Low-Fidelity Wireframes",
            "NDA Documents (Sudhir)"
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
