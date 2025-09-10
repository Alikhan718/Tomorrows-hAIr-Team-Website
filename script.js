// Main application JavaScript
class ProjectWebsite {
    constructor() {
        this.charts = {};
        this.init();
    }
    
    init() {
        this.loadProjectData();
        this.setupEventListeners();
        this.renderTeamMembers();
        this.renderTimeEntries();
        this.updateSummaryCards();
        this.initializeCharts();
    }
    
    // Load and display project data
    loadProjectData() {
        // Always use the data from data.js file, not localStorage for basic project info
        document.getElementById('project-name').textContent = projectData.projectName;
        document.getElementById('sponsor').textContent = projectData.sponsor;
        document.getElementById('coach').textContent = projectData.coach;
        document.getElementById('keywords').textContent = projectData.keywords;
        document.getElementById('project-synopsis').textContent = projectData.synopsis;
        
        // Only load time tracking data from localStorage (preserve user entries)
        this.loadTimeTrackingData();
    }
    
    // Load only time tracking data from localStorage
    loadTimeTrackingData() {
        try {
            const saved = localStorage.getItem('tomorrowsHairProjectData');
            if (saved) {
                const savedData = JSON.parse(saved);
                // Only merge time tracking data, keep project info from data.js
                if (savedData.timeEntries) {
                    // Update old names in time entries to match current team members
                    const currentNames = projectData.teamMembers.map(m => m.name);
                    savedData.timeEntries = savedData.timeEntries.map(entry => {
                        // If the entry has an old name that doesn't match current team, update it
                        if (!currentNames.includes(entry.member)) {
                            // Try to find a matching team member by initials or similar name
                            const matchingMember = projectData.teamMembers.find(m => 
                                m.initials === entry.member.split(' ').map(n => n[0]).join('') ||
                                entry.member.includes(m.name.split(' ')[0])
                            );
                            if (matchingMember) {
                                entry.member = matchingMember.name;
                            }
                        }
                        return entry;
                    });
                    projectData.timeEntries = savedData.timeEntries;
                }
                if (savedData.weeklySummaries) {
                    // Update old names in weekly summaries to match current team members
                    const currentNames = projectData.teamMembers.map(m => m.name);
                    savedData.weeklySummaries = savedData.weeklySummaries.map(summary => {
                        const updatedMemberHours = {};
                        Object.keys(summary.memberHours).forEach(oldName => {
                            if (currentNames.includes(oldName)) {
                                updatedMemberHours[oldName] = summary.memberHours[oldName];
                            } else {
                                // Try to find matching team member
                                const matchingMember = projectData.teamMembers.find(m => 
                                    m.initials === oldName.split(' ').map(n => n[0]).join('') ||
                                    oldName.includes(m.name.split(' ')[0])
                                );
                                if (matchingMember) {
                                    updatedMemberHours[matchingMember.name] = summary.memberHours[oldName];
                                } else {
                                    updatedMemberHours[oldName] = summary.memberHours[oldName];
                                }
                            }
                        });
                        summary.memberHours = updatedMemberHours;
                        return summary;
                    });
                    projectData.weeklySummaries = savedData.weeklySummaries;
                }
            }
        } catch (e) {
            console.warn('Could not load time tracking data from localStorage:', e);
        }
    }
    
    // Setup event listeners
    setupEventListeners() {
        // Add week button
        document.getElementById('add-week-btn').addEventListener('click', () => {
            this.showTimeModal();
        });
        
        // Export data button
        document.getElementById('export-data-btn').addEventListener('click', () => {
            DataManager.exportData();
        });
        
        // Clear data button
        document.getElementById('clear-data-btn').addEventListener('click', () => {
            if (confirm('Are you sure you want to clear all time tracking data? This will remove all your time entries and cannot be undone.')) {
                this.clearAllData();
            }
        });
        
        // Modal close
        document.querySelector('.close').addEventListener('click', () => {
            this.hideTimeModal();
        });
        
        // Modal backdrop click
        document.getElementById('time-modal').addEventListener('click', (e) => {
            if (e.target.id === 'time-modal') {
                this.hideTimeModal();
            }
        });
        
        // Form submission
        document.getElementById('time-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleTimeFormSubmit();
        });
        
        // Smooth scrolling for navigation
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
    
    // Render time entries
    renderTimeEntries() {
        const container = document.getElementById('time-entries-list');
        container.innerHTML = '';
        
        if (projectData.timeEntries.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #7f8c8d; font-style: italic;">No time entries yet. Click "Add New Week" to get started!</p>';
            return;
        }
        
        // Group entries by week
        const entriesByWeek = {};
        projectData.timeEntries.forEach(entry => {
            if (!entriesByWeek[entry.week]) {
                entriesByWeek[entry.week] = [];
            }
            entriesByWeek[entry.week].push(entry);
        });
        
        // Render each week
        Object.keys(entriesByWeek).sort().reverse().forEach(week => {
            const weekDiv = document.createElement('div');
            weekDiv.className = 'week-group';
            weekDiv.innerHTML = `<h4 style="color: #667eea; margin: 2rem 0 1rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #eee;">${week}</h4>`;
            
            entriesByWeek[week].forEach(entry => {
                const entryDiv = document.createElement('div');
                entryDiv.className = 'time-entry';
                entryDiv.innerHTML = `
                    <div class="time-entry-header">
                        <span class="time-entry-member">${entry.member}</span>
                        <span class="time-entry-week">${entry.week}</span>
                    </div>
                    <div class="time-entry-details">
                        <span><strong>Hours Worked:</strong> ${entry.hoursWorked}</span>
                        <span><strong>Hours Planned:</strong> ${entry.hoursPlanned}</span>
                        <span><strong>Activities:</strong> ${entry.activities || 'No description provided'}</span>
                    </div>
                `;
                weekDiv.appendChild(entryDiv);
            });
            
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
    
    // Show time entry modal
    showTimeModal() {
        const modal = document.getElementById('time-modal');
        const weekSelect = document.getElementById('week-select');
        const memberSelect = document.getElementById('member-select');
        
        // Populate week select
        weekSelect.innerHTML = '';
        const weeks = DataManager.getAllWeeks();
        const currentWeek = DataManager.getCurrentWeek();
        
        if (!weeks.includes(currentWeek)) {
            weeks.unshift(currentWeek);
        }
        
        weeks.forEach(week => {
            const option = document.createElement('option');
            option.value = week;
            option.textContent = week;
            if (week === currentWeek) {
                option.selected = true;
            }
            weekSelect.appendChild(option);
        });
        
        // Populate member select
        memberSelect.innerHTML = '';
        DataManager.getAllMembers().forEach(member => {
            const option = document.createElement('option');
            option.value = member;
            option.textContent = member;
            memberSelect.appendChild(option);
        });
        
        modal.style.display = 'block';
    }
    
    // Hide time entry modal
    hideTimeModal() {
        document.getElementById('time-modal').style.display = 'none';
        document.getElementById('time-form').reset();
    }
    
    // Handle time form submission
    handleTimeFormSubmit() {
        const formData = {
            week: document.getElementById('week-select').value,
            member: document.getElementById('member-select').value,
            hoursWorked: document.getElementById('hours-worked').value,
            hoursPlanned: document.getElementById('hours-planned').value,
            activities: document.getElementById('activities').value
        };
        
        // Validate form
        if (!formData.week || !formData.member || !formData.hoursWorked || !formData.hoursPlanned) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Add entry
        DataManager.addTimeEntry(formData);
        
        // Update UI
        this.renderTimeEntries();
        this.updateSummaryCards();
        this.updateCharts();
        
        // Hide modal
        this.hideTimeModal();
        
        // Show success message
        this.showNotification('Time entry added successfully!', 'success');
    }
    
    // Update charts
    updateCharts() {
        // Destroy existing charts
        if (this.charts.weekly) {
            this.charts.weekly.destroy();
            this.charts.weekly = null;
        }
        if (this.charts.timeline) {
            this.charts.timeline.destroy();
            this.charts.timeline = null;
        }
        
        // Recreate the chart containers
        this.recreateChartContainers();
        
        // Reinitialize charts
        this.initializeCharts();
    }
    
    // Recreate chart containers
    recreateChartContainers() {
        const chartsContainer = document.querySelector('.charts-container');
        if (chartsContainer) {
            chartsContainer.innerHTML = `
                <div class="chart-wrapper">
                    <h3>Weekly Hours by Team Member</h3>
                    <canvas id="weekly-chart"></canvas>
                </div>
                <div class="chart-wrapper">
                    <h3>Total Hours Over Time</h3>
                    <canvas id="timeline-chart"></canvas>
                </div>
            `;
        }
    }
    
    // Clear all time tracking data
    clearAllData() {
        // Reset time tracking data to initial state
        projectData.timeEntries = [];
        projectData.weeklySummaries = [];
        
        // Clear localStorage
        localStorage.removeItem('tomorrowsHairProjectData');
        
        // Update UI
        this.renderTimeEntries();
        this.updateSummaryCards();
        this.updateCharts();
        
        this.showNotification('All time tracking data has been cleared!', 'success');
    }
    
    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
            color: white;
            padding: 1rem 2rem;
            border-radius: 5px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            z-index: 1001;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
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
