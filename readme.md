# Tomorrow's hAIr - Senior Project Team Website

A modern, frontend-only website for RIT Senior Project team documentation and time tracking.

## Features

- **Project Overview**: Team information, project synopsis, and search keywords
- **Team Section**: Individual team member profiles with roles
- **Time Tracking**: Weekly time entry system with charts and visualizations
- **Artifacts Section**: Space for development methodology, metrics, and domain models
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Easy Updates**: Simple data structure for weekly updates

## Quick Start

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **Update team information**: Edit the `data.js` file to add your team details
3. **Add time entries**: Use the "Add New Week" button to track weekly hours
4. **Export data**: Use the "Export Data" button to save your tracking data

## Team Workflow

### For Project Manager (You):
1. **Add time entries** using the "Add New Week" button
2. **Update team information** in `data.js` as needed
3. **Push changes** to GitHub repository
4. **Deploy to Vercel** (automatic if connected to GitHub)

### For Team Members:
1. **Visit the website** to view project progress
2. **Refresh the page** to see latest updates
3. **Check the note** in Time Tracking section for last update time
4. **No editing needed** - just viewing and reporting

### Weekly Process:
1. Project manager adds time entries for all team members
2. Updates are pushed to GitHub and deployed to Vercel
3. Team members refresh the page to see latest data
4. Charts and summaries update automatically

## Customization

### Updating Team Information

Edit the `projectData` object in `data.js`:

```javascript
const projectData = {
    projectName: "Your Project Name",
    sponsor: "Your Sponsoring Organization",
    coach: "Your Coach Name",
    keywords: "keyword1, keyword2, keyword3, keyword4, keyword5",
    synopsis: "Your 250-word project description...",
    teamMembers: [
        {
            name: "Your Name",
            role: "Your Role",
            initials: "YN"
        }
        // Add more team members...
    ]
};
```

### Adding Time Entries

1. Click "Add New Week" button
2. Fill in the form with:
   - Week (auto-generated or select existing)
   - Team member name
   - Hours worked this week
   - Hours planned for next week
   - Activities description
3. Submit to add the entry

### Weekly Updates

The website automatically:
- Calculates total team hours
- Updates charts and visualizations
- Saves data to browser's local storage
- Generates weekly summaries

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── data.js            # Project data and configuration
└── readme.md          # This file
```

## Deployment Options

### Option 1: GitHub Pages (Recommended)
1. Create a GitHub repository
2. Upload all files to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Get instant deployment with a custom URL

### Option 3: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository or upload files
3. Deploy with one click

### Option 4: Any Web Host
Upload all files to any web hosting service that supports static files.

## Requirements Met

✅ **Team Information**: Team name, project name, sponsor, coach, member names and roles  
✅ **Project Synopsis**: 250-word description with placeholder for approval  
✅ **Search Keywords**: 5 descriptive keywords for searchability  
✅ **Time Tracking**: Individual and team time reporting with charts  
✅ **Weekly Reports**: Automated weekly tracking with visualizations  
✅ **Future Artifacts**: Placeholder sections for methodology, metrics, and domain model  

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Data Persistence

The website uses browser's localStorage to save your data locally. This means:
- Data persists between browser sessions
- Data is stored on your local machine
- No backend server required
- Export feature available for data backup

## Support

For questions or issues, please refer to the code comments or create an issue in the repository.

---

**Note**: Remember to get your project synopsis approved by your sponsor and coach before making it public!
