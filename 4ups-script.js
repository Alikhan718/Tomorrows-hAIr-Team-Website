// 4Ups page functionality
class FourUpsPage {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupNavigation();
        this.renderFourUps();
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
    
    // Render all 4Ups entries
    renderFourUps() {
        const container = document.getElementById('fourups-list');
        container.innerHTML = '';
        
        const allFourUps = FourUpsManager.getAllFourUps();
        
        if (allFourUps.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <h3>No 4Ups entries yet</h3>
                    <p>4Ups entries will appear here as they are added.</p>
                </div>
            `;
            return;
        }
        
        // Sort by week (most recent first)
        allFourUps.sort((a, b) => {
            const weekA = a.week.match(/Week (\d+)/);
            const weekB = b.week.match(/Week (\d+)/);
            return (weekB ? parseInt(weekB[1]) : 0) - (weekA ? parseInt(weekA[1]) : 0);
        });
        
        allFourUps.forEach(entry => {
            const weekDiv = this.createWeekSection(entry);
            container.appendChild(weekDiv);
        });
    }
    
    // Create a week section with 4Ups
    createWeekSection(entry) {
        const weekDiv = document.createElement('div');
        weekDiv.className = 'week-section';
        
        weekDiv.innerHTML = `
            <div class="week-header">
                <div class="week-dates">${entry.dates}</div>
            </div>
            <div class="fourups-grid">
                <div class="fourup-section">
                    <div class="fourup-title">Progress</div>
                    <ul class="fourup-list">
                        ${this.renderFourUpItems(entry.progress)}
                    </ul>
                </div>
                <div class="fourup-section">
                    <div class="fourup-title">Risks</div>
                    <ul class="fourup-list">
                        ${this.renderFourUpItems(entry.risks)}
                    </ul>
                </div>
                <div class="fourup-section">
                    <div class="fourup-title">Plans</div>
                    <ul class="fourup-list">
                        ${this.renderFourUpItems(entry.plans)}
                    </ul>
                </div>
                <div class="fourup-section">
                    <div class="fourup-title">Needs</div>
                    <ul class="fourup-list">
                        ${this.renderFourUpItems(entry.needs)}
                    </ul>
                </div>
            </div>
        `;
        
        return weekDiv;
    }
    
    // Render items for a 4Up section
    renderFourUpItems(items) {
        if (!items || items.length === 0) {
            return '<li class="fourup-item empty-state">No items recorded</li>';
        }
        
        return items.map(item => {
            // Keep team members as regular text
            return `<li class="fourup-item">${item}</li>`;
        }).join('');
    }
}

// Initialize the 4Ups page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FourUpsPage();
});
