// 4Ups tracking data for each week
const fourUpsData = [
    {
        week: "Week 14 (Nov 24-Nov 28, 2025)",
        projectTitle: "MisTee - Digital Hair Style Planner",
        dates: "11/24/25 – 11/28/25",
        progress: [
            "Endpoints to validate if stylists have access to a client's planner",
            "Completed screens for making plans",
            "Created a screen for editing a paying stylist's profile",
            "Created screens for viewing plans after they are made",
            "Created a schedule view for the planner",
            "Plans are visually represented on each of the different planner views."
        ],
        risks: [
            "Budget Risks - Some technology might be more expensive than others to construct certain models etc.",
            "Asynchronous Coordination - We are setting up a lot of technologies at the next phase, and we have a lot of overlapping tasks or tasks that are dependent upon each other, so if we don't coordinate these tasks properly, we could fall behind schedule.",
            "Tests/finals/projects coming up"
        ],
        plans: [
            "Create an endpoint for uploading a profile picture to a client or stylist profile",
            "Paying stylist viewing access to the client planner and the client user profile",
            "Finish and practice the end-of-semester presentation.",
            "Creating unit tests for front-end code.",
            "Creating features to improve the development process.",
            "Creating documentation for important processes and aspects of the application.",
            "Research on Direct messaging."
        ],
        needs: []
    },
    {
        week: "Week 13 (Nov 17-Nov 21, 2025)",
        projectTitle: "MisTee - Digital Hair Style Planner",
        dates: "11/17/25 – 11/21/25",
        progress: [
            "Completed endpoint for deleting an image from a plan",
            "Created planner yearly/quarterly and monthly view",
            "Paying stylist profile view",
            "Started making a page for creating plans",
            "Senior Project Video",
            "Started making the end-of-semester presentation"
        ],
        risks: [
            "Budget Risks - Some technology might be more expensive than others to construct certain models etc.",
            "Asynchronous Coordination - We are setting up a lot of technologies at the next phase, and we have a lot of overlapping tasks or tasks that are dependent upon each other, so if we don't coordinate these tasks properly, we could fall behind schedule.",
            "Tests/finals/projects coming up",
            "Senior project deliverables(video and presentation), potential scheduling overlapping with finals (12/10)"
        ],
        plans: [
            "Endpoints to get all of a stylist's clients and to validate if they have access to a client's planner",
            "Complete screens for making plans",
            "Create a screen for editing a paying stylist's profile",
            "Create an endpoint for uploading a profile picture to a client or stylist profile",
            "Create screens for viewing plans after they are made",
            "Finish and practice the end-of-semester presentation."
        ],
        needs: [
            "Feedback and approval for:",
            "NDA Documents"
        ]
    },
    {
        week: "Week 12 (Nov 10-Nov 14, 2025)",
        projectTitle: "MisTee - Digital Hair Style Planner",
        dates: "11/10/25 – 11/14/25",
        progress: [
            "Completed screens for initial client and user survey",
            "Completed endpoints for uploading, updating, and retrieving user survey answers and profile information.",
            "Complete screens for client profile and editing profile",
            "Complete endpoint for creating a plan as a client",
            "Implement Terraform collaboration improvements",
            "Created an endpoint for making client stylist relationships.",
            "Improved Client Signup, allowing clients to connect to real stylists in the database during signup"
        ],
        risks: [
            "Budget Risks - Some technology might be more expensive than others to construct certain models etc.",
            "Asynchronous Coordination - We are setting up a lot of technologies at the next phase, and we have a lot of overlapping tasks or tasks that are dependent upon each other, so if we don't coordinate these tasks properly, we could fall behind schedule.",
            "Tests/finals/projects coming up",
            "Senior project deliverables(video and presentation), potential scheduling overlapping with finals (12/10)"
        ],
        plans: [
            "Endpoints for uploading profile picture to user account and retrieving them.",
            "Endpoints for deleting a plan and its details and deleting specific photos from a plan.",
            "Create client planner yearly view",
            "Paying stylist profile view",
            "Screens for creating hairstyle plan, hairstyle plan for event, and growth plan.",
            "Senior Project Video",
            "End of semester Presentation preparation"
        ],
        needs: [
            "Feedback and approval for:",
            "NDA Documents"
        ]
    },
    {
        week: "Week 11 (Nov 3-Nov 7, 2025)",
        projectTitle: "MisTee - Digital Hair Style Planner",
        dates: "11/03/25 – 11/07/25",
        progress: [
            "Conducted research on how to improve Terraform collaboration, have yet to implement",
            "Researched how to use S3 buckets to store photos and reference them in the database",
            "Worked on screens for client profile and editing profile",
            "Added information to Database for Question and Answer options for the survey",
            "Worked on endpoint for retrieving user profile information",
            "Improved API module to permit a path parameter as a data input so we can adhere to best practices."
        ],
        risks: [
            "Budget Risks - Some technology might be more expensive than others to construct certain models etc.",
            "New Technologies - Some of the technologies we are intending to use are new to most of us, and our assumptions could be off about how long they will take to learn or the amount of benefit they will provide to us. We will do some research to get a better understanding of what is feasible.",
            "Asynchronous Coordination - We are setting up a lot of technologies at the next phase, and we have a lot of overlapping tasks or tasks that are dependent upon each other, so if we don't coordinate these tasks properly, we could fall behind schedule.",
            "tests/midterms/projects coming up"
        ],
        plans: [
            "Complete screens for initial client and user survey",
            "Make a static API stage URL so don't have to manually change it every time we redeploy the API",
            "Complete endpoints for uploading, updating, and retrieving user survey answers and profile information.",
            "Complete screens for client profile and editing profile",
            "Complete endpoint for creating a plan as a client",
            "Secure the database",
            "Implement Terraform collaboration improvements"
        ],
        needs: [
            "Feedback and approval for:",
            "NDA Documents",
            "Ask for approval on allowing co-ops (other students) to be hired in the spring semester to complete MVP and get to stretch goal requirements."
        ]
    },
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
    },
    {
        week: "Week 8 (Oct 13-Oct 17, 2025)",
        projectTitle: "MisTee - Digital Hair Style Planner",
        dates: "10/13/25 – 10/17/25",
        progress: [
            "Created frontend user stories and epics for client and stylist screens (Aric, Angela)",
            "XCode researching (Aric, Angela)",
            "Came up with the primary entities and their attributes for the database (Kalen, Alec, Alikhan)",
            "Finished Sprint 0 (TEAM)",
            "Created an ERD based on database entities (Kalen, Alec, Alikhan)",
            "Cloud Architecture Diagram (Alec)",
            "Started research on recommendation systems (Alec)",
            "Refined user stories based on Janice Feedback (from email from over the weekend) (TEAM)"
        ],
        risks: [
            "Budget Risks - Some technology might be more expensive than others to construct certain models etc.",
            "New Technologies - Some of the technologies we are intending to use are new to most of us, and our assumptions could be off about how long they will take to learn or the amount of benefit they will provide to us. We will do some research to get a better understanding of what is feasible.",
            "Asynchronous Coordination - We are setting up a lot of technologies at the next phase and we have a lot of overlapping tasks or tasks that are dependent upon each other, so if we don’t coordinate these tasks properly, we could fall behind schedule."
        ],
        plans: [
            "RESTful API Structure document started",
            "AWS database set up",
            "Research on face blurring technology",
            "Research on instant messaging",
            "Research on Terraform with AWS Resources",
            "Research on ios deployment",
            "Create endpoints for create and getting a client / paying stylist on the database",
            "Create front end screens for login and signing up for client and paying stylist"
        ],
        needs: [
            "Feedback and approval for:",
            "Midterm Self Evaluation",
            "NDA Documents"
        ]
    },
    {
        week: "Week 9 (Oct 20-Oct 24, 2025)",
        projectTitle: "MisTee - Digital Hair Style Planner",
        dates: "10/20/25 – 10/24/25",
        progress: [
            "Research on instant messaging",
            "Research on Terraform with AWS Resources",
            "Windows emulator set up",
            "Created the file structure for the backend on the Repository, using Terraform to deploy cloud infrastructure to AWS",
            "RESTful API Structure document started",
            "Created Login Screen and Client Signup Screen",
            "Research on creating an account / signing in through Google Auth"
        ],
        risks: [
            "Budget Risks - Some technology might be more expensive than others to construct certain models etc.",
            "New Technologies - Some of the technologies we are intending to use are new to most of us, and our assumptions could be off about how long they will take to learn or the amount of benefit they will provide to us. We will do some research to get a better understanding of what is feasible.",
            "Asynchronous Coordination - We are setting up a lot of technologies at the next phase, and we have a lot of overlapping tasks or tasks that are dependent upon each other, so if we don’t coordinate these tasks properly, we could fall behind schedule."
        ],
        plans: [
            "AWS database set up",
            "Research on face blurring technology",
            "Research on ios deployment",
            "Create endpoints for create and getting a client / paying stylist on the database",
            "Work on Paying Stylist sign up and sign up decision type screen",
            "Once the endpoints are set up, we will connect them to our front end screens to do end-to-end testing",
            "Signup Decision screen",
            "Hair Stylist Signup screen"
        ],
        needs: [
            "Feedback and approval for:",
            "NDA Documents"
        ]
    },
    {
        week: "Week 10 (Oct 27-Oct 31, 2025)",
        projectTitle: "MisTee - Digital Hair Style Planner",
        dates: "10/27/25 – 10/31/25",
        progress: [
            "AWS database set up",
            "Researched on face blurring technology",
            "Researched on iOS deployment",
            "Created endpoints for creating and getting a client / paying stylist on the database",
            "Connected and tested some of the end-to-end connections between the screens and API endpoints",
            "Signup Decision screen",
            "Hair Stylist Signup screen"
        ],
        risks: [
            "Budget Risks - Some technology might be more expensive than others to construct certain models etc.",
            "New Technologies - Some of the technologies we are intending to use are new to most of us, and our assumptions could be off about how long they will take to learn or the amount of benefit they will provide to us. We will do some research to get a better understanding of what is feasible.",
            "Asynchronous Coordination - We are setting up a lot of technologies at the next phase, and we have a lot of overlapping tasks or tasks that are dependent upon each other, so if we don’t coordinate these tasks properly, we could fall behind schedule.",
            "tests/midterms/projects coming up"
        ],
        plans: [
            "Secure the database",
            "Come up with a better way to let multiple developers work with Terraform at the same time.",
            "Make a static API stage URL, so we don’t have to manually change it every time we redeploy the api.",
            "Creating an endpoint for creating a plan as a user",
            "Create endpoints for uploading, updating, and retrieving user survey answers and profile information.",
            "Create the screen for the client profile and editing",
            "Create screens for paying stylist survey"
        ],
        needs: [
            "Feedback and approval for:",
            "NDA Documents",
            "Survey Question Answer options"
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
