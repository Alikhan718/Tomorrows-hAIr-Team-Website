// Main application JavaScript
class ProjectWebsite {
    constructor() {
        this.charts = {};
        this.init();
    }
    
    init() {
        this.loadProjectData();
        this.setupNavigation();
        this.addDataSourceNote();
        this.renderTeamMembers();
        this.renderWeeklyTracking();
        this.updateSummaryCards();
        this.initializeCharts();
    }
    
    // Load and display project data
    loadProjectData() {
        // Always use the data from data.js file
        document.getElementById('project-name').textContent = projectData.projectName;
        document.getElementById('sponsor').textContent = projectData.sponsor;
        document.getElementById('coach').textContent = projectData.coach;
        document.getElementById('keywords').textContent = projectData.keywords;
        document.getElementById('project-synopsis').textContent = projectData.synopsis;
    }
    
    // Add a note about data source for team members
    addDataSourceNote() {
        const trackingSection = document.querySelector('#tracking .container');
        if (trackingSection && !document.getElementById('data-source-note')) {
            const note = document.createElement('div');
            note.id = 'data-source-note';
            note.style.cssText = `
                background: #e3f2fd;
                border: 1px solid #2196f3;
                border-radius: 5px;
                padding: 1rem;
                margin: 1rem 0;
                font-size: 0.9rem;
                color: #1976d2;
            `;
            note.innerHTML = `
                <strong>📝 Note:</strong> Time tracking data is updated by Alikhan Seitkadyrov. 
                Refresh the page to see the latest entries. 
                <em>Last updated: ${new Date().toLocaleString()}</em>
            `;
            trackingSection.insertBefore(note, trackingSection.querySelector('.tracking-summary'));
        }
    }
    
    // Setup smooth scrolling for navigation
    setupNavigation() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Render team members
    renderTeamMembers() {
        const container = document.getElementById('team-members');
        container.innerHTML = '';
        
        projectData.teamMembers.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.className = 'team-member';
            memberDiv.innerHTML = `
                <div class="avatar">${member.initials}</div>
                <h3>${member.name}</h3>
                <p class="role">${member.role}</p>
            `;
            container.appendChild(memberDiv);
        });
    }
    
    // Render weekly tracking display
    renderWeeklyTracking() {
        const container = document.getElementById('weekly-tracking-list');
        container.innerHTML = '';
        
        // Get all available weeks
        const allWeeks = DataManager.getAllAvailableWeeks();
        
        // Debug: Log the data
        console.log('Available weeks:', allWeeks);
        console.log('Time entries:', projectData.timeEntries);
        
        allWeeks.forEach(week => {
            const weekDiv = document.createElement('div');
            weekDiv.className = 'week-display';
            weekDiv.style.cssText = `
                background: white;
                border-radius: 10px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                margin-bottom: 1.5rem;
                overflow: hidden;
            `;
            
            // Get entries for this week (exact matching)
            const weekEntries = projectData.timeEntries.filter(entry => entry.week === week);
            
            // Debug: Log week matching
            if (week.includes('Week 1')) {
                console.log(`Week: ${week}`);
                console.log(`Found ${weekEntries.length} entries for this week`);
                console.log('Entries:', weekEntries);
            }
            
            const weekSummary = projectData.weeklySummaries.find(s => s.week === week);
            
            // Calculate total hours for this week
            const totalHours = weekEntries.reduce((sum, entry) => sum + entry.hoursWorked, 0);
            const plannedHours = weekEntries.reduce((sum, entry) => sum + entry.hoursPlanned, 0);
            
            // Create week header
            const weekHeader = document.createElement('div');
            weekHeader.style.cssText = `
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                padding: 1rem 1.5rem;
                font-weight: bold;
                font-size: 1.1rem;
            `;
            weekHeader.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span>${week}</span>
                    <span>${totalHours} hours worked | ${plannedHours} hours planned</span>
                </div>
            `;
            
            // Create week content
            const weekContent = document.createElement('div');
            weekContent.style.cssText = 'padding: 1.5rem;';
            
            if (weekEntries.length === 0) {
                weekContent.innerHTML = `
                    <div style="text-align: center; color: #7f8c8d; font-style: italic; padding: 2rem;">
                        No time entries recorded for this week
                    </div>
                `;
            } else {
                // Group entries by member
                const entriesByMember = {};
                weekEntries.forEach(entry => {
                    if (!entriesByMember[entry.member]) {
                        entriesByMember[entry.member] = [];
                    }
                    entriesByMember[entry.member].push(entry);
                });
                
                let contentHTML = '';
                Object.keys(entriesByMember).forEach(member => {
                    const memberEntries = entriesByMember[member];
                    const memberTotal = memberEntries.reduce((sum, entry) => sum + entry.hoursWorked, 0);
                    const memberPlanned = memberEntries.reduce((sum, entry) => sum + entry.hoursPlanned, 0);
                    
                    contentHTML += `
                        <div style="margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid #eee;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                <h4 style="color: #667eea; margin: 0;">${member}</h4>
                                <span style="font-weight: bold; color: #2c3e50;">${memberTotal}h worked | ${memberPlanned}h planned</span>
                            </div>
                            <div style="display: grid; gap: 0.5rem;">
                                ${memberEntries.map(entry => `
                                    <div style="background: #f8f9fa; padding: 0.75rem; border-radius: 5px; border-left: 3px solid #667eea;">
                                        <div style="font-size: 0.9rem; color: #555;">
                                            <strong>Hours:</strong> ${entry.hoursWorked} worked, ${entry.hoursPlanned} planned
                                        </div>
                                        ${entry.activities ? `<div style="margin-top: 0.25rem; font-size: 0.9rem; color: #666;"><strong>Activities:</strong> ${entry.activities}</div>` : ''}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                });
                
                weekContent.innerHTML = contentHTML;
            }
            
            weekDiv.appendChild(weekHeader);
            weekDiv.appendChild(weekContent);
            container.appendChild(weekDiv);
        });
    }
    
    // Update summary cards
    updateSummaryCards() {
        const totalHours = projectData.timeEntries.reduce((sum, entry) => sum + entry.hoursWorked, 0);
        const avgHours = DataManager.getAverageHoursPerMember();
        const weeksCount = DataManager.getAllWeeks().length;
        
        document.getElementById('total-hours').textContent = totalHours;
        document.getElementById('avg-hours').textContent = avgHours;
        document.getElementById('weeks-count').textContent = weeksCount;
    }
    
    // Initialize charts
    initializeCharts() {
        this.createWeeklyChart();
        this.createTimelineChart();
    }
    
    // Create weekly hours chart
    createWeeklyChart() {
        const canvas = document.getElementById('weekly-chart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        // Destroy existing chart if it exists
        if (this.charts.weekly) {
            this.charts.weekly.destroy();
        }
        
        // Get current week data
        const currentWeek = DataManager.getCurrentWeek();
        const currentWeekData = projectData.weeklySummaries.find(s => s.week === currentWeek);
        
        if (!currentWeekData || Object.keys(currentWeekData.memberHours).length === 0) {
            // Show message if no data
            const wrapper = canvas.parentElement;
            wrapper.innerHTML = 
                '<h3>Weekly Hours by Team Member</h3><p style="text-align: center; color: #7f8c8d; font-style: italic;">No data for current week yet.</p>';
            return;
        }
        
        const members = Object.keys(currentWeekData.memberHours);
        const hours = Object.values(currentWeekData.memberHours);
        
        this.charts.weekly = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: members,
                datasets: [{
                    label: 'Hours Worked',
                    data: hours,
                    backgroundColor: [
                        'rgba(102, 126, 234, 0.8)',
                        'rgba(118, 75, 162, 0.8)',
                        'rgba(52, 152, 219, 0.8)',
                        'rgba(46, 204, 113, 0.8)',
                        'rgba(241, 196, 15, 0.8)',
                        'rgba(231, 76, 60, 0.8)'
                    ],
                    borderColor: [
                        'rgba(102, 126, 234, 1)',
                        'rgba(118, 75, 162, 1)',
                        'rgba(52, 152, 219, 1)',
                        'rgba(46, 204, 113, 1)',
                        'rgba(241, 196, 15, 1)',
                        'rgba(231, 76, 60, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Hours'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Team Members'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
    
    // Create timeline chart
    createTimelineChart() {
        const canvas = document.getElementById('timeline-chart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        // Destroy existing chart if it exists
        if (this.charts.timeline) {
            this.charts.timeline.destroy();
        }
        
        const weeks = projectData.weeklySummaries.map(s => s.week);
        const totalHours = projectData.weeklySummaries.map(s => s.totalHours);
        
        if (weeks.length === 0) {
            // Show message if no data
            const wrapper = canvas.parentElement;
            wrapper.innerHTML = 
                '<h3>Total Hours Over Time</h3><p style="text-align: center; color: #7f8c8d; font-style: italic;">No data available yet.</p>';
            return;
        }
        
        this.charts.timeline = new Chart(ctx, {
            type: 'line',
            data: {
                labels: weeks,
                datasets: [{
                    label: 'Total Team Hours',
                    data: totalHours,
                    borderColor: 'rgba(102, 126, 234, 1)',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: 'rgba(102, 126, 234, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Total Hours'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Week'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                }
            }
        });
    }
    
    // All interactive functions removed - data managed manually in data.js
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectWebsite();
});

// Add CSS for notification animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
